# José Rodríguez — Personal Portfolio & CV Website

Sitio web personal y portfolio interactivo diseñado para destacar producciones cinematográficas, dirección de fotografía y operación de cámara/Steadicam en entornos audiovisuales de alto rendimiento y retransmisiones deportivas de élite (1ª RFEF / 1ª FEB).

La interfaz destaca por un diseño de estética cinematográfica y brutalista, priorizando la velocidad de carga, la tipografía cruda y la visualización fluida de material multimedia de alta fidelidad.

🔗 **Sitio Web Oficial:** [joserodriguez.mov](https://joserodriguez.mov)

---

## ⚡ Características Principales

* **Diseño Fílmico Minimalista:** Paleta tonal cruda (`#ebebe7` y `#111110`) combinada con un acento rojo profundo (`#b6282d`) inspirado en indicadores de grabación (*Rec*).
* **Film Ticker Continuo:** Marquesina infinita en CSS nativo acelerada por hardware (`will-change: transform`) para mostrar áreas de especialización sin penalizar rendimiento.
* **Lazy Load de Vídeo Inteligente:** Los fragmentos de YouTube no cargan iframes ni dependencias externas de forma masiva en el inicio. Se renderizan dinámicamente mediante eventos Javascript reduciendo las peticiones de red y optimizando las métricas **Core Web Vitals**.
* **Lightbox Nativo Integrado:** Visualización de capturas y composiciones fotográficas a pantalla completa sin necesidad de pesadas librerías de terceros (Vanilla JS).
* **Scroll-Spy Automático:** Sincronización en tiempo real mediante `IntersectionObserver` entre la posición del scroll del usuario y los enlaces activos de navegación.
* **Layout Adaptativo:** Composición de grids variables que transicionan dinámicamente entre relaciones de aspecto fílmicas ($16:9$) y composiciones fotográficas verticales ($3:4$).

---

## 🛠️ Stack Tecnológico

* **HTML5:** Estructuración semántica y accesible (`aria-label`, layouts de sección independientes).
* **CSS3 Custom Properties:** Arquitectura basada en tokens de diseño centralizados para fuentes, colores y rejillas.
* **Vanilla JavaScript:** Control de flujos de UI, manipulación del DOM e integraciones asíncronas con APIs externas de vídeo.

---

## 📂 Estructura de Archivos

```text
├── index.html                  # Documento principal de la aplicación web
└── resources/
    └── fotografias/
        ├── profile-picture.jpeg # Imagen de cabecera de perfil
        └── [assets_portfolio]   # Capturas estáticas de rodajes y muestras de etalonaje
