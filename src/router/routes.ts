export const routes = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/layout',
    redirect: '/layout/race',
    component: () => import('/@/layout/basic/index.vue'),
    children: [
      {
        name: 'home',
        path: '/layout/home',
        component: () => import('/@/views/home/index.vue'),
        meta: {
          title: '竞赛组织',
          path: '/layout/home',
          keepAlive: true,
          tabIndex: 2,
        },
      },
      {
        name: 'race',
        path: '/layout/race',
        component: () => import('/@/views/race/index.vue'),
        meta: {
          title: '职工竞赛',
          path: '/layout/race',
          keepAlive: true,
          tabIndex: 0,
        },
      },
      {
        name: 'content',
        path: '/layout/content',
        component: () => import('/@/views/content/index.vue'),
        meta: {
          title: '职工竞赛',
          path: '/layout/content',
          keepAlive: true,
          tabIndex: 1,
        },
      },
      {
        name: 'info',
        path: '/layout/info',
        component: () => import('/@/views/info/index.vue'),
        meta: {
          title: '职工竞赛',
          path: '/layout/info',
          keepAlive: true,
          tabIndex: 3,
        },
      },
      {
        name: 'approval',
        path: '/layout/approval',
        component: () => import('/@/views/approval/index.vue'),
        meta: {
          title: '职工竞赛',
          path: '/layout/approval',
          keepAlive: true,
          tabIndex: 4,
        },
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('/@/views/login/index.vue'),
    meta: {
      title: '',
      keepAlive: true,
    },
  },
];

export default routes;
