document.getElementById('mobileMenuButton').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the menu
  });


  document.addEventListener("DOMContentLoaded", function () {
const elementsToAnimate = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');

const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('show');  // Add 'show' class to trigger the animation
    observer.unobserve(entry.target);    // Stop observing once animated
  }
});
}, { threshold: 0.1 });  // Adjust threshold if needed

elementsToAnimate.forEach(element => {
observer.observe(element);
});
});
// back to top button
var mybutton = document.getElementById("scrollToTopBtn");


window.onscroll = function() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.classList.add("show");
} else {
    mybutton.classList.remove("show");
}
};

mybutton.onclick = function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
};



// scroller 
document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.getElementById("slider-track");
    const slides = Array.from(document.querySelectorAll(".slide"));
    let slideWidth = slides[0].offsetWidth;
    let currentPosition = 0;
    let scrollInterval;
    let isHovering = false;
    const scrollSpeed = 0.5; // Controls the scroll speed for smoothness
  
    function startScrolling() {
      scrollInterval = setInterval(() => {
        if (!isHovering) {
          currentPosition -= scrollSpeed; // Move by scrollSpeed value for smooth effect
          sliderTrack.style.transform = `translateX(${currentPosition}px)`;
  
          // Check if the first slide has completely moved out of view
          if (Math.abs(currentPosition) >= slideWidth) {
            // Reset the position and move the first slide to the end without causing a jump
            currentPosition = 0;
            sliderTrack.style.transition = "none"; // Disable transition temporarily
  
            // Move the first slide to the end smoothly
            sliderTrack.appendChild(sliderTrack.firstElementChild);
  
            // Reset the transform to the new position, keeping it smooth
            sliderTrack.style.transform = `translateX(${currentPosition}px)`;
  
            // Re-enable transition for smooth scrolling after the change
            sliderTrack.offsetHeight; // Trigger reflow to ensure the transition works
            sliderTrack.style.transition = "transform 0.3s ease-in-out";
          }
        }
      }, 16); // Smooth update rate (approx. 60fps)
    }
  
    function initializeSlider() {
      startScrolling();
  
      // Pause scrolling on hover
      sliderTrack.addEventListener("mouseover", () => {
        isHovering = true;
      });
      sliderTrack.addEventListener("mouseout", () => {
        isHovering = false;
      });
    }
  
    // Recalculate slideWidth on window resize to ensure responsiveness
    window.addEventListener("resize", () => {
      slideWidth = slides[0].offsetWidth;
    });
  
    initializeSlider();
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const phoneNumber = "918884787140";
    const presetMessage = "Hello, I have a question about your services.";
    const encodedMessage = encodeURIComponent(presetMessage);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    console.log("Encoded Message:", encodedMessage); // Log the encoded message
    console.log("WhatsApp Link:", whatsappLink); // Log the generated link

    const whatsappButton = document.querySelector(".whatsapp-button");
    if (whatsappButton) {
        whatsappButton.setAttribute("href", whatsappLink);
    } else {
        console.error("WhatsApp button not found.");
    }
});

   
  // JavaScript to observe when elements enter the viewport
  document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');  // Add 'show' class to trigger the animation
          observer.unobserve(entry.target);    // Stop observing once animated
        }
      });
    }, { threshold: 0.1 });  // Adjust threshold if needed
  
    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });
  

  // products 

  function filterSelection(category) {
    const products = document.querySelectorAll('.product-item');
    const buttons = document.querySelectorAll('.filter-button');

    // Loop through buttons to remove active class and add to the clicked one
    buttons.forEach(button => {
      button.classList.remove('active');
      if (button.innerText.replace(/ /g, '_') === category) {
        button.classList.add('active');
      }
    });

    // Show/hide products based on category and hide-in-all class
    products.forEach(item => {
      if (category === 'all') {
        item.style.display = item.classList.contains('hide-in-all') ? 'none' : 'block';
      } else if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
 
  // JavaScript for modal functionality with navigation
  let currentImageIndex = 0; // Track the index of the current image
  let images = []; // Store all images to navigate

  function openModal(imageSrc, imageName, index) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalImageName = document.getElementById('modalImageName');
    
    // Set the source and name of the modal image
    modalImage.src = imageSrc;
    modalImageName.textContent = imageName;
    
    // Set the current image index
    currentImageIndex = index;

    // Display the modal
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalImage();
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalImage();
  }

  function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const modalImageName = document.getElementById('modalImageName');

    const { src, alt } = images[currentImageIndex];
    modalImage.src = src;
    modalImageName.textContent = alt;
  }

  document.querySelectorAll('.product-item img').forEach((img, index) => {
    images.push({ src: img.src, alt: img.alt }); // Store each image's src and alt
    img.addEventListener('click', function() {
      openModal(this.src, this.alt, index); 
    });
  });