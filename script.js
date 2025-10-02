// Professional Website Script with Advanced Animations
class ProfessionalWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.initAnimations();
        this.initNavigation();
        this.initScrollEffects();
        this.initCounters();
        this.initInteractiveElements();
        this.initSettingsPanel();
        this.initTypewriterEffect();
        this.initParticleEffect();
        this.initParallaxScrolling();
        this.initSmoothScrolling();
        console.log('🚀 Professional Website Initialized');
    }

    // Advanced Animation System
    initAnimations() {
        // GSAP-like animation helper
        this.animateOnScroll = this.animateOnScroll.bind(this);

        // Intersection Observer for scroll animations
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all animated elements
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });

        // Initialize floating elements
        this.initFloatingElements();
    }

    animateElement(element) {
        const animationType = element.dataset.animation || 'fadeInUp';

        switch (animationType) {
            case 'fadeInUp':
                this.fadeInUp(element);
                break;
            case 'fadeInLeft':
                this.fadeInLeft(element);
                break;
            case 'fadeInRight':
                this.fadeInRight(element);
                break;
            case 'scaleIn':
                this.scaleIn(element);
                break;
            case 'slideIn':
                this.slideIn(element);
                break;
            default:
                this.fadeInUp(element);
        }

        element.classList.add('animated');
    }

    fadeInUp(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(60px)';

        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    }

    fadeInLeft(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-60px)';

        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }, 100);
    }

    fadeInRight(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(60px)';

        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }, 100);
    }

    scaleIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.8)';

        setTimeout(() => {
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
        }, 100);
    }

    slideIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(100px) skewY(2deg)';

        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) skewY(0)';
        }, 100);
    }

    // Floating Elements Animation
    initFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-card, .feature-icon');

        floatingElements.forEach((element, index) => {
            this.createFloatingAnimation(element, index);
        });
    }

    createFloatingAnimation(element, index) {
        const delay = index * 0.3;
        const duration = 6 + Math.random() * 2;

        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    }

    // Navigation System
    initNavigation() {
        this.initMobileMenu();
        this.initStickyNavigation();
        this.initActiveNavigation();
    }

    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');

                // Animate hamburger lines
                const spans = hamburger.querySelectorAll('span');
                spans.forEach((span, index) => {
                    span.style.transition = 'all 0.3s ease';
                    if (hamburger.classList.contains('active')) {
                        if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        if (index === 1) span.style.opacity = '0';
                        if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    } else {
                        span.style.transform = 'none';
                        span.style.opacity = '1';
                    }
                });
            });
        }
    }

    initStickyNavigation() {
        const navbar = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = 'none';
            }

            // Hide/show on scroll
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollY = window.scrollY;
        });
    }

    initActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Scroll Effects
    initScrollEffects() {
        this.initProgressBar();
        this.initScrollReveal();
    }

    initProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: var(--gradient);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset;
            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

            progressBar.style.width = `${scrollPercent}%`;
        });
    }

    initScrollReveal() {
        // Custom scroll reveal for elements
        const revealElements = document.querySelectorAll('.reveal-on-scroll');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(60px) scale(0.9)';
            revealObserver.observe(el);
        });
    }

    // Counter Animation
    initCounters() {
        const counters = document.querySelectorAll('.stat-number');

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + (element.textContent.includes('%') ? '%' : '+');
                clearInterval(timer);

                // Add celebration effect
                this.createConfetti(element);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Interactive Elements
    initInteractiveElements() {
        this.initMagneticButtons();
        this.initHoverEffects();
        this.initClickAnimations();
    }

    initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn, .cta-button');

        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const moveX = (x - centerX) * 0.1;
                const moveY = (y - centerY) * 0.1;

                button.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }

    initHoverEffects() {
        // Card hover effects
        const cards = document.querySelectorAll('.service-card, .feature-card');

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.02)';
                card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    initClickAnimations() {
        // Ripple effect for buttons
        document.addEventListener('click', function (e) {
            if (e.target.matches('.btn, .cta-button, .service-card')) {
                const ripple = document.createElement('span');
                const rect = e.target.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                `;

                e.target.style.position = 'relative';
                e.target.style.overflow = 'hidden';
                e.target.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            }
        });

        // Add ripple animation to styles
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Settings Panel
    initSettingsPanel() {
        const settingsToggle = document.getElementById('settingsToggle');
        const settingsPanel = document.getElementById('settingsPanel');
        const closeSettings = document.getElementById('closeSettings');

        if (settingsToggle && settingsPanel) {
            settingsToggle.addEventListener('click', () => {
                settingsPanel.classList.toggle('active');
            });

            closeSettings.addEventListener('click', () => {
                settingsPanel.classList.remove('active');
            });

            // Theme settings
            this.initThemeSettings();
        }
    }

    initThemeSettings() {
        const themeColor = document.getElementById('themeColor');
        const animationSpeed = document.getElementById('animationSpeed');
        const darkMode = document.getElementById('darkMode');
        const resetSettings = document.getElementById('resetSettings');

        // Load saved settings
        this.loadSettings();

        if (themeColor) {
            themeColor.addEventListener('input', (e) => {
                document.documentElement.style.setProperty('--primary-color', e.target.value);
                this.saveSettings();
            });
        }

        if (animationSpeed) {
            animationSpeed.addEventListener('change', (e) => {
                document.body.classList.remove('animation-slow', 'animation-normal', 'animation-fast');
                document.body.classList.add(`animation-${e.target.value}`);
                this.saveSettings();
            });
        }

        if (darkMode) {
            darkMode.addEventListener('change', (e) => {
                if (e.target.checked) {
                    document.body.classList.add('dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                }
                this.saveSettings();
            });
        }

        if (resetSettings) {
            resetSettings.addEventListener('click', () => {
                this.resetSettings();
            });
        }
    }

    saveSettings() {
        const settings = {
            themeColor: document.getElementById('themeColor')?.value || '#6366f1',
            animationSpeed: document.getElementById('animationSpeed')?.value || 'normal',
            darkMode: document.getElementById('darkMode')?.checked || false
        };
        localStorage.setItem('websiteSettings', JSON.stringify(settings));
    }

    loadSettings() {
        const savedSettings = localStorage.getItem('websiteSettings');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);

            if (document.getElementById('themeColor')) {
                document.getElementById('themeColor').value = settings.themeColor;
                document.documentElement.style.setProperty('--primary-color', settings.themeColor);
            }

            if (document.getElementById('animationSpeed')) {
                document.getElementById('animationSpeed').value = settings.animationSpeed;
                document.body.classList.remove('animation-slow', 'animation-normal', 'animation-fast');
                document.body.classList.add(`animation-${settings.animationSpeed}`);
            }

            if (document.getElementById('darkMode')) {
                document.getElementById('darkMode').checked = settings.darkMode;
                if (settings.darkMode) {
                    document.body.classList.add('dark-mode');
                }
            }
        }
    }

    resetSettings() {
        localStorage.removeItem('websiteSettings');
        location.reload();
    }

    // Advanced Effects
    initTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.typewriter');

        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid var(--primary-color)';

            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    element.style.borderRight = 'none';
                }
            };

            // Start typing when element is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(element);
        });
    }

    initParticleEffect() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        heroSection.appendChild(particlesContainer);

        // Create particles
        for (let i = 0; i < 15; i++) {
            this.createParticle(particlesContainer);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.3;
        `;

        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;

        // Animation
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 2;

        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

        container.appendChild(particle);
    }

    initParallaxScrolling() {
        const parallaxElements = document.querySelectorAll('.parallax');

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Utility function for confetti effect
    createConfetti(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#6366f1', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444'];

        for (let i = 0; i < 10; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 1px;
                top: ${rect.top + rect.height / 2}px;
                left: ${rect.left + rect.width / 2}px;
                pointer-events: none;
                z-index: 10000;
            `;

            document.body.appendChild(confetti);

            // Animate confetti
            const angle = Math.random() * Math.PI * 2;
            const velocity = 2 + Math.random() * 2;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            let x = 0;
            let y = 0;
            let opacity = 1;

            const animateConfetti = () => {
                x += vx;
                y += vy;
                vy += 0.1; // gravity
                opacity -= 0.02;

                confetti.style.transform = `translate(${x}px, ${y}px)`;
                confetti.style.opacity = opacity;

                if (opacity > 0) {
                    requestAnimationFrame(animateConfetti);
                } else {
                    confetti.remove();
                }
            };

            animateConfetti();
        }
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new ProfessionalWebsite();
});

// Add CSS animations to head
if (!document.querySelector('#dynamic-styles')) {
    const dynamicStyles = document.createElement('style');
    dynamicStyles.id = 'dynamic-styles';
    dynamicStyles.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            z-index: 9999;
            transition: width 0.1s ease;
        }
        
        .nav-link.active {
            color: var(--primary-color) !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
        
        .animation-slow * {
            animation-duration: 1.5s !important;
        }
        
        .animation-fast * {
            animation-duration: 0.5s !important;
        }
        
        .dark-mode {
            --text-color: #f3f4f6;
            --bg-color: #111827;
            --section-bg: #1f2937;
            --border-color: #374151;
        }
    `;
    document.head.appendChild(dynamicStyles);
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProfessionalWebsite;
}