/* ========================================================
   SHARMILA P — SENIOR UI/UX DESIGNER PORTFOLIO
   Interactive Engine: Motion, Slider & Case Studies
   ======================================================== */

// ==================== 1. PRELOADER ====================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        if (loader) {
            loader.classList.add('loaded');
        }
        initScrollReveals();
    }, 1100);
});

// ==================== 2. THEME CONTROLLER ====================
const themeToggle = document.getElementById('themeToggle');
const htmlRoot = document.documentElement;
const savedTheme = localStorage.getItem('sharmila_portfolio_theme') || 'light';

htmlRoot.setAttribute('data-theme', savedTheme);
if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = htmlRoot.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        htmlRoot.setAttribute('data-theme', next);
        localStorage.setItem('sharmila_portfolio_theme', next);

        if (next === 'dark') {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    });
}

// ==================== 3. TYPING HEADLINE EFFECT ====================
const typingTextEl = document.getElementById('typingText');
if (typingTextEl) {
    const roles = [
        'UI/UX Designer',
        'Mobile App Architect',
        'Design Systems Specialist',
        'Interactive Prototyper',
        'AI-Augmented Product Designer'
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 90;

    function runTyping() {
        const text = roles[roleIdx];

        if (isDeleting) {
            typingTextEl.textContent = text.substring(0, charIdx - 1);
            charIdx--;
            speed = 40;
        } else {
            typingTextEl.textContent = text.substring(0, charIdx + 1);
            charIdx++;
            speed = 90;
        }

        if (!isDeleting && charIdx === text.length) {
            speed = 2200; // pause at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 450;
        }

        setTimeout(runTyping, speed);
    }
    setTimeout(runTyping, 1200);
}

// ==================== 4. CUSTOM MAGNETIC CURSOR ====================
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

    const hoverTargets = 'a, button, .jump-pill, .cs-tab-btn, .thumb-nav-btn, .ai-feature-card, .luxe-cert-card, .tool-badge, input, textarea, select';
    document.querySelectorAll(hoverTargets).forEach((el) => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
}

// ==================== 5. AMBIENT PARTICLE CANVAS ====================
const canvas = document.getElementById('ambientCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.8;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.alpha = Math.random() * 0.35 + 0.1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(99, 102, 241, ${this.alpha})`;
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        animId = requestAnimationFrame(loop);
    }

    init();
    loop();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animId);
        resize();
        init();
        loop();
    });
}

// ==================== 6. CAR DETAILING WEBSITE INTERACTIVE SCROLL ====================
const carViewport = document.getElementById('carViewport');
const carScrollToggle = document.getElementById('carScrollToggle');
const carScrollIcon = document.getElementById('carScrollIcon');
const carScrollLabel = document.getElementById('carScrollLabel');
const carFullscreenBtn = document.getElementById('carFullscreenBtn');
const carLightboxModal = document.getElementById('carLightboxModal');
const carLightboxClose = document.getElementById('carLightboxClose');
const carLightboxBackdrop = document.getElementById('carLightboxBackdrop');

let isCarAutoScrolling = false;
let carScrollInterval = null;

if (carScrollToggle && carViewport) {
    carScrollToggle.addEventListener('click', () => {
        isCarAutoScrolling = !isCarAutoScrolling;

        if (isCarAutoScrolling) {
            carScrollIcon.className = 'fas fa-pause';
            carScrollLabel.textContent = 'Pause';

            carScrollInterval = setInterval(() => {
                const maxScroll = carViewport.scrollHeight - carViewport.clientHeight;
                if (carViewport.scrollTop >= maxScroll - 5) {
                    carViewport.scrollTop = 0; // loop back to top
                } else {
                    carViewport.scrollTop += 2;
                }
            }, 30);
        } else {
            carScrollIcon.className = 'fas fa-play';
            carScrollLabel.textContent = 'Auto Scroll';
            clearInterval(carScrollInterval);
        }
    });

    // Pause auto-scroll when user manually scrolls
    carViewport.addEventListener('mouseenter', () => {
        if (isCarAutoScrolling) clearInterval(carScrollInterval);
    });

    carViewport.addEventListener('mouseleave', () => {
        if (isCarAutoScrolling) {
            carScrollInterval = setInterval(() => {
                const maxScroll = carViewport.scrollHeight - carViewport.clientHeight;
                if (carViewport.scrollTop >= maxScroll - 5) {
                    carViewport.scrollTop = 0;
                } else {
                    carViewport.scrollTop += 2;
                }
            }, 30);
        }
    });
}

