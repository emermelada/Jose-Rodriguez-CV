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
* **Layout Adaptativo (responsive):** Diseño fluido para escritorio, tablet y móvil mediante *breakpoints* (980 px / 600 px) y tipografía con `clamp()`. El portfolio de foto usa un layout *masonry* (CSS multi-columna 3→2→1) que respeta la proporción nativa de cada imagen sin huecos; el vídeo destacado va contenido y centrado, y el menú colapsa en hamburguesa.
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
    │   ├── amapolas-still-01..07.jpg   # stills del videoclip "Amapolas"
    │   ├── rueda-prensa-01..04.jpg     # fotos de rueda de prensa
    │   ├── atleti-destacado.jpg        # póster del clip destacado del Atlético
    │   ├── atleti-loop-01..04.jpg      # pósters de la rejilla en bucle
    │   ├── profile-picture.jpeg        # retrato de José ("Sobre mí")
    │   ├── IMG_0928 / IMG_9774 / IMG_9818 .JPG  # stills de rodaje del grid de foto
    │   └── portada-album / Casa-Morgano / bucle-album .jpeg  # arte del EP
    └── videos/
        ├── atleti-destacado.mp4        # clip destacado del Atlético (1080p)
        └── atleti-loop-01..04.mp4      # clips de la rejilla 2×2 en bucle (720p, mudos)
```

> **Estado de los assets:** todos los materiales están incluidos. Vídeos del Atlético optimizados (MOV→MP4 H.264; rejilla 2×2 con `<video autoplay muted loop>`). Stills, rueda de prensa y pósters a 1920 px; el resto de fotografías se mantienen en su resolución original. El bloque "Anatomía de una Derrota" integra reproductores de Spotify embebidos (single + EP).
