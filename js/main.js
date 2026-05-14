
// ==================== د کورسونو ډاټا (د مستقیم لینکونو سره) ====================
const courses = [
    {
        id: 1,
        title: "HTML & CSS Masterclass",
        description: "Learn HTML5 and CSS3 from scratch. Build modern, responsive websites.",
        icon: "fab fa-html5",
        lessons: 45,
        duration: "8 hours",
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G",
        color: "#e34c26"
    },
    {
        id: 2,
        title: "JavaScript Complete Course",
        description: "Master JavaScript with ES6+, DOM manipulation, APIs, and projects.",
        icon: "fab fa-js",
        lessons: 60,
        duration: "7 hours",
        url: "https://youtu.be/PkZNo7MFNFg",
        color: "#f7df1e"
    },
    {
        id: 3,
        title: "React.js Modern Course",
        description: "Build modern web apps with React Hooks, Router, Context API, and Redux.",
        icon: "fab fa-react",
        lessons: 50,
        duration: "15 hours",
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
        color: "#61dafb"
    },
    {
        id: 4,
        title: "Node.js & Express",
        description: "Build backend APIs, authentication, databases, and deploy apps.",
        icon: "fab fa-node",
        lessons: 40,
        duration: "10 hours",
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp",
        color: "#339933"
    },
    {
        id: 5,
        title: "MySQL Database",
        description: "Learn SQL, database design, joins, subqueries, and optimization.",
        icon: "fas fa-database",
        lessons: 35,
        duration: "4.5 hours",
        url: "https://youtu.be/9ylj9NR0Lcg",
        color: "#4479a1"
    },
    {
        id: 6,
        title: "MongoDB & Mongoose",
        description: "NoSQL database, CRUD operations, aggregation, and modeling.",
        icon: "fas fa-leaf",
        lessons: 30,
        duration: "6 hours",
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA",
        color: "#4db33d"
    },
    {
        id: 7,
        title: "Tailwind CSS",
        description: "Build modern, responsive UIs fast with utility-first CSS framework.",
        icon: "fab fa-css3-alt",
        lessons: 25,
        duration: "5 hours",
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw",
        color: "#06b6d4"
    },
    {
        id: 8,
        title: "Full Stack Web Development",
        description: "Complete MERN stack course with real projects and deployment.",
        icon: "fas fa-laptop-code",
        lessons: 100,
        duration: "40 hours",
        url: "https://youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE",
        color: "#6366f1"
    }
];

// ==================== د تیستیمونیلونو ډاټا ====================
const testimonials = [
    {
        name: "Mohammad Karim",
        role: "Frontend Developer",
        text: "The best web development courses I've ever taken! Everything is explained clearly.",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        name: "Fatima Noori",
        role: "Full Stack Student",
        text: "I learned React and Node.js in just 2 months. Highly recommended for beginners!",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    {
        name: "Omar Sadat",
        role: "Software Engineer",
        text: "Amazing content with practical projects. The support is also great!",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    }
];

// ==================== د کورسونو ښودل ====================
function displayCourses() {
    const container = document.getElementById("coursesGrid");
    if (!container) return;
    
    container.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-img" style="background: linear-gradient(135deg, ${course.color}, ${course.color}dd);">
                <i class="${course.icon}"></i>
            </div>
            <div class="course-info">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fas fa-video"></i> ${course.lessons} lessons</span>
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                </div>
                <a href="${course.url}" target="_blank" class="course-btn">
                    <i class="fas fa-play"></i> Start Learning →
                </a>
            </div>
        </div>
    `).join("");
}

// ==================== د تیستیمونیلونو ښودل ====================
function displayTestimonials() {
    const container = document.getElementById("testimonialsGrid");
    if (!container) return;
    
    container.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <i class="fas fa-quote-left"></i>
            <p>${t.text}</p>
            <h4>${t.name}</h4>
            <span>${t.role}</span>
        </div>
    `).join("");
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

// ==================== د سکرول فعال لینک ====================
function setupActiveLink() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
}

// ==================== پیل ====================
document.addEventListener("DOMContentLoaded", () => {
    displayCourses();
    displayTestimonials();
    setupMobileMenu();
    setupActiveLink();
});