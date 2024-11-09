(function() {
  // Product data
  const products = [
    { title: "Track Line Press", imageUrl: "assets/img/products/tracklinepress/TLP 4.jpg", link: "track-line-press.html", buttonText: "LEARN MORE" },
    { title: "Nut Buster", imageUrl: "assets/img/products/Nutbuster/3.jpg", link: "Netbuster.html", buttonText: "LEARN MORE" },
    { title: "Electric Torque Wrench", imageUrl: "assets/img/products/Roller Conveyer Table/RGT2.jpg", link: "electrictorquewrencher.html", buttonText: "LEARN MORE" },
    { title: "Track Winder", imageUrl: "assets/img/products/Trackwinder/TrackWinder-3.jpg", link: "trackwinder.html", buttonText: "LEARN MORE" },
    { title: "Roller Conveyor Table", imageUrl: "assets/img/products/ElectricTorqueWrench/ETW 1.jpg", link: "rollerconveyartable.html", buttonText: "LEARN MORE" },
    { title: "Cylinder Honing", imageUrl: "assets/img/products/Cylinder Honing/CH2.jpg", link: "cylinderhoningstation.html", buttonText: "LEARN MORE" },
    { title: "Product 7", imageUrl: "assets/img/products/7.jpg", link: "product7.html", buttonText: "LEARN MORE" },
    { title: "Product 8", imageUrl: "assets/img/products/8.jpg", link: "product8.html", buttonText: "LEARN MORE" },
    { title: "Product 9", imageUrl: "assets/img/products/9.jpg", link: "product9.html", buttonText: "LEARN MORE" },
    { title: "Product 10", imageUrl: "assets/img/products/10.jpg", link: "product10.html", buttonText: "LEARN MORE" }
  ];

  let displayedProducts = 6; 
  let data = "";

  function displayProducts() {
    data = "";
    
    for (let i = 0; i < displayedProducts; i++) {
      if (i < products.length) {
        data += `
        <div class="bg-white p-8 shadow-2xl border transition-all duration-300 hover:p-9 custom-border-radius"
          style="background-image:linear-gradient(rgba(0, 0, 0, 0.227),rgba(0, 0, 0, 0.24)), url('${products[i].imageUrl}'); background-size: cover; background-position: center; display: flex; flex-direction: column; justify-content: flex-end; height: 20rem;">
          <a href="${products[i].link}" class="flex justify-center items-center flex-col">
            <h2 class="text-xl font-extrabold text-white mb-2">${products[i].title}</h2>
            <button type="button" class="border rounded px-6 text-sm py-2 border-red-800 focus:outline-none text-white focus:ring focus:ring-red-900 bg-red-600 ease-in">
              ${products[i].buttonText}
            </button>
          </a>
        </div>
        `;
      }
    }
    
    document.querySelector('.productsec').innerHTML = data;
    
    if (displayedProducts < products.length) {
      document.getElementById('viewMoreBtn').classList.remove('hidden');
      document.getElementById('viewMoreBtn').textContent = 'View More';
    } else {
      document.getElementById('viewMoreBtn').textContent = 'View Less';
    }
  }
  
  displayProducts();
  
  document.getElementById('viewMoreBtn').addEventListener('click', () => {
    if (displayedProducts < products.length) {
      displayedProducts += 6;  
    } else {
      displayedProducts = 6;  
    }
    displayProducts(); 
  });
})();
