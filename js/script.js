/* 
* Rishabh Real Estate - Main JavaScript
* Author: Custom AI
* Version: 1.0
*/

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate On Scroll) Library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Hero Carousel
    const heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        const carousel = new bootstrap.Carousel(heroCarousel, {
            interval: 5000,
            pause: false
        });
        
        // Add zoom effect to active slide
        heroCarousel.addEventListener('slide.bs.carousel', function(e) {
            // Remove zoom class from all slides
            const slides = document.querySelectorAll('.hero-slide');
            slides.forEach(slide => {
                slide.classList.remove('zoom');
            });
            
            // Add zoom class to next slide
            const nextSlide = e.relatedTarget.querySelector('.hero-slide');
            if (nextSlide) {
                setTimeout(() => {
                    nextSlide.classList.add('zoom');
                }, 50);
            }
        });
        
        // Add zoom class to first slide on page load
        const firstSlide = heroCarousel.querySelector('.carousel-item.active .hero-slide');
        if (firstSlide) {
            firstSlide.classList.add('zoom');
        }
    }

    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    
    function toggleNavbarBg() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Initial call to set correct state
    toggleNavbarBg();
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleNavbarBg);

    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });

                // Update active link
                document.querySelectorAll('.navbar .nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');

                // If on mobile, collapse the navbar
                const navToggler = document.querySelector('.navbar-toggler');
                const navCollapse = document.querySelector('.navbar-collapse');
                if (window.getComputedStyle(navToggler).display !== 'none' && navCollapse.classList.contains('show')) {
                    navCollapse.classList.remove('show');
                }
            }
        });
    });

    // Set active nav item based on scroll position
    function setActiveNavItem() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar .nav-link');
        
        // Find the section that is currently visible
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initial call and add event listener
    setActiveNavItem();
    window.addEventListener('scroll', setActiveNavItem);

    // Form submission with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            let isValid = true;
            const formElements = contactForm.elements;
            
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && !formElements[i].value) {
                    isValid = false;
                    formElements[i].classList.add('is-invalid');
                } else {
                    formElements[i].classList.remove('is-invalid');
                }
            }
            
            if (isValid) {
                // In a real application, you would send the form data to the server here
                // For this demo, we'll just show a success message
                const formData = new FormData(contactForm);
                const formValues = Object.fromEntries(formData.entries());
                
                // Replace form with success message
                contactForm.innerHTML = `
                    <div class="alert alert-success">
                        <h4 class="alert-heading">Message Sent!</h4>
                        <p>Thank you for contacting us, ${formValues.name}. We'll get back to you shortly.</p>
                    </div>
                `;
                
                // Reset form (for demo purposes)
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.innerHTML = contactForm.innerHTML;
                }, 5000);
            }
        });
    }

    // Add input event listeners to remove invalid class on input
    document.querySelectorAll('.form-control, .form-select').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    });

    // Testimonial slider (if needed)
    // This is a placeholder for a potential slider functionality
    // You could use a library like Swiper.js for this

    // Property videos play/pause on hover
    const propertyVideos = document.querySelectorAll('.property-video iframe');
    propertyVideos.forEach(video => {
        const src = video.src;
        
        // Video container
        const container = video.closest('.property-card');
        
        // Add hover events
        if (container) {
            container.addEventListener('mouseenter', () => {
                // Add autoplay parameter to the URL
                if (src.includes('youtube')) {
                    // For YouTube videos
                    video.src = src.includes('?') 
                        ? `${src}&autoplay=1&mute=1` 
                        : `${src}?autoplay=1&mute=1`;
                }
            });
            
            container.addEventListener('mouseleave', () => {
                // Reset to original source
                video.src = src;
            });
        }
    });

    // Preload images for better performance
    function preloadImages() {
        const images = [
            'assets/hero-bg.jpg',
            'assets/about-img.jpg',
            'assets/client1.jpg',
            'assets/client2.jpg',
            'assets/client3.jpg'
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Call the preload function
    preloadImages();
    
    // Theme toggle functionality
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            document.getElementById('theme-toggle-icon').classList.replace('fa-moon', 'fa-sun');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            document.getElementById('theme-toggle-icon').classList.replace('fa-sun', 'fa-moon');
        }
    }
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If user has dark mode preference
        setTheme('dark');
    }
    
    // Add event listener for theme toggle
    document.getElementById('theme-toggle').addEventListener('click', function() {
        if (document.body.classList.contains('dark-theme')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
    
    // Make "View Details" buttons redirect to contact section
    document.querySelectorAll('.property-card .view-details-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 