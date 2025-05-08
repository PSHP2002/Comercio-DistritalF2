const usuario = document.getElementById("usuario");
const dropdown = document.getElementById("dropdown");
const temaToggle = document.getElementById(" temaToggle");

usuario.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display ==
    "block" ? "none": "block";
});


document.addEventListener("click", function(e) {
   if(!usuario.contains(e.target)){
    dropdown.style.display = "none";
   }

});