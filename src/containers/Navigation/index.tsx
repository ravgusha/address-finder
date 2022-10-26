import './style.scss';
import { NavigationData } from './NavigationData';
import NavLink from '../../components/NavLink';



const Navigation = () => {
  return (
    <nav>
      <p>Меню</p>
      <ul>
        {NavigationData.map((item, index) => {
          return (
            <NavLink item={item} index={index} key={index}></NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
