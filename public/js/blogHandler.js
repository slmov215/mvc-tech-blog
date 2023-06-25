// Function set up so users can create new blog posts
async function newPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#titleInput").value.trim();
  const description = document.querySelector("#bodyInput").value.trim();

  if (title && description) {
    const response = await fetch(`/api/blog`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

// Function that allows users to post comments to blog posts
async function newCommentHandler(event) {
  event.preventDefault();

  console.log("clicked me");

  // get text and trim whitespace
  const comment_body = document.getElementById("comment").value.trim();
  // get post id from URL
  const url = window.location.toString().split("/");
  const blogPost_id = url[url.length - 1];

  if (comment_body) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        blogPost_id,
        comment_body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

// Event Listener
document
  .querySelector(".createBlogPost")
  .addEventListener("submit", newPostHandler);
  
console.log(document.getElementById("comment-form"));
document
  .getElementById("comment-form")
  .addEventListener("submit", newCommentHandler);