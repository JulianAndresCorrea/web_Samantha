import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = '573052521425'; // WhatsApp Medellin, Colombia
  const message = 'Hola Safiro Nails! Me gustaría agendar una cita.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <MessageCircle className="whatsapp-icon" size={32} />
    </a>
  );
}
