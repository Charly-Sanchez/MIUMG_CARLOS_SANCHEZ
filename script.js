function toggle(element) {
  const nextUL = element.nextElementSibling;
  if (nextUL && nextUL.tagName === "UL") {
    nextUL.style.display = nextUL.style.display === "none" ? "block" : "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const uls = document.querySelectorAll(".mindmap ul ul");
  uls.forEach(ul => ul.style.display = "none");
});

function sumar() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  if (!isNaN(n1) && !isNaN(n2)) {
    document.getElementById("resultado").innerText = `Resultado: ${n1 + n2}`;
  } else {
    document.getElementById("resultado").innerText = "Por favor ingrese números válidos.";
  }
}