// Fullscreen Lightbox for Car Detailing
if (carFullscreenBtn && carLightboxModal) {
    carFullscreenBtn.addEventListener('click', () => {
        carLightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeLightbox() {
        carLightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (carLightboxClose) carLightboxClose.addEventListener('click', closeLightbox);
    if (carLightboxBackdrop) carLightboxBackdrop.addEventListener('click', closeLightbox);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && carLightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// ==================== 7. DIGISUB CASE STUDY TABS ====================
const csTabBtns = document.querySelectorAll('.cs-tab-btn');
const csTabPanels = document.querySelectorAll('.cs-tab-panel');

csTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        csTabBtns.forEach(b => b.classList.remove('active'));
        csTabPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// ==================== 8. JUICE 4-BOTTLE SLIDING SHOWCASE ====================
const juiceSlides = document.querySelectorAll('.juice-slide');
const juiceThumbBtns = document.querySelectorAll('.thumb-nav-btn');
const juicePrevBtn = document.getElementById('juicePrev');
const juiceNextBtn = document.getElementById('juiceNext');
const sliderAura = document.getElementById('sliderAura');

let currentSlideIdx = 0;
const totalSlides = juiceSlides.length;
let autoSlideTimer = null;

function setJuiceSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentSlideIdx = index;

    // Update slides visibility
    juiceSlides.forEach((slide, i) => {
        if (i === currentSlideIdx) {
            slide.classList.add('active');
            // update ambient glow to match flavor color
            const glowColor = slide.getAttribute('data-theme-glow');
            if (sliderAura && glowColor) {
                sliderAura.style.background = glowColor;
            }
        } else {
            slide.classList.remove('active');
        }
    });

    // Update thumbnail buttons
    juiceThumbBtns.forEach((btn, i) => {
        if (i === currentSlideIdx) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

if (juicePrevBtn) {
    juicePrevBtn.addEventListener('click', () => {
        setJuiceSlide(currentSlideIdx - 1);
        resetAutoSlide();
    });
}

if (juiceNextBtn) {
    juiceNextBtn.addEventListener('click', () => {
        setJuiceSlide(currentSlideIdx + 1);
        resetAutoSlide();
    });
}

juiceThumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = parseInt(btn.getAttribute('data-slide-target'), 10);
        setJuiceSlide(target);
        resetAutoSlide();
    });
});

// Automatic slide rotation every 4.5 seconds
function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        setJuiceSlide(currentSlideIdx + 1);
    }, 4500);
}

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
}

const sliderContainer = document.getElementById('juiceSliderContainer');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();
}

// ==================== 9. TOAST NOTIFICATION & COPY EMAIL ====================
const toastBubble = document.getElementById('toastBubble');
const toastMsg = document.getElementById('toastMsg');

function showToast(message) {
    if (!toastBubble) return;
    toastMsg.textContent = message;
    toastBubble.classList.add('show');
    setTimeout(() => {
        toastBubble.classList.remove('show');
    }, 3000);
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

// ==================== 10. CONTACT FORM MAILTO ====================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${subject} from ${name}`);
        const bodyEncoded = encodeURIComponent(
            `Hi Sharmila,\n\nName: ${name}\nEmail: ${email}\nInquiry: ${subject}\n\nProject Details:\n${message}\n\nWarm regards,\n${name}`
        );

        window.location.href = `mailto:sharmi936342@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

        showToast('Opening your email client! Sharmila will get back to you promptly.');

        const btn = document.getElementById('formSubmitBtn');
        if (btn) {
            const original = btn.innerHTML;
            btn.innerHTML = '<span>Message Dispatched!</span> <i class="fas fa-check"></i>';
            setTimeout(() => {
                btn.innerHTML = original;
                contactForm.reset();
            }, 3000);
        }
    });
}

// ==================== 11. MOBILE DRAWER NAVIGATION ====================
const mobileToggle = document.getElementById('mobileToggle');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerClose = document.getElementById('drawerClose');
const drawerLinks = document.querySelectorAll('.drawer-link');

if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
        mobileDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function closeDrawer() {
        mobileDrawer.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

// ==================== 12. SCROLL REVEALS & NUMBER ANIMATION ====================
function initScrollReveals() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');

                // Animate meter bars
                const meters = entry.target.querySelectorAll('.meter-fill');
                meters.forEach(meter => {
                    const w = meter.getAttribute('data-width');
                    setTimeout(() => {
                        meter.style.width = `${w}%`;
                    }, 200);
                });

                // Animate stats
                const counters = entry.target.querySelectorAll('.stat-counter');
                counters.forEach(counter => {
                    animateCounter(counter);
                });
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const duration = 1600;
    const startTime = performance.now();

    function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(target * easeOut);

        counter.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            counter.textContent = target;
        }
    }
    requestAnimationFrame(step);
}

// ==================== 13. 3D CARD TILT ON PORTRAIT ====================
const portraitCard = document.getElementById('portraitCard');
if (portraitCard && window.innerWidth > 992) {
    portraitCard.addEventListener('mousemove', (e) => {
        const rect = portraitCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotX = ((y - midY) / midY) * -8;
        const rotY = ((x - midX) / midX) * 8;

        portraitCard.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    portraitCard.addEventListener('mouseleave', () => {
        portraitCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
}
