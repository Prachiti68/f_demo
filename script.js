// dropdown menu ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const about = document.getElementById('about');
const contact = document.getElementById('contact');
const aboutDropdown = document.getElementById('aboutDropdown');
const contactDropdown = document.getElementById('contactDropdown');

about.addEventListener('mouseenter', () => {
  aboutDropdown.classList.remove('hidden');
});
about.addEventListener('mouseleave', () => {
  aboutDropdown.classList.add('hidden');
});
aboutDropdown.addEventListener('mouseenter', () => {
  aboutDropdown.classList.remove('hidden');
});
aboutDropdown.addEventListener('mouseleave', () => {
  aboutDropdown.classList.add('hidden');
});

contact.addEventListener('mouseenter', () => {
  contactDropdown.classList.remove('hidden');
});
contact.addEventListener('mouseleave', () => {
  contactDropdown.classList.add('hidden');
});
contactDropdown.addEventListener('mouseenter', () => {
  contactDropdown.classList.remove('hidden');
});
contactDropdown.addEventListener('mouseleave', () => {
  contactDropdown.classList.add('hidden');
});

//product filteration===============================================================================================

(function() {
  const products = [
    { name: 'Track Line Press', category: 'master-pin-pusher', imgSrc: 'assets/img/products/tracklinepress/TrackLink Press.png' },
    { name: 'Electric Torque Wrench', category: 'undercarriage-repair', imgSrc: 'assets/img/products/ElectricTorqueWrench/Electric Torque Wrench.png' },
    { name: 'Cylinder Honing Station', category: 'hydraulic-cylinder-repair', imgSrc: 'assets/img/products/Cylinder Honing/CH3-removebg.png' },
    { name: 'Roller Conveyer Table', category: 'undercarriage-repair', imgSrc: 'assets/img/products/Roller Conveyer Table/RGT2-removebg.png' },
    { name: 'Nut Buster', category: 'hydraulic-cylinder-repair', imgSrc: 'assets/img/products/Nutbuster/Nutbuster.png' },
    { name: 'Tyre Handling', category: 'tyre-handling', imgSrc: 'assets/img/Comming Soon.png', isComingSoon: true },
    { name: 'Hydraulic Repair', category: 'hydraulic-repair', imgSrc: 'assets/img/Comming Soon.png', isComingSoon: true },
    { name: 'Trackwinder', category: 'undercarriage-repair', imgSrc: 'assets/img/products/Trackwinder/Trackwinder.png' }
  ];

  const categories = ['all', 'undercarriage-repair', 'hydraulic-cylinder-repair', 'master-pin-pusher', 'hydraulic-repair', 'tyre-handling'];

  // Generate Filter Buttons
  const filterButtonsContainer = document.getElementById('filter-buttons');
  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
    button.classList.add('filter-btn', 'px-4', 'py-2', 'rounded-md', 'hover:bg-red-500', 'border-dashed', 'border-2', 'border-[#d30704]');
    button.dataset.category = category;
    button.addEventListener('click', () => filterProducts(category));
    filterButtonsContainer.appendChild(button);
  });

  // Function to render products
  function renderProducts(filter = 'all') {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear previous products

    const filteredProducts = filter === 'all'
      ? products.filter(product => !product.isComingSoon) // Hide "Coming Soon" in "All" category
      : products.filter(product => {
          if (product.isComingSoon && product.category === filter) {
            return true; // Show "Coming Soon" product in its specific category
          }
          return product.category === filter && !product.isComingSoon; // Show regular products in specific categories
        });

    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product-item', product.category, 'w-full', 'sm:w-1/2', 'lg:w-1/3', 'xl:w-1/4', 'p-4', 'rounded-lg', 'shadow-md');

      const img = document.createElement('img');
      img.src = product.imgSrc;
      img.alt = product.name;
      img.classList.add('w-full', 'rounded-md', 'mb-4');
      img.loading = 'lazy';

      const name = document.createElement('p');
      name.classList.add('font-semibold', 'text-center');
      name.textContent = product.name;

      productDiv.appendChild(img);
      productDiv.appendChild(name);
      productGrid.appendChild(productDiv);
    });
  }

  // Function to filter products
  function filterProducts(category) {
    renderProducts(category);
  }

  // Initial render
  renderProducts();
})();



// mob drop 
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
function toggleDropdown() {
  const dropdown = document.getElementById('mobiledrop');
  // Toggle the visibility of the dropdown menu
  dropdown.classList.toggle('hidden');
}

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
