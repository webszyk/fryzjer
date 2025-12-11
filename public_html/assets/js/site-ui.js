// === SITE UI LOGIC - Alpine.js ===
// Light interactions only - NO blur, NO opacity tricks

document.addEventListener('alpine:init', () => {
  // Global store for mobile menu state
  Alpine.store('mobileMenu', {
    open: false,
    toggle() {
      this.open = !this.open;
      document.body.style.overflow = this.open ? 'hidden' : '';
    },
    close() {
      this.open = false;
      document.body.style.overflow = '';
    }
  });

  Alpine.data('siteUI', () => ({
    mobileMenuOpen: false,
    scrolled: false,
    videoPlaying: true,
    videoModalOpen: false,
    activeSection: 'hero',
    lightboxOpen: false,
    currentImageIndex: 0,
    galleryImages: [
      './assets/img/gallery/g1.jpg',
      './assets/img/gallery/g2.jpg',
      './assets/img/gallery/g3.jpg',
      './assets/img/gallery/g4.jpg',
      './assets/img/gallery/g5.jpg',
      './assets/img/gallery/g6.jpg'
    ],
    carouselIndex: 0,

    init() {
      // Get header height for scroll offset
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;

      // Smooth scroll for anchor links with offset
      // Note: Mobile menu closing is handled by @click="mobileMenuOpen = false" in HTML
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (href === '#' || href === '#hero') {
            // For hero, scroll to top (menu closing handled by HTML @click)
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }

          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            // Calculate offset: header height + extra spacing
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - headerHeight - 20; // Extra 20px spacing

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            // Menu closing is handled by @click="mobileMenuOpen = false" in HTML
          }
        });
      });

      // Intersection Observer for scroll reveal (transform only, NO opacity)
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in-section').forEach(el => {
        observer.observe(el);
      });

      // Track active section for nav underline
      const sections = document.querySelectorAll('section[id]');
      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });

      sections.forEach(section => {
        navObserver.observe(section);
      });
    },

    toggleVideo() {
      const video = document.querySelector('#hero-video');
      if (video) {
        if (this.videoPlaying) {
          video.pause();
        } else {
          video.play();
        }
        this.videoPlaying = !this.videoPlaying;
      }
    },

    openLightbox(index) {
      this.currentImageIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    },

    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = ''; // Restore scroll
    },

    nextImage() {
      if (this.currentImageIndex < this.galleryImages.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0; // Loop to first
      }
    },

    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.galleryImages.length - 1; // Loop to last
      }
    },

    nextCarousel() {
      this.carouselIndex = (this.carouselIndex + 1) % this.galleryImages.length;
    },

    prevCarousel() {
      this.carouselIndex = (this.carouselIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    }
  }));
});

// Scroll handler removed - navigation has its own x-data scroll handler
