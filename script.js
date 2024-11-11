// dropdown menu ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Select the dropdown trigger and dropdown menu
const productsMenu = document.getElementById('contact');
const productsDropdown = document.getElementById('contactDropdown');

// Show dropdown on mouseenter
productsMenu.addEventListener('mouseenter', function () {
  productsDropdown.classList.remove('hidden');
});

// Keep dropdown open when hovering over the dropdown itself
productsDropdown.addEventListener('mouseenter', function () {
  productsDropdown.classList.remove('hidden');
});

// Hide dropdown when leaving the dropdown area
productsDropdown.addEventListener('mouseleave', function () {
  productsDropdown.classList.add('hidden');
});

// Hide dropdown when leaving the menu item
productsMenu.addEventListener('mouseleave', function () {
  productsDropdown.classList.add('hidden');
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

