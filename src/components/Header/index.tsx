import HeaderUser from '../HeaderUser';
import Logo from '../Logo';

import './style.scss';

const Header = () => {
  return (
    <header>
      <Logo />
      <HeaderUser name="Имя Фамилия"/>
    </header>
  );
};

export default Header;
