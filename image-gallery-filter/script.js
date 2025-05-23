const buttons = document.querySelectorAll("button");
const images = document.querySelectorAll(".gallery img");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    images.forEach(img => {
      const category = img.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        img.classList.remove("hide");
      } else {
        img.classList.add("hide");
      }
    });
  });
});
