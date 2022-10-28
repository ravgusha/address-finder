import { useState } from 'react';
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
  const [nestedList, setNestedList] = useState(false);

  const showNestedList = () => setNestedList(!nestedList);

  return (
    <li key={index}>
      <Link to={item.path}>
        <img src={item.icon} />
        <span>{item.title}</span>
        {item.child && (
          <button className={nestedList ? 'visible' : ''} onClick={showNestedList}></button>
        )}
      </Link>
      {item.child && (
        <ul className={nestedList ? 'visible' : ''}>
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
