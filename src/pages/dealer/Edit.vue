<template>
  <el-dialog :title="title" :visible.sync="visible" @open="openDialog" :before-close="closeDialog" :modal="true">
    <el-card class="box-card">
      <div class="grid-content">
        <el-form
          :model="dealerInfo"
          :rules="dealerRules"
          ref="dealerInfo"
          label-position="left"
          label-width="150px"
          style="text-align: left;"
        >
          <el-form-item prop="dealerName" label="经销商名称">
            <el-input
              v-model="dealerInfo.dealerName"
              type="text"
              :maxlength="16"
              placeholder="经销商名称"
            ></el-input>
          </el-form-item>
          <el-form-item prop="dealerType" label="经销商类型">
            <el-radio v-model="dealerInfo.dealerType" :label="1">经销商</el-radio>
            <el-radio v-model="dealerInfo.dealerType" :label="2">微商/个体代理</el-radio>
          </el-form-item>
          <el-form-item prop="needAssurence" label="需要保证金">
            <el-radio v-model="dealerInfo.needAssurence" :label="true">是</el-radio>
            <el-radio v-model="dealerInfo.needAssurence" :label="false">否</el-radio>
          </el-form-item>
          <el-form-item prop="assurence" label="保证金（元）">
            <el-input-number :disabled='!dealerInfo.needAssurence' v-model="dealerInfo.assurence" :precision="2" :step="10000" :max="100000000" placeholder="保证金（元）"></el-input-number>
          </el-form-item>
          <el-form-item prop="needPrepay" label="是否需要预付">
            <el-radio v-model="dealerInfo.needPrepay" :label="true">是</el-radio>
            <el-radio v-model="dealerInfo.needPrepay" :label="false">否</el-radio>
          </el-form-item>
          <el-form-item prop='prepayRatio' label="预付货款比率">
              <el-input-number :disabled='!dealerInfo.needPrepay' v-model="dealerInfo.prepayRatio" :precision="0" :step="10" :min="1" :max="100" placeholder="预付货款比率(%)"></el-input-number>
            </el-form-item>
            <el-form-item prop='accountLimit' label="账号数量限制">
              <el-input-number v-model="dealerInfo.accountLimit" :precision="0" :step="1" :min="1" :max="10" placeholder="账号数量限制"></el-input-number>
            </el-form-item>
          <!-- 添加企业信息 -->
          <el-form-item prop="companyId" label="企业开票信息" style="width: 100%">
            <el-select
              v-model="dealerInfo.companyId"
              style="width: 100%;"
               placeholder="企业开票信息"
            >
              <el-option label='请选择' disabled :value="0" />
              <el-option v-for='company in companies' :key='company.companyId' :label='company.companyName + "(" + company.taxNo + ")"' :value="company.companyId" />
            </el-select>
          </el-form-item>
          <!-- 添加店铺信息 -->
          <el-form-item prop="shopId" label="订货服务店铺">
            <el-select
              v-model="dealerInfo.shopId"
                placeholder="订货服务店铺"
            >
              <el-option label='请选择' disabled :value="0" />
              <el-option v-for='shop in shops' :key='shop.shopId' :label="shop.shopName" :value="shop.shopId" />
            </el-select>
          </el-form-item>
          <!-- 添加销售分组 -->
          <!-- 添加负责人 -->
          <el-form-item prop="shopId" label="销售团队">
            <el-select
              v-model="dealerInfo.salesGroupId"
                placeholder="销售团队"
              @change='handleGroupChange'>
              <el-option label='请选择' disabled :value="0" />
              <el-option v-for='group in salesGroups' :key='group.salesGroupId' :label="group.salesGroupName" :value="group.salesGroupId" />
            </el-select>
            <el-select
              v-model="dealerInfo.salesMemberStaffId"
                placeholder="销售负责人">
              <el-option label='请选择' disabled :value="0" />
              <el-option v-for='staff in salesStaffs' :key='staff.salesMemberStaffId' :label="staff.salesMemberStaffName" :value="staff.salesMemberStaffId" />
            </el-select>
          </el-form-item>
          <!-- 其他 -->
          <el-form-item prop="dealerStatus" label="当前状态">
            <el-radio v-model="dealerInfo.dealerStatus" :label="1">启用</el-radio>
            <el-radio v-model="dealerInfo.dealerStatus" :label="0">禁用</el-radio>
          </el-form-item>
          <el-form-item prop="signDate" label="签约日期">
            <el-date-picker v-model="dealerInfo.signDate" type="date" placeholder="签约日期"></el-date-picker>
          </el-form-item>
          <el-form-item prop="validDate" label="签约有效期(截止)">
            <el-date-picker v-model="dealerInfo.validDate" type="date" placeholder="签约有效期(截止)"></el-date-picker>
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-row :gutter="0">
              <el-col :span="12" :offset="0">
                <el-button
                  type="primary"
                  style="width: 100%"
                  @click.native.prevent="handleSubmit"
                  :loading="loading"
                >提交</el-button>
              </el-col>
              <el-col :span="8" :offset="4">
                <el-button type="info" style="width: 100%" @click.native.prevent="closeDialog">返回</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </el-dialog>
