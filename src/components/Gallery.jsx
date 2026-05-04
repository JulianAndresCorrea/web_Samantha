import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { getAllImages, CATEGORIES } from '../lib/drive';
import './Gallery.css';

export default function Gallery({ limit, showFilters = false }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todas');

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true);
      const driveImages = await getAllImages();
      
      if (driveImages === null) {
        // Error real de conexión/configuración con Drive
        setError(true);
        setImages([]);
      } else if (driveImages && driveImages.length > 0) {
        setImages(driveImages);
        setError(false);
      } else {
        // Fallback mock images si no hay imágenes o la configuración es la de por defecto
        setImages([
          { id: '1', webContentLink: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800', name: 'Manicura 1', category: 'Semipermanente' },
          { id: '2', webContentLink: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800', name: 'Manicura 2', category: 'Press-On' },
          { id: '3', webContentLink: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800', name: 'Manicura 3', category: 'Polygel' },
          { id: '4', webContentLink: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&q=80&w=800', name: 'Manicura 4', category: 'Manicura-Tradicional' },
          { id: '5', webContentLink: 'https://images.unsplash.com/photo-1632835848520-2139e8020a11?auto=format&fit=crop&q=80&w=800', name: 'Manicura 5', category: 'Semipermanente' },
          { id: '6', webContentLink: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&q=80&w=800', name: 'Manicura 6', category: 'Press-On' },
        ]);
      }
      setLoading(false);
    }

    fetchGallery();
  }, []);

  const openLightbox = (img) => setSelectedImage(img);
  const closeLightbox = () => setSelectedImage(null);

  const filteredImages = activeFilter === 'Todas' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const displayedImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  if (loading) {
    return (
      <div className="gallery-loading">
        <Loader2 className="spinner" size={40} />
        <p>Cargando galería...</p>
      </div>
    );
  }

  return (
    <>
      {showFilters && (
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'Todas' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Todas')}
          >
            Todas
          </button>
          {Object.keys(CATEGORIES).map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-grid">
        {displayedImages.map((img) => {
          const imageUrl = img.webContentLink || img.thumbnailLink?.replace('=s220', '=s800');
          
          return (
            <div 
              key={img.id} 
              className="gallery-item"
              onClick={() => openLightbox(img)}
            >
              <img 
                src={imageUrl} 
                alt={img.name || 'Trabajo de manicura'} 
                loading="lazy" 
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <span>Ver foto</span>
              </div>
            </div>
          );
        })}
      </div>

      {displayedImages.length === 0 && (
        <p className="no-images-text">
          {error 
            ? "Hubo un error al conectar con Google Drive. Por favor, verifica la configuración." 
            : "No hay imágenes en esta categoría todavía."}
        </p>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.webContentLink || selectedImage.thumbnailLink?.replace('=s220', '=s1200')} 
              alt={selectedImage.name} 
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
