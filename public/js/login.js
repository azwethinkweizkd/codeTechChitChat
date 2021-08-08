const registerBtn = document.querySelector(".registerBtn");

const loginFormHandler = async (event) => {
  event.preventDefault();
  const loginEmail = document.getElementById("emailLogin").value.trim();
  const loginPW = document.getElementById("passwordLogin").value.trim();
  console.log(loginEmail, loginPW);
  if (loginEmail && loginPW) {
    const login = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ loginEmail, loginPW }),
      headers: { "Content-Type": "application/json" },
    });

    if (login.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to log in");
    }
  }
};

registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.location.replace("/register");
});

document
  .querySelector(".loginForm")
  .addEventListener("submit", loginFormHandler);
