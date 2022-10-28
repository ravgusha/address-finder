import NavLink from '../../components/NavLink';
import routes from '../../app/routes';

import './style.scss';

const Navigation = () => {
  return (
    <nav>
      <p>Меню</p>
      <ul>
        {routes.map((item, index) => {
          return (
            <NavLink item={item} index={index} key={index}></NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
