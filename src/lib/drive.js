import axios from 'axios';

// Limpiamos los valores de las variables por si vienen con espacios desde los Secrets de GitHub
const API_KEY = (import.meta.env.VITE_DRIVE_API_KEY || '').trim();

export const CATEGORIES = {
  'Semipermanente': (import.meta.env.VITE_DRIVE_FOLDER_SEMIPERMANENTE || '').trim(),
  'Press-On': (import.meta.env.VITE_DRIVE_FOLDER_PRESS_ON || '').trim(),
  'Polygel': (import.meta.env.VITE_DRIVE_FOLDER_POLYGEL || '').trim(),
  'Manicura-Tradicional': (import.meta.env.VITE_DRIVE_FOLDER_TRADICIONAL || '').trim(),
};

const BASE_URL = 'https://www.googleapis.com/drive/v3/files';

/**
 * Obtiene las imágenes de una carpeta específica
 */
export const getImagesByCategory = async (categoryName, folderId) => {
  if (!API_KEY || !folderId || folderId.includes('id_carpeta')) {
    console.warn(`Configuración incompleta para la categoría: ${categoryName}`);
    return [];
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
        key: API_KEY,
        fields: 'files(id, name, mimeType, thumbnailLink, webContentLink)',
        orderBy: 'createdTime desc',
        pageSize: 50,
        // Flags necesarios si las carpetas están en una unidad compartida
        supportsAllDrives: true,
        includeItemsFromAllDrives: true,
      }
    });

    if (!response.data.files) return [];

    return response.data.files.map(file => ({
      ...file,
      category: categoryName
    }));
  } catch (error) {
    // Log más descriptivo para ayudar al usuario a diagnosticar
    const status = error.response?.status;
    const message = error.response?.data?.error?.message || error.message;
    
    console.error(`Error en categoría ${categoryName} (${status}): ${message}`);
    
    if (status === 404) {
      console.error(`Sugerencia: Verifica que el ID de la carpeta '${folderId}' sea correcto y que esté compartida como "Cualquier persona con el enlace".`);
    } else if (status === 403) {
      console.error(`Sugerencia: Verifica que la API de Google Drive esté habilitada en Google Cloud Console y que la API Key no tenga restricciones de IP/Referer incorrectas.`);
    }
    
    throw error; // Re-lanzamos para que el componente sepa que hubo un error real
  }
};

/**
 * Obtiene las imágenes de TODAS las categorías combinadas
 */
export const getAllImages = async () => {
  try {
    const promises = Object.entries(CATEGORIES).map(([name, id]) => {
      return getImagesByCategory(name, id);
    });

    const results = await Promise.all(promises);
    return results.flat();
  } catch (error) {
    console.error("Error general cargando la galería:", error);
    return null; // Retornamos null para indicar error de conexión, no solo lista vacía
  }
};
