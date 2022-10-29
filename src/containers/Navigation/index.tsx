import NavLink from '../../components/NavLink';
import routes from '../../app/routes';

import './style.scss';
import { useState } from 'react';

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <button className="nav-btn" onClick={handleToggle}>
        {navbarOpen ? 'X' : '>'}
      </button>
      <nav className={`nav ${navbarOpen ? '' : 'hidden'}`}>
        <p>Меню</p>
        <ul>
          {routes.map((item, index) => {
            return <NavLink item={item} index={index} key={index}></NavLink>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
