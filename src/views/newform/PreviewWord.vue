<template>

  <div class="content">
    <a-card title="目录" style="width: 20%;margin-right:2%;">
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <a-card style="width: 78%">
      <div slot="title">
        <span class="title-box"><a-icon type="file-word" />&nbsp;融合服务开发平台前端部分工作规划.docx</span>
        <span class="title-box"><a-icon type="save" />&nbsp;29.6MB</span>
        <span class="title-box"><a-icon type="clock-circle" />&nbsp;2019-09-21 08:50:08</span>
      </div>
      <a href="#" slot="extra">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .content{
    display: flex;
  }
  .title-box{
    display: inline-block;
    margin-right: 24px;
  }

</style>
