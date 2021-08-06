const loginBtn = document.getElementById(".loginBtn");
const dashBtn = document.getElementById(".dashboardBtn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/login");
});

dashBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/dashboard");
});
