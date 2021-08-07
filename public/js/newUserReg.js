const newUser = document.querySelector("#userName").nodeValue.trim();
const userEmail = document.querySelector("#email").nodeValue.trim();
const userPW = document.querySelector("#password").nodeValue.trim();

const newUserRegHandler = async (event) => {
  event.preventDefault();
  if (newUser && userEmail && userPW) {
    const newUserStore = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ newUser, userEmail, userPW }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(newUserStore);

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to register");
    }
  }
};

document
  .querySelector(".newUserReg")
  .addEventListener("submit", newUserRegHandler);
