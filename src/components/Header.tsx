import { useState } from 'react';
import logo from '../assets/medical-meeting-logo.svg';
import { Menu, X } from 'lucide-react';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between p-8 shadow-lg">
        <a href="#" className="flex items-center gap-3 text-primary">
          <img src={logo} alt="Medical Meeting" className="w-10 h-10" />
          <span>Medical Meeting</span>
        </a>
        <button 
        className="md:hidden text-primary cursor-pointer transition-transform duration-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col w-full md:flex md:flex-row md:w-auto gap-5 text-primary mt-5`}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Quienes Somos</a>
          </li>
          <li>
            <a href="#">Especialidades</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
