<template>
  <div style="background:#fff;padding-top:11px;" >
    <a-tabs defaultActiveKey="2" >
      <a-tab-pane key="1" class="tabMar">
        <span slot="tab" >
          <span>基础信息</span>
          <div class="checkIcon">
            <a-icon type="check" />
          </div>
        </span>
        <baseFormContent></baseFormContent>
      </a-tab-pane>
      <a-tab-pane key="2" style="padding:24px 24px 24px 24px">
        <span slot="tab">
          <span >地理信息</span>
          <div class="checkIcon">
            <a-icon type="check" />
          </div>
        </span>
        <MapModule></MapModule>
      </a-tab-pane>
      <!-- <a-tab-pane key="3">
        <span slot="tab">基本情况表</span>
      </a-tab-pane>
      <a-tab-pane key="4">
        <span slot="tab">任务及投资情况估算表</span>
      </a-tab-pane>
      <a-tab-pane key="5">
        <span slot="tab">资益估算表</span>
      </a-tab-pane> -->
      <a-tab-pane key="6">
        <span slot="tab">附件信息</span>
        <AccessoryForm></AccessoryForm>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import baseFormContent from '@/components/form/BaseFormContent'
import AccessoryForm from '@/components/form/AccessoryForm'
import MapModule from '@/components/form/MapModule'
export default {
  components: {
    baseFormContent,
    AccessoryForm,
    MapModule
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

 <style lang="less" scoped>

/deep/ .ant-tabs-bar{ // 清除多余空白
   margin: 0;
}
.tabMar{ // tab 间距
  // margin-left: 24px !important;
}
/deep/ .ant-tabs-nav-wrap{
  padding-left:  24px
}
.checkIcon { /* icon */

  position: absolute;
  top: 11px;
  right: -9px;
  color: #52c41a;
  z-index: 9;
}

</style>