</template>

<script>
import { Dealer } from "@/model/crm";
import DealerAPI from "@/api/dealer";
import CompanyAPI from "@/api/company";
import ShopAPI from "@/api/shop";
import SalesAPI from '@/api/sales'

export default {
  name: "AddDealerDialog",
  props: {
    title: {
      type: String
    },
    visible: {
      type: Boolean
    },
    data: {
        type: Object
    }
  },
  data() {
    return {
      loading: false, // 加载动画
      dealerInfo: Dealer(),
      companies: null,
      shops: null,
      salesGroups: null,
      salesStaffs: null,
      queryParam: {
        regionId: 0,
        staffId: 0,
        minMembers: 0,
        maxMembers: 0,
        minRegions: 0,
        maxRegions: 0
      },
      dealerRules: {
        dealerName: [
          { required: true, message: "请输入经销商名称", trigger: "blur" }
        ],
        dealerType: [
          { required: true, message: "请选择经销商类型", trigger: "blur" }
        ],
        needAssurence: [
          { required: true, message: "请选择是否需要保证金", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入手机号码", trigger: "blur" }
        ]
      }
    };
  },
  created: function() {

  },
  methods: {
    initData() {
      CompanyAPI.list().then(response => {
        this.companies = response.data
      })
      ShopAPI.list().then(response => {
        this.shops = response.data
      })
      // 获取销售分组信息
      SalesAPI.listGroup(this.queryParam).then(response => {
        this.salesGroups = response.data
      })
      this.dealerInfo.dealerType = 1;
    },
    openDialog() {
      this.initData()
      this.dealerInfo = JSON.parse(JSON.stringify(this.$props.data))
      this.dealerInfo.assurence = this.dealerInfo.assurence > 0 ? this.dealerInfo.assurence / 100 : 0
      if (this.dealerInfo.salesGroupId > 0 ) {
        this.handleGroupChange(this.dealerInfo.salesGroupId)
      }
    },
    closeDialog() {
      this.$emit("cancel-submit");
    },
    handleGroupChange (groupId) {
      this.dealerInfo.salesMemberStaffId = 0
      this.salesStaffs = []
      SalesAPI.listGroupMembers(groupId).then(response => {
        this.salesStaffs = response.data
      })
    },
    handleSubmit() {
      this.$refs.dealerInfo.validate(valid => {
        if (valid) {
          this.loading = true;
          // 客户信息
          let dealer  = JSON.parse(JSON.stringify(this.dealerInfo))
          dealer.assurence = dealer.assurence * 100
          DealerAPI.update(dealer)
            .then((response) => {
              this.loading = false;
              this.$message.success("恭喜，客户已经创建成功。");
              this.$emit("confirm-submit", response.data)
            })
            .catch(error => {
              this.$message.error("保存客户数据错误，请稍后重试." + error);
              this.loading = false;
            });
        } else {
          this.$message.error("客户数据错误，请按照提示完善后重试.");
          this.loading = false;
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
