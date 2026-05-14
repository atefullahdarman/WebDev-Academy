// ==================== رودمپ پاڼې بشپړ جاوااسکریپټ ====================
// پدې کې همبرګر مینو، انیمیشنونه، او د رودمپ ټول فیچرونه شامل دي

document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== 1. همبرګر مینو ====================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        // د مینو پرانیستل او تړل
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            navLinks.classList.toggle('active');
            
            // د آیکون بدلون (bars -> times)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // کله چې په لینک کلیک وشي، مینو وتړل شي
        const allLinks = navLinks.querySelectorAll('a');
        allLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
    
    // کله چې د مینو بهر کلیک وشي، مینو وتړل شي
    document.addEventListener('click', function(event) {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks && navLinks.classList.contains('active')) {
            if (menuToggle && !menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
    
    // کله چې سکرین اندازه بدله شي او مینو خلاص وي
    window.addEventListener('resize', function() {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
    
    // ==================== 2. د رودمپ کارتونو انیمیشن ====================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkScroll() {
        timelineItems.forEach(function(item) {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    
    // ==================== 3. د شمېرونکو انیمیشن ====================
    const counters = document.querySelectorAll('.counter');
    let countersStarted = false;
    
    function startCounters() {
        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(function() {
                current += increment;
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    counter.innerText = Math.floor(current);
                }
            }, 20);
        });
    }
    
    function checkCounters() {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection && !countersStarted) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                startCounters();
                countersStarted = true;
            }
        }
    }
    
    window.addEventListener('scroll', checkCounters);
    checkCounters();
    
    // ==================== 4. بک ته ټاپ تڼۍ ====================
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ==================== 5. د FAQ ټوګل ====================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        }
    });
    
    // ==================== 6. نیوزلیټر فورمه ====================
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput ? emailInput.value : '';
            
            if (email && email.includes('@') && email.includes('.')) {
                alert('✅ Thank you for subscribing! We\'ll send updates to ' + email);
                newsletterForm.reset();
            } else {
                alert('❌ Please enter a valid email address');
            }
        });
    }
    
    // ==================== 7. د فلټر تڼۍ ====================
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            filterBtns.forEach(function(b) {
                b.style.background = '#e2e8f0';
                b.style.color = '#333';
            });
            
            this.style.background = '#6366f1';
            this.style.color = 'white';
            
            // دلته خپل فلټر منطق اضافه کړئ
            console.log('Filter by: ' + category);
        });
    });
    
    // ==================== 8. د لټون فعالیت ====================
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            console.log('Searching for: ' + searchTerm);
            // دلته خپل لټون منطق اضافه کړئ
        });
    }
    
    console.log('Roadmap page loaded successfully! 🎯');
});