<template>
  <div>
    <div class="accessory-head">
      2018年韶关市翁源县江尾镇高标准农田建设项目 - 计划阶段 - 附件信息
    </div>
    <div class="content">
      <a-card title="目录" style="width: 18%;margin-right:2%;" :body-style="{padding: '24px'}">

      </a-card>
      <a-card style="width: 80%;height: 600px;" :head-style="{height:'57px'}" :body-style="{padding: '24px'}">
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
        <iframe src="http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf" width="100%" height="600px" allowfullscreen webkitallowfullscreen></iframe>
        <!-- <pdf src="http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf" ></pdf> -->
        <!-- <pdf :src="words"></pdf> -->
        <!-- <a :href="abc"></a> -->
        <!-- <iframe :src="pdf" width="100%" height="600px">
        </iframe> -->
        <!-- <embed src="http://www.bszyue.com/invoice/032abd84f8fc7ed1ca57d2f37d73172f.pdf" type="application/pdf" width="100%" height="600px"> -->
        <!-- <a href="http://www.xdocin.com/xdoc?_func=to&amp;_format=html&amp;_cache=1&amp;_xdoc=http://www.xdocin.com/demo/demo.docx" target="_blank" rel="nofollow">XDOC</a> -->
      </a-card>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  },
  computed: {
  },
  created () {

  }
}
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
.accessory-head{
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  font-size: 20px;
  color: rgba(0, 0, 0, 85%);
  background-color: #fff;
}
</style>
