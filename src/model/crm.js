// import moment from 'moment'
const Company = function () {
    return {
      // 企业ID
      companyId: 0,
      // 企业名称
      companyName: '',
      // 企业地址（注册）
      companyAddress: '',
      // 信用编码，税号
      taxNo: '',
      // 开户行
      bankName: '',
      // 银行账户
      bankAccount: '',
      // 联系电话
      phone: '',
      // 创建时间
      createDate: new Date()
    }
  }
  
  const Dealer = function () {
    return {
      dealerId: 0,
      // 名称，不能为空
      dealerName: '',
      // 类型；1: 经销商，2: 微商/个体代理
      dealerType: 1,
      // 签约时间
      signDate: new Date(),
      // 签约有效期（截止）
      validDate: new Date(),
      // 当前状态：0: 不可用，1: 可用
      dealerStatus: 0,
      // 是否需要保证金
      needAssurence: false,
      // 保证金额度
      assurence: 0,
      // 是否需要预付货款
      needPrepay: true,
      // 预付货款比率
      prepayRatio: 100,
      // 账号数量限制，0:无限制，N：限制数量
      accountLimit: 1,
      // 主账户手机号（仅插入时）
      mobile: '',
      // 账号对应企业信息，企业ID
      companyId: 0,
      companyName: '',
      companyAddress: '',
      taxNo: '',
      bankName: '',
      bankAccount: '',
      phone: '',
      // 账号对应店铺信息（可以看到的产品范围和价格）
      shopId: 0,
      shopName: '',
      // 对应销售分组
      salesGroupId: 0,
      salesGroupName: '',
      // 对应销售负责人
      salesMemberStaffId: 0,
      salesMemberStaffName: '',
      // 创建时间
      createDate: new Date(),
      // 最后修改时间
      lastModifiedDate: new Date(),
    }
  }
  
  const DealerAuthority = function () {
    return {
      // 授权ID
      authorityId: 0,
      // 经销商ID
      dealerId: 0,
      // 授权类型, 1: 行政区划，2: 特渠
      authorityType: 1,
      // 授权区域
      regionId: 0,
      // 授权区域类型，1/2/3: 省/地市/区县，10: 电商，11: 商超，12: 生鲜水果专营，13: 其他
      regionType: 0,
      // 区域名称
      regionName: '',
      // 授权状态，0: 无效/已失效，1: 有效
      authorizeStatus: 0,
      // 授权时间
      signDate: new Date(),
      // 授权有效期（截止）
      validDate: new Date(),
      // 授权详细信息（JSON数组）
      details: '',
      // 授权备注
      description: '',
      // 创建时间
      createDate: new Date(),
      // 最后修改时间
      lastModifiedDate: new Date(),
    }
  }
  
  const DealerMember = function () {
    return {
      // 唯一标识
      dealerId: 0,
      // 账号所有人手机号码
      mobile: '',
      // 账号所有人，会员ID, 其他人员查经销商-会员关系表
      memberId: 0,
      // 是否是所有人
      dealerOwner: false,
      // 个人二维码
      qrcodeUrl: '',
      // 状态, 0: 正常，其他：异常
      status: 0,
      // 创建时间
      createDate: new Date(),
      // 最后修改时间
      lastModifiedDate: new Date(),
    }
  }
  
  const DealerAccount = function () {
    return {
      // 账户ID
      accountId: 0,
      // 经销商ID
      dealerId: 0,
      //账户类型：32保证金账户、64经销商订货资金
      accountType: 0,
      //当前金额
      current: 0,
      //锁定金额
      locked: 0,
      // 备注
      memo: '',
      // 创建时间
      createDate: new Date(),
      // 最后修改时间
      lastModifiedDate: new Date(),
    }
  }
  
  const DealerAccountRecord = function () {
    return {
      // 记录编号
      recordId: 0,
      // 经销商ID
      dealerId: 0,
      // 账户ID
      accountId: 0,
      // 账户类型（冗余记录）
      accountType: 0,
      //流水类型：充值、消费、兑换
      recordType: 0,
      //支出、收入
      ioType: 0,
      // 金额（精确到分）
      price: 0,
      // 订单号
      orderId: 0,
      // 详细说明
      memo: '',
      // 创建时间
      createDate: new Date()
    }
  }
  
  const DealerAddress = function () {
    return {
      // 地址ID
      addressId: 0,
      // 经销商Id
      dealerId: 0,
      // 邮编
      zipCode: '',
      // 详细地址
      address: '',
      // 街道/社区名称
      streetName: '',
      // 区名称、
      districtName: '',
      // 市名称
      cityName: '',
      // 省名称
      provinceName: '',
      // 国家名称
      countryName: '',
      //纬度
      latitude: '',
      //经度
      longitude: '',
      // 地址类型：家、单位
      label: '',
      // 姓名
      name: '',
      // 电话
      phone: 0,
      // 是否默认
      defaultAddress: true,
      // 删除标记  0已删除  1未删除 默认值为1
      status: 1,
      // 创建时间
      createDate: new Date(),
      // 最后修改时间
      lastModifiedDate: new Date(),
    }
  }
  
  const DealerFee = function () {
    return {
      // 费用ID
      feeId: 0,
      // 申请人ID
      salesMemberStaffId: 0,
      salesMemberStaffName: '',
      // 经销商ID
      dealerId: 0,
      dealerName: '',
      // 申请时间
      applyDate: new Date(),
      // 费用发生时间
      occurDate: new Date(),
      // 费用详细描述（JSON数组）
      details: '',
      // 费用详细描述
      description: '',
      // 费用金额，精确到分
      feeAmount: 1000,
      // 状态：0: 待提交， 1: 待审核， 2: 已通过， 3: 已拒绝；
      feeStatus: 0,
      // 费用类型：1: 营销费用， 2: 佣金
      feeType: 1,
      // 创建时间
      createDate: new Date(),
      // 最后修改时间
      lastModifiedDate: new Date()
    }
  }
  
  const DealerFeeApprovalInfo = function () {
    return {
      // 费用ID
      feeId: 0,
      // 审批人ID
      approverStaffId: 0,
      approverStaffName: '',
      // 审批时间
      approveDate: new Date(),
      // 费用审批描述
      description: '',
      // 状态：256：拒绝，2: 通过；
      approveStatus: 256,
      // 创建时间
      createDate: new Date(),
      // 最后修改时间
      lastModifiedDate: new Date(),
    }
  }
  
  // 违规处罚基本信息
  const DealerViolation = function () {
    return {
      // 费用ID
      violationId: 0,
      // 申请人ID
      staffId: 0,
      // 申请人姓名
      staffName: '',
      // 经销商ID
      dealerId: 0,
      // 经销商名称
      dealerName: '',
      // 申请时间
      applyDate: new Date(),
      // 费用发生时间
      occurDate: new Date(),
      // 费用详细描述（JSON数组）
      details: '',
      // 费用详细描述
      description: '',
      // 费用金额，精确到分
      violationAmount: 10000,
      // 状态：0: 待提交， 1: 待审核， 2: 已通过， 3: 已拒绝；
      violationStatus: 0,
      // 创建时间
      createDate: new Date(),
      // 修改时间
      lastModifiedDate: new Date()
    }
  }
  
  // 违规处罚审批记录
  const DealerViolationApprovelInfo = function () {
    return {
      // 费用ID
      violationId: 0,
      // 审批人ID
      approverStaffId: 0,
      // 审批时间
      approveDate: new Date(),
      // 费用审批描述
      description: '',
      // 状态：0：拒绝，1: 通过；
      approvalStatus: 0,
      // 创建时间
      createDate: new Date(),
      // 修改时间
      lastModifiedDate: new Date(),
    }
  }
  
  // 销售团队
  const SalesGroup = function () {
    return {
      // 团队ID
      groupId: 0,
      // 团队名称
      salesGroupName: '',
      // 成员数量
      members: 0,
      // 负责区域数量
      regions: 0,
      // 团队描述
      description: '',
      // 创建时间
      createDate: new Date(),
      // 修改时间
      lastModifiedDate: new Date()
    }
  }
  
  const SalesGroupMember = function () {
    return {
      //团队ID
      salesGroupId: 0,
      //销售人员ID
      // salesMemberStaffId: 0,
      // 销售人员称呼
      // salesMemberStaffName: '',
      salesGroupMember: [],
      // 成员描述
      description: '',
      //是否为组长
      leader: 1,
      // 创建时间
      createDate: new Date(),
      // 修改时间
      lastModifiedDate: new Date()
    }
  }
  
  // 销售团队负责区域, 团队与区域关系为1:N
  const SalesGroupRegion = function () {
    return {
      // 团队ID
      groupId: 0,
      // 区域ID
      regionId: 0,
      // 区域名称
      regionName: '',
      // 创建时间
      createDate: new Date(),
      // 修改时间
      lastModifiedDate: new Date()
    }
  
  }
  
  // 销售考核周期
  const SalesPeriod = function () {
  
    return {
      // 业绩周期ID，
      periodId: 0,
      // 业绩周期名称
      periodName: '',
      // 业绩目标
      quota: 10000000000,
      // 开始时间
      begin: new Date(),
      // 结束时间
      end: new Date(),
      // 业绩周期描述
      memo: '',
      // 创建时间
      createDate: new Date(),
      // 修改时间
      lastModifiedDate: new Date()
    }
  }
  
  // 销售目标（定义）
  const SalesVolumn = function () {
    return {
      // 业绩ID
      volumnId: 0,
      // 对应团队
      salesGroupId: 0,
      // 负责人
      salesMemberStaffId: 0,
      // 业绩周期ID
      periodId: 0,
      // 业绩目标
      quota: 0,
      // 开始时间
      begin: new Date(),
      // 结束时间
      end: new Date(),
      // 业绩目标描述
      memo: '',
      // 创建时间
      createDate: new Date(),
      // 修改时间
      lastModifiedDate: new Date()
    }
  }
  
  // 发货点
  const DeliveryPoint = function () {
    return {
      // 发货人姓名
      senderName: '',
      // 发货人电话
      senderPhone: '',
      // 仓库Id
      warehouseId: 0,
      // 仓库地址
      warehouseAddress: '',
      // 仓库名称
      warehouseName: ''
    }
  }
  
  // 商品品类
  const Catalog = function () {
    return {
      // 商品品类Id
      catalogId: 0,
      // 品类名称
      catalogName: '',
      // logo路径
      logoUrl: '',
      // 父级Id
      parentId: 0,
      // 状态
      status: 1,
      // 排序
      sortOrder: 1
    }
  }
  
  // 店铺信息
  const ShopInfo = function () {
    return {
      // 店铺ID
      shopId: 0,
      // 店铺名称
      shopName: '',
      // 店铺地址
      address: '',
      // 纬度
      latitude: 0.0,
      // 经度
      longtitude: 0.0,
      // 服务范围
      serviceRange: 2000,
      // 是否支持配送
      supportDispatch: true,
      // 是否支持仓储
      supportInventory: true,
      // 状态
      status: 1
    }
  }
  
  // 给经销商下单
  const SupplierOrder = function () {
    return {
      // 购买商品参数
      buyProParams: [],
      // 经销商ID
      dealerId: 0,
      // 经销商类型:1经销商；2微商
      dealerType: 1,
      // // 商品ID
      // productId: 0,
      // // 商品名称
      // productName: '',
      // // 商品数量
      // productCount: 100,
      // // 创建时间
      // createDate: new Date(),
      // // 收货地址
      // address: '',
      // 经销商addressId
      addressId: 0,
      // // 商品数量
      // quantity: 0,
      // // 商品体积
      // volume: 0,
      // // 商品重量
      // weight: 0,
      // // 商品价格
      // cost: 0,
      // // 积分
      couponId: 0,
      score: 0,
      shopId: 0
    }
  }
  
  // 返佣申请
  const FinanceRebateApply = function () {
    return {
      // 经销商ID
      dealerId: 0,
      // 商品ID
      productId: 0,
      // 商品名称
      productName: '',
      // 商品数量
      productCount: 100,
      // 创建时间
      createDate: new Date(),
      // 收货地址
      address: '',
    }
  }
  
  // 订货资金费用到账处理
  const FinanceBillApply = function () {
    return {
      // 申请日期
      applyDate: '',
      accountType: 32,
      // 到账日期
      arrivalDate: '',
      // 费用金额
      billAmount: 10000,
      depositAmount: 10000,
      // 账单ID
      billId: 0,
      // 账单状态
      billStatus: 4,
      depositStatus: 4,
      // 账单类型
      billType: 0,
      depositType: 0,
      // 创建日期
      createDate: new Date(),
      // 经销商ID
      dealerId: 0,
      // 描述
      description: '',
      // 详情
      details: '',
      // 修改日期
      lastModifiedDate: '',
      // 昵称
      nickName: '',
      // 员工ID
      staffId: 0
    }
  }
  
  // 录入销售激励记录
  const FinanceSimulateApply = function () {
    return {
      accomplished: 0,
      begin: '',
      createDate: new Date(),
      end: '',
      excitation: 0,
      lastModifiedDate: '',
      periodId: 0,
      periodName: '',
      // 销售目标
      quota: 0,
      salesGroupId: 0,
      salesGroupName: '',
      salesMemberStaffId: 0,
      salesMemberStaffName: '',
      salesVolumnExcitationId: 0,
      salesVolumnId: 0
    }
  }
  
  // 发货点匹配物流公司
  const DispatchDeliveryPoint = function () {
    return {
      // 发货点Id
      warehouseId: 0,
      // 物流公司logo
      dispatchLogo: '',
      // 物流对接用户编码
      clientCode: '',
      // 物流月结账号
      clientCustId: '',
      // 物流对接用户校验码
      clientWord: '',
      createDate: '',
      // 响应成功时返回
      customValue: '',
      // 物流公司Id
      dispatchId: 0,
      lastModifiedDate: '',
      // 描述
      memo: '',
      // 快递网点名称或标识符
      siteFlag: '',
      // 状态：1启用 0禁用
      status: 1,
      warehouseDispatchId: 0
    }
  }
  
  
  // 录入物流信息提交表单信息
  const AddOrderExpress = function () {
    return {
      // 运输车号
      carNumber: '',
      // 详情
      details: '',
      // 物流公司Id
      dispatchId: 0,
      dispatchManulId: 0,
      dispatchTransportId: 0,
      // 物流公司号
      dispatchNo: '',
      // 司机姓名
      driverName: '',
      // 司机电话
      driverPhone: '',
      // 快递详情
      expressDetailList: [
        {
          // 快递详情Id
          expressDetailId: 0,
          // 订单物流Id
          orderDispatchId: 0,
          // 订单Id
          orderId: 0,
          // 商品图片
          productLogoUrl: '',
          // 商品名称
          productName: '',
          // 商品数量
          quantity: 0,
          // 店铺商品Id
          shopProductId: 0
        }
      ],
      // 快递Id
      expressId: 1,
      // 运单生成方式： 0手动  1自动
      expressType: 0,
      // 描述
      memo: '',
      // 订单Id
      orderId: 0,
      // 包裹数量
      parcelQuantity: 1,
      // 支付方式
      payMethod: 0,
      // 发货点物流公司Id
      warehouseDispatchId: 0
    }
  }
  
  
  export {
    Company,
    Dealer,
    DealerMember,
    DealerAuthority,
    DealerAccount,
    DealerAccountRecord,
    DealerAddress,
    DealerFee,
    DealerFeeApprovalInfo,
    DealerViolation,
    DealerViolationApprovelInfo,
    SalesGroup,
    SalesGroupMember,
    SalesGroupRegion,
    SalesPeriod,
    SalesVolumn,
    DeliveryPoint,
    Catalog,
    ShopInfo,
    SupplierOrder,
    FinanceRebateApply,
    FinanceBillApply,
    FinanceSimulateApply,
    DispatchDeliveryPoint,
    AddOrderExpress
  }
  