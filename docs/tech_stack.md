# 🛠️ Tech Stack - Safiro Nails

Este documento detalla y justifica las tecnologías seleccionadas para el desarrollo de la aplicación.

## Core Framework
- **React 19:** Se utiliza la versión más reciente de React para aprovechar las mejoras en rendimiento y la simplificación de APIs. 
- **Vite:** Como entorno de desarrollo y empaquetador, elegido por su extrema rapidez y excelente soporte para variables de entorno.

## Navegación
- **React Router v7:** Gestiona la navegación multi-página (Inicio y Galería Completa). Se utiliza `HashRouter` para garantizar compatibilidad total con el despliegue en GitHub Pages sin necesidad de configuración adicional en el servidor.

## Comunicación con Datos (API)
- **Google Drive API v3:** La pieza central de la aplicación. Permite que la galería sea autogestionable por el cliente simplemente subiendo fotos a carpetas de Drive.
- **Axios:** Para realizar las peticiones HTTP a la API de Google de forma limpia y con manejo de errores robusto.

## Estilo y Diseño
- **CSS3 Vanilla:** Se ha optado por no usar frameworks de utilidad como Tailwind para mantener un control total sobre el diseño premium y evitar dependencias innecesarias que aumenten el peso del bundle.
- **Lucide React:** Set de iconos ligero y estético.

## Despliegue y CI/CD
- **GitHub Pages:** Hosting gratuito y eficiente para SPAs estáticas.
- **GitHub Actions:** Automatización del build y despliegue, permitiendo el manejo seguro de secretos (API Keys) que no deben estar en el código fuente.

---
**Última actualización:** 2026-05-04
**Estado:** Confirmado
