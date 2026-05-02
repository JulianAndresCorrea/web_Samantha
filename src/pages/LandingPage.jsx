import { Link } from 'react-router-dom';
import './LandingPage.css';
import Gallery from '../components/Gallery';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Descubre el arte en <span className="highlight">tus manos</span></h1>
            <p>Especialistas en uñas acrílicas, semipermanente y diseños únicos. Reserva tu cita y déjate consentir.</p>
            <a href="https://wa.me/573052521425?text=Hola%20Safiro%20Nails!%20Me%20gustar%C3%ADa%20agendar%20una%20cita." target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar Cita
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-padding">
        <div className="container">
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="section-subtitle">Pasión por los detalles y el cuidado de tus uñas</p>
          <div className="about-content">
            <div className="about-text">
              <h3>Safiro Nails</h3>
              <p>Con años de experiencia en el mundo de la manicura, en Safiro Nails nos dedicamos a ofrecer servicios de alta calidad. Utilizamos los mejores productos del mercado para garantizar que tus uñas no solo se vean hermosas, sino que también se mantengan sanas y fuertes.</p>
              <p>Nuestro objetivo es que cada cliente salga con una sonrisa y unas uñas perfectas que reflejen su estilo personal.</p>
            </div>
            <div className="about-image-placeholder">
              <div className="decor-box">
                {/* Logo en la sección Nosotros */}
                <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Safiro Nails" className="about-logo" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Elige el servicio perfecto para ti</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Semipermanente</h3>
              <p>Esmaltado de larga duración que mantiene el brillo y el color intacto por semanas.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💅</div>
              <h3>Press-On</h3>
              <p>Uñas postizas a medida, listas para lucir en minutos con un acabado profesional.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Polygel</h3>
              <p>La resistencia del acrílico y la flexibilidad del gel en una técnica moderna y duradera.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌸</div>
              <h3>Manicura Tradicional</h3>
              <p>Limpieza profunda, cuidado de cutículas e hidratación para unas manos saludables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section section-padding">
        <div className="container">
          <h2 className="section-title">Nuestra Galería</h2>
          <p className="section-subtitle">Inspírate con nuestros últimos trabajos. Las imágenes se actualizan automáticamente desde nuestro Drive.</p>
          <Gallery limit={6} showFilters={false} />
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/galeria" className="btn btn-primary">
              Ver Más..
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
