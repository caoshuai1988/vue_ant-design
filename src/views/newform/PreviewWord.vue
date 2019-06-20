<template>
  <div class="content">
    <a-card title="目录" style="width: 20%;margin-right:2%;" :body-style="{padding: '24px'}">
      <!-- <a-card :bordered="false" style="width: 100%">
        <span slot="title">可研报告</span>
        <span slot="extra">
          <a-icon type="up" />
        </span>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card> -->
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <a-card style="width: 78%;height: 600px;" :head-style="{height:'57px'}" :body-style="{padding: '24px'}">
      <div slot="title">
        <span class="title-box">
          <a-icon type="file-word"/>&nbsp;融合服务开发平台前端部分工作规划.docx
        </span>
        <span class="title-box">
          <a-icon type="save"/>&nbsp;29.6MB
        </span>
        <span class="title-box">
          <a-icon type="clock-circle"/>&nbsp;2019-09-21 08:50:08
        </span>
      </div>
      <div slot="extra">
        <a-button style="margin-right:12px">原始大小</a-button>
        <a-button style="margin-right:12px">缩小</a-button>
        <a-button style="margin-right:12px">放大</a-button>
        <a-button style="margin-right:12px">原图</a-button>
        <a-button>下载</a-button>
      </div>
      <!-- <iframe src="https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls" width="100%" height="600px" frameborder="1">
      </iframe>-->
    </a-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
/deep/ .ant-card-head-wrapper {
  height: 56px;
}
.content {
  display: flex;
}
.title-box {
  display: inline-block;
  margin-right: 24px;
}
</style>
