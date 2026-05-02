import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Safiro Nails</h3>
            <p>Realzando tu belleza, una uña a la vez.</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><a href={`${import.meta.env.BASE_URL}#about`}>Nosotros</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#services`}>Servicios</a></li>
              <li><Link to="/galeria">Galería</Link></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/safiro__nails?igsh=MTczb3YweW52bXQ3ZA==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Safiro Nails. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
