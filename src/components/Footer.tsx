import { siFacebook } from 'simple-icons';
import logo from '../assets/medical-meeting-logo.svg';

function Footer() {
  return (
    <section className="section-container p-10 md:p-20">
      <div className="text-center">
        <a href="#" className="text-primary">
          <img
            src={logo}
            alt="Medical Meeting"
            className="w-10 h-10 mb-2 mx-auto"
          />
          <span>Medical Network</span>
        </a>
        <div className="mt-10 text-center">
          <p className="mt-4 text-xl font-bold mb-3">Síguenos</p>
          <a
            href="#"
            aria-label="Facebook"
              className="inline-block text-gray-brands opacity-45 hover:scale-130 transition-transform duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mx-auto"
            >
              <path d={siFacebook.path} />
            </svg>
          </a>
          <p className="mt-5 md:mt-10 text-sm text-gray-brands">
            ©2026 Medical Network. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
