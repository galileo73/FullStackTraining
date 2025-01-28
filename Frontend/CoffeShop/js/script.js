// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden');
    
    // Update menu icon
    const menuIcon = menuButton.querySelector('i');
    menuIcon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
    lucide.createIcons();
});

// Featured products data
const products = [
    {
        title: "Caramel Latte",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800",
        price: "£3.85"
    },
    {
        title: "Flat White",
        image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800",
        price: "£3.25"
    },
    {
        title: "Mocha",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800",
        price: "£3.95"
    }
];

// Populate featured products
const featuredProductsContainer = document.getElementById('featuredProducts');
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'bg-white rounded-lg shadow-md overflow-hidden';
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover" />
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900">${product.title}</h3>
            <p class="mt-2 text-gray-600">${product.price}</p>
            <button class="mt-4 w-full bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800">
                Add to Cart
            </button>
        </div>
    `;
    featuredProductsContainer.appendChild(productElement);
});

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();