const logoutBtn = document.getElementById("logoutBtn");
const dashBtn = document.getElementById("dashboardBtn");
const homeBtn = document.getElementById("homeBtn");

homeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/homepage");
});
dashBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/dashboard");
});
logoutBtn.addEventListener(
  "click",
  (logout = (event) => {
    event.preventDefault();
    await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (logout.ok) {
      document.location.replace("/");
    } else {
      alert(logout.statusText);
    }
  })
);
