// Handles your frontend UI logic.
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.querySelector(".add-button");
  const minusButton = document.querySelector(".minus-button");

  addButton.addEventListener('click', (e) => {
    console.log('addButton clicked');
  });

  minusButton.addEventListener('click', (e) => {
    console.log('minusButton clicked');
  });
});
