/* ========================================================
   SHARMILA P — UI/UX DESIGNER LUXURY PORTFOLIO
   Interactive Engine & Dynamic Animations
   ======================================================== */

// ==================== 1. PROJECT CASE STUDY DATABASE ====================
const projectDatabase = {
    'modal-p1': {
        title: 'Mobile App Interactive Prototype',
        category: 'Interactive Prototype • Mobile UX',
        image: 'images/project-prototype-showcase.jpg',
        tagline: 'High-fidelity mobile application prototype engineered with end-to-end user flows and gesture micro-interactions.',
        role: 'Lead UI/UX Designer & Prototyper',
        tools: 'Figma, Miro, Interactive Smart Animate',
        problem: 'Traditional mobile mockups frequently fail to convey real-world tactile feeling, leading to misinterpretations between stakeholders, developers, and target users during user testing.',
        solution: 'Built a 60 FPS clickable prototype in Figma featuring physics-based easing curves, drag gestures, bottom-sheet interactions, and complete onboarding-to-action flows.',
        highlights: [
            'End-to-end user navigation with frictionless screen transitions',
            'Component variants with interactive smart animate states (hover, pressed, dragging)',
            'Optimized for mobile viewport scaling with zero input latency',
            'Full accessibility compliance with high-contrast UI touch targets (48x48dp minimum)'
        ],
        figmaLink: 'https://www.figma.com/proto/nwDnou5TTl1gcGtTa3x5sc/Untitled?node-id=1-2&t=GNsBj65nKpBicAgL-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
        ctaText: 'Run Live Prototype'
    },
    'modal-p2': {
        title: 'DigiSub — Smart Subscription Manager',
        category: 'Mobile App • Fintech & SaaS',
        image: 'images/project-digisub-showcase.jpg',
        tagline: 'Community-driven fintech application designed to track recurring billing, prevent unwanted auto-renewals, and optimize household budgets.',
        role: 'End-to-End Product Designer',
        tools: 'Figma, Information Architecture, Data Visualization',
        problem: 'Consumers subscribe to dozens of cloud, entertainment, and work services, inadvertently losing hundreds of dollars annually to forgotten renewals and split payment confusions.',
        solution: 'Architected DigiSub with a clean dashboard highlighting upcoming renewal schedules, spending analytics by category, and an intuitive one-tap cancellation reminder assistant.',
        highlights: [
            'Financial telemetry dashboard with customizable monthly/annual spending charts',
            'Shared family plan splitting with transparent per-person payment indicators',
            'Automated push alert notification cards 3 days prior to renewal dates',
            'Robust design system featuring tokenized colors and atomic components'
        ],
        figmaLink: 'https://www.figma.com/design/pCz9zJgmnKzZsLyNERSXZO/Subscription-Management-App--Community-?node-id=1136-316&t=Tf35fL1O9sKqHbIK-1',
        ctaText: 'Explore in Figma'
    },
    'modal-p3': {
        title: 'LuxeGlow — Beauty & Cosmetics E-Commerce Experience',
        category: 'Responsive Web Design • Luxury E-Commerce',
        image: 'images/project-cosmetics-showcase.jpg',
        tagline: 'A modern skincare and cosmetic digital flagship store engineered with editorial aesthetics, transparent ingredient cards, and frictionless checkout.',
        role: 'UI Designer & Web UX Architect',
        tools: 'Figma, Design Systems, Responsive Breakpoint Grids',
        problem: 'Beauty shoppers face overwhelming product clutter online, low confidence in skin-type compatibility, and cumbersome multi-step checkout processes.',
        solution: 'Crafted an airy, editorial website aesthetic with personalized skin-quiz onboarding, rich sensory product cards, and a streamlined 2-step expressive checkout flow.',
        highlights: [
            'High-converting product detail pages with verified ingredient badges and skin suitability filters',
            'Editorial visual hierarchy inspired by luxury beauty magazines',
            'Modular responsive layout scaling seamlessly from 375px mobile to 1440px desktop screens',
            'Conversion-focused sticky cart drawer and one-click express payment options'
        ],
        figmaLink: 'https://www.figma.com/design/AoTzbHNLpQ8I5fMZZRMYOZ/beauty-cosmetic-website-1?node-id=2-2&t=NcWihcLbWpbYNZH9-1',
        ctaText: 'Explore in Figma'
    },
    'modal-p4': {
        title: 'TuneHub — Next-Gen Music Streaming Platform',
        category: 'Mobile App • Audio UX & Entertainment',
        image: 'images/project-tunehub-showcase.jpg',
        tagline: 'A high-energy music streaming application designed for seamless playback control, algorithmic song discovery, and social playlist collaboration.',
        role: 'Mobile UI/UX Designer',
        tools: 'Figma, Dark UI Elevation, Micro-Interactions',
        problem: 'Users frequently struggle with clumsy playlist reorganizing and cluttered player interfaces while multitasking or commuting.',
        solution: 'Developed TuneHub featuring gesture-centric player controls, dynamic background gradient adaptivity based on album art, and rapid queue manipulation.',
        highlights: [
            'Immersive full-screen playback mode with ambient album aura glow',
            'Swipe-to-queue and drag-and-drop playlist reordering micro-interactions',
            'Smart listening modes tailored to focus, workouts, and ambient relaxation',
            'Accessible dark mode interface engineered for prolonged nighttime enjoyment'
        ],
        figmaLink: 'https://www.figma.com/design/FfnT3R0FDdV5TNoFNKjQrN/Untitled?node-id=0-1&t=NcWihcLbWpbYNZH9-1',
        ctaText: 'Explore in Figma'
    },
    'modal-p5': {
        title: 'Visual Identity & Editorial Poster Series',
        category: 'Branding • Social Media Campaign & Posters',
        image: 'images/project-poster-showcase.jpg',
        tagline: 'High-impact creative graphics series featuring the Gandhi Jayanti national commemorative tribute poster and the Life Abroad social media campaign.',
        role: 'Visual Designer & Creative Strategist',
        tools: 'Adobe Photoshop, Adobe Illustrator, Figma, Behance',
        problem: 'Digital social media channels suffer from visual fatigue, requiring brands to project striking visual narratives with immediate emotional resonance within seconds.',
        solution: 'Engineered a series of bold typographic compositions, dramatic spatial balances, and culturally resonant color palettes across print and digital media formats.',
        highlights: [
            'Gandhi Jayanti Commemorative Poster celebrating national peace, dignity, and heritage with modern minimalism',
            "'Life Abroad' social media series communicating aspirations, travel culture, and global lifestyle perspectives",
            'Precise typographic scale, contrast ratios, and cross-platform export fidelity',
            'Showcased on Behance with detailed visual design breakdowns'
        ],
        figmaLink: 'https://www.behance.net/sharmisharmila5',
        ctaText: 'View Behance Showcase'
    }
};

