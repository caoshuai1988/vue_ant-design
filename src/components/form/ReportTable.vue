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
        <a-button type="primary" v-if="iconFlag">返回</a-button>
        <a-button v-else >放大</a-button>

      </div>
    </a-tabs>
  </div>

</template>

<script>
export default {
  data () {
    return {
      tabSwitch: { // 默认外层样式
        height: '',
        width: '',
        background: '#fff',
        paddingTop: '16px'
      },
      tableStyle: { // 报表默认
        height: '',
        width: '100%'
      },
      iconFlag: false,
      screenloadFlag: false // 全屏
    }
  },
  mounted () {
    this.tableStyle.height = window.screen.availHeight - this.$refs.text.offsetHeight + 'px'
  },
  methods: {
    amplificationBtn () {
      if (this.tabSwitch.width === document.documentElement.clientWidth + 'px') {
        this.tabSwitch.width = ''
        this.tabSwitch.height = ''
      } else {
        this.tabSwitch.width = document.documentElement.clientWidth + 'px'
        this.tabSwitch.height = document.documentElement.clientHeight + 'px'
      }
      this.iconFlag = !this.iconFlag // 图标
      this.screenloadFlag = !this.screenloadFlag // 全屏
    }
  }
}
</script>

<style lang="less" scoped>

.screenload { /* 全屏 add css */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.amplification { /* 放大icon */
  float: right;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  padding: 0 10px;
  margin-right: 22px;
}

/deep/ .ant-tabs-bar{ // 清除多余空白
   margin: 0;
}

/deep/ .ant-tabs-nav-wrap{
  padding-left:  32px !important;
}
</style>
