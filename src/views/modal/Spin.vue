<template>
  <div class="example">
    <div style="margin-bottom:64px">
      <a-spin style="margin-right:20px" size="small" />
      <a-spin style="margin-right:20px" />
      <a-spin size="large" />
    </div>
    <div style="margin-bottom:64px">
      <a-spin>
        <a-icon slot="indicator" type="loading" style="font-size: 20px;margin-right:20px" spin />
      </a-spin>

      <a-spin :indicator="indicator" />
      <a-spin>
        <a-icon slot="indicator" type="loading" style="font-size: 40px" spin />
      </a-spin>
    </div>
    <div style="margin-bottom:64px">
      <a-spin :spinning="spinning">
        <div class="spin-content">
          可以点击‘切换’按钮，控制本区域的spin展示。
        </div>
      </a-spin>
      <div style="margin-top:24px">Loading state：<a-switch v-model="spinning"></a-switch></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Spin',
  components: {},
  data () {
    return {
      indicator: <a-icon type="loading" style="font-size: 30px; margin-right:20px" spin />,
      spinning: false
    }
  },
  computed: {},
  methods: {
    changeSpinning () {
      this.spinning = !this.spinning
    }
  }
}
</script>

<style lang="less" scoped>
 .example {
    text-align: center;
    background: #ffffff;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 48px 50px;
    height: 70vh;
  }
  .spin-content{
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
