// ==================== د تیستیمونیلونو ډیټابیس ====================
let testimonialsData = [
    {
        id: 1,
        name: "Mohammad Karim",
        role: "Frontend Developer",
        company: "Tech Solutions Inc.",
        text: "The best web development courses I've ever taken! Everything is explained clearly with practical examples. I got my first job after completing the React course.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        date: "2024-03-15"
    },
    {
        id: 2,
        name: "Fatima Noori",
        role: "Full Stack Student",
        company: "Freelancer",
        text: "I learned React and Node.js in just 2 months. The projects were real-world and helped me build my portfolio. Highly recommended for beginners!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        date: "2024-02-28"
    },
    {
        id: 3,
        name: "Omar Sadat",
        role: "Software Engineer",
        company: "Google",
        text: "Amazing content with practical projects. The support is also great! The MongoDB course helped me a lot in my current job.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        date: "2024-03-01"
    },
    {
        id: 4,
        name: "Zahra Hussaini",
        role: "UI/UX Designer",
        company: "Design Studio",
        text: "The HTML/CSS and Tailwind courses were fantastic! I can now build responsive websites from scratch. Thank you WebDevAcademy!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        date: "2024-02-20"
    },
    {
        id: 5,
        name: "Ramin Ahmadi",
        role: "Backend Developer",
        company: "Startup Hub",
        text: "Node.js and Express course was comprehensive. The instructor explains complex concepts in a simple way. Worth every minute!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        date: "2024-03-10"
    },
    {
        id: 6,
        name: "Sara Mohammadi",
        role: "Computer Science Student",
        company: "Kabul University",
        text: "Free courses with such high quality? Unbelievable! The JavaScript course cleared all my concepts. Now I'm ready for interviews.",
        rating: 4,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        date: "2024-03-05"
    },
    {
        id: 7,
        name: "Hamed Rahimi",
        role: "DevOps Engineer",
        company: "CloudBase",
        text: "The Docker and Kubernetes course gave me the confidence to manage containerized applications. Best investment!",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        date: "2024-03-12"
    },
    {
        id: 8,
        name: "Lina Ahmad",
        role: "Junior Developer",
        company: "StartupLab",
        text: "The JavaScript course is amazing! I went from zero to building my own projects. The instructor is very clear.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        date: "2024-03-08"
    }
];

// ==================== متغیرونه ====================
let currentRatingFilter = "all";
let currentSearch = "";

// ==================== د ستورو تولید ====================
function generateStarsHTML(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 === rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// ==================== د نیټې فورمټ ====================
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// ==================== د تیستیمونیلونو ښودل ====================
function displayTestimonials() {
    const container = document.getElementById("testimonialsGrid");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const noResults = document.getElementById("noResults");
    
    if (!container) return;
    
    // فلټر کول
    let filtered = testimonialsData;
    
    if (currentRatingFilter !== "all") {
        const minRating = parseInt(currentRatingFilter);
        filtered = filtered.filter(t => t.rating >= minRating);
    }
    
    if (currentSearch.trim() !== "") {
        filtered = filtered.filter(t => 
            t.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            t.text.toLowerCase().includes(currentSearch.toLowerCase()) ||
            t.role.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }
    
    if (filtered.length === 0) {
        container.style.display = "none";
        noResults.style.display = "block";
        loadingSpinner.style.display = "none";
        return;
    }
    
    container.style.display = "grid";
    noResults.style.display = "none";
    loadingSpinner.style.display = "none";
    
    container.innerHTML = filtered.map((testimonial, index) => `
        <div class="testimonial-card" style="animation-delay: ${index * 0.05}s">
            <div class="quote-icon">
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="testimonial-content">
                <div class="testimonial-stars">
                    ${generateStarsHTML(testimonial.rating)}
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                    <div class="testimonial-author-info">
                        <h4>${testimonial.name}</h4>
                        <span class="role">${testimonial.role}</span>
                        <span class="company">${testimonial.company}</span>
                    </div>
                </div>
                <div class="testimonial-date">
                    <i class="far fa-calendar-alt"></i> ${formatDate(testimonial.date)}
                </div>
            </div>
        </div>
    `).join("");
}

// ==================== شمېرونکي انیمیشن ====================
function animateCounter(element, target) {
    let current = 0;
    const isDecimal = target % 1 !== 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.innerText = isDecimal ? target.toFixed(1) : Math.floor(target);
            clearInterval(timer);
        } else {
            element.innerText = isDecimal ? current.toFixed(1) : Math.floor(current);
        }
    }, 20);
}

