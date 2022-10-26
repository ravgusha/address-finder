import { Link } from 'react-router-dom';
import './style.scss';

interface INavLink {
  item: {
    title: string;
    path: string;
    icon: string;
    child?: {
      title: string;
      path: string;
      icon: string;
    }[];
  };
  index: number;
}

const NavLink = ({ item, index }: INavLink) => {
  return (
    <li key={index}>
      <Link to={item.path}>
        <img src={item.icon} />
        <span>{item.title}</span>
        {item.child && <button></button>}
      </Link>
      {item.child && (
        <ul>
          {item.child.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <img src={item.icon} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
