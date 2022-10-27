export const NavigationData = [
  {
    title: 'Главная',
    path: '/',
    icon: './home.svg',
  },
  {
    title: 'Поиск адресов',
    path: '/address',
    icon: 'search.svg',
  },
  {
    title: 'Таблицы',
    path: '/',
    icon: 'tables.svg',
  },
  {
    title: 'Календарь',
    path: '/',
    icon: 'calendar.svg',
  },
  {
    title: 'Карты',
    path: '/',
    icon: 'map.svg',
  },
  {
    title: 'Виджеты',
    path: '/',
    icon: 'widgets.svg',
  },
  {
    title: 'Настройки',
    path: '/',
    icon: 'settings.svg',
    child: [
      {
        title: 'Настройки профиля',
        path: '/',
        icon: 'user.svg',
      },
      {
        title: 'Управление финансами',
        path: '/',
        icon: 'finances.svg',
      },
    ],
  },
  {
    title: 'Выход',
    path: '/',
    icon: 'exit.svg',
  },
];
