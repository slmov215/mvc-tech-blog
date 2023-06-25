let blogPost = window.location.pathname.split("/");

// Allows user to edit blog posts from the blogPost page
const submitEdit = async (event) => {
  event.preventDefault();
  const title = document.getElementById("titleInput").value;
  const description = document.getElementById("bodyInput").value;

  if (title && description) {
    const response = await fetch(`/api/blog/${blog[2]}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.assign("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

const submitButton = document.getElementById("submitEdit");
// Function created allowing user to edit blog posts from the individual blog post page
const editPost = async (event) => {
  event.preventDefault();
  console.log("clicked me");

  // get text and trim whitespace
  const comment_body = document.getElementById("editBtn").value.trim();

  console.log(blogPost);

  document.location.assign(`/create/${blog[2]}`);
};

const editButton = document.querySelectorAll("#editBtn");

// Iterates over all buttons on the page allowing for edit functionality
for (let i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener("click", editPost);
}

// Function created allowing user to delete blog posts from the individual blog post page
const deletePostHandler = async (event) => {
  event.preventDefault();
  console.log("clicked me");
  console.log(event.target);

  let blogPost = window.location.pathname.split("/");
  console.log(blogPost);

  const response = await fetch(`/api/blog/${blog[2]}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.assign(`/dashboard`);
  } else {
    alert(response.statusText);
  }
};

const deleteButton = document.querySelectorAll("#deleteBtn");

// Iterates over all buttons on the page allowing for delete functionality
for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", deletePostHandler);
}




// Event Listener
submitButton.addEventListener("submit", submitEdit);
