// 1. BASE DE DATOS DE PRODUCTOS
const productos = [
    { id: 1, nombre: "Lino Blanco", precio: 17990, img: "assets/img/Gemini_Generated_Image_va0lfeva0lfeva0l (1).png", descripcion: "Una fragancia fresca y delicada que evoca la pureza de las sábanas recién lavadas secándose al sol. Sus notas limpias y suaves combinan la frescura del algodón con ligeros toques florales y un fondo sutilmente almizclado. Lino Blanco crea un ambiente de calma, orden y bienestar, perfecto para llenar cualquier espacio con una sensación de limpieza, serenidad y confort." },
    { id: 2, nombre: "Madera de Cedro", precio: 17990, img: "assets/img/Gemini_Generated_Image_va0lfeva0lfeva0l (2).png", descripcion: "Una fragancia profunda y elegante que transmite la calidez de la madera natural. Sus notas intensas de cedro evocan la serenidad de un bosque tranquilo, combinadas con matices suaves y ligeramente terrosos que aportan carácter y sofisticación. Madera de Cedro crea un ambiente acogedor, equilibrado y relajante, ideal para quienes buscan una sensación de calma, naturaleza y distinción en cada espacio." },
    { id: 3, nombre: "Ambar del Desierto", precio: 17990, img: "assets/img/Gemini_Generated_Image_va0lfeva0lfeva0l.png", descripcion: "Una fragancia cálida y envolvente que evoca la tranquilidad de los atardeceres en el desierto. Sus notas profundas de ámbar se combinan con suaves matices amaderados y un toque delicadamente dulce, creando una sensación de calidez y sofisticación. Ámbar del Desierto llena el ambiente con una atmósfera acogedora, elegante y misteriosa, perfecta para transformar cualquier espacio en un refugio de calma y bienestar." },
    { id: 4, nombre: "Aires de Altiplano", precio: 15990, img: "assets/img/Aires de altiplano.png", descripcion: "Un aroma fresco y limpio inspirado en la pureza del altiplano. Combina notas herbales y naturales que evocan el viento que recorre las montañas, mezclado con suaves toques de hierbas silvestres y aire puro. Es una fragancia tranquila y revitalizante que transmite libertad, calma y conexión con la naturaleza." },
    { id: 5, nombre: "Brisa de Arica", precio: 15990, img: "assets/img/Brisa de arica.png", descripcion: "Una fragancia ligera y refrescante que captura la esencia del mar y la brisa costera. Sus notas suaves y acuáticas se combinan con delicados toques florales y cítricos, creando un aroma luminoso y relajante que recuerda caminar por la playa con la brisa marina acariciando el aire." },
    { id: 6, nombre: "Sol de Azapa", precio: 15990, img: "assets/img/Sol de Azapa.png", descripcion: "Un aroma cálido y vibrante inspirado en el fértil valle de Azapa. Destacan notas cítricas frescas, combinadas con matices verdes y frutales que evocan limones, olivares y campos bañados por el sol. Es una fragancia alegre, energizante y llena de vitalidad." },
];

// 2. ESTADO DEL CARRITO
let carrito = JSON.parse(localStorage.getItem('diaromas_cart')) || [];

// 3. FUNCIÓN PARA MOSTRAR PRODUCTOS EN INDEX.HTML
function renderHome() {
    const grid = document.getElementById('product-grid');
    if (!grid) return; // Si no estamos en la página de inicio, salimos

    grid.innerHTML = productos.map(p => `
        <article class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 product-card shadow-sm border-0 rounded-4 overflow-hidden">
                <img src="${p.img}" class="card-img-top" alt="${p.nombre}" style="height: 250px; object-fit: cover;">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="fw-bold">${p.nombre}</h5>
                    <p class="text-muted fw-bold">$${p.precio.toLocaleString('es-CL')}</p>
                    <div class="mt-auto d-grid gap-2">
                        <button onclick="addToCart(${p.id})" class="btn btn-diaromas">Agregar</button>
                        <a href="producto.html?id=${p.id}" class="btn btn-outline-diaromas btn-sm">Ver detalles</a>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

// 4. FUNCIÓN PARA MOSTRAR DETALLE EN PRODUCTO.HTML
function cargarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const idParam = parseInt(params.get('id'));
    const p = productos.find(item => item.id === idParam);

    if (p) {
        if(document.getElementById('det-img')) document.getElementById('det-img').src = p.img;
        if(document.getElementById('det-nom')) document.getElementById('det-nom').innerText = p.nombre;
        if(document.getElementById('det-pre')) document.getElementById('det-pre').innerText = `$${p.precio.toLocaleString('es-CL')}`;
        if(document.getElementById('det-desc')) document.getElementById('det-desc').innerText = p.descripcion;
        document.title = `${p.nombre} | Diaromas`;
    }
}

// 5. LÓGICA DEL CARRITO
function addToCart(id) {
    const p = productos.find(item => item.id === id);
    if(p) {
        carrito.push(p);
        localStorage.setItem('diaromas_cart', JSON.stringify(carrito)); // Guardamos
        renderCarritoUI(); // <-- Esta línea es la que dibuja el cambio
    }
}

function addToCartFromDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    if(id) {
        addToCart(id);
        alert("¡Aromatizante añadido!");
    }
}

function removeFromCart(index) {
    carrito.splice(index, 1);
    guardarYActualizar();
}

function guardarYActualizar() {
    localStorage.setItem('diaromas_cart', JSON.stringify(carrito));
    renderCarritoUI();
}

function renderCarritoUI() {
    const countLabel = document.getElementById('cart-count');
    const listaHTML = document.getElementById('lista-carrito');
    const totalLabel = document.getElementById('total-carrito');

    if(countLabel) countLabel.innerText = carrito.length;

    if(listaHTML) {
        if (carrito.length === 0) {
            listaHTML.innerHTML = '<p class="text-center text-muted my-5">Tu bolsa está vacía.</p>';
            if(totalLabel) totalLabel.innerText = "$0";
        } else {
            listaHTML.innerHTML = carrito.map((item, index) => `
                <div class="d-flex align-items-center mb-3 bg-white p-2 rounded shadow-sm border">
                    <img src="${item.img}" width="50" class="rounded me-2">
                    <div class="flex-grow-1">
                        <p class="mb-0 small fw-bold">${item.nombre}</p>
                        <p class="mb-0 small text-muted">$${item.precio.toLocaleString('es-CL')}</p>
                    </div>
                    <button class="btn btn-sm text-danger" onclick="removeFromCart(${index})">✕</button>
                </div>
            `).join('');
            
            const total = carrito.reduce((sum, item) => sum + item.precio, 0);
            if(totalLabel) totalLabel.innerText = `$${total.toLocaleString('es-CL')}`;
        }
    }
}

// 6. INICIALIZACIÓN (ESTO HACE QUE TODO APAREZCA)
document.addEventListener('DOMContentLoaded', () => {
    renderHome();       // Dibuja los productos en index.html
    cargarDetalle();    // Dibuja el producto en producto.html
    renderCarritoUI();  // Actualiza el contador y lista del carrito
});