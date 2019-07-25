let routes = [
    {
        path: 'product/supplier/list',
        name: 'SupplierList', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
        component: resolve => require(['@/pages/product/supplier/List'], resolve),
        meta: {
          auth: true,
          roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_SUP_ADMIN']
        }
      },
     {
        path: 'product/catalog/list',
        name: 'StaffList', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
        component: resolve => require(['@/pages/product/catalog/List'], resolve),
        meta: {
          auth: true,
          roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_PRD_ADMIN']
        }
      },
      {
        path: 'product/product/list',
        name: 'ProductList', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
        component: resolve => require(['@/pages/product/product/List'], resolve),
        meta: {
          auth: true,
          roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_PRD_ADMIN']
        }
      },
]
export default routes