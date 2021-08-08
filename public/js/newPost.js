const postBlog = document.getElementById("postBlogBtn");

const newPostHandler = async (event) => {
  event.preventDefault();
  const postTitle = document.getElementById("postTitle").value.trim();
  const postContent = document.getElementById("postContent").value.trim();
  console.log(postTitle, postContent);
};

document
  .querySelector(".newPostForm")
  .addEventListener("submit", newPostHandler);