// ==================== د شمېرونکو پیلول ====================
let countersStarted = false;
function startCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        animateCounter(counter, target);
    });
}

function checkCountersOnScroll() {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection && !countersStarted) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            startCounters();
            countersStarted = true;
        }
    }
}

// ==================== فلټرونه تنظیمول ====================
function setupFilters() {
    const ratingBtns = document.querySelectorAll(".rating-btn");
    const searchInput = document.getElementById("searchInput");
    
    ratingBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            ratingBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentRatingFilter = btn.dataset.rating;
            displayTestimonials();
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearch = e.target.value;
            displayTestimonials();
        });
    }
}

// ==================== د نوي تیستیمونیل فورمه ====================
function setupTestimonialForm() {
    const showBtn = document.getElementById("showFormBtn");
    const modal = document.getElementById("testimonialFormModal");
    const closeBtn = document.querySelector(".close-modal");
    const cancelBtn = document.getElementById("cancelFormBtn");
    const form = document.getElementById("testimonialForm");
    const ratingStars = document.querySelectorAll(".rating-input i");
    const ratingInput = document.getElementById("reviewerRating");
    
    if (showBtn) {
        showBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    }
    
    const closeModal = () => {
        modal.style.display = "none";
        form.reset();
        ratingStars.forEach(star => star.classList.remove("active"));
        if (ratingInput) ratingInput.value = "0";
    };
    
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    
    // د ستورو انتخاب
    ratingStars.forEach(star => {
        star.addEventListener("click", () => {
            const value = parseInt(star.dataset.value);
            if (ratingInput) ratingInput.value = value;
            
            ratingStars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add("active");
                    s.classList.remove("far");
                    s.classList.add("fas");
                } else {
                    s.classList.remove("active");
                    s.classList.remove("fas");
                    s.classList.add("far");
                }
            });
        });
    });
    
    // د فورمې سپارل
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("reviewerName")?.value;
            const role = document.getElementById("reviewerRole")?.value;
            const company = document.getElementById("reviewerCompany")?.value || "Student";
            const rating = parseInt(document.getElementById("reviewerRating")?.value) || 0;
            const text = document.getElementById("reviewerText")?.value;
            const photo = document.getElementById("reviewerPhoto")?.value;
            
            if (rating === 0) {
                alert("Please select a rating!");
                return;
            }
            
            const newTestimonial = {
                id: testimonialsData.length + 1,
                name: name,
                role: role,
                company: company,
                text: text,
                rating: rating,
                avatar: photo || `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
                date: new Date().toISOString().split('T')[0]
            };
            
            testimonialsData.unshift(newTestimonial);
            displayTestimonials();
            closeModal();
            
            alert("✅ Thank you for your feedback! Your review has been added.");
        });
    }
}

// ==================== موبایل مینو ====================
function setupMobileMenu() {
    const menuBtn = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

// ==================== بک ته ټاپ ====================
function setupBackToTop() {
    const backBtn = document.getElementById("backToTop");
    if (!backBtn) return;
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backBtn.style.display = "flex";
        } else {
            backBtn.style.display = "none";
        }
    });
    
    backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ==================== نیوزلیټر ====================
function setupNewsletter() {
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector("input")?.value;
            if (email) {
                alert(`Thank you for subscribing! We'll send updates to ${email}`);
                newsletterForm.reset();
            }
        });
    }
}

// ==================== پیل ====================
document.addEventListener("DOMContentLoaded", () => {
    displayTestimonials();
    setupFilters();
    setupTestimonialForm();
    setupMobileMenu();
    setupBackToTop();
    setupNewsletter();
    window.addEventListener("scroll", checkCountersOnScroll);
    checkCountersOnScroll();
});