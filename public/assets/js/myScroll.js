const scrollButton = document.getElementById("scrollButton");
const orderPlacementSection = document.getElementById("orderPlacementSection");

scrollButton.addEventListener("click", function () {
  orderPlacementSection.scrollIntoView({ behavior: "smooth" });
});
