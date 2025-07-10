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

document
  .getElementById("cv-download")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Set the file URL dynamically
    const fileUrl = "./../assets/files/Profile.pdf";
    console.log("fileurl:", fileUrl);

    // Create a temporary link to trigger the download
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Vinayak_Chiluka_CV.pdf"; // Specify the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
