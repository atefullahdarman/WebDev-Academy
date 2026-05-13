// ==================== والیډیشن فنکشنونه ====================

// د نوم والیډیشن
function validateName(name) {
    if (!name || name.trim() === "") {
        return "Please enter your full name";
    }
    if (name.length < 3) {
        return "Name must be at least 3 characters";
    }
    if (name.length > 50) {
        return "Name must be less than 50 characters";
    }
    if (!/^[a-zA-Z\s\u0600-\u06FF]+$/.test(name)) {
        return "Name can only contain letters";
    }
    return "";
}

// د ایمیل والیډیشن
function validateEmail(email) {
    if (!email || email.trim() === "") {
        return "Please enter your email address";
    }
    const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address (e.g., name@example.com)";
    }
    return "";
}

// د تلیفون والیډیشن (اختیاري)
function validatePhone(phone) {
    if (phone && phone.trim() !== "") {
        const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
        if (!phoneRegex.test(phone)) {
            return "Please enter a valid phone number";
        }
    }
    return "";
}

// د موضوع والیډیشن
function validateSubject(subject) {
    if (!subject || subject === "") {
        return "Please select a subject";
    }
    return "";
}

// د پیغام والیډیشن
function validateMessage(message) {
    if (!message || message.trim() === "") {
        return "Please enter your message";
    }
    if (message.length < 10) {
        return "Message must be at least 10 characters";
    }
    if (message.length > 1000) {
        return "Message must be less than 1000 characters";
    }
    return "";
}

// ==================== د فورمې والیډیشن ====================
function validateForm() {
    let isValid = true;
    
    // نوم
    const name = document.getElementById("fullName").value;
    const nameError = validateName(name);
    const nameErrorDiv = document.getElementById("nameError");
    const nameInput = document.getElementById("fullName");
    
    if (nameError) {
        nameErrorDiv.textContent = nameError;
        nameErrorDiv.classList.add("show");
        nameInput.classList.add("error");
        isValid = false;
    } else {
        nameErrorDiv.classList.remove("show");
        nameInput.classList.remove("error");
    }
    
    // ایمیل
    const email = document.getElementById("email").value;
    const emailError = validateEmail(email);
    const emailErrorDiv = document.getElementById("emailError");
    const emailInput = document.getElementById("email");
    
    if (emailError) {
        emailErrorDiv.textContent = emailError;
        emailErrorDiv.classList.add("show");
        emailInput.classList.add("error");
        isValid = false;
    } else {
        emailErrorDiv.classList.remove("show");
        emailInput.classList.remove("error");
    }
    
    // تلیفون (اختیاري)
    const phone = document.getElementById("phone").value;
    const phoneError = validatePhone(phone);
    const phoneErrorDiv = document.getElementById("phoneError");
    const phoneInput = document.getElementById("phone");
    
    if (phoneError) {
        phoneErrorDiv.textContent = phoneError;
        phoneErrorDiv.classList.add("show");
        phoneInput.classList.add("error");
        isValid = false;
    } else {
        phoneErrorDiv.classList.remove("show");
        phoneInput.classList.remove("error");
    }
    
    // موضوع
    const subject = document.getElementById("subject").value;
    const subjectError = validateSubject(subject);
    const subjectErrorDiv = document.getElementById("subjectError");
    const subjectInput = document.getElementById("subject");
    
    if (subjectError) {
        subjectErrorDiv.textContent = subjectError;
        subjectErrorDiv.classList.add("show");
        subjectInput.classList.add("error");
        isValid = false;
    } else {
        subjectErrorDiv.classList.remove("show");
        subjectInput.classList.remove("error");
    }
    
    // پیغام
    const message = document.getElementById("message").value;
    const messageError = validateMessage(message);
    const messageErrorDiv = document.getElementById("messageError");
    const messageInput = document.getElementById("message");
    
    if (messageError) {
        messageErrorDiv.textContent = messageError;
        messageErrorDiv.classList.add("show");
        messageInput.classList.add("error");
        isValid = false;
    } else {
        messageErrorDiv.classList.remove("show");
        messageInput.classList.remove("error");
    }
    
    return isValid;
}

// ==================== فورمه سپارل ====================
function setupContactForm() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
    
    if (!form) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // د فورمې ډاټا راټولول
            const formData = {
                name: document.getElementById("fullName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value,
                newsletter: document.getElementById("newsletter").checked,
                date: new Date().toISOString()
            };
            
            console.log("Form submitted:", formData);
            
            // بریالیتوب پیغام ښکاره کول
            successMessage.style.display = "block";
            
            // فورمه پاکول
            form.reset();
            
            // ۵ ثانیې وروسته بریالیتوب پیغام پټول
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
            
            // اختیاري: دلته تاسو کولی شئ ډاټا سرور ته واستوئ
            // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
        }
    });
}

// ==================== انپټ فیلډونو کې ریښتینی والیډیشن ====================
function setupLiveValidation() {
    const inputs = [
        { id: "fullName", validate: validateName, errorId: "nameError" },
        { id: "email", validate: validateEmail, errorId: "emailError" },
        { id: "phone", validate: validatePhone, errorId: "phoneError" },
        { id: "subject", validate: validateSubject, errorId: "subjectError" },
        { id: "message", validate: validateMessage, errorId: "messageError" }
    ];
    
    inputs.forEach(input => {
        const element = document.getElementById(input.id);
        if (element) {
            element.addEventListener("input", () => {
                const error = input.validate(element.value);
                const errorDiv = document.getElementById(input.errorId);
                if (error) {
                    errorDiv.textContent = error;
                    errorDiv.classList.add("show");
                    element.classList.add("error");
                } else {
                    errorDiv.classList.remove("show");
                    element.classList.remove("error");
                }
            });
            
            element.addEventListener("blur", () => {
                const error = input.validate(element.value);
                const errorDiv = document.getElementById(input.errorId);
                if (error && element.value) {
                    errorDiv.textContent = error;
                    errorDiv.classList.add("show");
                    element.classList.add("error");
                } else {
                    errorDiv.classList.remove("show");
                    element.classList.remove("error");
                }
            });
        }
    });
}

// ==================== FAQ ٹوګل ====================
function setupFaq() {
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
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
            const emailInput = document.getElementById("newsletterEmail");
            const email = emailInput?.value;
            
            if (email && validateEmail(email) === "") {
                alert(`✅ Thank you for subscribing! We'll send updates to ${email}`);
                newsletterForm.reset();
            } else if (email) {
                alert("❌ Please enter a valid email address");
            }
        });
    }
}
// ==================== پیل ====================
document.addEventListener("DOMContentLoaded", () => {
    setupContactForm();
    setupLiveValidation();
    setupFaq();
    setupMobileMenu();
    setupBackToTop();
    setupNewsletter();
});