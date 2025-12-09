// === SITE UI LOGIC - Alpine.js ===
// Light interactions only - NO blur, NO opacity tricks

document.addEventListener('alpine:init', () => {
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
      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.mobileMenuOpen = false;
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

// Scroll handler for sticky nav
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 50;
  const event = new CustomEvent('scroll-update', { detail: { scrolled } });
  window.dispatchEvent(event);
});
