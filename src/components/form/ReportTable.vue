<template>
  <div ref="text" :style="tabSwitch" :class="{screenload: screenloadFlag}">
    <a-tabs defaultActiveKey="1" type="card" >
      <a-tab-pane key="1" style="padding:24px 32px">
        <span slot="tab" >
          <span>任务投资情况表</span>
        </span>
        <a-card :body-style="{padding: '0'}" ref="tabs">
          <iframe src="http://nf.finstone.com.cn:9000/nf/ReportServer?reportlet=tbreport/tb_jh_gbznttzb.cpt&__bypagesize__=false" :style="tableStyle" frameborder="0"></iframe>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="2" style="padding:24px 32px">
        <span slot="tab">
          <span>预期投资表</span>
        </span>
        <a-card :body-style="{padding: '0'}" ref="tabs">
          <iframe src="http://nf.finstone.com.cn:9000/nf/ReportServer?reportlet=tbreport/tb_jh_gbznttzb.cpt&__bypagesize__=false" :style="tableStyle" frameborder="0"></iframe>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="3" style="padding:24px 32px">
        <span slot="tab">重点支持领域和任务情况表</span>
        <a-card :body-style="{padding: '0'}" ref="tabs">
          <iframe src="http://nf.finstone.com.cn:9000/nf/ReportServer?reportlet=tbreport/tb_jh_gbznttzb.cpt&__bypagesize__=false" :style="tableStyle" frameborder="0"></iframe>
        </a-card>
      </a-tab-pane>
      <div slot="tabBarExtraContent" class="amplification" @click="amplificationBtn">
        <a-button-group style="margin-right:8px">
          <a-button value="narrow"><a-icon type="zoom-out" /><span>缩 小</span></a-button>
          <a-button value="default"><span>原始大小</span></a-button>
          <a-button value="magnify"><a-icon type="zoom-in" /><span>放 大</span></a-button>
        </a-button-group>
        <a-button type="primary" v-if="iconFlag">返回</a-button>
        <a-button v-else >全屏</a-button>
      </div>
    </a-tabs>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tabSwitch: { // 默认外层样式
        width: '',
        background: '#fff',
        paddingTop: '16px',
        height: '100%',
        minHeight: '75vh'
      },
      tableStyle: { // 报表默认
        height: '100%',
        width: '100%'
      },
      iconFlag: false,
      screenloadFlag: false // full screen
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      !this.iconFlag ? this.tabSwitch.width = '' : this.tabSwitch.width = document.documentElement.clientWidth + 'px'
    })
  },
  methods: {
    amplificationBtn () {
      if (this.tabSwitch.width === document.documentElement.clientWidth + 'px') {
        this.tabSwitch.width = ''
      } else {
        this.tabSwitch.width = document.documentElement.clientWidth + 'px'
      }
      this.iconFlag = !this.iconFlag // icon
      this.screenloadFlag = !this.screenloadFlag // full screen
    }
  }
}
</script>

<style lang="less" scoped>

.screenload { /* full screen add css */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
}

.amplification { /* zoom icon */
  float: right;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  padding: 0 10px;
  margin-right: 22px;
}
/deep/ .ant-tabs {
  display: flex;
  height: 100%;
  flex-direction: column;
  /deep/ .ant-tabs-content {
    flex: auto;
    .ant-card {
      height: 100%;
    }
  }
  /deep/ .ant-tabs-bar{ // 清除多余空白
   margin: 0;
  }
  /deep/ .ant-tabs-tabpane {
    height: 100%;
    flex: auto;
    /deep/ .ant-card-body {
      height: 100%;
    }
  }
}
/deep/ .ant-tabs .ant-tabs-top-content.ant-tabs-content-animated {
  flex: auto;
}
/deep/ .ant-tabs-nav-wrap{
  padding-left:  32px !important;
}
</style>
