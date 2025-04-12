README - Sitio Web de Gimnasio GymHub
Descripción del Proyecto
GymHub es un sitio web moderno y responsivo diseñado para el gimnasio GymHub, que ofrece una variedad de clases, entrenadores capacitados y planes de membresía. El sitio está construido con HTML5, CSS3 y JavaScript, enfocado en proporcionar una experiencia de usuario atractiva, accesible y optimizada para dispositivos móviles y de escritorio. Incluye funcionalidades interactivas como un sistema de filtrado de clases, un carrusel de testimonios, animaciones, un formulario de contacto con validación, y soporte para modo claro y oscuro.

El propósito principal es promocionar los servicios de GymHub, permitir a los usuarios explorar clases, conocer a los entrenadores, leer artículos en el blog, revisar planes de precios y contactar al equipo del gimnasio.

Características Principales
Diseño Responsivo: Adaptado para pantallas de escritorio, tabletas y móviles, con breakpoints en 1200px, 992px, 768px y 576px.
Modo Claro y Oscuro: Los usuarios pueden alternar entre temas, con preferencias guardadas en localStorage y soporte para la configuración del sistema (prefers-color-scheme).
Navegación Interactiva:
Menú fijo con transición de fondo al hacer scroll.
Submenús desplegables en escritorio y menús colapsables en móvil.
Botón de hamburguesa para navegación móvil.
Páginas y Funcionalidades:
Inicio (index.html): Sección hero con video, información sobre GymHub, clases destacadas, entrenadores, testimonios y un formulario de suscripción.
Clases (clases.html): Sistema de filtrado CSS para clases (Yoga, CrossFit, Spinning, HIIT, Pilates), galería masonry, tabla de horarios y FAQs con acordeón.
Entrenadores (entrenadores.html): Tarjetas con efecto flip mostrando información detallada, barras de habilidades animadas y enlaces sociales.
Blog (blog.html): Sistema de filtrado por categorías, diseño de cuadrícula con artículo destacado, paginación y sección de comentarios.
Contacto (contacto.html): Formulario con validación en tiempo real, modal de confirmación, información de contacto y mapa integrado.
Precios (precios.html): Tabla comparativa de planes con toggle mensual/anual, tarjetas destacadas, información adicional y FAQs.
Interactividad:
Carrusel de testimonios con autoplay y controles de navegación.
Contadores animados para estadísticas en la sección "Acerca de".
Animaciones CSS para transiciones suaves (fadeInUp, reveal, skill-fill, etc.).
Efectos hover y transiciones en botones, tarjetas y elementos interactivos.
Accesibilidad:
Uso de aria-label y aria-pressed para botones interactivos.
Navegación por teclado mejorada.
Clases como sr-only para contenido accesible solo para lectores de pantalla.
Validación de formularios con mensajes de error visibles.
SEO y Rendimiento:
Estructura semántica con etiquetas HTML5 (header, nav, section, etc.).
Imágenes optimizadas con object-fit: cover y lazy loading implícito.
CSS optimizado con variables para mantener consistencia.
Tecnologías Utilizadas
HTML5: Estructura semántica del contenido.
CSS3:
Flexbox y Grid para layouts.
Animaciones con @keyframes (fadeInUp, skill-fill, star-pulse, etc.).
Variables CSS (:root) para temas.
Media queries para responsividad.
Pseudo-elementos y selectores avanzados para efectos.
JavaScript:
Manipulación del DOM para tema, carrusel, contadores y formularios.
Event listeners para interacciones (click, scroll, resize, submit).
localStorage para persistencia del tema.
Intersection Observer implícito para animaciones en viewport.
Font Awesome: Iconos para redes sociales, formularios y detalles visuales.
Google Maps API (referenciado en contacto.html para el mapa).
Visual Studio Code: Editor utilizado para el desarrollo.
Live Server: Extensión de VS Code para pruebas locales.
GitHub: Plataforma donde el proyecto está alojado.
Requisitos
Un navegador web moderno (Chrome, Firefox, Safari, Edge).
Conexión a internet para cargar recursos externos (Font Awesome, Google Maps).
Visual Studio Code con la extensión Live Server (opcional, para pruebas locales).
Acceso a GitHub para clonar o descargar el repositorio.
Instalación
Clonar el repositorio desde GitHub:
bash

Contraer

Ajuste

Copiar
git clone https://github.com/tu-usuario/gymhub.git
O descarga el archivo ZIP desde el repositorio de GitHub y descomprímelo.
Navegar al directorio del proyecto:
bash

