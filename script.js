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


  document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productItems = document.querySelectorAll(".product-item");
  
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            filterButtons.forEach(btn => btn.classList.remove("bg-red-600", "text-white"));
            button.classList.add("bg-red-600", "text-white");

            productItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.classList.remove("hidden", "animate-fadeOut");
                    item.classList.add("animate-fadeIn");
                } else {
                    item.classList.remove("animate-fadeIn");
                    item.classList.add("animate-fadeOut");
                    setTimeout(() => {
                        item.classList.add("hidden");
                    }, 500); 
                }
            });
        });
    });
});

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
