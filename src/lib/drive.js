import axios from 'axios';

const API_KEY = import.meta.env.VITE_DRIVE_API_KEY;

export const CATEGORIES = {
  'Semipermanente': import.meta.env.VITE_DRIVE_FOLDER_SEMIPERMANENTE,
  'Press-On': import.meta.env.VITE_DRIVE_FOLDER_PRESS_ON,
  'Polygel': import.meta.env.VITE_DRIVE_FOLDER_POLYGEL,
  'Manicura-Tradicional': import.meta.env.VITE_DRIVE_FOLDER_TRADICIONAL,
};

const BASE_URL = 'https://www.googleapis.com/drive/v3/files';

/**
 * Obtiene las imágenes de una carpeta específica
 */
export const getImagesByCategory = async (categoryName, folderId) => {
  if (!API_KEY || !folderId) return [];

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
        key: API_KEY,
        fields: 'files(id, name, mimeType, thumbnailLink, webContentLink)',
        orderBy: 'createdTime desc',
        pageSize: 50
      }
    });

    // Añadir la categoría a cada imagen para el filtrado
    return response.data.files.map(file => ({
      ...file,
      category: categoryName
    }));
  } catch (error) {
    console.error(`Error fetching category ${categoryName}:`, error);
    return [];
  }
};

/**
 * Obtiene las imágenes de TODAS las categorías combinadas
 */
export const getAllImages = async () => {
  const promises = Object.entries(CATEGORIES).map(([name, id]) => {
    return getImagesByCategory(name, id);
  });

  const results = await Promise.all(promises);
  // Flatten array and sort by something if we had dates, for now just flatten
  return results.flat();
};
