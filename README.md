# GymHub - Sitio Web de Gimnasio

## Descripción del Proyecto

GymHub es un sitio web completo para un gimnasio premium, desarrollado como parte del trabajo práctico para la Universidad Nacional de Jujuy, Facultad de Ingeniería (APU 2008). El proyecto implementa un diseño moderno y responsivo utilizando HTML5 y CSS3 avanzado, con animaciones, efectos interactivos y una estructura semántica.

## Características Implementadas

### Estructura General
- **Diseño Responsivo**: Adaptación completa a todos los dispositivos (móvil, tablet, escritorio)
- **Modo Oscuro/Claro**: Toggle interactivo con persistencia mediante localStorage
- **Mega-menú Desplegable**: Navegación avanzada con submenús
- **Estructura Semántica**: Uso de etiquetas HTML5 (header, nav, section, footer, etc.)
- **CSS Variables**: Implementación de Custom Properties para gestión de colores y temas

### Página Principal (Home)
- **Hero Section**: Video de fondo con overlay de texto animado
- **Contador Animado**: Estadísticas con animación de conteo mediante CSS Keyframes
- **Tarjetas de Clases**: Efectos hover y transiciones CSS
- **Carrusel de Testimonios**: Implementado solo con CSS, sin JavaScript
- **Sección de Entrenadores**: Tarjetas con efecto flip (rotación)

### Página de Clases
- **Sistema de Filtrado**: Categorías (HIIT, Yoga, Crossfit, etc.) usando solo CSS (:checked)
- **Galería Masonry**: Implementada con CSS Grid para mostrar imágenes de diferentes alturas
- **Tarjetas Interactivas**: Efectos de zoom y overlay al pasar el cursor
- **Tabla Responsiva**: Horarios semanales adaptados para todos los dispositivos
- **Sección FAQ**: Acordeón implementado con CSS

### Página de Entrenadores
- **Tarjetas con Efecto Flip**: Rotación al hacer hover para ver detalles
- **Barras de Habilidades Animadas**: Visualización de competencias con animación
- **Sistema de Rating**: Estrellas animadas implementadas solo con CSS
- **Categorización**: Secciones para diferentes tipos de entrenadores

### Página de Precios
- **Toggle Mensual/Anual**: Cambio de precios con CSS
- **Tabla de Precios**: Efecto de resaltado al pasar el cursor
- **Tooltips Explicativos**: Información adicional sobre características
- **Sección FAQ**: Acordeón implementado con CSS

### Página de Blog
- **Diseño Newspaper**: Implementado con CSS Grid
- **Sistema de Tags**: Categorías con filtrado mediante CSS
- **Sección de Comentarios**: Avatares creados con CSS y pseudo-elementos
- **Efecto Scroll Reveal**: Artículos que aparecen al hacer scroll

### Formulario de Contacto
- **Validación en Tiempo Real**: Uso de selectores :valid y :invalid
- **Efecto de Carga**: Spinner CSS al enviar el formulario
- **Modal de Confirmación**: Aparece al enviar el formulario correctamente
- **Diseño Responsivo**: Adaptación a todos los dispositivos

## Técnicas Avanzadas Implementadas

### CSS Avanzado
- **Custom Properties (Variables CSS)**: Sistema de temas para modo oscuro/claro
- **Clip-path & Masking**: Formas creativas para imágenes
- **Scroll Snap**: Secciones que encajan perfectamente al hacer scroll
- **Modo Oscuro**: Implementado con CSS Variables y mínimo JavaScript

### Animaciones y Efectos
- **Micro-interacciones**: En botones, enlaces y tarjetas
- **Transiciones**: Elementos interactivos con transiciones suaves
- **Keyframes**: Animaciones avanzadas para contador y spinner de carga
- **Efectos Hover**: Transformaciones y cambios de estado en elementos interactivos

### Accesibilidad
- **Contraste Adecuado**: Cumpliendo estándares de accesibilidad
- **Estados de Focus**: Visibles para mejorar navegación con teclado
- **ARIA Labels**: Mejora de accesibilidad en elementos interactivos
- **Estructura Semántica**: Uso correcto de etiquetas HTML5

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos avanzados (Flexbox, Grid, Animaciones, Variables)
- **JavaScript**: Funcionalidades interactivas (mínimo, según consigna)
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Montserrat y Open Sans)
- **Google Maps**: Mapa embebido en el footer

## Estructura de Archivos

```
GymHub/
│
├── index.html              # Página principal
├── clases.html             # Página de clases
├── entrenadores.html       # Página de entrenadores
├── precios.html            # Página de planes y precios
├── blog.html               # Blog de fitness
├── contacto.html           # Formulario de contacto
│
├── css/
│   ├── styles.css          # Estilos globales
│   ├── clases.css          # Estilos específicos para clases
│   ├── entrenadores.css    # Estilos específicos para entrenadores
│   ├── precios.css         # Estilos específicos para precios
│   ├── blog.css            # Estilos específicos para blog
│   └── contacto.css        # Estilos específicos para contacto
│
├── js/
│   ├── main.js             # JavaScript principal
│   └── contacto.js         # JavaScript para el formulario de contacto
│
└── assets/
    ├── img/                # Imágenes del sitio
    └── video/              # Videos para el hero section
```

## Instalación y Uso

1. Clona este repositorio:

2. Abre el proyecto en Visual Studio Code

