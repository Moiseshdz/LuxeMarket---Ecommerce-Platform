Readme · MDCopiarLuxeMarket - Plataforma de Ecommerce 🛍️

📖 Descripción
LuxeMarket es una aplicación web de comercio electrónico moderna inspirada en Magento. Diseñada para ofrecer una experiencia de compra premium con un diseño elegante y funcionalidades completas de carrito de compras.
¿Qué es este proyecto?
Este es un sitio web de ecommerce completamente funcional que puedes usar como:

Plantilla base para tu tienda en línea
Proyecto de aprendizaje para entender HTML, CSS y JavaScript
Portafolio personal para mostrar tus habilidades de desarrollo web
Punto de partida para proyectos más grandes


🚀 Inicio Rápido
Opción 1: Uso Local (Más Fácil)

Descarga el proyecto

bash   # Si tienes Git instalado
   git clone https://github.com/Moiseshdz/LuxeMarket---Ecommerce-Platform.git
   
   # O descarga el ZIP desde GitHub y extráelo

Abre el archivo

Navega a la carpeta ecommerce-magento
Haz doble clic en index.html
¡Listo! El sitio se abrirá en tu navegador predeterminado



Opción 2: Servidor Local (Recomendado para desarrollo)
bash# Si tienes Python instalado
cd ecommerce-magento
python -m http.server 8000

# Si tienes Node.js y npm
npx http-server

# Luego abre: http://localhost:8000
Opción 3: Live Server (VS Code)

Instala la extensión "Live Server" en VS Code
Haz clic derecho en index.html
Selecciona "Open with Live Server"


📦 Estructura del Proyecto
ecommerce-magento/
```text
ecommerce-magento/
├── index.html              # Página principal (punto de entrada)
│   └── Contiene: Header, productos, footer y estructura base
│
├── css/
│   └── styles.css          # Todos los estilos del sitio
│       ├── Variables CSS (colores, fuentes, espaciado)
│       ├── Estilos del header y navegación
│       ├── Diseño de tarjetas de productos
│       ├── Carrito de compras
│       └── Responsive design (móvil, tablet, desktop)
│
├── js/
│   └── main.js             # Toda la funcionalidad JavaScript
│       ├── Datos de productos
│       ├── Lógica del carrito
│       ├── Renderizado dinámico
│       ├── Filtros y búsqueda
│       └── Manejo de eventos
│
├── images/
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── ...
│
├── assets/
│   ├── logos/
│   ├── icons/
│   └── fonts/
│
├── .gitignore              # Archivos ignorados por Git
├── README.md               # Documentación del proyecto
└── LICENSE                 # Licencia MIT
```
🔍 Detalles de cada archivo
index.html

Qué es: La página principal que ves en el navegador
Contiene:

<head>: Meta tags, título, enlaces a CSS
<header>: Logo, menú de navegación, buscador
<main>: Productos, filtros, contenido principal
<footer>: Información de contacto, enlaces legales


Modificar: Cambiar textos, agregar secciones, editar estructura

css/styles.css

Qué es: Archivo de estilos que hace que el sitio se vea bonito
Contiene:

Variables CSS (líneas 1-20): Colores principales
Reset y base (líneas 21-50): Estilos generales
Header (líneas 51-150): Navegación y búsqueda
Products (líneas 151-300): Tarjetas de productos
Cart (líneas 301-400): Diseño del carrito
Responsive (líneas 401+): Adaptación a móviles


Modificar: Cambiar colores, fuentes, tamaños, animaciones

js/main.js

Qué es: El "cerebro" del sitio, hace todo funcional
Contiene:

products[]: Array con todos los productos
cart[]: Productos agregados al carrito
renderProducts(): Muestra productos en pantalla
addToCart(): Agrega productos al carrito
updateCart(): Actualiza contador y total
Event listeners: Clicks, búsquedas, filtros


Modificar: Agregar productos, cambiar precios, nuevas funciones


✨ Características Principales
🎨 Diseño Premium

