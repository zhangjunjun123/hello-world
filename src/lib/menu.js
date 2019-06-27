export default [
  {
    leaf: false,
    icon: 'fa fa-fw fa-certificate',
    name: '安全管理',
    children: [{
        leaf: true,
        icon: 'fa fa-fw fa-user',
        name: '系统用户管理',
        path: '/system/staff/list'
      },
      {
        leaf: true,
        icon: 'fa fa-fw fa-lock',
        name: '系统权限管理',
        path: '/system/role/list'
      },
    ]
  },
  {
    leaf: false,
    icon: 'fa fa-fw fa-user',
    name: '客户管理',
    children: [
      {
        leaf: true,
        icon: 'fa fa-fw fa-user-circle-o',
        name: '经销商管理',
        path: '/dealer/list'
      },
      {
        leaf: true,
        icon: 'fa fa-fw fa-user-circle-o',
        name: '费用管理',
        path: '/dealer/fee/list'
      }
    ]
  },
  /*
  {
      leaf: false,
      icon: 'fa fa-fw fa-tags',
      name: '产品库管理',
      children: [
        {
          leaf: true,
          icon: 'fa fa-fw fa-ticket',
          name: '供应商管理',
          path: '/supplier/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-tasks',
          name: '品类管理',
          path: '/product/catalog/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-list',
          name: '商品管理',
          path: '/product/product/list'
        }
      ]
  },
  

    {
      leaf: false,
      icon: 'fa fa-fw fa-file-image-o',
      name: ' 图库管理',
      children: [
        {
          leaf: true,
          icon: 'fa fa-fw fa-folder-o',
          name: '目录管理',
          path: '/media/catalog/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-file-text-o',
          name: '图片管理',
          path: '/media/list'
        },
      ]
    },
    
    {
      leaf: false,
      icon: 'fa fa-fw fa-building',
      name: '店铺管理',
      children: [
        {
          leaf: true,
          icon: 'fa fa-fw fa-building',
          name: '店铺管理',
          path: '/shop/shop/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-tasks',
          name: '店铺品类管理',
          path: '/shop/catalog/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-archive',
          name: '店铺产品管理',
          path: '/shop/product/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-list',
          name: '店铺订单管理',
          path: '/shop/order/list'
        }
      ]
    },
    {
      leaf: true,
      icon: 'fa fa-fw fa-list',
      name: '配货/发货管理',
      path: '/delivery/list'
    },
   
    {
      leaf: false,
      icon: 'fa fa-fw fa-book',
      name: '财务管理',
      children: [
        {
          leaf: true,
          icon: 'fa fa-fw fa-user-circle',
          name: '资金账户管理',
          path: '/finance/accountMoney/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-money',
          name: '保证金账户管理',
          path: '/finance/cash/list'
        }

      ]
    },
    {
      leaf: false,
      icon: 'fa fa-fw fa-cog',
      name: '系统管理',
      children: [
        {
          leaf: true,
          icon: 'fa fa-fw fa-cog',
          name: '系统参数设置',
          path: '/system/setup/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-map',
          name: '地域数据管理',
          path: '/system/region/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-truck',
          name: '物流管理',
          path: '/system/dispatch/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-map-marker',
          name: '发货点管理',
          path: '/system/deliveryPoint/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-lock',
          name: '发货点权限管理',
          path: '/system/deliveryAuthority/list'
        },
        {
          leaf: true,
          icon: 'fa fa-fw fa-truck',
          name: '快递产品类型管理',
          path: '/system/expressType/list'
        }
        
      ]
    }
    */
]