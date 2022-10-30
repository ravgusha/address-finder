import { useContext } from 'react';
import Context from '../../context';

import './style.scss';

const BurgerMenu = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useContext(Context);

  return (
    <div
      className={`burger ${isNavbarOpen ? 'open' : ''}`}
      onClick={() => {
        setIsNavbarOpen(!isNavbarOpen);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
