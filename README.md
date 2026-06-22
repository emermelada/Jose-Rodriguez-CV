# José Rodríguez — Personal Portfolio & CV Website

Sitio web personal y portfolio interactivo diseñado para destacar producciones cinematográficas, dirección de fotografía y operación de cámara/Steadicam en entornos audiovisuales de alto rendimiento y retransmisiones deportivas de élite (1ª RFEF / 1ª FEB).

La interfaz prioriza el **trabajo audiovisual como protagonista**: una portada centrada en el nombre con un proyecto a modo de escaparate, un portfolio de vídeo con pieza destacada a gran formato y un apartado *image-led* de perfil. Estética cinematográfica y brutalista, con foco en velocidad de carga, tipografía cruda y visualización fluida de material multimedia.

🔗 **Sitio Web Oficial:** [joserodriguez.mov](https://joserodriguez.mov)

---

## 🧭 Estructura de Contenido (Secciones)

El sitio es una *single-page* con navegación ancla y *scroll-spy*. Orden de secciones:

1. **Portada** — Nombre a gran escala + *showreel* destacado embebido directamente como escaparate.
2. **Portfolio Vídeo** — Pieza destacada a formato grande seguida de un grid. Soporta tanto vídeo de YouTube (*lazy load*) como **vídeo local `.mp4`** (clips de retransmisiones deportivas).
3. **Portfolio Foto** — Grid fotográfico con *lightbox* nativo a pantalla completa.
4. **Sobre mí** — Bloque *image-led* con foto de portada apaisada, texto de perfil e imagen secundaria, más tabla de datos de contacto.
5. **Experiencia** — Línea temporal con animación de entrada por *scroll*.
6. **Formación** — Educación y certificaciones.
7. **Contacto** — Enlaces directos (teléfono, email, web, Instagram).

---

## ⚡ Características Principales

* **Diseño Fílmico Minimalista:** Paleta tonal cruda (`#ebebe7` y `#111110`) combinada con un acento rojo profundo (`#b6282d`) inspirado en indicadores de grabación (*Rec*).
* **Portada Escaparate:** El nombre domina la portada y el mejor trabajo se muestra de inmediato, sin obligar al usuario a navegar para ver una pieza.
* **Film Ticker Continuo:** Marquesina infinita en CSS nativo acelerada por hardware (`will-change: transform`) para mostrar áreas de especialización sin penalizar rendimiento.
* **Lazy Load de Vídeo Inteligente:** Los fragmentos de YouTube no cargan iframes ni dependencias externas de forma masiva en el inicio. Se renderizan dinámicamente tras la interacción del usuario, reduciendo peticiones de red y optimizando las métricas **Core Web Vitals** (LCP, TTI).
* **Reproducción de Vídeo Local:** Soporte para clips `.mp4` propios (p. ej. retransmisiones deportivas) mediante un *loader* diferido equivalente al de YouTube.
* **Lightbox Nativo Integrado:** Visualización de capturas y composiciones fotográficas a pantalla completa sin librerías de terceros (Vanilla JS, cierre con `ESC`).
* **Scroll-Spy Automático:** Sincronización en tiempo real mediante `IntersectionObserver` entre la posición del scroll y los enlaces activos de navegación.
* **Layout Adaptativo:** Grids variables que transicionan entre relaciones de aspecto fílmicas ($16:9$) y composiciones fotográficas verticales ($3:4$), con menú hamburguesa en móvil.
* **Accesibilidad:** Navegación semántica (`aria-label`, `aria-modal`), respeto a `prefers-reduced-motion` y control por teclado del lightbox.

---

## 🛠️ Stack Tecnológico

* **HTML5:** Estructuración semántica y accesible (`aria-label`, secciones independientes).
* **CSS3 Custom Properties:** Arquitectura basada en *design tokens* centralizados para fuentes, colores y rejillas.
* **Vanilla JavaScript:** Control de flujos de UI, manipulación del DOM e integración diferida de vídeo (YouTube y `.mp4` local).

Sin frameworks ni dependencias de *build*: el sitio es un único `index.html` autocontenido.

---

## 📂 Estructura de Archivos

```text
├── index.html                      # Documento principal (HTML + CSS + JS embebidos)
├── README.md
└── resources/
    ├── fotografias/
    │   ├── amapolas-still-01..07.jpg   # ✓ incluido — stills del videoclip "Amapolas"
    │   ├── rueda-prensa-01..06.jpg     # ✓ incluido — fotos de rueda de prensa
    │   ├── atleti-destacado.jpg        # ✓ incluido — póster del clip destacado del Atlético
    │   ├── atleti-loop-01..04.jpg      # ✓ incluido — pósters de la rejilla en bucle
    │   ├── profile-picture.jpeg        # ⚠ pendiente — retrato de José (apartado "Sobre mí")
    │   ├── IMG_0928 / IMG_9774 / IMG_9818 .JPG  # ⚠ pendiente — stills de rodaje del grid de foto
    │   └── portada-album / Casa-Morgano / bucle-album .jpeg  # ⚠ pendiente — arte del EP
    └── videos/
        ├── atleti-destacado.mp4        # ✓ incluido — clip destacado del Atlético (1080p)
        └── atleti-loop-01..04.mp4      # ✓ incluido — clips de la rejilla 2×2 en bucle (720p, mudos)
```

> **Estado de los assets:** los materiales del Atlético, rueda de prensa y Amapolas ya están incluidos y optimizados (vídeos MOV→MP4 H.264; imágenes a 1920 px). La rejilla del Atlético usa `<video autoplay muted loop>`. **Pendiente:** el retrato de perfil, los stills de rodaje y el arte del EP marcados con ⚠ (assets originales, no facilitados aún), y los enlaces de Spotify del bloque "Anatomía de una Derrota" (ver comentario en el HTML).
