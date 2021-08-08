const dashBtn = document.getElementById("dashboardBtn");
const homeBtn = document.getElementById("homeBtn");
const logoutBtn = document.getElementById("logoutBtn");

homeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/homepage");
});
dashBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/dashboard");
});

window.onscroll = function () {
  myFunction();
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const logoutFunc = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};
logoutBtn.addEventListener("click", logoutFunc);
