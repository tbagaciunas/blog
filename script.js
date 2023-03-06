

const blogForm = document.getElementById('blog-form');
const blogPosts = document.getElementById('blog-posts');

function renderBlogPost(post) {
  const blogPost = document.createElement('div');
  blogPost.innerHTML = `
    <div class="blog-container">
      <div class="blog-header">
        <div class="blog-cover">
      
          
        </div>
      </div>
      <div class="blog-body">
        <div class="blog-title">
          <h1><a href="#">${post.title}</a></h1>
        </div>
        <div class="blog-summary">
          <p>${post.paragraph}</p>
        </div>
      </div>
      <div class="blog-footer">
        <ul>
          <li class="published-date">Just now</li>
          <li class="delete-btn" data-post-id="${post.id}">Delete</li>
        </ul>
      </div>
    </div>
  `;
  blogPosts.appendChild(blogPost);


  const blogCover = blogPost.querySelector('.blog-cover');
  blogCover.style.backgroundImage = `url('${post.imageUrl}')`;
}

blogForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const paragraph = document.getElementById('paragraph').value;
  const imageUrl = document.getElementById('image-url').value;
  console.log('title:', title);
  console.log('paragraph:', paragraph);
  console.log('imageUrl:', imageUrl);

  fetch('https://testapi.io/api/tomas1089/resource/blog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      paragraph,
      imageUrl
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('data:', data);
    renderBlogPost(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});


fetch('https://testapi.io/api/tomas1089/resource/blog')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      renderBlogPost(post);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });


blogPosts.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const postId = e.target.dataset.postId;
    fetch(`https://testapi.io/api/tomas1089/resource/blog/${postId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log('data:', data);
      const blogPost = e.target.closest('.blog-container');
      blogPosts.removeChild(blogPost);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
});

// login

// Hide  blog 
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.blog-container').style.display = 'none';
  document.querySelector('#blog-form').style.display = 'none';
});

//  event listener 
document.querySelector('.login-form button').addEventListener('click', function() {
  // Hide the login page
  document.querySelector('.login-page').style.display = 'none';
  
  // Show the blog content and form
  document.querySelector('.blog-container').style.display = 'block';
  document.querySelector('#blog-form').style.display = 'block';
});

let isLoggedIn = false;

// Hide  blog 
if (!isLoggedIn) {
  document.querySelector('.blog-container').style.display = 'none';
  document.querySelector('#blog-form').style.display = 'none';
}

//  event listener 
document.querySelector('.login-form button').addEventListener('click', function(event) {
 
  event.preventDefault();

 
  document.querySelector('.login-page').style.display = 'none';


  document.querySelector('.blog-container').style.display = 'block';
  document.querySelector('#blog-form').style.display = 'block';


  isLoggedIn = true;
});
// login
