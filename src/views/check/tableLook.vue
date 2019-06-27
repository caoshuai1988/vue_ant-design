<template>
  <div ref="text">
    <a-card :body-style="{padding: '24px 32px'}" >
      <span slot="title">{{ title }}</span>
      <iframe src="http://nf.finstone.com.cn:9000/nf/ReportServer?reportlet=tbreport/tb_jh_gbznttzb.cpt&__bypagesize__=false" width="100%" :height="value" frameborder="0"></iframe>
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
  mounted () {
    this.value = window.screen.availHeight - this.$refs.text.offsetHeight + 'px'
  }
}
</script>

<style>

</style>
