//===============================Blog==============================//
// New variable to track the index of the blog posts to show
let currentIndex = 0;
const postsPerPage = 3;

const additionalBlogPosts = [
  {
    imgSrc: 'assets/img/blog4.jpg',
    category: 'General',
    title: 'How UX Design Can Transform Your Brand',
    link: '#',
    date: 'August 10, 2024',
    readTime: '3 min read'
  },
  {
    imgSrc: 'assets/img/blog5.jpg',
    category: 'Tech News',
    title: 'AI in Marketing: The Next Big Thing',
    link: '#',
    date: 'August 5, 2024',
    readTime: '2 min read'
  },
  {
    imgSrc: 'assets/img/blog6.jpg',
    category: 'Case Study',
    title: 'Designing a User-Friendly E-commerce Experience',
    link: '#',
    date: 'July 30, 2024',
    readTime: '4 min read'
  }
];

// Event listener for "View More" button
document.getElementById('view-more-button').addEventListener('click', function () {
  const container = document.getElementById('blog-posts-container');

  // Determine the end index for the current batch of posts to show
  const endIndex = Math.min(currentIndex + postsPerPage, additionalBlogPosts.length);
  
  // Create HTML for the current batch of blog posts
  let blogPostsHTML = '';
  for (let i = currentIndex; i < endIndex; i++) {
    const post = additionalBlogPosts[i];
    blogPostsHTML += `
      <div class="blog-post row">
          <div class="col-md-4">
              <img src="${post.imgSrc}" alt="${post.title}" class="img-fluid blog-image">
          </div>
          <div class="col-md-8">
              <div class="post-category">
                  <span>${post.category}</span>
              </div>
              <div class="post-title">
                  <h2><a href="${post.link}">${post.title}</a></h2>
                  <small>${post.date} · ${post.readTime}</small>
              </div>
          </div>
      </div>
    `;
  }

  // Append the new blog posts to the container
  container.innerHTML += blogPostsHTML;
  
  // Update the current index
  currentIndex = endIndex;

  // If there are no more posts to show, hide the button
  if (currentIndex >= additionalBlogPosts.length) {
    this.style.display = 'none';
  }
});

