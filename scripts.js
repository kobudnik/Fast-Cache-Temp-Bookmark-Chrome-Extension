// Handles your frontend UI logic.
document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector(".link-list");
  const entries = { ...localStorage };
  const webTitles = Object.keys(entries);

  for (let i = 0; i < webTitles.length; i++) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.innerText = webTitles[i];
    link.href = entries[webTitles[i]];
    link.target = "_blank";

    const minusButton = document.createElement("button");
    minusButton.setAttribute("id", `${i}`);
    minusButton.classList.add("minus-button");

    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined", "minus-icon");
    span.innerText = "remove";

    minusButton.appendChild(span);
    listItem.appendChild(link);
    listItem.appendChild(minusButton);
    itemList.appendChild(listItem);

    minusButton.addEventListener("click", (e) => {
      const id = e.target.parentNode.id;
      e.target.parentNode.parentNode.remove();
      localStorage.removeItem(webTitles[id]);
    });
  }

  (async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    const response = await chrome.tabs.sendMessage(tab.id, {
      subject: "DOMInfo",
    });
    return response;
  })().then((response) => {
    const addButton = document.querySelector(".add-button");

    addButton.addEventListener("click", () => {
      localStorage.setItem(response.title, response.location);
      window.location.reload();
    });
  });
});
