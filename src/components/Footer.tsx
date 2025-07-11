import React from 'react';
import '../App.css'; // adjust if path differs

const Footer: React.FC = () => {
  return (
    <footer>
      <p>© 2024 Avneesh | Made with ❤️</p>

      <div className="footer-links">
        <a href="https://github.com/avneeshkaur" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/avneesh-kaur-2675751a2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/assets/Avneesh-Kaur-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>

      <div className="footer-contact">
        <span>
          📧 <a href="mailto:avneeshkaur92@gmail.com" className="footer-link">avneeshkaur92@gmail.com</a>
        </span>
        <span>
          📞 <a href="tel:+917903291238" className="footer-link">+91 7903291238</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;