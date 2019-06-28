<template>
  <div ref="text">
    <a-card :body-style="{padding: '24px 32px'}">
      <div slot="title">
        <h1 style="font-size: 20px;">{{ title }}</h1>
      </div>
      <iframe
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
      value: ''
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
    this.value = window.screen.availHeight - this.$refs.text.offsetHeight + 'px'
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 0;
}
</style>
