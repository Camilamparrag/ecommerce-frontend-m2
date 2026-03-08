# ecommerce-frontend-m2
lección final modulo 2

# DIAROMAS - E-commerce de Aromatizantes Premium 🧺✨

**Diaromas** es una tienda en línea moderna y minimalista especializada en esencias y aromatizantes. El proyecto destaca por una estética limpia basada en una paleta de colores **café, crema y blanco**, diseñada para transmitir sensaciones de pulcritud, calidez y naturaleza.

## 🚀 Tecnologías Utilizadas

* **HTML5 Semántico:** Estructura clara utilizando etiquetas como `header`, `nav`, `main`, `section`, `article` y `footer`.
* **Bootstrap 5:** Sistema de grilla responsiva (Mobile-first), componentes (Navbar, Cards, Offcanvas, Badges) y utilidades de espaciado.
* **JavaScript (ES6):** Manipulación dinámica del DOM, manejo de eventos, gestión de estado simple y uso de `URLSearchParams`.
* **LocalStorage:** Persistencia básica de los productos en el carrito de compras.
* **CSS3 Personalizado:** Estilos específicos para la paleta de colores café y efectos de transición.

## 🛠️ Funcionalidades

1.  **Página de Inicio (Home):**
    * Grilla de productos generada dinámicamente desde un arreglo de objetos en JS.
    * Botón de acceso rápido para agregar al carrito.
    * Botón "Ver detalles" para acceder a la ficha técnica de cada producto.
2.  **Página de Detalle:**
    * Carga dinámica de información (imagen, nombre, precio y descripción) basada en el ID del producto en la URL.
    * Opción de agregar al carrito directamente desde la ficha.
3.  **Carrito de Compras (Simulado):**
    * Panel lateral (Offcanvas) que muestra la lista de productos seleccionados.
    * Contador en tiempo real en la Navbar.
    * Cálculo automático del total de la compra en Pesos Chilenos (CLP).
    * Posibilidad de eliminar productos individualmente.
4.  **Diseño Responsivo:**
    * Optimizado para dispositivos móviles (≤ 420px) y pantallas de escritorio (≥ 1024px).

## 📂 Estructura del Proyecto

```text
├── README.md
├── index.html          # Página principal (Home)
├── producto.html       # Ficha de detalle de producto
├── assets/
│   ├── css/
│   │   └── styles.css  # Estilos personalizados café/crema
│   ├── js/
│   │   └── main.js    # Lógica de renderizado y carrito
│   └── img/            # Recursos visuales (Logos y Productos)