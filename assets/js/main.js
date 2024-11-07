

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  /**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}

// Swiper and Isotope should be initialized first
window.addEventListener('load', function() {
  initSwiper();
  aosInit(); // Initialize AOS only once after everything else
});


  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


//===============================whatsappp==============================//
// script.js
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

//===============================   Blogs   ==============================//
// Initialize Swiper
var swiper = new Swiper(".blog-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    // Responsive settings
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});


//========================products==================================//
document.addEventListener("DOMContentLoaded", function () {
  // Loop through each Swiper instance
  const swiperSliders = document.querySelectorAll('.portfolio-details-slider');

  swiperSliders.forEach((swiper, index) => {
    // Generate a unique gallery ID based on the index
    const galleryID = `gallery-${index}`;

    // Get all the images inside the current Swiper slider
    const swiperImages = swiper.querySelectorAll('.swiper-slide img');
    
    swiperImages.forEach((img) => {
      // Get the src of each image
      const imgSrc = img.getAttribute('src');

      // Create an anchor element and set it to use Fancybox with the unique gallery ID
      const anchor = document.createElement('a');
      anchor.setAttribute('href', imgSrc);
      anchor.setAttribute('data-fancybox', galleryID); // Use unique gallery ID here
      anchor.setAttribute('data-caption', img.alt); // Optionally add a caption
      anchor.appendChild(img.cloneNode(true)); // Clone the image inside anchor

      // Replace the image with the anchor
      img.parentNode.replaceChild(anchor, img);
    });
  });

  // Initialize Fancybox (this may be necessary if the library doesn't auto-initialize)
  Fancybox.bind("[data-fancybox]");
});





document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");

  // Check if the device is a touch device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Function to play/pause video on hover for non-touch devices (desktop)
  if (!isTouchDevice) {
    serviceItems.forEach(item => {
      const video = item.querySelector("video");
      item.addEventListener("mouseenter", () => video.play());
      item.addEventListener("mouseleave", () => video.pause());
    });
  }

  // For touch devices (mobile/tablet), use IntersectionObserver to play video on scroll
  if (isTouchDevice) {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5 // 50% of the video should be visible to play
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector("video");
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, options);

    serviceItems.forEach(item => {
      observer.observe(item);
    });
  }
});


document.getElementById("technical-specs-btn").addEventListener("click", function () {
  document.getElementById("technical-specs").style.display = "block";
  document.getElementById("request-callback").style.display = "none";
});

document.getElementById("request-callback-btn").addEventListener("click", function () {
  document.getElementById("technical-specs").style.display = "none";
  document.getElementById("request-callback").style.display = "block";
});





// brocher page popup 

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

function closePopup() {
  const popupSection = document.getElementById('request-callback');
  const overlay = document.getElementById("overlay");

  popupSection.querySelector('.popup-card').classList.remove('active');
  setTimeout(() => {
    popupSection.style.display = "none";
    overlay.style.display = "none"; 
  }, 500);
}


// ...closePopup


function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Show a success alert
  alert('Form submitted successfully!');

  // Create a text file with form data
  const fileContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`;
  const blob = new Blob([fileContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  // Create a link element to trigger download
  const a = document.createElement('a');
  a.href = 'assets/docs/FixomechDesignTempletes.pdf';
  a.download = '';
  document.body.appendChild(a);
  a.click();

  // Clean up and remove the link
  setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
  }, 1000);

  // Reset the form
  document.getElementById('contactForm').reset();
}
