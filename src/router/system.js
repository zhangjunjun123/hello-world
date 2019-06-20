let routes = [
  {
    path: 'system/staff/list',
    name: 'StaffList', //定义路由的名称，在做路由跳转时直接指定跳转的路由的name即可
    component: resolve => require(['@/pages/system/staff/List'], resolve),
    meta: {
      auth: true
    }
  },
  /*{
    path: 'system/staff/add',
    component: resolve => require(['@/pages/system/staff/Add'], resolve),
    meta: {
      auth: true
    }
  },
  {
    path: 'system/staff/edit',
    name: 'StaffEdit',
    component: resolve => require(['@/pages/system/staff/Edit'], resolve),
    meta: {
      auth: true
    }
  },
  {
    path: 'system/staff/profile',
    name: 'StaffProfile',
    component: resolve => require(['@/pages/system/staff/Profile'], resolve),
    meta: {
      auth: true
    }
  },
  */
  {
    path: 'system/role/list',
    name: 'StaffRoleList',
    component: resolve => require(['@/pages/system/role/List'], resolve),
    meta: {
      auth: true
    }
  },
  /*
  {
    path: 'system/role/add',
    name: 'StaffRoleAdd',
    component: resolve => require(['@/pages/system/role/Add'], resolve),
    meta: {
      auth: true
    }
  },
  {
    path: 'system/role/edit',
    name: 'StaffRoleEdit',
    component: resolve => require(['@/pages/system/role/Edit'], resolve),
    meta: {
      auth: true
    }
  },
  {
    path: 'system/role/check',
    name: 'RoleCheck',
    component: resolve => require(['@/pages/system/role/Check'], resolve),
    meta: {
      auth: true
    }
  },*/
  /*
  {
    path: 'system/setup/list',
    name: 'SystemParams',
    component: resolve => require(['@/pages/system/setup/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF_ADMIN']
    }
  },
  {
    path: 'system/setup/add',
    name: 'SystemParamAdd',
    component: resolve => require(['@/pages/system/setup/Add'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF_ADMIN']
    }
  },
  {
    path: 'system/setup/edit',
    name: 'SystemParamEdit',
    component: resolve => require(['@/pages/system/setup/Edit'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF_ADMIN']
    }
  },
  {
    path: 'system/dispatch/list',
    name: 'DispatchList',
    component: resolve => require(['@/pages/system/dispatch/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF_ADMIN']
    }
  },
  {
    path: 'system/deliveryPoint/list',
    name: 'DeliveryPointList',
    component: resolve => require(['@/pages/system/deliveryPoint/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF_ADMIN']
    }
  },
  {
    path: 'system/deliveryAuthority/list',
    name: 'deliveryAuthorityList',
    component: resolve => require(['@/pages/system/deliveryAuthority/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF_ADMIN']
    }
  },
  {
    path: 'system/expressType/list',
    name: 'expressTypeList',
    component: resolve => require(['@/pages/system/expressType/List'], resolve),
    meta: {
      auth: true,
      roles: ['ROLE_CRM_ADMIN', 'ROLE_CRM_STAFF_ADMIN']
    }
  },
  */
]

export default routes