// ==================== 2. PAGE PRELOADER ====================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        if (loader) {
            loader.classList.add('loaded');
        }
        initScrollAnimations();
    }, 1400);
});

// ==================== 3. THEME MANAGEMENT (LIGHT LUXE / DARK MIDNIGHT) ====================
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

// Initialize theme from localStorage or default to light (whitish)
const savedTheme = localStorage.getItem('sharmila_portfolio_theme') || 'light';
htmlEl.setAttribute('data-theme', savedTheme);
if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('sharmila_portfolio_theme', newTheme);

        if (newTheme === 'dark') {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }

        // Trigger particle color update if canvas exists
        if (window.updateParticleColors) {
            window.updateParticleColors(newTheme);
        }
    });
}

// ==================== 4. CUSTOM CURSOR ====================
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorDot && cursorRing && window.innerWidth > 992) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = `${mouseX - 3}px`;
        cursorDot.style.top = `${mouseY - 3}px`;
    });

    function renderCursor() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        cursorRing.style.left = `${ringX - 18}px`;
        cursorRing.style.top = `${ringY - 18}px`;
        requestAnimationFrame(renderCursor);
    }
    renderCursor();

    const interactiveSelectors = 'a, button, .project-card, .tool-tile, .pillar-card, .ai-tool-card, .cert-card-luxe, input, textarea, select';
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
}

// ==================== 5. INTERACTIVE PARTICLE CANVAS ====================
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.2 + 0.8;
            this.speedX = (Math.random() - 0.5) * 0.45;
            this.speedY = (Math.random() - 0.5) * 0.45;
            this.opacity = Math.random() * 0.45 + 0.12;
            const isDark = htmlEl.getAttribute('data-theme') === 'dark';
            this.color = Math.random() > 0.5 
                ? (isDark ? '139, 92, 246' : '99, 102, 241') 
                : (isDark ? '236, 72, 153' : '244, 63, 94');
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const count = Math.min(65, Math.floor((canvas.width * canvas.height) / 18000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    window.updateParticleColors = function() {
        particles.forEach(p => p.reset());
    };

    function drawConnections() {
        const isDark = htmlEl.getAttribute('data-theme') === 'dark';
        const lineBase = isDark ? '139, 92, 246' : '99, 102, 241';

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    const alpha = (1 - dist / 130) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${lineBase}, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animationFrameId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationFrameId);
        resizeCanvas();
        initParticles();
        animateParticles();
    });
}

// ==================== 6. TYPING EFFECT ====================
const typedTextEl = document.getElementById('typedText');
if (typedTextEl) {
    const roles = [
        'UI/UX Designer',
        'Mobile App Architect',
        'Web & SaaS Product Designer',
        'Interactive Prototyper',
        'AI-Enhanced Workflow Specialist'
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeDelay = 90;

    function handleTyping() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            typedTextEl.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
            typeDelay = 40;
        } else {
            typedTextEl.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
            typeDelay = 90;
        }

        if (!isDeleting && charIdx === currentRole.length) {
            typeDelay = 2200; // Pause at completion
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            typeDelay = 500;
        }

        setTimeout(handleTyping, typeDelay);
    }

    setTimeout(handleTyping, 1600);
}

