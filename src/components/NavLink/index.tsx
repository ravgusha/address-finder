import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

interface INavLink {
  item: {
    title: string;
    path: string;
    component: () => JSX.Element;
    icon: string;
    child?: {
      title: string;
      path: string;
      component: () => JSX.Element;
      icon: string;
    }[];
  };
  index: number;
}

const NavLink = ({ item, index }: INavLink) => {
  const [nestedList, setNestedList] = useState(false);

  const showNestedList = () => setNestedList(!nestedList);

  // Проверяем, есть ли вложенные роуты
  return item.child ? (
    <li key={index}>
      <button style={{ backgroundImage: `url(${item.icon})` }} className={nestedList ? 'visible' : ''} onClick={showNestedList}>
        {item.title}
      </button>
      <ul className={nestedList ? 'visible' : ''}>
        {item.child.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} style={{ backgroundImage: `url(${item.icon})` }}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  ) : (
    <li key={index}>
      <Link to={item.path} style={{ backgroundImage: `url(${item.icon})` }}>
        <span>{item.title}</span>
      </Link>
    </li>
  );
};

export default NavLink;
