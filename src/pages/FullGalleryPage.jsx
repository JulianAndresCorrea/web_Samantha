import { useEffect } from 'react';
import Gallery from '../components/Gallery';

export default function FullGalleryPage() {
  // Hacer scroll hacia arriba cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="full-gallery-page">
      {/* Hero simple para la página interna */}
      <section className="internal-hero" style={{ 
        backgroundColor: 'var(--color-background)',
        padding: 'var(--spacing-3xl) 0',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="container">
          <h1 className="section-title">Galería</h1>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Explora nuestros diseños y encuentra el estilo perfecto para ti
          </p>
        </div>
      </section>

      {/* Sección principal con filtros y galería */}
      <section className="gallery-content section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          {/* El componente Gallery ya trae la lógica de los filtros */}
          <Gallery showFilters={true} />
        </div>
      </section>
    </div>
  );
}
