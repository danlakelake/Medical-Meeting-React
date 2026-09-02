import { useState } from 'react';
import logo from '../assets/medical-meeting-logo.svg';
import { Menu } from 'lucide-react';

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between p-8 shadow-lg">
        <a href="#" className="flex items-center gap-3 text-primary">
          <img src={logo} alt="Medical Meeting" className="w-10 h-10" />
          <span>Medical Meeting</span>
        </a>
        <button className="md:hidden text-primary">
          <Menu size={30}/>
        </button>
        <ul className="hidden md:flex gap-8 text-primary">
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
