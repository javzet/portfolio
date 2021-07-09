import { NavButton } from './subcomponents/Navbutton';
import { NavIconToggleMenu } from './subcomponents/NavIconToggleMenu';
export const Header = () => {
  const handleToggleIconClick = () => {
    const menuBtn = document.querySelector('.navbar-btn');
    const showMenu = document.querySelector('.navbar');

    menuBtn?.classList.toggle('close-btn');
    showMenu?.classList.toggle('show');
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>Javier Zetina</h2>
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
