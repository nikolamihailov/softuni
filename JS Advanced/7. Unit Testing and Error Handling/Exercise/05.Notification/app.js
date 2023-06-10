function notify(message) {
  const div = document.getElementById("notification");
  div.textContent = message;
  div.style.display = "block";
  div.style.cursor = "pointer";
  div.addEventListener("click", () => { div.style.display = "none"; });
}