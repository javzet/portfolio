import { NavButton } from './subcomponents/Navbutton';
import { NavIconToggleMenu } from './subcomponents/NavIconToggleMenu';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useRef } from 'react';

export const Header = () => {
  const handleToggleIconClick = () => {
    const menuBtn = document.querySelector('.navbar-btn');
    const showMenu = document.querySelector('.navbar');

    menuBtn?.classList.toggle('close-btn');
    showMenu?.classList.toggle('show');
  };

  const header = useRef<HTMLElement>(null);

  useIntersectionObserver(
    () => {
      console.log('a');
      header.current?.classList.remove('scroll');
      header.current?.classList.add('static');
    },
    () => {
      header.current?.classList.remove('static');
      header.current?.classList.add('scroll');
      console.log('b');
    },
    '.banner',
    { threshold: 0, rootMargin: '-10px 0px' }
  );

  return (
    <header className="header" ref={header}>
      <div className="logo">
        <img
          src="/logo-jz.png"
          alt="Javier Zetina logo"
          title="Javier Zetina"
        />
        <h2>Developer</h2>
      </div>
      <nav className="navbar">
        <NavButton>Hello</NavButton>
        <NavButton>About me</NavButton>
        <NavButton>My work</NavButton>
        <NavButton>Contact</NavButton>
      </nav>
      <NavIconToggleMenu onClick={handleToggleIconClick} />
    </header>
  );
};
