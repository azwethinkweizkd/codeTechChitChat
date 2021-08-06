const loginBtn = document.getElementById(".loginBtn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/login");
});
