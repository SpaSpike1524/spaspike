document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleInfo");
  const extraInfo = document.getElementById("extraInfo");

  toggleBtn.addEventListener("click", () => {
    if (extraInfo.classList.contains("oculto")) {
      extraInfo.classList.remove("oculto");
      toggleBtn.textContent = "Ocultar detalles";
    } else {
      extraInfo.classList.add("oculto");
      toggleBtn.textContent = "Ver más detalles";
    }
  });
});