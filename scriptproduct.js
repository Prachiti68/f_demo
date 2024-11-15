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
  const scroller = document.getElementById('scroller');
  let scrollSpeed = 1; // Adjust the speed as needed

  // Duplicate content for seamless scrolling
  scroller.innerHTML += scroller.innerHTML;

  // Use setInterval to move the scroller continuously
  setInterval(() => {
    scroller.scrollLeft += scrollSpeed;

    // Reset the scroll position to create an infinite loop
    if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
      scroller.scrollLeft = 0;
    }
  }, 20); // Adjust the interval for smoothness and speed

  // Optional: Pause scrolling on hover
  scroller.addEventListener('mouseenter', () => {
    scrollSpeed = 0;
  });

  scroller.addEventListener('mouseleave', () => {
    scrollSpeed = 1; // Resume scrolling when the mouse leaves
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




  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        // Add mobile view style: Remove padding and disable vertical scroll
        makeTableResponsive();
    } else {
        // Revert to the standard layout for larger screens
        revertTableLayout();
    }
});

function makeTableResponsive() {
    const table = document.querySelector("#responsive-table");
    const cells = table.querySelectorAll("td");
    
    // Disable vertical scrolling for mobile view
    table.style.overflowY = "hidden"; 

    // Remove padding for mobile view
    cells.forEach(cell => {
        cell.style.padding = "0"; // Remove padding for mobile
    });
}

function revertTableLayout() {
    const table = document.querySelector("#responsive-table");
    const cells = table.querySelectorAll("td");

    // Revert back to default padding
    cells.forEach(cell => {
        cell.style.padding = "0.5rem"; // Reset padding to default
    });

    // Re-enable vertical scroll for larger screens
    table.style.overflowY = "auto";
}


function showSection(sectionId) {
  const popupSection = document.getElementById(sectionId);
  const overlay = document.getElementById("overlay");

  // Toggle popup visibility
  popupSection.style.display = "block";
  setTimeout(() => {
    popupSection.querySelector('.popup-card').classList.add('active');
  }, 10);
  overlay.style.display = "block"; 
}

 // Initialize Swiper for the main carousel---- product scroller --------------------------------------
 const mainSwiper = new Swiper('.main-carousel', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Initialize Swiper for the modal carousel
let modalSwiper;
const initModalSwiper = () => {
  modalSwiper = new Swiper('.modal-carousel', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

// Open the modal when an image is clicked
document.querySelectorAll('.modal-trigger').forEach((image, index) => {
  image.addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'flex';
    if (!modalSwiper) {
      initModalSwiper();
    }
    modalSwiper.slideTo(index, 0, false); 
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});

document.getElementById('imageModal').addEventListener('click', (e) => {
  if (e.target.id === 'imageModal') {
    document.getElementById('imageModal').style.display = 'none';
  }
});

 document.addEventListener('DOMContentLoaded', function () {
    const buttonLink = document.getElementById('scroll-to-form-link'); // The button link
    const formSection = document.getElementById('request-callback'); // The form section
    const nameInput = document.getElementById('name'); // The "Name" input field

    buttonLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Scroll to the form smoothly
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // After scrolling, focus on the "Name" input field
      setTimeout(function () {
        nameInput.focus(); // Focus the "Name" input field
      }, 500); // Wait 500ms to ensure scroll completion
    });
  });