Interfaz moderna y elegante con degradados y sombras suaves
Tipografía profesional usando fuentes web optimizadas
Paleta de colores cuidadosamente seleccionada (#2c3e50, #e74c3c, #3498db)
Animaciones fluidas en hover y transiciones

🛒 Carrito de Compras Interactivo

✅ Agregar productos con un click
✅ Contador de items en tiempo real
✅ Cálculo automático de totales
✅ Actualizar cantidades
✅ Eliminar productos
✅ Persistencia local (guarda el carrito aunque cierres el navegador)

📱 Totalmente Responsive
css/* Breakpoints implementados */
Mobile:  < 768px   → 1 columna, menú hamburguesa
Tablet:  768-1024px → 2 columnas, navegación simplificada  
Desktop: > 1024px   → 3-4 columnas, navegación completa
⚡ Rendimiento Optimizado

Carga rápida: CSS y JS minificables
Imágenes optimizadas: Lazy loading implementable
Sin dependencias: No requiere frameworks pesados
SEO-friendly: Estructura semántica HTML5

🔍 Funcionalidades Adicionales

🔎 Buscador en tiempo real: Filtra productos mientras escribes
🏷️ Filtros por categoría: Electrónica, Ropa, Hogar, etc.
⭐ Sistema de valoraciones: Estrellas de 1-5
💰 Gestión de precios: Descuentos y precios especiales
📊 Inventario: Control de stock disponible


🔧 Personalización Paso a Paso
1️⃣ Cambiar Colores del Sitio
Abre css/styles.css y modifica las variables CSS (líneas 1-15):
css:root {
  /* Cambia estos valores */
  --primary-color: #2c3e50;    /* Color principal (header, botones) */
  --secondary-color: #e74c3c;  /* Color secundario (precios, ofertas) */
  --accent-color: #3498db;     /* Color de acento (enlaces, iconos) */
  --text-color: #333;          /* Color del texto principal */
  --background: #f8f9fa;       /* Color de fondo del sitio */
  --card-bg: #ffffff;          /* Fondo de las tarjetas */
}
Ejemplo de cambio de tema:
css/* Tema Oscuro */
:root {
  --primary-color: #1a1a2e;
  --secondary-color: #16213e;
  --accent-color: #0f3460;
  --text-color: #eee;
  --background: #0f0f0f;
  --card-bg: #1f1f1f;
}
2️⃣ Agregar Nuevos Productos
Abre js/main.js y edita el array products (línea ~5):
javascriptconst products = [
  {
    id: 1,                              // ID único (no repetir)
    name: "Tu Producto",                // Nombre del producto
    price: 299.99,                      // Precio en tu moneda
    category: "Electrónica",            // Categoría
    image: "images/tu-producto.jpg",    // Ruta de la imagen
    rating: 4.5,                        // Valoración (1-5)
    stock: 15                           // Unidades disponibles
  },
  // Agrega más productos aquí...
];
Paso a paso para agregar un producto:

Copia un producto existente completo (desde { hasta },)
Pega después del último producto
Cambia el id (debe ser único, ej: 11, 12, 13...)
Modifica name, price, category, etc.
Guarda el archivo
Recarga el navegador (F5)

3️⃣ Cambiar el Logo y Nombre
En index.html (línea ~25):
html<div class="logo">
  <h1>TU TIENDA</h1>  <!-- Cambia "LuxeMarket" por tu nombre -->
</div>
Para agregar un logo imagen:
html<div class="logo">
  <img src="assets/logos/mi-logo.png" alt="Mi Tienda">
</div>
4️⃣ Modificar el Menú de Navegación
En index.html (línea ~30):
html<nav class="main-nav">
  <a href="#home">Inicio</a>
  <a href="#products">Productos</a>
  <a href="#ofertas">Ofertas</a>      <!-- Agrega nuevas secciones -->
  <a href="#nosotros">Nosotros</a>    <!-- aquí -->
  <a href="#contact">Contacto</a>
</nav>
5️⃣ Personalizar el Footer
En index.html (línea ~100):
html<footer>
  <p>&copy; 2026 Tu Empresa. Todos los derechos reservados.</p>
  <p>Email: contacto@tuempresa.com | Tel: +52 123 456 7890</p>
</footer>

🌐 Subir a GitHub (Detallado)
Pre-requisitos

✅ Tener Git instalado (Descargar aquí)
✅ Tener una cuenta en GitHub (Crear cuenta)
✅ Configurar Git con tu nombre y email:

bashgit config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
Paso 1: Crear Repositorio en GitHub

Ve a GitHub.com
Click en el botón "New" (o + → New repository)
Nombre: ecommerce-magento o el que prefieras
Descripción: "Plataforma de ecommerce moderna inspirada en Magento"
NO marques "Initialize with README" (ya tenemos uno)
Click en "Create repository"

Paso 2: Comandos Git (PowerShell/Terminal)
bash# 1. Navega a tu carpeta del proyecto
cd C:\ecommerce\ecommerce-magento

# 2. Inicializa Git (crea carpeta .git/)
git init

# 3. Agrega todos los archivos al staging area
git add .

# 4. Crea el primer commit con un mensaje descriptivo
git commit -m "Initial commit: Plataforma de ecommerce LuxeMarket"

# 5. Conecta con tu repositorio de GitHub (cambia TU-USUARIO)
git remote add origin https://github.com/Moiseshdz/LuxeMarket---Ecommerce-Platform.git

# 6. Renombra la rama a 'main' (estándar actual)
git branch -M main

# 7. Sube todo a GitHub
git push -u origin main
Paso 3: Autenticación (si te la pide)
GitHub ya no acepta contraseñas. Necesitas un Personal Access Token:

GitHub → Settings (tu perfil) → Developer settings
Personal access tokens → Tokens (classic)
Generate new token → Marca "repo"
Copia el token generado
Úsalo como contraseña cuando Git te lo pida

Comandos Futuros (después del primer push)
bash# Ver estado de archivos modificados
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push

🚀 Despliegue (Publicar en Internet)
Opción 1: GitHub Pages (Gratis y Fácil)

Ve a tu repositorio en GitHub
Settings → Pages
Source: selecciona "main" branch
Save
Espera 1-2 minutos
Tu sitio estará en: https://moiseshdz.github.io/LuxeMarket---Ecommerce-Platform/

Opción 2: Netlify (Más Profesional)

Ve a Netlify.com
Sign up (puedes usar tu cuenta de GitHub)
"Add new site" → "Import from Git"
Conecta tu repositorio
Deploy!
URL personalizada disponible

Opción 3: Vercel
bash# Instala Vercel CLI
npm i -g vercel

# Desde tu carpeta del proyecto
vercel

# Sigue las instrucciones en pantalla

📚 Recursos de Aprendizaje
Para Principiantes

📖 MDN Web Docs - HTML
🎨 CSS Tricks
⚡ JavaScript.info

Herramientas Útiles

🎨 Coolors - Generador de paletas de colores
🖼️ Unsplash - Imágenes gratis de alta calidad
✏️ VS Code - Editor de código recomendado
🔧 Chrome DevTools - Depuración

Inspiración de Diseño

🛍️ Dribbble - Ecommerce
🎯 Awwwards
📱 Behance


🐛 Solución de Problemas
Problema: Las imágenes no se cargan
Solución:
javascript// En js/main.js, verifica las rutas
image: "https://via.placeholder.com/300"  // URL externa
// o
image: "./images/producto1.jpg"  // Ruta relativa correcta
Problema: El carrito no guarda al recargar
Solución:
javascript// Agrega localStorage en js/main.js
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem('cart');
  if (saved) cart = JSON.parse(saved);
}
Problema: Git push falla
Solución:
bash# Verifica tu conexión
git remote -v

