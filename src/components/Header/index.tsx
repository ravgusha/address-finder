import BurgerMenu from '../BurgerMenu';
import HeaderUser from '../HeaderUser';
import Logo from '../Logo';

import './style.scss';

const Header = () => {
  return (
    <header>
      <BurgerMenu />
      <Logo />
      <HeaderUser name="Имя Фамилия" />
    </header>
  );
};

export default Header;
