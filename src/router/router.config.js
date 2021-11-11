export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/campus',
        name: 'Campus',
        component: () => import('@/views/home/campus'),
        meta: { title: '大学', keepAlive: false }
      },
      {
        path: '/publish',
        name: 'Publish',
        component: () => import('@/views/home/publish'),
        meta: { title: '发布', keepAlive: false }
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/home/message'),
        meta: { title: '消息', keepAlive: false }
      },
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('@/views/home/userInfo'),
        meta: { title: '我的', keepAlive: false }
      }
    ]
  },
  {
    path: '/fire',
    name: 'Fire',
    component: () => import('@/views/fnModules/fire'),
    meta: { title: 'fire', keepAlive: false }
  },
  {
    path: '/like',
    name: 'Like',
    component: () => import('@/views/fnModules/like'),
    meta: { title: 'like', keepAlive: false }
  },
  {
    path: '/coin',
    name: 'Coin',
    component: () => import('@/views/fnModules/coin'),
    meta: { title: 'coin', keepAlive: false }
  },
  {
    path: '/run',
    name: 'Run',
    component: () => import('@/views/fnModules/run'),
    meta: { title: 'run', keepAlive: false }
  },
  {
    path: '/gift',
    name: 'Gift',
    component: () => import('@/views/fnModules/gift'),
    meta: { title: 'gift', keepAlive: false }
  },
  {
    path: '/umbrella',
    name: 'Umbrella',
    component: () => import('@/views/fnModules/umbrella'),
    meta: { title: 'umbrella', keepAlive: false }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/home/login'),
    meta: { title: 'login', keepAlive: false }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/home/register'),
    meta: { title: 'register', keepAlive: false }
  },
  {
    path: '/send_coin',
    name: 'send_coin',
    component: () => import('@/views/function/send_coin'),
    meta: { title: 'send_coin', keepAlive: false }
  },
  {
    path: '/send_fire',
    name: 'send_fire',
    component: () => import('@/views/function/send_fire'),
    meta: { title: 'send_fire', keepAlive: false }
  },
  {
    path: '/send_like',
    name: 'send_like',
    component: () => import('@/views/function/send_like'),
    meta: { title: 'send_like', keepAlive: false }
  }
]
