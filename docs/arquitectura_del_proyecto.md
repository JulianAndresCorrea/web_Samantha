# 🏗️ Arquitectura del Proyecto - Safiro Nails

## Estructura de Archivos
La organización del proyecto sigue una estructura modular basada en React:

```text
/
├── docs/               # Documentación DDD (Alcance, Diseño, Arquitectura, Stack)
├── public/             # Activos estáticos (Logo, imágenes locales)
├── src/
│   ├── assets/         # Estilos globales e imágenes procesadas
│   ├── components/     # Componentes reutilizables (Navbar, Footer, Galería)
│   ├── lib/            # Utilidades y servicios (Lógica de Drive API)
│   ├── pages/          # Páginas completas (LandingPage, FullGallery)
│   └── App.jsx         # Enrutador principal
├── .env                # Variables locales (ignoradas por Git)
└── deploy.yml          # GitHub Actions para despliegue automático
```

## Flujo de Datos: Integración con Drive
1. **Petición:** Al cargar la galería, `src/lib/drive.js` lanza peticiones concurrentes (usando `Promise.all`) para las 4 categorías.
2. **Seguridad y Limpieza:** Se utiliza una función `cleanDriveId` para sanitizar los IDs provenientes de los secretos de GitHub, permitiendo que incluso enlaces con parámetros (`?usp=sharing`) funcionen correctamente.
3. **Manejo de Errores:** Si la API falla (404/403), el sistema lo captura, loguea una sugerencia de solución en la consola y muestra un mensaje amigable al usuario.
4. **Renderizado:** Los componentes reciben los datos y generan la galería de forma dinámica sin necesidad de una base de datos propia.

## Decisiones Arquitectónicas
- **Zero-Backend:** Se priorizó una arquitectura sin servidor (Serverless) para reducir costos y complejidad de mantenimiento.
- **SPA (Single Page Application):** React Router maneja las rutas en el cliente para una experiencia de navegación instantánea.

---
**Última actualización:** 2026-05-04
**Estado:** Confirmado
