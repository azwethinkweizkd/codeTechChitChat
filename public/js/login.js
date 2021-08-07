const registerBtn = document.querySelector(".registerBtn");

registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/register");
});
