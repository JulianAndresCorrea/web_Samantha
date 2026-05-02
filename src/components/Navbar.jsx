import { Link } from 'react-router-dom';
import { Scissors } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          {/* Si guardas la imagen en public/logo.jpg se mostrará aquí */}
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Safiro Nails Logo" className="logo-img" style={{ maxHeight: '120px', maxWidth: '300px', width: 'auto', height: 'auto', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
          <div className="logo-text" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
            <Scissors className="logo-icon" />
            <span>Safiro Nails</span>
          </div>
        </Link>
        <nav className="navbar-links">
          <Link to="/">Inicio</Link>
          <a href="#/#about">Nosotros</a>
          <a href="#/#services">Servicios</a>
          <Link to="/galeria">Galería</Link>
        </nav>
      </div>
    </header>
  );
}
