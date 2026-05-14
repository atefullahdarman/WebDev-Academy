// ==================== همبرګر مینو ====================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            navLinks.classList.toggle('active');
            
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
});

// ==================== د تړلو وړتیا (Completion) او پروګریس ====================
document.addEventListener('DOMContentLoaded', function() {
    // د بشپړ شویو مرحلو ډیټا
    let completedStages = {
        frontend: false,
        javascript: false,
        react: false,
        backend: false,
        database: false,
        devops: false
    };
    
    // د localStorage څخه لوډ کول
    const savedProgress = localStorage.getItem('roadmapProgress');
    if (savedProgress) {
        completedStages = JSON.parse(savedProgress);
    }
    
    // د مرحلو سټایل تازه کول
    function updateStages() {
        const stageValues = {
            frontend: 0,
            javascript: 0,
            react: 0,
            backend: 0,
            database: 0,
            devops: 0
        };
        
        let totalCompleted = 0;
        let totalStages = Object.keys(completedStages).length;
        
        for (const [stage, completed] of Object.entries(completedStages)) {
            const element = document.querySelector(`.timeline-item[data-stage="${stage}"]`);
            const btn = element ? element.querySelector('.complete-btn') : null;
            
            if (completed) {
                if (element) element.classList.add('completed');
                if (btn) {
                    btn.classList.add('completed');
                    btn.innerHTML = '✓ Completed';
                }
                totalCompleted++;
                stageValues[stage] = 100;
            } else {
                if (element) element.classList.remove('completed');
                if (btn) {
                    btn.classList.remove('completed');
                    btn.innerHTML = '✓ Mark Complete';
                }
                stageValues[stage] = 0;
            }
        }
        
        // د پروګریس بارونو تازه کول
        const totalPercent = Math.round((totalCompleted / totalStages) * 100);
        
        const progressFill = document.getElementById('progressFill');
        const progressPercent = document.getElementById('progressPercent');
        
        if (progressFill) {
            const circumference = 283;
            const offset = circumference - (totalPercent / 100) * circumference;
            progressFill.style.strokeDashoffset = offset;
        }
        
        if (progressPercent) {
            progressPercent.textContent = totalPercent;
        }
        
        // انفرادي پروګریس بارونه
        document.getElementById('frontendPercent').textContent = stageValues.frontend;
        document.getElementById('frontendBar').style.width = stageValues.frontend + '%';
        
        document.getElementById('jsPercent').textContent = stageValues.javascript;
        document.getElementById('jsBar').style.width = stageValues.javascript + '%';
        
        document.getElementById('reactPercent').textContent = stageValues.react;
        document.getElementById('reactBar').style.width = stageValues.react + '%';
        
        document.getElementById('backendPercent').textContent = stageValues.backend;
        document.getElementById('backendBar').style.width = stageValues.backend + '%';
        
        document.getElementById('dbPercent').textContent = stageValues.database;
        document.getElementById('dbBar').style.width = stageValues.database + '%';
    }
    
    // د کلیک پیښې
    const completeBtns = document.querySelectorAll('.complete-btn');
    completeBtns.forEach(function(btn) {
        const stage = btn.getAttribute('data-stage');
        if (completedStages[stage]) {
            btn.classList.add('completed');
            btn.innerHTML = '✓ Completed';
        }
        
        btn.addEventListener('click', function() {
            const stage = this.getAttribute('data-stage');
            completedStages[stage] = !completedStages[stage];
            localStorage.setItem('roadmapProgress', JSON.stringify(completedStages));
            updateStages();
        });
    });
    
    updateStages();
});

// ==================== د کارتونو انیمیشن ====================
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkScroll() {
        timelineItems.forEach(function(item) {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }
    
    timelineItems.forEach(function(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

// ==================== د شمېرونکو انیمیشن ====================
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    let countersStarted = false;
    
    function animateCounter(counter, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                counter.innerText = Math.floor(target);
                clearInterval(timer);
            } else {
                counter.innerText = Math.floor(current);
            }
        }, 20);
    }
    
    function startCounters() {
        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
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
});

// ==================== بک ته ټاپ ====================
document.addEventListener('DOMContentLoaded', function() {
    const backBtn = document.getElementById('backToTop');
    
    if (backBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backBtn.style.display = 'flex';
            } else {
                backBtn.style.display = 'none';
            }
        });
        
        backBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ==================== نیوزلیټر ====================
document.addEventListener('DOMContentLoaded', function() {
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
});

console.log('Roadmap page loaded successfully! 🎯');