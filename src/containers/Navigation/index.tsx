import { useContext, useEffect, useState } from 'react';
import NavLink from '../../components/NavLink';
import routes from '../../app/routes';
import Context from '../../context';

import './style.scss';

const Navigation = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    // Держать навигацию всегда открытой при width > 768
    width > 768 && handleNavbarToggle();
  }, [width]);

  function handleNavbarToggle() {
    setIsNavbarOpen(true);
  }

  const { isNavbarOpen, setIsNavbarOpen } = useContext(Context);

  return (
    <nav className={`nav ${isNavbarOpen ? '' : 'hidden'}`}>
      <p>Меню</p>
      <ul>
        {routes.map((item, index) => {
          return <NavLink item={item} index={index} key={index}></NavLink>;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
