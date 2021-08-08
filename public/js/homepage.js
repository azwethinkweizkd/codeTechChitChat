const logoutBtn = document.getElementById(".logoutBtn");
const dashBtn = document.getElementById("dashboardBtn");
const homeBtn = document.querySelector(".homeBtn");

homeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/homepage");
});
dashBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/dashboard");
});
// logoutBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   document.location.replace("/login");
// });
