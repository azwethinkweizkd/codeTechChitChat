const newUserRegHandler = async (event) => {
  event.preventDefault();
  const user_name = document.getElementById("userName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  if (password.length < 8) {
    alert("Please make your password more that 8 characters long or more");
    return newUserRegHandler;
  }
  if (user_name && email && password) {
    const newUserStore = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ user_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (newUserStore.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to register");
    }
  }
};

document
  .querySelector(".newUserReg")
  .addEventListener("submit", newUserRegHandler);
