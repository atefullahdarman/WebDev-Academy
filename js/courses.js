// ==================== د کورسونو ډیټابیس ====================
const coursesData = [
    {
        id: 1,
        title: "HTML & CSS Masterclass",
        description: "Learn HTML5 and CSS3 from scratch. Build modern, responsive websites with Flexbox, Grid, and animations.",
        icon: "fab fa-html5",
        category: "frontend",
        lessons: 45,
        duration: "8.5 hours",
        level: "Beginner",
        rating: 4.8,
        reviews: 1250,
        price: 0,
        originalPrice: 49,
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G"
    },
    {
        id: 2,
        title: "JavaScript Complete Course",
        description: "Master JavaScript with ES6+, DOM manipulation, APIs, async/await, and build 10+ real projects.",
        icon: "fab fa-js",
        category: "frontend",
        lessons: 60,
        duration: "12 hours",
        level: "Intermediate",
        rating: 4.9,
        reviews: 2100,
        price: 0,
        originalPrice: 59,
        url: "https://youtube.com/playlist?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&si=KSPWTZivV6Ixo3aq"
    },
    {
        id: 3,
        title: "React.js Modern Course",
        description: "Build modern web apps with React Hooks, Router, Context API, Redux Toolkit, and Next.js basics.",
        icon: "fab fa-react",
        category: "frontend",
        lessons: 50,
        duration: "15 hours",
        level: "Intermediate",
        rating: 4.9,
        reviews: 1850,
        price: 0,
        originalPrice: 79,
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
    },
    {
        id: 4,
        title: "Node.js & Express",
        description: "Build backend APIs, authentication (JWT), authorization, file uploads, and deploy to production.",
        icon: "fab fa-node",
        category: "backend",
        lessons: 40,
        duration: "10 hours",
        level: "Intermediate",
        rating: 4.7,
        reviews: 980,
        price: 0,
        originalPrice: 69,
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp"
    },
    {
        id: 5,
        title: "Python for Web Developers",
        description: "Learn Python basics to advanced, Django framework, REST APIs, and build full-stack web apps.",
        icon: "fab fa-python",
        category: "backend",
        lessons: 55,
        duration: "14 hours",
        level: "Beginner",
        rating: 4.8,
        reviews: 750,
        price: 0,
        originalPrice: 54,
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9ib4HsrXEYpQnTOTZE1x0uc"
    },
    {
        id: 6,
        title: "MySQL Database",
        description: "Learn SQL, database design, joins, subqueries, indexes, stored procedures, and optimization.",
        icon: "fas fa-database",
        category: "database",
        lessons: 35,
        duration: "7 hours",
        level: "Beginner",
        rating: 4.6,
        reviews: 620,
        price: 0,
        originalPrice: 44,
        url: "https://youtube.com/playlist?list=PLjVLYmrlmjGeyCPgdHL2vWmEGKxcpsC0E&si=MyPHHu7V2CV7ojfw"
    },
    {
        id: 7,
        title: "MongoDB & Mongoose",
        description: "NoSQL database, CRUD operations, aggregation pipeline, data modeling, and Mongoose ODM.",
        icon: "fas fa-leaf",
        category: "database",
        lessons: 30,
        duration: "6 hours",
        level: "Intermediate",
        rating: 4.7,
        reviews: 540,
        price: 0,
        originalPrice: 49,
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA"
    },
    {
        id: 8,
        title: "Tailwind CSS Mastery",
        description: "Build modern, responsive UIs fast with utility-first CSS framework. Learn custom configuration.",
        icon: "fab fa-css3-alt",
        category: "frontend",
        lessons: 25,
        duration: "5 hours",
        level: "Beginner",
        rating: 4.8,
        reviews: 890,
        price: 0,
        originalPrice: 39,
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw"
    },
    {
        id: 9,
        title: "Full Stack Web Development (MERN)",
        description: "Complete MERN stack course with real projects: e-commerce, social media, and deployment.",
        icon: "fas fa-laptop-code",
        category: "fullstack",
        lessons: 100,
        duration: "40 hours",
        level: "Advanced",
        rating: 4.9,
        reviews: 3100,
        price: 0,
        originalPrice: 99,
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE"
    },
    {
        id: 10,
        title: "TypeScript for Beginners",
        description: "Learn TypeScript from scratch, static typing, interfaces, generics, and use with React.",
        icon: "fab fa-js",
        category: "frontend",
        lessons: 32,
        duration: "6 hours",
        level: "Intermediate",
        rating: 4.7,
        reviews: 430,
        price: 0,
        originalPrice: 49,
        url: "https://youtube.com/playlist?list=PL1BztTYDF-QNrddrcvejiw5vxSZSPIRfn&si=A6VoJw26mDrL8Ijq"
    },
    {
        id: 11,
        title: "GraphQL API Course",
        description: "Learn GraphQL, Apollo Server, queries, mutations, subscriptions, and integrate with React.",
        icon: "fas fa-code-branch",
        category: "backend",
        lessons: 28,
        duration: "5.5 hours",
        level: "Advanced",
        rating: 4.8,
        reviews: 320,
        price: 0,
        originalPrice: 59,
        url: "https://youtu.be/ed8SzALpx1Q"
    },
    {
        id: 12,
        title: "Docker & Kubernetes",
        description: "Containerization, Docker, Kubernetes, microservices, and deploy apps to the cloud.",
        icon: "fab fa-docker",
        category: "backend",
        lessons: 40,
        duration: "8 hours",
        level: "Advanced",
        rating: 4.7,
        reviews: 280,
        price: 0,
        originalPrice: 69,
        url: "https://youtu.be/fqMOX6JJhGo"
    }
];

