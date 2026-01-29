const products = [
    {name: "Bolso de Cuero Premium", category: "Accesorios", price: 289.99, oldPrice: 349.99, badge: "Sale", color: "#d4af37"},
    {name: "Reloj Elegante", category: "Accesorios", price: 459.99, oldPrice: null, badge: "Nuevo", color: "#8b4513"},
    {name: "Gafas de Sol", category: "Accesorios", price: 189.99, oldPrice: 249.99, badge: "Sale", color: "#c9a050"},
    {name: "Chaqueta de Cuero", category: "Moda Hombre", price: 599.99, oldPrice: null, badge: "Nuevo", color: "#2d2d2d"},
    {name: "Vestido Elegante", category: "Moda Mujer", price: 299.99, oldPrice: 399.99, badge: "Sale", color: "#d4af37"},
    {name: "Zapatos Oxford", category: "Calzado", price: 249.99, oldPrice: null, badge: "Nuevo", color: "#8b4513"},
    {name: "Cartera de Diseñador", category: "Accesorios", price: 129.99, oldPrice: 179.99, badge: "Sale", color: "#c9a050"},
    {name: "Camisa de Seda", category: "Moda Mujer", price: 159.99, oldPrice: null, badge: "Nuevo", color: "#d4af37"}
];

function generateProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect fill='${encodeURIComponent(product.color)}' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle' font-family='serif'%3E${encodeURIComponent(product.name)}%3C/text%3E%3C/svg%3E" alt="${product.name}" class="product-image">
                <div class="product-badge">${product.badge}</div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Agregar al Carrito</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.querySelector('.cart-overlay');
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function addToCart(productName, price) {
    alert(`✓ ${productName} agregado al carrito por $${price.toFixed(2)}`);
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
    }
}

function checkout() {
    alert('¡Gracias por tu compra! Redirigiendo al checkout...');
}

document.addEventListener('DOMContentLoaded', function() {
    generateProducts();
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    });
    const observerOptions = {threshold: 0.1, rootMargin: '0px 0px -50px 0px'};
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.product-card, .category-card').forEach(el => {
        observer.observe(el);
    });
});
