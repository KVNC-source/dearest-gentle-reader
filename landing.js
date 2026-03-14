const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
  document.body.style.transition = "opacity 0.6s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 600);
});
