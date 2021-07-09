export const NavIconToggleMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="navbar-btn" onClick={onClick}>
      <div className="btn-container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};
