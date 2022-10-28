import Address from '../containers/Address';
import Home from '../containers/Home';

export const routes = [
  {
    title: 'Главная',
    path: '/',
    component: Home,
    icon: './home.svg',
  },
  {
    title: 'Поиск адресов',
    path: '/address',
    component: Address,
    icon: 'search.svg',
  },
  {
    title: 'Таблицы',
    path: '/mock-link',
    component: Home,
    icon: 'tables.svg',
  },
  {
    title: 'Календарь',
    path: '/mock-link',
    component: Home,
    icon: 'calendar.svg',
  },
  {
    title: 'Карты',
    path: '/mock-link',
    component: Home,
    icon: 'map.svg',
  },
  {
    title: 'Виджеты',
    path: '/mock-link',
    component: Home,
    icon: 'widgets.svg',
  },
  {
    title: 'Настройки',
    path: '/mock-link',
    component: Home,
    icon: 'settings.svg',
    child: [
      {
        title: 'Настройки профиля',
        path: '/mock-link',
        component: Home,
        icon: 'user.svg',
      },
      {
        title: 'Управление финансами',
        path: '/mock-link',
        component: Home,
        icon: 'finances.svg',
      },
    ],
  },
  {
    title: 'Выход',
    path: '/mock-link',
    component: Home,
    icon: 'exit.svg',
  },
];

export default routes;
