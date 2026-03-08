const productos = [
    {
        id: 1,
        nombre: "Vainilla Bourbon",
        precio: 25.00,
        img: "assets/img/Gemini_Generated_Image_va0lfeva0lfeva0l (1).png",
        descripcion: "Una mezcla cálida y cremosa con notas amaderadas."
    },
    {
        id: 2,
        nombre: "Sándalo & Café",
        precio: 28.00,
        img: "assets/img/Gemini_Generated_Image_va0lfeva0lfeva0l (2).png",
        descripcion: "Esencia rústica perfecta para bibliotecas y estudios."
    },
    {
        id: 3,
        nombre: "Lino Blanco",
        precio: 22.00,
        img: "assets/img/Gemini_Generated_Image_va0lfeva0lfeva0l.png",
        descripcion: "Frescura pura que evoca sábanas recién lavadas."
    }
];

let carrito = JSON.parse(localStorage.getItem('cart')) || [];

function renderHome() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;

    grid.innerHTML = productos.map(p => `
        <article class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 product-card shadow-sm">
                <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
                <div class="card-body text-center">
                    <h5 class="fw-bold">${p.nombre}</h5>
                    <p class="text-muted fw-bold">$${p.precio.toFixed(2)}</p>
                    <div class="d-grid gap-2">
                        <button onclick="addToCart(${p.id})" class="btn btn-diaromas">Agregar</button>
                        <a href="producto.html?id=${p.id}" class="btn btn-outline-diaromas btn-sm">Ver detalles</a>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

function addToCart(id) {
    const p = productos.find(item => item.id === id);
    carrito.push(p);
    localStorage.setItem('cart', JSON.stringify(carrito));
    updateCounter();
}

function updateCounter() {
    const countLabel = document.getElementById('cart-count');
    if(countLabel) countLabel.innerText = carrito.length;
}

document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    updateCounter();
});