// ==================== 7. NAVBAR & SCROLL SPY ====================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll spy
    let currentSectionId = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// ==================== 8. SCROLL REVEAL & COUNTER ANIMATIONS ====================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');

                // Animate skill bars
                const meters = entry.target.querySelectorAll('.meter-fill');
                meters.forEach(meter => {
                    const width = meter.getAttribute('data-width');
                    setTimeout(() => {
                        meter.style.width = `${width}%`;
                    }, 200);
                });

                // Animate counters
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    animateNumber(counter);
                });
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

function animateNumber(counter) {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const duration = 1800;
    const startTime = performance.now();

    function update(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const val = Math.floor(target * easeOut);

        counter.textContent = val;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.textContent = target;
        }
    }
    requestAnimationFrame(update);
}

// ==================== 9. PROJECT FILTERING ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach((card, index) => {
            const categories = card.getAttribute('data-category').split(' ');

            if (filter === 'all' || categories.includes(filter)) {
                card.classList.remove('hidden');
                card.style.animation = `fadeInUp 0.4s ease ${index * 0.08}s forwards`;
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ==================== 10. CASE STUDY MODAL ENGINE ====================
const caseStudyModal = document.getElementById('caseStudyModal');
const modalContent = document.getElementById('modalContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBackdrop = document.getElementById('modalBackdrop');

function openCaseStudyModal(modalKey) {
    const data = projectDatabase[modalKey];
    if (!data) return;

    modalContent.innerHTML = `
        <div class="modal-header-hero">
            <span class="modal-category-badge">${data.category}</span>
            <h2 class="modal-title">${data.title}</h2>
            <p class="modal-tagline">${data.tagline}</p>
            <div class="modal-media-frame">
                <img src="${data.image}" alt="${data.title}">
            </div>
        </div>

        <div class="modal-section-block">
            <h4><i class="fas fa-bullseye"></i> Problem Statement</h4>
            <p>${data.problem}</p>
        </div>

        <div class="modal-section-block">
            <h4><i class="fas fa-lightbulb"></i> UX Solution & Methodology</h4>
            <p>${data.solution}</p>
        </div>

        <div class="modal-section-block">
            <h4><i class="fas fa-sparkles"></i> Key Highlights & Features</h4>
            <ul class="modal-highlights-list">
                ${data.highlights.map(item => `<li><i class="fas fa-check-circle"></i> <span>${item}</span></li>`).join('')}
            </ul>
        </div>

        <div class="modal-section-block">
            <h4><i class="fas fa-screwdriver-wrench"></i> Role & Tools</h4>
            <p><strong>Role:</strong> ${data.role} &nbsp;|&nbsp; <strong>Tools:</strong> ${data.tools}</p>
        </div>

        <div class="modal-action-row">
            <a href="${data.figmaLink}" target="_blank" class="btn btn-primary">
                <span>${data.ctaText}</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
            </a>
            <button class="btn btn-secondary modal-close-action">
                <span>Close Case Study</span>
            </button>
        </div>
    `;

    caseStudyModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook internal close button
    const closeAction = modalContent.querySelector('.modal-close-action');
    if (closeAction) {
        closeAction.addEventListener('click', closeCaseStudyModal);
    }
}

function closeCaseStudyModal() {
    if (caseStudyModal) {
        caseStudyModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Attach listeners to all detail buttons
document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modalKey = btn.getAttribute('data-modal');
        openCaseStudyModal(modalKey);
    });
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCaseStudyModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeCaseStudyModal);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseStudyModal && caseStudyModal.classList.contains('active')) {
        closeCaseStudyModal();
    }
});

// ==================== 11. TOAST NOTIFICATIONS & COPY EMAIL ====================
const toastNotification = document.getElementById('toastNotification');
const toastMessage = document.getElementById('toastMessage');

function showToast(msg) {
    if (!toastNotification) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    setTimeout(() => {
        toastNotification.classList.remove('show');
    }, 3200);
}

const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
        const email = 'sharmi936342@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            showToast('Email sharmi936342@gmail.com copied to clipboard!');
        }).catch(() => {
            showToast('Email: sharmi936342@gmail.com');
        });
    });
}

// ==================== 12. CONTACT FORM MAILTO DISPATCH ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subjectType = document.getElementById('projectType').value;
        const message = document.getElementById('message').value.trim();

        const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectType} - from ${name}`);
        const emailBody = encodeURIComponent(
            `Hi Sharmila,\n\nName: ${name}\nEmail: ${email}\nInquiry Type: ${subjectType}\n\nProject Details:\n${message}\n\nBest regards,\n${name}`
        );

        window.location.href = `mailto:sharmi936342@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        showToast('Opening email client! Thanks for reaching out, Sharmila will reply promptly.');

        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Message Dispatched!</span> <i class="fas fa-check"></i>';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                contactForm.reset();
            }, 3000);
        }
    });
}

// ==================== 13. BACK TO TOP BUTTON ====================
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== 14. 3D CARD TILT EFFECT ====================
if (window.innerWidth > 992) {
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;
            const rotX = ((y - midY) / midY) * -6;
            const rotY = ((x - midX) / midX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
}

// Inject keyframe animation for project filter transitions
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(24px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);
