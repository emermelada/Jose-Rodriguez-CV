# José Rodríguez — Personal Portfolio & CV Website

Sitio web personal y portfolio interactivo diseñado para destacar producciones cinematográficas, dirección de fotografía y operación de cámara/Steadicam en entornos audiovisuales de alto rendimiento y retransmisiones deportivas de élite (1ª RFEF / 1ª FEB).

La interfaz prioriza el **trabajo audiovisual como protagonista**: una portada centrada en el nombre con una pieza a modo de escaparate, el portfolio fotográfico por delante del de vídeo, piezas destacadas a gran formato y un apartado *image-led* de perfil. Estética cinematográfica y brutalista, con foco en velocidad de carga, tipografía cruda y visualización fluida de material multimedia.

 **Sitio Web Oficial:** [joserodriguez.mov](https://joserodriguez.mov)

---

##  Estructura de Contenido (Secciones)

El sitio es una *single-page* con navegación ancla y *scroll-spy*. Orden de secciones:

1. **Portada** — Nombre a gran escala + **fotografía** destacada de la pretemporada 2026/27 (presentación en el CD Leganés) como escaparate, ampliable con el *lightbox*.
2. **Portfolio Foto** — Un único reportaje: **Pretemporada 2026/27**, dividido en dos subgrupos por club (**CD Leganés**, 8 fotografías · **Getafe CF**, 4) en rejilla de dos columnas. Todo con *lightbox* nativo a pantalla completa.
3. **Portfolio Vídeo** — Orden: **Reel Sporting** (pieza principal, vertical 9:16) → **Getafe – Conference** (rejilla 2×2 de clips en bucle) → **Atlético Madrileño** (clip destacado + rejilla 2×2) → videoclip *Amapolas* con su galería de stills → bloque del EP *Anatomía de una Derrota* → cortometraje y Steadicam. Soporta tanto vídeo de YouTube (*lazy load*) como **vídeo local `.mp4`** (clips de retransmisiones deportivas y reel).
4. **Sobre mí** — Bloque *image-led* con retrato principal, texto de perfil e imagen secundaria de carácter autoral (encuadre cinematográfico de tránsito), más tabla de datos de contacto.
5. **Experiencia** — Línea temporal con animación de entrada por *scroll*.
6. **Contacto** — Enlaces directos (teléfono, email, Instagram).

---

##  Características Principales

* **Diseño Fílmico Minimalista:** Paleta tonal cruda (`#ebebe7` y `#111110`) combinada con un acento rojo profundo (`#b6282d`) inspirado en indicadores de grabación (*Rec*).
* **Portada Escaparate:** El nombre domina la portada y el mejor trabajo se muestra de inmediato, sin obligar al usuario a navegar para ver una pieza.
* **Film Ticker Continuo:** Marquesina infinita en CSS nativo acelerada por hardware (`will-change: transform`) para mostrar áreas de especialización sin penalizar rendimiento.
* **Lazy Load de Vídeo Inteligente:** Los fragmentos de YouTube no cargan iframes ni dependencias externas de forma masiva en el inicio. Se renderizan dinámicamente tras la interacción del usuario, reduciendo peticiones de red y optimizando las métricas **Core Web Vitals** (LCP, TTI).
* **Reproducción de Vídeo Local:** Soporte para clips `.mp4` propios (p. ej. retransmisiones deportivas) mediante un *loader* diferido equivalente al de YouTube.
* **Lightbox Nativo Integrado:** Visualización de capturas y composiciones fotográficas a pantalla completa sin librerías de terceros (Vanilla JS, cierre con `ESC`).
* **Scroll-Spy Automático:** Sincronización en tiempo real mediante `IntersectionObserver` entre la posición del scroll y los enlaces activos de navegación.
* **Layout Adaptativo (responsive):** Diseño fluido para escritorio, tablet y móvil mediante *breakpoints* (980 px / 600 px) y tipografía con `clamp()`. El portfolio de foto se agrupa por reportaje y cada grupo usa una rejilla de celdas 16:9 iguales (2×2 en escritorio, 1 columna por debajo de 600 px) para que los grupos de cuatro fotos queden siempre parejos; el vídeo destacado va contenido y centrado, y el menú colapsa en hamburguesa.
* **Accesibilidad:** Navegación semántica (`aria-label`, `aria-modal`), respeto a `prefers-reduced-motion` y control por teclado del lightbox.

---

##  Stack Tecnológico

* **HTML5:** Estructuración semántica y accesible (`aria-label`, secciones independientes).
* **CSS3 Custom Properties:** Arquitectura basada en *design tokens* centralizados para fuentes, colores y rejillas.
* **Vanilla JavaScript:** Control de flujos de UI, manipulación del DOM e integración diferida de vídeo (YouTube y `.mp4` local).

Sin frameworks ni dependencias de *build*: el sitio es un único `index.html` autocontenido.

---

##  Estructura de Archivos

```text
├── index.html                      # Documento principal (HTML + CSS + JS embebidos)
├── README.md
└── resources/
    ├── fotografias/
    │   ├── hero-camiseta.jpg           # fotografía de portada (escaparate)
    │   ├── pret-leganes-01..04.jpg     # Pretemporada 2026/27 — presentación en el CD Leganés
    │   ├── pret-leganes-05..08.jpg     # Pretemporada 2026/27 — partido del CD Leganés
    │   ├── pret-getafe-01..04.jpg      # Pretemporada 2026/27 — fichajes del Getafe CF
    │   ├── amapolas-still-01..07.jpg   # stills del videoclip "Amapolas"
    │   ├── reel-sporting.jpg           # póster del Reel del Sporting (vertical)
    │   ├── atleti-destacado.jpg        # póster del clip destacado del Atlético
    │   ├── atleti-loop-01..04.jpg      # pósters de la rejilla en bucle del Atlético
    │   ├── getafe-conf-01..04.jpg      # pósters de la rejilla en bucle del Getafe (Conference)
    │   ├── profile-picture.jpeg        # retrato principal de José ("Sobre mí")
    │   ├── sobre-mi-02.jpg             # imagen secundaria de "Sobre mí" (encuadre de tránsito)
    │   └── portada-album.jpeg          # portada del EP "Anatomía de una Derrota"
    └── videos/
        ├── reel-sporting.mp4           # Reel del Sporting (720×1280 vertical, con audio)
        ├── atleti-destacado.mp4        # clip destacado del Atlético (1080p, con audio)
        ├── atleti-loop-01..04.mp4      # rejilla 2×2 del Atlético en bucle (720p, mudos)
        └── getafe-conf-01..04.mp4      # rejilla 2×2 del Getafe en Conference (720p, mudos)
```

> **Estado de los assets:** todos los materiales están incluidos. Clips del Atlético y del Getafe optimizados (MOV→MP4 H.264 con `faststart`; los destacados conservan audio AAC y las rejillas 2×2 van sin pista de audio, con `<video autoplay muted loop>`). El Reel del Sporting se reescala a 720×1280 (CRF 26) para no disparar el peso del repositorio. Fotografías a 1920 px de ancho —el póster vertical del reel a 1080×1920—, JPEG q82 y sin metadatos EXIF. El bloque "Anatomía de una Derrota" integra reproductores de Spotify embebidos (single + EP).
