// Filter projects by category
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    // Show card if category is "all" or if card contains the category class
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
  // Update active button styling
  document.querySelectorAll('.filter-menu button').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter-menu button[onclick*="${category}"]`).classList.add('active');
}

// Animate skill bars when the Skills section is visible
function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) { // section is in viewport
    document.querySelectorAll('.skill-bar .fill').forEach(fill => {
      // If not already animated, expand the bar to its data-percentage or style width
      if (!fill.classList.contains('animate')) {
        fill.classList.add('animate');
      }
    });
  }
}
// Listen for scroll events to trigger skill animation at the right time
window.addEventListener('scroll', animateSkills);

// Optionally, immediately call animateSkills in case Skills section is already in view on load
document.addEventListener('DOMContentLoaded', animateSkills);

// (Optional) Mobile nav toggle – example logic if hamburger menu is present
const navToggle = document.querySelector('.top-nav .toggle-menu');
if(navToggle) {
  navToggle.addEventListener('click', () => {
    document.querySelector('.top-nav ul').classList.toggle('show');
  });
}