Contraer

Ajuste

Copiar
cd gymhub
Abrir en Visual Studio Code:
bash

Contraer

Ajuste

Copiar
code .
Iniciar Live Server:
Abre el proyecto en Visual Studio Code.
Haz clic derecho en index.html y selecciona "Open with Live Server", o usa el botón "Go Live" en la barra inferior de VS Code.
Alternativamente, abre index.html directamente en un navegador, pero Live Server es recomendado para pruebas dinámicas.
Configurar recursos externos (si aplica):
Asegúrate de que los enlaces a Font Awesome y Google Maps API en los HTML estén activos.
Reemplaza la clave de Google Maps en contacto.html si es necesario:
html

Contraer

Ajuste

Copiar
<script async defer src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API"></script>
Uso
Explorar el sitio:
Navega por las páginas usando el menú principal (Inicio, Clases, Entrenadores, Blog, Contacto, Precios).
Usa el botón de hamburguesa en móviles para abrir el menú.
Cambiar tema:
Haz clic en el botón de cambio de tema (ícono de sol/luna) en la esquina superior derecha para alternar entre modo claro y oscuro.
Filtrar clases:
En clases.html, selecciona un filtro (Todos, Yoga, CrossFit, etc.) para mostrar clases específicas.
Ver entrenadores:
En entrenadores.html, pasa el cursor sobre las tarjetas para ver información detallada con efecto flip.
Leer el blog:
En blog.html, filtra artículos por categoría (Nutrición, Entrenamiento, etc.) y usa la paginación para navegar.
Contactar:
En contacto.html, completa el formulario y envíalo para ver un modal de confirmación simulado.
Explorar planes:
En precios.html, alterna entre precios mensuales y anuales, y revisa las FAQs para más detalles.
Despliegue en GitHub
El proyecto está alojado en GitHub. Para actualizar el repositorio:

Hacer cambios locales:
Edita los archivos en Visual Studio Code.
Prueba los cambios usando Live Server.
Confirmar cambios:
bash

Contraer

Ajuste

Copiar
git add .
git commit -m "Descripción de los cambios"
Subir a GitHub:
bash

Contraer

Ajuste

Copiar
git push origin main
Habilitar GitHub Pages (opcional):
Ve a la pestaña "Settings" de tu repositorio en GitHub.
En la sección "Pages", selecciona la rama main y la carpeta / (root).
El sitio estará disponible en https://tu-usuario.github.io/gymhub.
Personalización
Para personalizar el sitio, puedes:

Cambiar colores:
Edita las variables CSS en styles.css:
css

Contraer

Ajuste

Copiar
:root {
  --gold: #ffd700;
  --black: #000000;
  --white: #ffffff;
  --accent: var(--gold);
}
Actualizar imágenes:
Reemplaza las rutas en los HTML (assets/img/) con tus propias imágenes.
Modificar contenido:
Edita el texto en los HTML para reflejar la información de GymHub.
Añadir funcionalidad:
Extiende main.js o contacto.js para agregar más interacciones, como integración con un backend para el formulario.
Limitaciones Conocidas
Imágenes no incluidas: Las imágenes referenciadas (por ejemplo, assets/img/hero-bg.jpg) no están en el proyecto y deben añadirse manualmente.
Formulario simulado: El formulario de contacto (contacto.js) simula el envío con un retraso de 2 segundos, sin conexión real a un servidor.
Google Maps API: Requiere una clave válida para funcionar correctamente.
Carrusel en móviles: Puede requerir ajustes adicionales para pantallas muy pequeñas (<576px).
Contribuciones
Si deseas contribuir:

Haz un fork del repositorio en GitHub.
Crea una rama para tu cambio:
bash

Contraer

Ajuste

Copiar
git checkout -b mi-nueva-funcionalidad
Realiza tus cambios y haz commit:
bash

Contraer

Ajuste

Copiar
git commit -m "Añadir nueva funcionalidad"
Sube los cambios:
bash

Contraer

Ajuste

Copiar
git push origin mi-nueva-funcionalidad
Abre un Pull Request en el repositorio original.
Licencia
Este proyecto es de código abierto bajo la . Puedes usarlo, modificarlo y distribuirlo libremente, siempre que incluyas el aviso de copyright.

Contacto
Para preguntas o sugerencias, contacta a 36350945@fi.unju.edu.ar o abre un issue en el repositorio de GitHub.
