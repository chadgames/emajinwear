/**
 * Emajin Wear - Main JavaScript
 * Lightweight, dependency-free functionality
 */

(function() {
  'use strict';

  /* ==========================================================================
     1. Mobile Navigation Toggle
     ========================================================================== */

  /**
   * Initializes mobile navigation functionality
   * - Toggles menu visibility on hamburger click
   * - Updates aria-expanded for accessibility
   * - Closes menu when clicking outside or on nav links
   */
  function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav');

    if (!navToggle || !navMenu) return;

    // Toggle menu on hamburger click
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-open');
    });

    // Close menu when clicking on a nav link
    navMenu.addEventListener('click', function(e) {
      if (e.target.matches('a')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-open');
      }
    });
  }

  /* ==========================================================================
     2. Gallery Category Filtering
     ========================================================================== */

  /**
   * Initializes gallery filtering functionality
   * - Filters products based on data-filter attribute on buttons
   * - Shows/hides products based on data-category attribute
   * - Adds 'active' class to selected filter button
   * - Applies smooth fade animation
   */
  function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const products = document.querySelectorAll('[data-category]');

    if (!filterButtons.length || !products.length) return;

    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active state on buttons
        filterButtons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        this.classList.add('active');

        // Filter products with fade animation
        products.forEach(function(product) {
          const category = product.getAttribute('data-category');
          const shouldShow = filter === 'all' || category === filter;

          if (shouldShow) {
            product.style.display = '';
            // Trigger reflow for animation
            product.offsetHeight;
            product.style.opacity = '1';
            product.style.transform = 'scale(1)';
          } else {
            product.style.opacity = '0';
            product.style.transform = 'scale(0.95)';
            // Hide after fade animation
            setTimeout(function() {
              if (product.style.opacity === '0') {
                product.style.display = 'none';
              }
            }, 300);
          }
        });
      });
    });

    // Add transition styles to products
    products.forEach(function(product) {
      product.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
  }

  /* ==========================================================================
     3. Lazy Loading for Images
     ========================================================================== */

  /**
   * Initializes lazy loading using Intersection Observer
   * - Loads images when they enter the viewport
   * - Swaps data-src to src for actual loading
   * - Works with both <img> elements and elements with background images
   */
  function initLazyLoading() {
    const lazyElements = document.querySelectorAll('[data-src]');

    if (!lazyElements.length) return;

    // Check for Intersection Observer support
    if ('IntersectionObserver' in window) {
      const lazyObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const element = entry.target;
            const src = element.getAttribute('data-src');

            if (element.tagName === 'IMG') {
              // Handle <img> elements
              element.src = src;
              element.removeAttribute('data-src');
              element.classList.add('loaded');
            } else {
              // Handle background images on other elements
              element.style.backgroundImage = 'url(' + src + ')';
              element.removeAttribute('data-src');
              element.classList.add('loaded');
            }

            observer.unobserve(element);
          }
        });
      }, {
        rootMargin: '50px 0px', // Load images 50px before they enter viewport
        threshold: 0.01
      });

      lazyElements.forEach(function(element) {
        lazyObserver.observe(element);
      });
    } else {
      // Fallback for browsers without Intersection Observer
      lazyElements.forEach(function(element) {
        const src = element.getAttribute('data-src');

        if (element.tagName === 'IMG') {
          element.src = src;
        } else {
          element.style.backgroundImage = 'url(' + src + ')';
        }

        element.removeAttribute('data-src');
        element.classList.add('loaded');
      });
    }
  }

  /* ==========================================================================
     Initialize All Modules
     ========================================================================== */

  function init() {
    initMobileNav();
    initGalleryFilter();
    initLazyLoading();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
