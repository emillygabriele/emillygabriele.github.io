document.querySelector(".menu-abrir").onclick =
function() {
  document.documentElement.classList.add("menu-ativo");
  console.log("Menu ativado");
};
document.querySelector(".menu-fechar").onclick =
function() {
  document.documentElement.classList.remove("menu-ativo");
  console.log("Menu desativado");

};