3. Instala las extensiones recomendadas:
- HTML CSS Support
- Live Server

4. Inicia el servidor local con Live Server:
- Haz clic derecho en `index.html`
- Selecciona "Open with Live Server"

## Características Destacadas

### Sistema de Temas (Oscuro/Claro)
El sitio implementa un sistema completo de temas con modo oscuro y claro, utilizando CSS Variables y localStorage para persistencia. El cambio de tema es fluido gracias a las transiciones CSS.

```css
/* Variables CSS para temas */
:root {
/* Colores base */
--gold: #ffd700;
--black: #000000;
--white: #ffffff;

/* Modo oscuro (default) */
--background: var(--black);
--text: var(--white);
--accent: var(--gold);
--secondary-bg: #222222;
--card-bg: #1a1a1a;
--border-color: #333333;
}

/* Modo claro */
body.light-mode {
--background: #ffffff;
--text: #111111;
--secondary-bg: #f0f4f8; 
--card-bg: #ffffff;
--border-color: #e0e0e0;
}

// Botón de cambio de tema
const themeToggle = document.getElementById("theme-toggle")
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode")
      document.body.classList.add("light-mode")
      localStorage.setItem("theme", "light-mode")
    } else {
      document.body.classList.remove("light-mode")
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark-mode")
    }
  })
}
```
### Filtrado de Clases con CSS Puro

La página de clases implementa un sistema de filtrado por categorías utilizando solo CSS, sin necesidad de JavaScript, mediante el uso de selectores :checked y combinadores:
```css
/* Sistema de filtrado solo con CSS */
.masonry-gallery .item-clase {
  display: block;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  animation-delay: calc(var(--item-index, 0) * 0.1s);
}

#filtro-todos:checked ~ .masonry-gallery .item-clase {
  display: block;
  opacity: 1;
  transform: scale(1);
}

#filtro-yoga:checked ~ .masonry-gallery .item-clase:not(.yoga),
#filtro-crossfit:checked ~ .masonry-gallery .item-clase:not(.crossfit),
#filtro-spinning:checked ~ .masonry-gallery .item-clase:not(.spinning),
#filtro-hiit:checked ~ .masonry-gallery .item-clase:not(.hiit),
#filtro-pilates:checked ~ .masonry-gallery .item-clase:not(.pilates) {
  display: none;
}
```

### Efectos Flip en Tarjetas

Las tarjetas de entrenadores implementan un efecto de rotación 3D (flip) al pasar el cursor:

```css
.trainer-card {
  perspective: 1500px;
  height: 500px;
}

.trainer-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.trainer-card:hover .trainer-card-inner {
  transform: rotateY(180deg);
}

.trainer-card-front,
.trainer-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.trainer-card-back {
  transform: rotateY(180deg);
}
```

### Validación de Formulario en Tiempo Real

El formulario de contacto incluye validación en tiempo real utilizando los selectores :valid e :invalid de CSS:

```css
/* Validación en tiempo real con :valid y :invalid */
.form-group input:not(:placeholder-shown):valid,
.form-group textarea:not(:placeholder-shown):valid {
  border-color: #4caf50;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234CAF50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center; 
  background-size: 16px; 
  padding-right: 35px; 
}

.form-group input:not(:placeholder-shown):invalid,
.form-group textarea:not(:placeholder-shown):invalid {
  border-color: #f44336;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23F44336' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center; 
  background-size: 16px; 
  padding-right: 35px; 
}
```

### Toggle de Precios Mensual/Anual

La página de precios implementa un toggle entre planes mensuales y anuales usando solo CSS:

```css
/* Toggle entre plan mensual y anual con CSS */
.pricing-checkbox:checked ~ .pricing-table .price.monthly {
  display: none;
}

.pricing-checkbox:checked ~ .pricing-table .price.annual {
  display: block;
}

/* Cambiar estilos cuando el checkbox está marcado */
.pricing-checkbox:checked ~ .pricing-toggle .monthly-label {
  opacity: 0.6;
  color: var(--text);
}

.pricing-checkbox:checked ~ .pricing-toggle .annual-label {
  opacity: 1;
  color: var(--accent);
}
```

### Animaciones y Transiciones

Todo el sitio implementa animaciones y transiciones fluidas para mejorar la experiencia de usuario:

```css
/* Animación para las barras de habilidades */
@keyframes skill-fill {
  0% {
    width: 0;
  }
  100% {
    width: var(--skill-width);
  }
}

/* Contador animado con CSS Keyframes */
.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
  position: relative;
  animation: countUp 3s ease-out forwards;
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Capturas de Pantalla

![image](https://github.com/user-attachments/assets/315dbf3c-3cd0-466c-bf96-d525f0015d70)
![image](https://github.com/user-attachments/assets/38250b54-4988-4fa8-a9fe-d97511f54bb6)
![Captura de pantalla 2025-04-11 224834](https://github.com/user-attachments/assets/3bd59aec-0fe0-40e7-8df6-79a54550597d)
![image](https://github.com/user-attachments/assets/421bd143-6095-4f03-9be7-bad2147b2cba)
![image](https://github.com/user-attachments/assets/384015df-c103-4f2a-8567-c2dbea8b301c)










## Autor

Marisol Patricia Castillo - Estudiante de Analista Programador Universitario- Facultad de Ingeniería - Universidad Nacional de Jujuy

## Licencia

Este proyecto es parte de un trabajo académico y está disponible solo para fines educativos.
