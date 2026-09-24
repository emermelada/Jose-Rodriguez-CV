# José Rodríguez — Personal Portfolio & CV Website

Sitio web personal y portfolio interactivo diseñado para destacar producciones cinematográficas, dirección de fotografía y operación de cámara/Steadicam en entornos audiovisuales de alto rendimiento y retransmisiones deportivas de élite (1ª RFEF / 1ª FEB).

La interfaz prioriza el **trabajo audiovisual como protagonista**: una portada centrada en el nombre con una pieza a modo de escaparate, el portfolio fotográfico por delante del de vídeo, piezas destacadas a gran formato y un apartado *image-led* de perfil. Estética cinematográfica y brutalista, con foco en velocidad de carga, tipografía cruda y visualización fluida de material multimedia.

 **Sitio Web Oficial:** [joserodriguez.mov](https://joserodriguez.mov)

---

##  Estructura de Contenido (Secciones)

El sitio es una *single-page* con navegación ancla y *scroll-spy*. Orden de secciones:

1. **Portada** — Nombre a gran escala + **carrusel** con las diez fotografías del reportaje del Real Sporting — Burgos en El Molinón. Avanza solo cada 5 s y se navega con flechas, puntos o teclado; al pulsar una fotografía se abre la publicación original de Instagram.
2. **Portfolio Foto** — Tres bloques:
   * **Sporting de Gijón — César Gelabert**: dos posts de Instagram (vs Burgos, vs Girona), cada uno como carrusel igual que el de portada: flechas, puntos, pase automático cada 5 s y clic para abrir el post.
   * **CD Leganés — Patrick Soko**: dos posts (victoria en Butarque, vs Granada) con el mismo carrusel.
   * **Pretemporada 2026/27**: sólo presentaciones y fichajes (**CD Leganés** 4 · **Getafe CF** 4) en rejilla 16:9 de dos columnas con *lightbox*.
3. **Portfolio Vídeo** — Orden: **Reel Sporting** (pieza principal, vertical 9:16) → **Getafe – Conference** (rejilla 2×2 de clips en bucle) → **Atlético Madrileño** (clip destacado + rejilla 2×2). Sólo fútbol: todo el vídeo es **`.mp4` local** (clips de retransmisiones y reel).
4. **Sobre mí** — Bloque *image-led* con retrato principal, texto de perfil e imagen secundaria de carácter autoral (encuadre cinematográfico de tránsito), más tabla de datos de contacto.
5. **Experiencia** — Línea temporal con animación de entrada por *scroll*.
6. **Contacto** — Enlaces directos (teléfono, email, Instagram).

---

##  Características Principales

* **Diseño Fílmico Minimalista:** Paleta tonal cruda (`#ebebe7` y `#111110`) combinada con un acento rojo profundo (`#b6282d`) inspirado en indicadores de grabación (*Rec*).
* **Portada Escaparate:** El nombre domina la portada y el mejor trabajo se muestra de inmediato, sin obligar al usuario a navegar para ver una pieza.
* **Carrusel Autoalojado:** Las fotografías del carrusel de portada se sirven desde este mismo dominio, de modo que la página **no contacta con Instagram** hasta que el visitante pulsa para abrir la publicación. El pase automático se detiene con el puntero encima, con la pestaña en segundo plano y si el sistema pide `prefers-reduced-motion`.
* **Film Ticker Continuo:** Marquesina infinita en CSS nativo acelerada por hardware (`will-change: transform`) para mostrar áreas de especialización sin penalizar rendimiento.
* **Reproducción de Vídeo Local:** Soporte para clips `.mp4` propios (p. ej. retransmisiones deportivas) mediante un *loader* diferido que sólo inserta el `<video>` al pulsar.
* **Lightbox Nativo Integrado:** Visualización de capturas y composiciones fotográficas a pantalla completa sin librerías de terceros (Vanilla JS, cierre con `ESC`).
* **Scroll-Spy Automático:** Sincronización en tiempo real mediante `IntersectionObserver` entre la posición del scroll y los enlaces activos de navegación.
* **Layout Adaptativo (responsive):** Diseño fluido para escritorio, tablet y móvil mediante *breakpoints* (980 px / 600 px) y tipografía con `clamp()`. El portfolio de foto se agrupa por reportaje y cada grupo usa una rejilla de celdas 16:9 iguales (2×2 en escritorio, 1 columna por debajo de 600 px) para que los grupos de cuatro fotos queden siempre parejos; el vídeo destacado va contenido y centrado, y el menú colapsa en hamburguesa.
* **Accesibilidad:** Navegación semántica (`aria-label`, `aria-modal`), respeto a `prefers-reduced-motion` y control por teclado del lightbox.

---

##  Stack Tecnológico

* **HTML5:** Estructuración semántica y accesible (`aria-label`, secciones independientes).
* **CSS3 Custom Properties:** Arquitectura basada en *design tokens* centralizados para fuentes, colores y rejillas.
* **Vanilla JavaScript:** Control de flujos de UI, manipulación del DOM e integración diferida de vídeo `.mp4` local.

Sin frameworks ni dependencias de *build*: el sitio es un único `index.html` autocontenido.

---

##  Estructura de Archivos

```text
├── index.html                      # Documento principal (HTML + CSS + JS embebidos)
├── README.md
└── resources/
    ├── fotografias/
    │   ├── hero-carrusel-01..10.jpg    # post Sporting — Burgos: carrusel de portada y bloque Sporting
    │   ├── pret-leganes-01..04.jpg     # Pretemporada 2026/27 — presentación en el CD Leganés
    │   ├── sporting-girona-01..08.jpg  # post Sporting — Girona (1080×1350)
    │   ├── leganes-butarque-01..10.jpg # post victoria del Leganés en Butarque
    │   ├── leganes-granada-01..10.jpg  # post Leganés — Granada
    │   ├── pret-getafe-01..04.jpg      # Pretemporada 2026/27 — fichajes del Getafe CF
    │   ├── reel-sporting.jpg           # póster del Reel del Sporting (vertical)
    │   ├── atleti-destacado.jpg        # póster del clip destacado del Atlético
    │   ├── atleti-loop-01..04.jpg      # pósters de la rejilla en bucle del Atlético
    │   ├── getafe-conf-01..04.jpg      # pósters de la rejilla en bucle del Getafe (Conference)
    │   ├── profile-picture.jpeg        # retrato principal de José ("Sobre mí")
    │   └── sobre-mi-02.jpg             # imagen secundaria de "Sobre mí" (encuadre de tránsito)
    └── videos/
        ├── reel-sporting.mp4           # Reel del Sporting (720×1280 vertical, con audio)
        ├── atleti-destacado.mp4        # clip destacado del Atlético (1080p, con audio)
        ├── atleti-loop-01..04.mp4      # rejilla 2×2 del Atlético en bucle (720p, mudos)
        └── getafe-conf-01..04.mp4      # rejilla 2×2 del Getafe en Conference (720p, mudos)
```

> **Estado de los assets:** todos los materiales están incluidos. Clips del Atlético y del Getafe optimizados (MOV→MP4 H.264 con `faststart`; los destacados conservan audio AAC y las rejillas 2×2 van sin pista de audio, con `<video autoplay muted loop>`). El Reel del Sporting se reescala a 720×1280 (CRF 26) para no disparar el peso del repositorio. Fotografías a 1920 px de ancho —el póster vertical del reel a 1080×1920—, JPEG q82 y sin metadatos EXIF.
