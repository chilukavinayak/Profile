document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  const projectFiltersContainer = document.getElementById("project__filters");

  if (!container || !projectFiltersContainer) {
    console.error("Error: Required DOM elements not found.");
    return;
  }

  // Function to filter and display projects
  const filterProjects = (filterValue, projects) => {
    console.log("filterValue:", filterValue);

    // Remove active class from all items and set active for selected filter
    document
      .querySelectorAll(".projects__item")
      .forEach((i) => i.classList.remove("active-project"));
    const activeItem = [...document.querySelectorAll(".projects__item")].find(
      (i) => i.getAttribute("data-filter") === `.${filterValue}`
    );
    if (activeItem) activeItem.classList.add("active-project");

    // Clear the container before appending new content
    container.innerHTML = "";

    const filteredProjects = projects.filter(
      (project) =>
        project.category.split(" ").includes(filterValue) ||
        filterValue === "all"
    );

    container.innerHTML = filteredProjects
      .map(
        (project) => `
            <div class="projects__content ${project.category}">
              <div class="projects__img-box">
                <img src="${project.imgSrc}" alt="${project.title}" />
              </div>
              <h3 class="projects__title">${project.title}</h3>
              <p class="projects__description">${project.description}</p>
              <a href="#" class="projects__button">
                View Details <i class="bx bx-right-arrow-alt projects__icon"></i>
              </a>
            </div>
          `
      )
      .join("");
  };

  // Load JSON dynamically
  fetch("./../constants/constants.json")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load JSON");
      return response.json();
    })
    .then((data) => {
      if (!data.projects) throw new Error("Missing 'projects' key in JSON");
      if (!data.categories) throw new Error("Missing 'categories' key in JSON");

      // Populate the filter buttons dynamically
      projectFiltersContainer.innerHTML = data.categories
        .map((item) => {
          //   const formattedItem = item.charAt(0).toUpperCase() + item.slice(1);
          return `<div class="projects__item" data-filter=".${item}">${item.toUpperCase()}</div>`;
        })
        .join("");

      // Re-select projectItems after adding them dynamically
      const projectsItems = document.querySelectorAll(".projects__item");

      // Attach event listeners dynamically
      projectsItems.forEach((item) => {
        item.addEventListener("click", () => {
          let filterValue = item
            .getAttribute("data-filter")
            .replace(/^[.#]/, "");
          filterProjects(filterValue, data.projects);
        });
      });

      // Set default filter to "all"
      filterProjects("all", data.projects);
    })
    .catch((error) => console.error("Error loading projects:", error));
});
