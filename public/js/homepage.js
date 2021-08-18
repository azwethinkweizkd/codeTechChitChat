const dashBtn = document.getElementById("dashboardBtn");
const homeBtn = document.getElementById("homeBtn");
const logoutBtn = document.getElementById("logoutBtn");
const replyBtn = document.querySelector(".replyBtn");
const userReply = document.getElementById("reply");
userReply.addEventListener("change", updateValue);
const header = document.getElementById("myHeader");
let sticky = header.offsetTop;
let replyToPost = "";
function updateValue(e) {
  replyToPost = e.target.value;
}

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

const replyHandler = async (event) => {
  // if (event.target.matches("postBlogBtn")) {
  //   console.log("hello");
  // }

  event.preventDefault();
  const reply = replyToPost;
  const blogId = document.getElementById("postBlogBtn").getAttribute("blogId");

  // console.log(reply, blogId);

  const replyToBlog = await fetch("/api/reply/", {
    method: "POST",
    body: JSON.stringify({ reply, blogId }),
    headers: { "Content-Type": "application/json" },
  });

  if (replyToBlog.ok) {
    document.location.replace("/homepage");
  } else {
    alert("Failed to log in");
  }
};

document.getElementById("replyToBlog").addEventListener("submit", replyHandler);
