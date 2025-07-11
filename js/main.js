/*=============== ENHANCED MAIN JS WITH DYNAMIC DATA ===============*/

/*===== SHOW MENU =====*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader() {
  const header = document.querySelector(".header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*===== SHOW SCROLL UP =====*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*===== PROJECT FILTERING (Optional) =====*/
// const projectsItems = document.querySelectorAll(".projects__item");
// const projectsContents = document.querySelectorAll(".projects__content");

// projectsItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     // remove current active
//     projectsItems.forEach((i) => i.classList.remove("active-project"));
//     item.classList.add("active-project");

//     let filterValue = item.getAttribute("data-filter");
//     projectsContents.forEach((content) => {
//       if (filterValue === "all") {
//         content.style.display = "block";
//       } else {
//         if (content.classList.contains(filterValue.substring(1))) {
//           content.style.display = "block";
//         } else {
//           content.style.display = "none";
//         }
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const skillHeaders = document.querySelectorAll(".skills__header");

  skillHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const parent = this.parentElement;

      // Toggle active class to expand/collapse
      parent.classList.toggle("skills__open");

      // Close other skill sections (optional)
      // skillHeaders.forEach((otherHeader) => {
      //   if (otherHeader !== this) {
      //     otherHeader.parentElement.classList.remove("skills__open");
      //   }
      // });
    });
  });
});

function animateSkills() {
  const skillsSection = document.getElementById("skills");
  const skillsContents = document.querySelectorAll(".skills__content");

  if (!skillsSection) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 } // Trigger animation when 30% of the section is visible
  );

  skillsContents.forEach((content) => observer.observe(content));
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", animateSkills);

/*===== PROJECT FILTERING =====*/
document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".projects__item");
  const projectItems = document.querySelectorAll(".projects__content");

  filterItems.forEach((item) => {
    item.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");
      
      // Remove active class from all filter items
      filterItems.forEach((filterItem) => {
        filterItem.classList.remove("active-project");
      });
      
      // Add active class to clicked item
      this.classList.add("active-project");
      
      // Filter projects
      projectItems.forEach((project) => {
        if (filterValue === "all") {
          project.style.display = "block";
          project.style.opacity = "1";
        } else {
          const categoryClass = filterValue.substring(1); // Remove the dot
          if (project.classList.contains(categoryClass)) {
            project.style.display = "block";
            project.style.opacity = "1";
          } else {
            project.style.display = "none";
            project.style.opacity = "0";
          }
        }
      });
    });
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    console.log("hello");
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !email || !message || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    sendMail(name, email, phone, message);
  });

function sendMail(name, email, phone, message) {
  // Collect form data
  const formData = {
    service_id: "service_pdpcyn4", // Replace with your EmailJS Service ID
    template_id: "template_0e5pdgr", // Replace with your EmailJS Template ID
    user_id: "hSJAXiSH4M8XZaN87", // Replace with your EmailJS Public Key
    template_params: {
      name: name, // Matches {{name}}
      email: email,
      phone: phone, // Matches {{time}}, formatted date/time
      message: message, // Matches {{message}}
    },
  };

  // Send request to EmailJS API
  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      } else {
        alert("Error sending message. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}

// Resume Download Functionality


document
  .getElementById("cv-download")
  .addEventListener("click", function (event) {
    // Optional: You can remove preventDefault if you want native download behavior
    // If you keep it, manually trigger the download via location.href
    event.preventDefault(); 
    window.location.href = "../assets/files/resume.pdf";
  });


// document
//   .getElementById("cv-download")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default anchor behavior

//     // Generate dynamic resume content
//     generateAndDownloadResume();
//   });

function generateAndDownloadResume() {
  try {
    // Check if resume file exists, if not generate a dynamic one
    const resumeData = {
      name: "Vinayak Chiluka",
      title: "Senior Principal Engineer | Distributed Systems Engineer",
      email: "chilukavinayak.p@gmail.com",
      phone: "+91 84249 49070",
      location: "Hyderabad, Telangana, India",
      linkedin: "https://www.linkedin.com/in/chilukavinayak/",
      github: "https://github.com/chilukavinayak",
      portfolio: "https://vinayak-chiluka.me/",
      summary: "Distinguished Principal Software Engineer with 9+ years architecting fault-tolerant, high-throughput distributed systems at enterprise scale. Expert in AWS cloud architecture, microservices, and platform engineering.",
      experience: [
        {
          position: "Senior Principal Software Engineer",
          company: "Wissen Technology",
          duration: "Aug 2024 - Present",
          achievements: [
            "Architected multi-tenant IoT platforms processing 1M+ events/day",
            "Led zero-downtime RDS migrations for 50+ production databases",
            "Achieved 30% cost optimization through intelligent resource management"
          ]
        }
      ],
      skills: [
        "Java (Spring Boot/Cloud) - Expert",
        "AWS Cloud Architecture - Certified Professional", 
        "Kubernetes & Docker - Advanced",
        "Microservices & Distributed Systems - Expert",
        "DevOps & Infrastructure as Code - Advanced"
      ]
    };

    // Create a simple text-based resume content
    const resumeContent = createResumeContent(resumeData);
    
    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "Vinayak_Chiluka_Resume.txt"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Clean up
    URL.revokeObjectURL(url);
    
    console.log("Resume downloaded successfully");
  } catch (error) {
    console.error("Error generating resume:", error);
    
    // Fallback: Try to download from assets if available
    const fallbackUrl = "./assets/files/Resume.pdf";
    const a = document.createElement("a");
    a.href = fallbackUrl;
    a.download = "Vinayak_Chiluka_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

function createResumeContent(data) {
  return `
VINAYAK CHILUKA
${data.title}

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}
LinkedIn: ${data.linkedin}
GitHub: ${data.github}
Portfolio: ${data.portfolio}

PROFESSIONAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.summary}

KEY ACHIEVEMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Architected systems handling 10,000+ RPS with 99.99% uptime
• Led critical infrastructure migrations with zero downtime
• Consistently achieved 25-30% cost reduction across AWS environments
• Built fault-tolerant IoT platforms processing 1M+ events daily
• Reduced MTTR by 40% through advanced observability implementations

CORE TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.skills.map(skill => `• ${skill}`).join('\n')}

PROFESSIONAL EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.experience.map(exp => `
${exp.position} | ${exp.company}
${exp.duration}

Key Achievements:
${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}
`).join('\n')}

CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• AWS Certified Solutions Architect - Professional (2024)
• AWS Certified Solutions Architect - Associate (2023)

EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
B.Tech in Electronics & Communication Engineering
JNTU Hyderabad | 2024 | GPA: 7.2/10

Generated on: ${new Date().toLocaleDateString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();
}

/*===== BLOG READ MORE FUNCTIONALITY =====*/
function toggleBlogContent(button) {
  const article = button.closest('.blog__content');
  const details = article.querySelector('.blog__details');
  const buttonText = button.querySelector('.blog__button-text');
  const icon = button.querySelector('.blog__icon');
  
  if (article.classList.contains('blog__content--expanded')) {
    // Collapse
    article.classList.remove('blog__content--expanded');
    buttonText.textContent = 'Read More';
    icon.classList.remove('bx-up-arrow-alt');
    icon.classList.add('bx-right-arrow-alt');
  } else {
    // Expand
    article.classList.add('blog__content--expanded');
    buttonText.textContent = 'Read Less';
    icon.classList.remove('bx-right-arrow-alt');
    icon.classList.add('bx-up-arrow-alt');
  }
}
