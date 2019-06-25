<template>
  <div class="flowDiv" v-if="flowFlag">
    <div class="flowHeader">
      <div class="flowOne">
        <span class="sizeFLow">流程</span>
        <span class="sizeTpl">详情</span>
      </div>
      <div class="flowTwo" @click="closeDiv">
        <a-icon type="close" />
      </div>
    </div>
    <div class="flowContent">
      <img :src="flowPng" alt="" class="flowImg">
    </div>
  </div>
</template>

<script>
import flowPng from '@/assets/flow.png'
export default {
  data () {
    return {
      flowFlag: true,
      big: 'default'
    }
  },
  computed: {
    flowPng () { // 引入流程图片
      return flowPng
    }
  },
  methods: {
    closeDiv () { // hide 流程图
      this.flowFlag = false
    }
  }
}
</script>

<style lang="less" scoped>
.sizeFLow{
  color: rgba(0, 0, 0, 85%)
}

.flowDiv{
  width: 100%;
  margin-bottom: 24px;
  background-color: #fff;
  .flowHeader{
    padding: 0 32px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e9e9e9;
    .flowOne{
      // padding-left: 32px;
      font-size: 20px;
      color: rgba(0, 0, 0, 85%);
      .sizeTpl{
        font-size: 14px;
        color: #1890ff;
        padding-left: 10px;
        cursor:pointer;
      }
    }
    .flowTwo{
      // padding-right: 32px;
      font-size: 18px;
      cursor:pointer;
    }
  }
  .flowContent{
    width: 100%;
    height: 140px;
    line-height: 140px;
    // margin: auto;
    .flowImg{
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
