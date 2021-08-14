const postBlog = document.getElementById("postBlogBtn");

const newPostHandler = async (event) => {
  event.preventDefault();
  const postTitle = document.getElementById("postTitle").value.trim();
  const postContent = document.getElementById("postContent").value.trim();
  console.log(postTitle, postContent);
  if (postTitle && postContent) {
    const response = await fetch("/api/blog/", {
      method: "POST",
      body: JSON.stringify({ postTitle, postContent }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to create post");
    }
  }
};

document
  .querySelector(".newPostForm")
  .addEventListener("submit", newPostHandler);
