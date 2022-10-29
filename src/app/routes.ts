import AddressPage from '../containers/AddressPage';
import HomePage from '../containers/HomePage';

export const routes = [
  {
    title: 'Главная',
    path: '/',
    component: HomePage,
    icon: './home.svg',
  },
  {
    title: 'Поиск адресов',
    path: '/address',
    component: AddressPage,
    icon: 'search.svg',
  },
  {
    title: 'Таблицы',
    path: '/mock-link',
    component: HomePage,
    icon: 'tables.svg',
  },
  {
    title: 'Календарь',
    path: '/mock-link',
    component: HomePage,
    icon: 'calendar.svg',
  },
  {
    title: 'Карты',
    path: '/mock-link',
    component: HomePage,
    icon: 'map.svg',
  },
  {
    title: 'Виджеты',
    path: '/mock-link',
    component: HomePage,
    icon: 'widgets.svg',
  },
  {
    title: 'Настройки',
    path: '/mock-link',
    component: HomePage,
    icon: 'settings.svg',
    child: [
      {
        title: 'Настройки профиля',
        path: '/mock-link',
        component: HomePage,
        icon: 'user.svg',
      },
      {
        title: 'Управление финансами',
        path: '/mock-link',
        component: HomePage,
        icon: 'finances.svg',
      },
    ],
  },
  {
    title: 'Выход',
    path: '/mock-link',
    component: HomePage,
    icon: 'exit.svg',
  },
];

export default routes;
