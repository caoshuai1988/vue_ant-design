<template>
  <div ref="text">
    <a-card :body-style="{padding: '24px 32px'}">
      <div slot="title">
        <h1 style="font-size: 20px;">{{ title }}</h1>
      </div>
      <div slot="extra">
        <a-radio-group>
          <a-radio-button @click="zoominBtn">缩 小</a-radio-button>
          <a-radio-button @click="originalBtn">原始大小</a-radio-button>
          <a-radio-button @click="magnifyBtn">放 大</a-radio-button>
        </a-radio-group>
      </div>

      <iframe
        ref="contentIframe"
        src="http://nf.finstone.com.cn:9000/nf/ReportServer?reportlet=tbreport/tb_jh_gbznttzb.cpt&__bypagesize__=false"
        width="100%"
        :height="value"
        frameborder="0"
      ></iframe>
    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: this.$route.query.title,
      value: '',
      size: 1.0,
      sizeNum: ''
    }
  },
  beforeCreate () {
    if (this.$route.query.title === '2018年韶关市翁源县江尾镇高标准农田建设项目 - 计划阶段 - 任务及投资情况表') {
      document.title = '任务及投资情况表 - 计划阶段 - 2018年韶关市翁源县江尾镇高标准农田建设项目'
    } else {
      document.title = '基本情况表 - 计划阶段 - 2018年韶关市翁源县江尾镇高标准农田建设项目'
    }
  },
  mounted () {
    this.sizeNum = localStorage.getItem('setSize')
    this.size = parseFloat(this.sizeNum)
    this.set()
    this.value = window.screen.availHeight - this.$refs.text.offsetHeight + 'px'
  },
  methods: {
    magnifyBtn () {
      // 变大
      this.size = this.size + 0.1
      this.set()
      this.accessData()
    },
    zoominBtn () {
      // 缩小
      this.size = this.size - 0.1
      this.set()
      this.accessData()
    },
    originalBtn () {
      // 还原
      this.size = 1.0
      this.set()
      this.accessData()
    },
    accessData () {
      // 存取
      localStorage.removeItem('setSize')
      localStorage.setItem('setSize', parseFloat(this.size))
    },
    set () {
      // change size
      this.$refs.contentIframe.style.zoom = this.size
      this.$refs.contentIframe.style.cssText +=
        '; -moz-transform: scale(' + this.size + ');-moz-transform-origin: 0 0; '
      this.$refs.contentIframe.style.cssText +=
        '; -webkit-transform: scale(' + this.size + '); -webkit-transform-origin: 0 0; '
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 0;
}
</style>
