(function () {
  const DEFAULT_SELECTOR = [
    'h1', 'h2', 'h3', 'p',
    '.nav-brand', '.nav-link',
    '.hero-eyebrow', '.hero-sub', '.btn-primary', '.hero-price',
    '.hero-spec-label', '.hero-spec-value',
    '.module-num', '.module-title', '.module-desc',
    '.module-stat-label', '.module-stat-value',
    '.bottom-block .label', '.bottom-block p',
    '.skill-row span', '.contact-row .k', '.contact-row .v',
    '.foot span'
  ].join(',');

  const SKIP_SELECTOR = [
    'script', 'style', 'noscript', 'textarea', 'input', 'select', 'option',
    'video', 'canvas', 'svg', '[data-no-scroll-float]', '.twk-panel'
  ].join(',');

  function registerScrollTrigger() {
    if (!window.gsap || !window.ScrollTrigger) return false;
    window.gsap.registerPlugin(window.ScrollTrigger);
    return true;
  }

  function splitTextNode(textNode) {
    const text = textNode.nodeValue;
    if (!text || !text.trim()) return 0;

    const frag = document.createDocumentFragment();
    let count = 0;

    Array.from(text).forEach((char) => {
      if (char === ' ') {
        frag.appendChild(document.createTextNode(' '));
        return;
      }

      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      frag.appendChild(span);
      count += 1;
    });

    textNode.parentNode.replaceChild(frag, textNode);
    return count;
  }

  function splitElement(element) {
    if (!element || element.dataset.scrollFloatReady === 'true') return [];
    if (element.closest(SKIP_SELECTOR)) return [];
    if (!element.textContent || !element.textContent.trim()) return [];

    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest(SKIP_SELECTOR)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    let charCount = 0;
    textNodes.forEach((node) => { charCount += splitTextNode(node); });

    if (!charCount) return [];
    element.dataset.scrollFloatReady = 'true';
    element.classList.add('scroll-float-auto');
    return Array.from(element.querySelectorAll('.char'));
  }

  function animateChars(element, chars, options) {
    const gsap = window.gsap;
    const mode = options.mode || 'scroll';
    const baseFrom = {
      willChange: 'opacity, transform',
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: '50% 0%'
    };

    const baseTo = {
      duration: options.animationDuration ?? 1,
      ease: options.ease || 'back.inOut(2)',
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: options.stagger ?? 0.03
    };

    if (mode === 'load') {
      gsap.fromTo(chars, baseFrom, baseTo);
      return;
    }

    gsap.fromTo(chars, baseFrom, {
      ...baseTo,
      scrollTrigger: {
        trigger: element,
        scroller: options.scroller || window,
        start: options.scrollStart || 'center bottom+=50%',
        end: options.scrollEnd || 'bottom bottom-=40%',
        scrub: true
      }
    });
  }

  window.initScrollFloatText = function initScrollFloatText(options = {}) {
    if (!registerScrollTrigger()) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = options.root || document;
    const selector = options.selector || DEFAULT_SELECTOR;
    const elements = Array.from(root.querySelectorAll(selector));

    elements.forEach((element) => {
      const chars = splitElement(element);
      if (!chars.length) return;

      const textLength = chars.length;
      animateChars(element, chars, {
        ...options,
        stagger: options.stagger ?? Math.max(0.006, Math.min(0.03, 0.8 / textLength))
      });
    });

    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  };

  if (window.React) {
    const { useEffect, useMemo, useRef } = window.React;

    window.ScrollFloat = function ScrollFloat({
      children,
      scrollContainerRef,
      containerClassName = '',
      textClassName = '',
      animationDuration = 1,
      ease = 'back.inOut(2)',
      scrollStart = 'center bottom+=50%',
      scrollEnd = 'bottom bottom-=40%',
      stagger = 0.03
    }) {
      const containerRef = useRef(null);

      const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split('').map((char, index) =>
          window.React.createElement('span', { className: 'char', key: index }, char === ' ' ? '\u00A0' : char)
        );
      }, [children]);

      useEffect(() => {
        const el = containerRef.current;
        if (!el || !registerScrollTrigger()) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
        const charElements = el.querySelectorAll('.char');

        window.gsap.fromTo(
          charElements,
          {
            willChange: 'opacity, transform',
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: '50% 0%'
          },
          {
            duration: animationDuration,
            ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: scrollStart,
              end: scrollEnd,
              scrub: true
            }
          }
        );
      }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

      return window.React.createElement(
        'h2',
        { ref: containerRef, className: `scroll-float ${containerClassName}` },
        window.React.createElement('span', { className: `scroll-float-text ${textClassName}` }, splitText)
      );
    };
  }
})();
