import AddressPage from '../containers/AddressPage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';

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
    path: '/tables',
    component: NotFoundPage,
    icon: 'tables.svg',
  },
  {
    title: 'Календарь',
    path: '/calendar',
    component: NotFoundPage,
    icon: 'calendar.svg',
  },
  {
    title: 'Карты',
    path: '/map',
    component: NotFoundPage,
    icon: 'map.svg',
  },
  {
    title: 'Виджеты',
    path: '/widgets',
    component: NotFoundPage,
    icon: 'widgets.svg',
  },
  {
    title: 'Настройки',
    path: '/settings',
    component: NotFoundPage,
    icon: 'settings.svg',
    child: [
      {
        title: 'Настройки профиля',
        path: '/user-settings',
        component: NotFoundPage,
        icon: 'user.svg',
      },
      {
        title: 'Управление финансами',
        path: '/finances',
        component: NotFoundPage,
        icon: 'finances.svg',
      },
    ],
  },
  {
    title: 'Выход',
    path: '/exit',
    component: NotFoundPage,
    icon: 'exit.svg',
  },
];

export default routes;
