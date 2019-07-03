<template>
  <div ref="text" style="height:100%;width:100%;">
    <a-card :body-style="{padding: '24px 32px'}">
      <div slot="title">
        <h1 style="font-size: 20px;">{{ title }}</h1>
      </div>
      <div slot="extra">
        <a-button-group >
          <a-button value="narrow" @click="handleSizeChange"><a-icon type="zoom-out" /><span>缩 小</span></a-button>
          <a-button value="default" @click="handleSizeChange"><span>原始大小</span></a-button>
          <a-button value="magnify" @click="handleSizeChange"><a-icon type="zoom-in" /><span>放 大</span></a-button>
        </a-button-group>
      </div>
      <iframe
        id="myFrame"
        ref="contentIframe"
        src="http://nf.finstone.com.cn:9000/nf/ReportServer?reportlet=tbreport/tb_jh_gbznttzb.cpt&__bypagesize__=false"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </a-card>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      title: this.$route.query.title,
      value: '',
      size: 1.0,
      sizeNum: ''
    }
  },
  computed: {},
  beforeCreate () {
    if (this.$route.query.title === '2018年韶关市翁源县江尾镇高标准农田建设项目 - 计划阶段 - 任务及投资情况表') {
      document.title = '任务及投资情况表 - 计划阶段 - 2018年韶关市翁源县江尾镇高标准农田建设项目'
    } else {
      document.title = '基本情况表 - 计划阶段 - 2018年韶关市翁源县江尾镇高标准农田建设项目'
    }
  },
  methods: {
    handleSizeChange (e) {
      console.log('cs:' + e)
      if (e.target.value === 'narrow') {
        this.size -= 0.1
      } else if (e.target.value === 'default') {
        this.size = 1.0
      } else if (e.target.value === 'magnify') {
        console.log('1')
        this.size += 0.1
      }
      this.set()
      this.accessData()
    },
    accessData () {
      // 存取
      Vue.ls.remove('setSize')
      Vue.ls.set('setSize', parseFloat(this.size))
    },
    set () {
      // change size
      this.$refs.text.style.zoom = this.size
      this.$refs.text.style.cssText +=
        '; -moz-transform: scale(' + this.size + ');-moz-transform-origin: 0 0; '
      this.$refs.text.style.cssText +=
        '; -webkit-transform: scale(' + this.size + '); -webkit-transform-origin: 0 0; '
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 0;
}
/deep/ .ant-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  /deep/ .ant-card-head {
    height: 62px;
  }
  /deep/ .ant-card-body {
    flex: auto;
  }
}
</style>
