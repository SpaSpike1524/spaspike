
// Opciones de búsqueda
const pages = [
  { name: "Masajes", url: "masajes.html" },
  { name: "Terapia", url: "terapia.html" },
  { name: "Sala de Yoga", url: "yoga.html" },
  { name: "Venta de Productos", url: "productos.html" }
];

const searchInput = document.getElementById("search");
const resultsContainer = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  resultsContainer.innerHTML = "";

  if (query.length > 0) {
    const filtered = pages.filter(page =>
      page.name.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      resultsContainer.style.display = "block";
      filtered.forEach(page => {
        const link = document.createElement("a");
        link.textContent = page.name;
        link.href = page.url; // 🔗 Enlace a la página
        resultsContainer.appendChild(link);
      });
    } else {
      resultsContainer.style.display = "none";
    }
  } else {
    resultsContainer.style.display = "none";
  }
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    resultsContainer.style.display = "none";
  }
});


// Botón "Leer más"
document.getElementById("more-btn").addEventListener("click", () => {
  alert("En Spa Serenity trabajamos cada día para que encuentres el equilibrio perfecto entre cuerpo, mente y espíritu.");
});
