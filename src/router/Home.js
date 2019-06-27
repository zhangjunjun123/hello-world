let routes = [
  {
    path:'',
    component: resolve => require(['@/pages/Index'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
  {
    path:'index',
    component: resolve => require(['@/pages/Index'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF']
    }
  },
]
export default routes