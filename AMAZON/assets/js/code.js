document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: "iPhone 15",
            description: "La Dynamic Island ti mostra notifiche e attività in tempo reale.",
            imageUrl: "https://m.media-amazon.com/images/I/61eEYLATF9L._AC_UL320_.jpg",
            price: 699,
            detailsPage: "iphine15.html"
        },
        {
            id: 2,
            name: "Redmi Note 11S",
            description: "Xiaomi Redmi Note 11S - Smartphone 6+128GB, Display AMOLED 6.43” 90Hz FHD+, MediaTek Helio G96, fotocamera professionale 108MP, 5000mAh, Graphite Grey (versione IT + 2 anni di garanzia)",
            imageUrl: "https://m.media-amazon.com/images/I/51ot8lqm2oL._AC_UL320_.jpg",
            price: 299,
            detailsPage: "redmi-11-s.html"
        },
        {
            id: 3,
            name: "Galaxy A25 5G",
            description: "FHD+, 6GB RAM, 128GB, memoria interna espandibile fino a 1TB, Batteria 5.000 mAh, Blue Black [Versione Italiana]",
            imageUrl: "https://m.media-amazon.com/images/I/517nciSYadL._AC_UL320_.jpg",
            price: 349,
            detailsPage: "samusng-galaxy.html"
        }
    ];

    const productGrid = document.querySelector('.product-grid');

    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <button class="edit-btn" data-id="${product.id}">Modifica</button>
                <a href="${product.detailsPage}" class="details-btn" data-id="${product.id}">Scopri di più</a>
            `;

            productGrid.appendChild(productCard);
        });
    }

    renderProducts();

    productGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const productId = e.target.getAttribute('data-id');
            alert(`Modifica prodotto con ID: ${productId}`);
        }
    });
});
