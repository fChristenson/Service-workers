(async () => {
  const ul = document.querySelector("[data-js=notifications]");
  const snackbar = document.querySelector("[data-js=snackbar]");
  const loadMessagesButton = document.querySelector("[data-js=load-messages]");

  if (!ul) throw new Error("couldn't find [data-js=notifications]");
  if (!snackbar) throw new Error("couldn't find [data-js=snackbar]");
  if (!loadMessagesButton)
    throw new Error("couldn't find [data-js=load-messages]");

  const res = await fetch("http://localhost:3000/notifications");
  const json = await res.json();

  json.forEach(e => {
    const li = document.createElement("li");
    li.textContent = e.text;
    ul.appendChild(li);
  });

  loadMessagesButton.addEventListener("click", e => {
    snackbar.classList.toggle("snackbar--show");
  });

  setTimeout(() => {
    snackbar.classList.toggle("snackbar--show");
  }, 2000);
})();