// ==================== متغیرونه ====================
let currentCategory = "all";
let currentSearch = "";
let allCourses = [...coursesData];

// ==================== د کورسونو ښودل ====================
function displayCourses() {
    const container = document.getElementById("coursesGrid");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const noResults = document.getElementById("noResults");
    const coursesCount = document.getElementById("coursesCount");
    
    // فلټر کول
    let filtered = allCourses;
    
    if (currentCategory !== "all") {
        filtered = filtered.filter(c => c.category === currentCategory);
    }
    
    if (currentSearch.trim() !== "") {
        filtered = filtered.filter(c => 
            c.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
            c.description.toLowerCase().includes(currentSearch.toLowerCase())
        );
    }
    
    // د کورسونو شمېر تازه کول
    coursesCount.innerHTML = `<i class="fas fa-book-open"></i> ${filtered.length} courses available`;
    
    // پټول/ښکاره کول
    if (filtered.length === 0) {
        container.style.display = "none";
        noResults.style.display = "block";
        loadingSpinner.style.display = "none";
        return;
    }
    
    container.style.display = "grid";
    noResults.style.display = "none";
    loadingSpinner.style.display = "none";
    
    // د هرې کارت لپاره ځنډیدونکی انیمیشن
    container.innerHTML = filtered.map((course, index) => `
        <div class="course-card" style="animation-delay: ${index * 0.05}s">
            <div class="course-image">
                <i class="${course.icon}"></i>
                <span class="course-level">${course.level}</span>
            </div>
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description.substring(0, 100)}${course.description.length > 100 ? '...' : ''}</p>
                <div class="course-meta">
                    <span><i class="fas fa-video"></i> ${course.lessons} lessons</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                <div class="course-rating">
                    <div class="stars">
                        ${generateStars(course.rating)}
                    </div>
                    <span class="rating-count">(${course.reviews} reviews)</span>
                </div>
                <div class="course-footer">
                    <div class="course-price">
                        ${course.price === 0 ? 'FREE' : `$${course.price}`}
                        ${course.originalPrice > 0 ? `<span>$${course.originalPrice}</span>` : ''}
                    </div>
                    <a href="${course.url}" target="_blank" class="course-btn">
                        Start Learning <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join("");
}

// ==================== د ستورو تولید ====================
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
    
    return stars;
}

// ==================== فلټر تنظیمول ====================
function setupFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("searchInput");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            displayCourses();
        });
    });
    
    searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value;
        displayCourses();
    });
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

// ==================== بیک ته ټاپ ====================
function setupBackToTop() {
    const backBtn = document.getElementById("backToTop");
    
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

// ==================== پیل ====================
document.addEventListener("DOMContentLoaded", () => {
    displayCourses();
    setupFilters();
    setupMobileMenu();
    setupBackToTop();
});