let routes = [
  {
    path:'',
    name: 'Index', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
    component: resolve => require(['@/pages/Index'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'index',
    name: 'Index', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
    component: resolve => require(['@/pages/Index'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
]
export default routes