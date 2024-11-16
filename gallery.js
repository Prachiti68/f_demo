    // Toggle mobile menu
    document.getElementById('mobileMenuButton').addEventListener('click', function() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('hidden');
    });
// Product image data with names
const productImages = {
    "Tracklink_Press": [
        { src: "assets/img/products/tracklinepress/TLP 1.jpg", name: "Track link Press image 1" },
        { src: "assets/img/products/tracklinepress/TLP 2.jpg", name: "Track link Press image 2" },
        { src: "assets/img/products/tracklinepress/TLP 3.jpg", name: "Track link Press image 3" }
    ],
    "Electric_Torque_Wrench": [
        { src: "assets/img/products/ElectricTorqueWrench/ETW 1.jpg", name: "Electric Torque Wrench image 1" },
        { src: "assets/img/products/ElectricTorqueWrench/ETW 2.jpg", name: "Electric Torque Wrench image 2" }
    ],
    "Track_Winder": [
        { src: "assets/img/products/Trackwinder/TrackWinder-3.jpg", name: "Track Winder image 1" }
    ],
    "Roller_Conveyer_Table": [
        { src: "assets/img/products/Roller Conveyer Table/RGT1.jpg", name: "Roller Conveyer Table image 1" },
        { src: "assets/img/products/Roller Conveyer Table/RGT2.jpg", name: "Roller Conveyer Table image 2" }
    ],
    "Nut_Buster": [
        { src: "assets/img/products/Nutbuster/1.jpg", name: "Nut Buster image 1" },
        { src: "assets/img/products/Nutbuster/2.jpg", name: "Nut Buster image 2" },
        { src: "assets/img/products/Nutbuster/3.jpg", name: "Nut Buster image 3" },
        { src: "assets/img/products/Nutbuster/4.jpg", name: "Nut Buster image 4" },
        { src: "assets/img/products/Nutbuster/5.jpg", name: "Nut Buster image 5" },
        { src: "assets/img/products/Nutbuster/6.jpg", name: "Nut Buster image 6" },
        { src: "assets/img/products/Nutbuster/7.jpg", name: "Nut Buster image 7" }
    ],
    "Cylinder_Honing_Station": [
        { src: "assets/img/products/Cylinder Honing/CH1.jpg", name: "Cylinder Honing Station image 1" },
        { src: "assets/img/products/Cylinder Honing/CH2.jpg", name: "Cylinder Honing Station image 2" },
        { src: "assets/img/products/Cylinder Honing/CH3.jpg", name: "Cylinder Honing Station image 3" }
    ],
    "Track_Assembly_Press": [
        { src: "assets/img/products/TrackAssemblyPress/TrackPress-darkbg-compressed.jpeg", name: "Track Assembly Press image 1" },
        { src: "assets/img/products/TrackAssemblyPress/trackassemblygallery.jpeg", name: "Track Assembly Press image 2" },
        { src: "assets/img/products/TrackAssemblyPress/Undercarriagerepair-wholeline-compressed.jpeg", name: "Track Assembly Press image 3" },
        { src: "assets/img/products/TrackAssemblyPress/completeline-UC-compressed.jpeg", name: "Track Assembly Press image 4" }
    ],
    "Hydraulic_Cylinders_Jacks": [
        { src: "assets/img/products/HydraulicCylindersJacks/1 FVPS.jpg", name: "Hydraulic Cylinders (Jacks) image 1" }
        
    ]
};

// Variables to keep track of the current product and image
let currentProductType = "";
let currentImageIndex = 0;

// Function to open the modal with specific product images and names
function openModal(productType, imageIndex) {
    currentProductType = productType;
    currentImageIndex = imageIndex;

    const imageObj = productImages[productType][imageIndex];
    document.getElementById("modalImage").src = imageObj.src;
    document.getElementById("modalImageName").innerText = imageObj.name;

    document.getElementById("imageModal").style.display = "block";
}

// Function to show the next image in the modal
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % productImages[currentProductType].length;
    const imageObj = productImages[currentProductType][currentImageIndex];
    document.getElementById("modalImage").src = imageObj.src;
    document.getElementById("modalImageName").innerText = imageObj.name;
}

// Function to show the previous image in the modal
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + productImages[currentProductType].length) % productImages[currentProductType].length;
    const imageObj = productImages[currentProductType][currentImageIndex];
    document.getElementById("modalImage").src = imageObj.src;
    document.getElementById("modalImageName").innerText = imageObj.name;
}

// Function to close the modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}


function filterSelection(category) {
    const products = document.querySelectorAll(".product-item");

    products.forEach((product) => {
        // Show all products if category is 'all', except those with `hide-in-all` class
        if (category === "all") {
            if (product.classList.contains("hide-in-all")) {
                product.style.display = "none";
            } else {
                product.style.display = "block";
            }
        } else {
            // Show only products that match the selected category
            if (product.classList.contains(category)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        }
    });

    // Update active class for buttons
    const filterButtons = document.querySelectorAll(".filter-button");
    filterButtons.forEach((button) => {
        button.classList.remove("active");
    });
    document.querySelector(`button[onclick="filterSelection('${category}')"]`).classList.add("active");
}


// Initial call to show all products
filterSelection("all");
