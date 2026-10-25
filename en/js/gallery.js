document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".photo-link");

  const viewer = document.createElement("div");
  viewer.className = "gallery-viewer";

  viewer.innerHTML = `
    <div class="gallery-window">
      <button class="gallery-close">×</button>
      <img src="" alt="">
    </div>
  `;

  document.body.appendChild(viewer);

  const image = viewer.querySelector("img");
  const close = viewer.querySelector(".gallery-close");

  links.forEach(link => {
    link.addEventListener("click", () => {
      image.src = link.dataset.image;
      image.alt = link.textContent.trim();
      viewer.classList.add("active");
    });
  });

  close.addEventListener("click", () => {
    viewer.classList.remove("active");
    image.src = "";
  });

  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
      viewer.classList.remove("active");
      image.src = "";
    }
  });
});