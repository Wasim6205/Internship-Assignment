var button = document.getElementById("hero_btn");

button.addEventListener("click", function () {
  if (button.textContent === "Leave Group") {
    button.textContent = "Join Group";
  } else {
    button.textContent = "Leave Group";
  }
});
