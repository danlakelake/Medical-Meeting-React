import { useState } from 'react';
import logo from '../assets/medical-meeting-logo.svg';
import { Menu, X } from 'lucide-react';
import { siGithub } from 'simple-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white">
      <nav className="section-padding-secondary flex flex-wrap items-center justify-between p-8 shadow-lg">
        <a href="#" className="flex items-center gap-3 text-primary">
          <img src={logo} alt="Medical Meeting" className="w-10 h-10" />
          <span>Medical Meeting</span>
        </a>
        <button
          className="md:hidden text-primary cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="relative block w-[30px] h-[30px]">
            <Menu
              size={30}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen
                  ? 'opacity-0 rotate-90 scale-0'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />

            <X
              size={30}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-0'
              }`}
            />
          </span>
        </button>
        <ul
          className={`flex flex-col w-full md:flex-row md:w-auto gap-5 text-primary overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
          } md:max-h-none md:opacity-100 md:overflow-visible md:mt-5`}
        >
          <li>
            <a href="#about">Quienes Somos</a>
          </li>
          <li>
            <a href="#specialties">Especialidades</a>
          </li>
          <li>
            <a href="#testimonials">Testimonios</a>
          </li>
          <li>
            <a href="#location">Ubicación</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a
              href="https://github.com/danlakelake/Medical-Meeting-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 mx-auto hover:scale-130 mt-4 md:mt-0 hover:rotate-20 transition-transform duration-150"
              >
                <path d={siGithub.path} />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
