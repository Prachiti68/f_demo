// Product definition
const products = [
    {
      title: "Track Line Press",
      imageUrl: "assets/img/products/tracklinepress/TLP 4.jpg",
      link: "track-line-press.html",
      buttonText: "LEARN MORE"
    },
    {
      title: "Nut Buster",
      imageUrl: "assets/img/products/Nutbuster/3.jpg",
      link: "Nut-Buster.html",
      buttonText: "LEARN MORE"
    },
    {
      title: "Electric Torque Wrench",
      imageUrl: "assets/img/products/Roller Conveyer Table/RGT2.jpg",
      link: "Electronic-Torque-Wrench.html",
      buttonText: "LEARN MORE"
    },
    {
      title: "Track Winder",
      imageUrl: "assets/img/products/Trackwinder/TrackWinder-3.jpg",
      link: "Track-Winder.html",
      buttonText: "LEARN MORE"
    },
    {
      title: "Roller Conveyor Table",
      imageUrl: "assets/img/products/ElectricTorqueWrench/ETW 1.jpg",
      link: "Roller-Conveyor-Table.html",
      buttonText: "LEARN MORE"
    },
    {
      title: "Cylinder Honing",
      imageUrl: "assets/img/products/Cylinder Honing/CH2.jpg",
      link: "Cylinder-honing-station.html",
      buttonText: "LEARN MORE"
    }
  ];
  
  let data = "";
  
  products.forEach((product) => {
    data += `
  <div class="bg-white p-8 shadow-2xl border transition-all duration-300 hover:p-9 custom-border-radius"
     style="background-image:linear-gradient(rgba(0, 0, 0, 0.227),rgba(0, 0, 0, 0.24)), url('${product.imageUrl}'); background-size: cover; background-position: center; display: flex; flex-direction: column; justify-content: flex-end; height: 20rem;">
  <a href="${product.link}" class="flex justify-center items-center flex-col">
  <h2 class="text-xl font-extrabold text-white  mb-2">${product.title}</h2>
    <button
          type="button"
          class="border rounded px-6 text-sm py-2 border-red-800 focus:outline-none text-white focus:ring focus:ring-red-900 bg-red-600  ease-in"
        >${product.buttonText}</button>
  </a>
</div>



    `;
  });
  
  document.querySelector('.productsec').innerHTML = data;
  