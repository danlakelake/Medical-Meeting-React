import { useState, useEffect } from 'react';
import logo from '../assets/medical-meeting-logo.svg';
import { Menu, X } from 'lucide-react';
import { siGithub } from 'simple-icons';

const sections = [
  { id: 'home', label: null },
  { id: 'about', label: 'Quienes Somos' },
  { id: 'specialties', label: 'Especialidades' },
  { id: 'testimonials', label: 'Testimonios' },
  { id: 'location', label: 'Ubicación' },
  { id: 'contact', label: 'Contacto' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      },
    );

    sectionElements.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });
  }, []);

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
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={
                  activeSection === section.id
                    ? 'text-secondary'
                    : 'text-primary'
                }
              >
                {section.label}
              </a>
            </li>
          ))}
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
