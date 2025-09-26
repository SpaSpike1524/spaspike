// Lista de productos
const productos = [
  { nombre: "Aceite Esencial", precio: 12.99, categoria: "Aromaterapia", img: "img/aceite.jpg" },
  { nombre: "Velas Aromáticas", precio: 9.99, categoria: "Aromaterapia", img: "img/velas.jpg" },
  { nombre: "Difusor de Aromas", precio: 29.99, categoria: "Aromaterapia", img: "img/difusor.jpg" },

  { nombre: "Crema Hidratante", precio: 15.50, categoria: "Cuidado Facial", img: "img/crema.jpg" },
  { nombre: "Mascarilla Facial", precio: 8.75, categoria: "Cuidado Facial", img: "img/mascarilla.jpg" },
  { nombre: "Exfoliante Natural", precio: 11.00, categoria: "Cuidado Facial", img: "img/exfoliante.jpg" },

  { nombre: "Sales de Baño", precio: 7.25, categoria: "Relajación", img: "img/sales.jpg" },
  { nombre: "Té Herbal", precio: 5.99, categoria: "Relajación", img: "img/herbal.jpg" },
  { nombre: "Manta Relajante", precio: 18.00, categoria: "Relajación", img: "img/manta.jpg" },

  { nombre: "Aceite de Masaje", precio: 14.20, categoria: "Masajes", img: "img/aceitemasaje.jpg" },
  { nombre: "Rodillo Masajeador", precio: 21.99, categoria: "Masajes", img: "img/rodillo.jpg" },
  { nombre: "Piedras Calientes", precio: 19.50, categoria: "Masajes", img: "img/piedras.jpg" },

  { nombre: "Smoothie Detox", precio: 6.40, categoria: "Bebidas Saludables", img: "img/smoothie.jpg" },
  { nombre: "Té Verde", precio: 4.20, categoria: "Bebidas Saludables", img: "img/teverde.jpg" },
  { nombre: "Agua Infusionada", precio: 3.80, categoria: "Bebidas Saludables", img: "img/agua.jpg" },
];

// Contenedor principal
const contenedor = document.getElementById("contenedor-productos");
const buscarInput = document.getElementById("buscar");
const categoriaSelect = document.getElementById("categoria");

// Renderizar productos
function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  // Agrupar por categorías
  const categorias = [...new Set(lista.map(p => p.categoria))];

  categorias.forEach(cat => {
    const seccion = document.createElement("section");
    seccion.classList.add("productos-seccion");
    seccion.innerHTML = `<h2>${cat}</h2>`;

    const grid = document.createElement("div");
    grid.classList.add("productos-grid");

    lista
      .filter(p => p.categoria === cat)
      .forEach(p => {
        const card = document.createElement("div");
        card.classList.add("producto-card");
        card.innerHTML = `
          <img src="${p.img}" alt="${p.nombre}">
          <h3>${p.nombre}</h3>
          <p class="precio">$${p.precio.toFixed(2)}</p>
          <button>Agregar al carrito</button>
        `;
        grid.appendChild(card);
      });

    seccion.appendChild(grid);
    contenedor.appendChild(seccion);
  });
}

// Filtro dinámico
function filtrar() {
  const texto = buscarInput.value.toLowerCase();
  const categoria = categoriaSelect.value;

  const filtrados = productos.filter(p => {
    const coincideTexto = p.nombre.toLowerCase().includes(texto);
    const coincideCategoria = categoria === "todos" || p.categoria === categoria;
    return coincideTexto && coincideCategoria;
  });

  mostrarProductos(filtrados);
}

// Eventos
buscarInput.addEventListener("input", filtrar);
categoriaSelect.addEventListener("change", filtrar);

// Inicializar
mostrarProductos(productos);
