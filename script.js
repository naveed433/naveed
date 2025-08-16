// Particle System
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100;
        this.colors = ['#a0d2eb', '#e5eaf5', '#d0bdf4', '#8458B3', '#a28089'];
        
        this.init();
        this.animate();
    }
    
    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Create particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
            
            // Add blur effect
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = particle.color;
        });
        
        this.ctx.globalAlpha = 1;
        this.ctx.shadowBlur = 0;
        
        requestAnimationFrame(() => this.animate());
    }
}

// Testimonials Auto-loop
class TestimonialsSlider {
    constructor() {
        this.track = document.getElementById('testimonialsTrack');
        this.testimonials = document.querySelectorAll('.testimonial');
        this.currentIndex = 0;
        this.interval = null;
        
        this.init();
    }
    
    init() {
        this.startAutoLoop();
        
        // Pause on hover
        this.track.addEventListener('mouseenter', () => this.pauseAutoLoop());
        this.track.addEventListener('mouseleave', () => this.startAutoLoop());
    }
    
    startAutoLoop() {
        this.interval = setInterval(() => {
            this.nextTestimonial();
        }, 4000);
    }
    
    pauseAutoLoop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    
    nextTestimonial() {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.updateTrack();
    }
    
    updateTrack() {
        const translateX = -this.currentIndex * 100;
        this.track.style.transform = `translateX(${translateX}%)`;
    }
}

// Scroll Indicator
class ScrollIndicator {
    constructor() {
        this.progressBar = document.querySelector('.scroll-progress');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.updateProgress());
    }
    
    updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        this.progressBar.style.width = scrollPercent + '%';
    }
}

// Back to Top Button
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.toggleVisibility());
        this.button.addEventListener('click', () => this.scrollToTop());
    }
    
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.button.classList.add('show');
        } else {
            this.button.classList.remove('show');
        }
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Skills Animation
class SkillBars {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-bar');
        this.init();
    }
    
    init() {
        this.animateSkillBars();
    }
    
    animateSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const level = skillBar.getAttribute('data-level');
                    skillBar.style.width = level + '%';
                }
            });
        }, { threshold: 0.5 });
        
        this.skillBars.forEach(bar => observer.observe(bar));
    }
}

// Smooth Scrolling for Navigation
class SmoothScrolling {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-links a');
        this.init();
    }
    
    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Mobile Navigation
class MobileNavigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }
    
    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking on a link
        this.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }
    
    toggleMenu() {
        this.hamburger.classList.toggle('active');
        this.navLinks.classList.toggle('active');
    }
    
    closeMenu() {
        this.hamburger.classList.remove('active');
        this.navLinks.classList.remove('active');
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Show success message (in a real app, you'd send this to a server)
        this.showMessage('Thank you! Your message has been sent successfully.', 'success');
        
        // Reset form
        this.form.reset();
    }
    
    showMessage(message, type) {
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#06ffa5' : '#ff006e'};
            color: white;
            border-radius: 10px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(messageDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            messageDiv.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 300);
        }, 3000);
    }
}



// Parallax Effect
class ParallaxEffect {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hexagon, .about-image');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// Typing Effect for Hero Skills
class TypingEffect {
    constructor() {
        this.skills = ['Full Stack Developer', 'UI/UX Designer', 'Mobile App Developer'];
        this.currentSkillIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.skillsLoop = document.getElementById('skillsLoop');
        this.init();
    }
    
    init() {
        this.type();
    }
    
    type() {
        const currentSkill = this.skills[this.currentSkillIndex];
        
        if (this.isDeleting) {
            this.currentCharIndex--;
        } else {
            this.currentCharIndex++;
        }
        
        const displayText = currentSkill.substring(0, this.currentCharIndex);
        this.skillsLoop.innerHTML = `<span class="skill-item">${displayText}</span>`;
        
        let typeSpeed = 100;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!this.isDeleting && this.currentCharIndex === currentSkill.length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentSkillIndex = (this.currentSkillIndex + 1) % this.skills.length;
            typeSpeed = 500; // Pause before next word
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Theme Toggle Functionality
class ThemeToggle {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        
        this.init();
    }
    
    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);
        
        // Add event listener
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    setTheme(theme) {
        if (theme === 'light') {
            this.body.classList.add('light-theme');
            this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            this.body.classList.remove('light-theme');
            this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// Initialize all classes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ParticleSystem();
    new TestimonialsSlider();
    new ScrollIndicator();
    new BackToTop();
    new SkillBars();
    new SmoothScrolling();
    new MobileNavigation();
    new ContactForm();
    new ParallaxEffect();
    new TypingEffect();
    new ThemeToggle();
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .nav-links.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            padding: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);
});

// Add some additional interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to skill cards (removed duplicate functionality)
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Flip Card Functionality
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        
        // Add hover effect for better UX
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('flipped')) {
                card.style.transform = 'translateY(-15px) scale(1.05) rotateY(10deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.classList.contains('flipped')) {
                card.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            }
        });
    });
    
    // Sidebar Functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    
    if (sidebarToggle && sidebar && sidebarClose) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
        
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
        
        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });
    }
    
    // Auth Tab Switching
    window.switchAuthTab = function(tab) {
        const tabs = document.querySelectorAll('.auth-tab');
        const forms = document.querySelectorAll('.auth-form');
        
        tabs.forEach(t => t.classList.remove('active'));
        forms.forEach(f => f.classList.remove('active'));
        
        document.querySelector(`[onclick="switchAuthTab('${tab}')"]`).classList.add('active');
        document.getElementById(`sidebar${tab.charAt(0).toUpperCase() + tab.slice(1)}Form`).classList.add('active');
    };
    
    // Logout Function
    window.logout = function() {
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        
        document.getElementById('authSection').style.display = 'block';
        document.getElementById('userProfile').style.display = 'none';
        
        // Update user info display
        document.getElementById('userName').textContent = 'User Name';
        document.getElementById('userEmail').textContent = 'user@email.com';
    };
});
