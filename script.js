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
