import { PROJECTS_DATA } from './projectsData.js';

// Render AI & RAG projects into the existing projects container
const container = document.getElementById('projects-container');
if (container) {
  const aiProjects = PROJECTS_DATA.filter(p => p.category === 'ai');
  aiProjects.forEach((p) => {
    const card = document.createElement('div');
    card.className = `projects__content mix ai`;

    card.innerHTML = `
      <div class="projects__card">
        <div class="projects__img">
          <div class="projects__placeholder" style="height:200px;display:flex;align-items:center;justify-content:center;font-size:2rem;">🤖</div>
        </div>
        <div class="projects__data">
          <h3 class="projects__title">${p.title}</h3>
          <p class="projects__description">${p.description}</p>
          <div class="projects__technologies">${(p.technologies||[]).slice(0,4).map(t=>`<span class="projects__tech">${t}</span>`).join('')}</div>
          <div class="projects__metrics">
            ${p.metrics ? Object.keys(p.metrics).slice(0,3).map(k => `
              <div class="projects__metric">
                <span class="projects__metric-value">${p.metrics[k]}</span>
                <span>${k}</span>
              </div>
            `).join('') : ''}
          </div>
          <div class="projects__links">
            ${p.liveUrl ? `<a href="${p.liveUrl}" class="projects__button"><i class="bx bx-link-external"></i> Live Demo</a>` : ''}
            ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="projects__button"><i class="bx bxl-github"></i> GitHub</a>` : ''}
          </div>
        </div>
      </div>
    `;

    // Append at the top so new projects are visible first
    container.prepend(card);
  });
}

// Ensure filter buttons recognise the new category
document.addEventListener('DOMContentLoaded', () => {
  const aiFilter = document.querySelector('.projects__item[data-filter=".ai"]');
  if (aiFilter) aiFilter.addEventListener('click', () => {
    const projectItems = document.querySelectorAll('.projects__content');
    projectItems.forEach((project) => {
      if (project.classList.contains('ai')) {
        project.style.display = 'block';
        project.style.opacity = '1';
      } else {
        project.style.display = 'none';
        project.style.opacity = '0';
      }
    });
  });
});