# Si no aparece nada, agrega el remote
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git

# Intenta de nuevo
git push -u origin main
Problema: Errores de JavaScript en consola
Solución:

Abre DevTools (F12)
Ve a la pestaña "Console"
Lee el error y la línea indicada
Busca el error en Google: "JavaScript [mensaje de error]"


📝 Próximas Mejoras Sugeridas
Funcionalidades Básicas

 Sistema de login/registro de usuarios
 Página de checkout (formulario de compra)
 Integración con pasarela de pago (Stripe, PayPal)
 Sistema de wishlist (lista de deseos)
 Comparador de productos

Funcionalidades Avanzadas

 Backend con Node.js/Express
 Base de datos (MongoDB/PostgreSQL)
 Sistema de reviews y comentarios
 Notificaciones por email
 Panel de administración
 API REST para productos

Optimizaciones

 PWA (Progressive Web App)
 Service Workers para caché
 Lazy loading de imágenes
 Minificación de CSS/JS
 Análisis con Google Analytics


🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

Fork el repositorio
Crea una rama para tu feature: git checkout -b feature/nueva-funcionalidad
Commit tus cambios: git commit -m 'Agrega nueva funcionalidad'
Push a la rama: git push origin feature/nueva-funcionalidad
Abre un Pull Request

Código de Conducta

Se respetuoso con otros contribuidores
Documenta tus cambios claramente
Prueba tu código antes de hacer PR
Sigue las convenciones de estilo del proyecto


📄 Licencia
Este proyecto está bajo la Licencia MIT. Puedes:
✅ Usar comercialmente
✅ Modificar
✅ Distribuir
✅ Uso privado
Condiciones:

Incluir el aviso de copyright y licencia

Ver el archivo LICENSE para más detalles.

👨‍💻 Autor
Moisés Hernández

GitHub: @Moiseshdz
Proyecto: LuxeMarket


🙏 Agradecimientos

Inspirado en Magento
Iconos de Font Awesome
Fuentes de Google Fonts
Imágenes de Unsplash


📞 Soporte
¿Tienes preguntas o problemas?

🐛 Abre un Issue
💬 Inicia una Discussion
📧 Contacto directo: [moisesgrcia37@gmail.com]


<div align="center">
⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐
Made with ❤️ by Moisés Hernández
</div>
