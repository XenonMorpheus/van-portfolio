// DOM Elements
const navbar = document.querySelector(".navbar")
const mobileMenuButton = document.querySelector(".mobile-menu-button")
const mobileNav = document.querySelector(".mobile-nav")
const themeToggle = document.querySelector(".theme-toggle")
const themeToggleMobile = document.querySelector(".theme-toggle-mobile")
const body = document.body
const currentYearElement = document.getElementById("current-year")
const contactForm = document.getElementById("contact-form")
const animatedElements = document.querySelectorAll(".animate-on-scroll")

// Set current year in footer
currentYearElement.textContent = new Date().getFullYear()

// Theme Toggle
function toggleTheme() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    localStorage.setItem("theme", "light")
    themeToggleMobile.textContent = "Dark Mode"
  } else {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
    localStorage.setItem("theme", "dark")
    themeToggleMobile.textContent = "Light Mode"
  }
}

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
    themeToggleMobile.textContent = "Dark Mode"
  } else {
    body.classList.add("dark-mode")
    themeToggleMobile.textContent = "Light Mode"
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  mobileNav.classList.toggle("open")
}

// Scroll Events
function handleScroll() {
  // Navbar background on scroll
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Animate elements on scroll
  animatedElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight * 0.8) {
      element.classList.add("visible")
    }
  })
}

// Contact Form Submission
function handleFormSubmit(e) {
  e.preventDefault()
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  console.log("Form submitted:", { name, email, message })
  alert("Thank you for your message! This is a demo form.")

  contactForm.reset()
}

// Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  initTheme()
  handleScroll() // Initial check for elements in view
})

window.addEventListener("scroll", handleScroll)
themeToggle.addEventListener("click", toggleTheme)
themeToggleMobile.addEventListener("click", toggleTheme)
mobileMenuButton.addEventListener("click", toggleMobileMenu)

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", toggleMobileMenu)
})

// Contact form submission
if (contactForm) {
  contactForm.addEventListener("submit", handleFormSubmit)
}

