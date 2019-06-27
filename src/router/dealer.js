let routes = [
    {
        path: 'dealer/list',
        name: 'DealerList', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
        component: resolve => require(['@/pages/dealer/List'], resolve),
        meta: {
        auth: true,
        roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_DEALER_ADMIN']
        }
    },
    {
        path: 'dealer/fee/list',
        name: 'FeeList', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
        component: resolve => require(['@/pages/dealer/fee/List'], resolve),
        meta: {
        auth: true,
        roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_DEALER_ADMIN']
        }
    }
]
export default routes