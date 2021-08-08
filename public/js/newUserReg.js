const newUserRegHandler = async (event) => {
  event.preventDefault();
  const newUser = document.getElementById("userName").value.trim();
  const userEmail = document.getElementById("email").value.trim();
  const userPW = document.getElementById("password").value.trim();
  if (newUser && userEmail && userPW) {
    const newUserStore = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ newUser, userEmail, userPW }),
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
