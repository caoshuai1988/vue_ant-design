<!--
 * @Author: lxh
 * @Date: 2019-07-03 16:01:38
 * @LastEditTime: 2019-07-04 16:06:01
 * @Description: 地图报表 tab
 -->
<template>
  <div style="background:#fff;padding-top:11px;flex:auto;display: flex;flex-direction: column;" >
    <a-tabs defaultActiveKey="4" >
      <a-tab-pane key="1" class="tabMar">
        <span slot="tab" >
          <span>基础信息</span>
          <div class="checkIcon">
            <a-icon type="check"/>
          </div>
        </span>
        <baseFormContent></baseFormContent>
      </a-tab-pane>
      <a-tab-pane key="2" style="padding:24px 32px">
        <span slot="tab">
          <span >地理信息</span>
          <div class="checkIcon">
            <a-icon type="check"/>
          </div>
        </span>
        <MapModule></MapModule>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">报表信息</span>
        <ReportTable></ReportTable>
      </a-tab-pane>
      <a-tab-pane key="4">
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
import ReportTable from '@/components/form/ReportTable'
export default {
  components: {
    baseFormContent,
    AccessoryForm,
    MapModule,
    ReportTable
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
/deep/ .ant-layout-content {
  display: flex;
  flex: auto;
  /deep/ .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
  }
}
/deep/ .ant-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: auto;
}
/deep/ .ant-tabs-bar{ // 清除多余空白
   margin: 0;
}
/deep/ .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
  flex: auto;
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
/deep/ .ant-card {
  height: 100%;
}

</style>
