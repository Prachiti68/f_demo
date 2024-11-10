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

