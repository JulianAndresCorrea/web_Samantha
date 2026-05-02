# 💅 Safiro Nails - Landing Page & Galería

![Safiro Nails Banner](public/logo.jpg)

**Safiro Nails** es una aplicación web de una sola página (SPA) moderna, diseñada para un salón de belleza y manicura. Cuenta con un diseño elegante, totalmente responsivo y un sistema de galería dinámico que obtiene automáticamente las imágenes desde carpetas públicas de Google Drive.

## ✨ Características Principales

- **Diseño Moderno y Sofisticado:** Paleta de colores cuidadosamente seleccionada (beige, gris, blanco hueso y toques oscuros) para reflejar elegancia y profesionalismo.
- **Galería Dinámica sin Backend:** Integración directa con la **API de Google Drive**. Las fotos subidas a carpetas específicas de Drive se sincronizan automáticamente en la página web.
- **Filtros por Categoría:** Soporte para filtrar imágenes por tipo de servicio (`Semipermanente`, `Press-On`, `Polygel`, `Manicura Tradicional`).
- **Lightbox Integrado:** Las imágenes de la galería se pueden ampliar para ver los detalles del diseño.
- **Botón Flotante de WhatsApp:** Contacto directo y fácil con un solo clic.

## 🛠️ Tecnologías Utilizadas

- **React 19**
- **Vite** (Entorno de desarrollo y empaquetado rápido)
- **React Router v7** (Para la navegación entre Inicio y Galería)
- **Axios** (Peticiones HTTP a Google Drive)
- **Lucide React** (Íconos vectoriales livianos)
- **CSS3 Vanilla** (Manejo de variables CSS y diseño Mobile-First sin dependencias pesadas)

## 🚀 Configuración y Despliegue Local

Sigue estos pasos para correr el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/safiro-nails.git
cd safiro-nails
```

### 2. Instalar dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado y ejecuta:
```bash
npm install
```

### 3. Configurar Variables de Entorno
Crea un archivo llamado `.env` en la raíz del proyecto (al nivel del `package.json`). Necesitarás obtener una **API Key de Google Cloud** y los **IDs de las carpetas de Google Drive** (deben tener permiso de lectura pública).

Agrega la siguiente configuración a tu archivo `.env`:

```env
VITE_DRIVE_API_KEY=tu_api_key_de_google_aqui
VITE_DRIVE_FOLDER_SEMIPERMANENTE=id_carpeta_semipermanente
VITE_DRIVE_FOLDER_PRESS_ON=id_carpeta_press_on
VITE_DRIVE_FOLDER_POLYGEL=id_carpeta_polygel
VITE_DRIVE_FOLDER_TRADICIONAL=id_carpeta_manicura_tradicional
```

### 4. Ejecutar Servidor de Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

## 📦 Construcción para Producción

Para compilar la aplicación para producción:
```bash
npm run build
```
Los archivos minificados listos para subir a tu hosting se generarán en la carpeta `dist`.

## 📄 Licencia

Este proyecto es para uso privado de **Safiro Nails**.
