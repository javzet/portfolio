import { Children } from '../../types';

export const NavButton = ({ children }: { children: Children }) => {
  return (
    <a href="#" className="navbar-item">
      {children}
    </a>
  );
};


