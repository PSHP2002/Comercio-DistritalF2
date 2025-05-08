document.addEventListener("DOMContentLoaded", () => {
  const pageIndicator = document.getElementById("pageIndicator");
  const paginationButtons = document.querySelectorAll(".pagination-button");
  let currentPage = 1;

  paginationButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (btn.id === "prevPage" && currentPage > 1) {
        currentPage--;
      } else if (btn.id === "nextPage" && currentPage < 9) {
        currentPage++;
      } else if (btn.hash) {
        currentPage = parseInt(btn.hash.replace("#", ""));
      }

      updatePagination();
    });
  });

  function updatePagination() {
    pageIndicator.textContent = `Página ${currentPage}`;
    paginationButtons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`a[href="#${currentPage}"]`);
    if (activeBtn) activeBtn.classList.add("active");
  }

  updatePagination(); // Inicial
});
