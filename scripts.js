// Handles your frontend UI logic.
document.addEventListener('DOMContentLoaded', () => {
  const itemList = document.querySelector(".link-list");
  const addButton = document.querySelector(".add-button");

  const entries = {...localStorage};
  const webTitles = Object.keys(entries);
  const urls = Object.values(entries);

  for (let i = 0; i < webTitles.length; i++) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.innerText = webTitles[i];
    link.href = urls[i];
    link.target = "_blank";
    const button = document.createElement("button");
    button.setAttribute("id", `${i}`);
    button.classList.add("minus-button");
    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined"); 
    span.classList.add("minus-icon");
    span.innerText = 'remove';

    button.appendChild(span);
    listItem.appendChild(link);
    listItem.appendChild(button);
    itemList.appendChild(listItem);

    button.addEventListener('click', (e) => {
      const id = e.target.parentNode.id;
      e.target.parentNode.parentNode.remove();
      localStorage.removeItem(webTitles[id]);
    });
  }

  addButton.addEventListener('click', (e) => {
    console.log('addButton clicked');
  });
});
