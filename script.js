AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    delay: 0
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Typing animation for hero section
const typingText = document.getElementById('typingText');
const phrases = [
    'Full Stack Developer',
    'Java Developer',
    'React Engineer',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// Code rain animation for hero background
function createCodeRain() {
    const codeRainContainer = document.getElementById('codeRain');
    if (!codeRainContainer) return;
    
    const codeChars = ['<', '>', '{', '}', '[', ']', '(', ')', '/', '=', ';', ':', 'const', 'let', 'function', '0', '1'];
    const columnCount = Math.floor(window.innerWidth / 30);
    
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = i * 30 + 'px';
        column.style.top = '-100px';
        column.style.color = 'rgba(255, 159, 100, 0.3)';
        column.style.fontSize = '14px';
        column.style.fontFamily = 'monospace';
        column.style.animation = `codeRainFall ${Math.random() * 10 + 10}s linear infinite`;
        column.style.animationDelay = Math.random() * 5 + 's';
        column.textContent = codeChars[Math.floor(Math.random() * codeChars.length)];
        
        codeRainContainer.appendChild(column);
    }
}

// Add code rain animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes codeRainFall {
        0% {
            transform: translateY(-100px);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

createCodeRain();

// Enhanced smooth scroll for anchor links with custom easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Smooth scroll with improved easing
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = 800; // Faster, smoother scroll
            let start = null;
            
            // Smooth ease-out-quart for natural deceleration
            function easeOutQuart(t) {
                return 1 - Math.pow(1 - t, 4);
            }
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                const easing = easeOutQuart(progress);
                
                window.scrollTo(0, startPosition + distance * easing);
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }
            
            requestAnimationFrame(animation);
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
    
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!data.name || !data.email || !data.subject || !data.message) {
        showFormStatus('Please fill in all fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }
    
    try {
        showFormStatus('Sending message...', 'success');
        
        // Simulate sending (wait for 1 second)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Create mailto link
        const mailtoLink = `mailto:abhishekn17@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
        window.location.href = mailtoLink;
        
        showFormStatus('Thank you! Your message has been sent.', 'success');
        contactForm.reset();
    } catch (error) {
        showFormStatus('Oops! Something went wrong. Please try again.', 'error');
    }
});

// Parallax hero effect
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    } else if (hero && scrolled >= window.innerHeight) {
        // Reset transform when scrolled past hero to prevent overlap
        hero.style.transform = 'translateY(0)';
    }
});

// Project card 3D tilt effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Console easter egg
console.log('%c👋 Hi there!', 'color: #ff9f64; font-size: 24px; font-weight: bold;');
console.log('%cLooking at the code? I like your style!', 'color: #bc8cff; font-size: 16px;');
console.log('%cFeel free to reach out: abhiabde17@gmail.com', 'color: #58a6ff; font-size: 14px;');

// Loading animation (if needed)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Certificate modal functions
function openCertificate(imageSrc) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('certificateImage');
    
    modal.classList.add('show');
    modalImg.src = imageSrc;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('show');
    
    // Re-enable body scroll
    document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertificate();
    }
});

// Prevent default form submission for demonstration
console.log('Portfolio loaded successfully! 🚀');
