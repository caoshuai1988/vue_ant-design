<style lang="less" scoped>
@box-height: 1000px;
@height: @box-height - 20px- 16px - 40px;

/deep/ .ant-card-head-wrapper {
  height: 56px;
}
.preview-content {
  display: flex;
}
.preview-content-title-box {
  display: inline-block;
  margin-right: 24px;
}
.preview-box{
  width: 100%;
  background:'#f0f2f5';
  .preview-header{
    background: #fff;
    box-sizing: border-box;
    height: 64px;
    padding: 24px 24px 20px;
    font-size: 20px;
    color: rgba(0,0,0,0.85);
    border: 0;
    border-bottom: 1px;
    border-style: solid;
    border-color: #E8E8E8;
    line-height: 20px;
  }
  .preview-main{
    padding-left: 256px;
    position: relative;
    height: @box-height;
    .preview-direction{
      position: absolute;
      left: 0;
      top:0;
      background: #fff;
      z-index: 3;
      width: 256px;
      display: inline-block;
      height:@box-height;
      .content-box{
        padding: 16px 0 24px 24px;
        .title{
          font-size: 14px;
          color: rgba(0,0,0,0.85);
          line-height: 20px;
          padding-left: 8px;
          border: 0;
          border-left: 2px;
          border-style: solid;
          border-color: rgba(0,0,0,0.65);
          margin-bottom: 16px;
        }
        .content-nav{
          padding-right:24px;
          min-height: 300px;
          max-height: @height;
          overflow-y: auto;
          text-align: center;
          &::-webkit-scrollbar{
            width: 6px;
            height: 8px;
            // background-color: #F5F5F5;
          }
          /*定义滚动条轨道 内阴影+圆角*/
          &::-webkit-scrollbar-track{
            // box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
            border-radius: 10px;
            background-color: #fff;
          }
          /*定义滑块 内阴影+圆角*/
          &::-webkit-scrollbar-thumb{
              border-radius: 5px;
              box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
              background-color: #9B9B9B;
          }
          .preview-nav--item{
            // width: 208px;
            // height: 172px;
            width: 208px;
            box-sizing: border-box;
            line-height: 20px;
            background: #fff;
            padding: 24px 16px;
            margin-bottom: 16px;

            &:last-child{
              margin-bottom: 0;
            }
            &.on{
              background: #ededed;
            }
            img{
              width: 56px;
              width: 56px;
              margin-bottom: 16px;
            }
            .file-name{
              max-height: 80px;
              overflow: hidden;
              // white-space:nowrap;
              // overflow:hidden;
              // text-overflow:ellipsis;
            }
          }
        }
      }
    }
    .right-box{
      width:-moz-calc(100%-256px);
      width:-webkit-calc(100%-256px);
      width: calc(100%-256px);
      background: #eff3f5;
      padding: 24px;
      height: @box-height;
      box-sizing: border-box;
      .title-detail{
         display: flex;
         justify-content: space-between;
         align-items: center;
         justify-items: center;
         border: 0;
         min-height: 56px;
         box-sizing: border-box;
         padding: 12px 24px;
         border-bottom: 1px solid #ccc;
         .info{
           width: 50%;
           .title-name{
             font-size: 20px;
             color: rgba(0,0,0,0.85);
           }
           .title-des{
             font-size: 14px;
             color: rgba(0,0,0,0.65);
           }
         }
         .btn-warp{
           padding-left: 20px;
         }
      }
      .preview-body{
        padding: 24px;
        height: 100%;
      }

    }
  }
}

</style>
<template>
  <div class="preview-box">
    <div class="preview-header">
      2018年韶关市翁源县江尾镇高标准农田建设项目 - 计划阶段 - 附件信息
    </div>
    <!-- 侧边栏 -->
    <div class="preview-main">
      <div class="preview-direction">
        <div class="content-box">
          <!-- 标题 -->
          <div class="title">
            {{ "可研报告" }}
          </div>
          <div class="content-nav">
            <div class="preview-nav--item">
              <img src="@/assets/previewIcon/word.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.docx
              </div>
            </div>
            <a-divider/>
            <div class="preview-nav--item on">
              <img src="@/assets/previewIcon/excel.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.excel
              </div>
            </div>
            <div class="preview-nav--item">
              <img src="@/assets/previewIcon/img.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.jpg
              </div>
            </div>
            <div class="preview-nav--item">
              <img src="@/assets/previewIcon/unknow.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.jsxp
              </div>
            </div>
            <div class="preview-nav--item">
              <img src="@/assets/previewIcon/pdf.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.pdf
              </div>
            </div>
            <a-divider/>
          </div>
        </div>
      </div>
      <!-- 右侧内容区 -->
      <div class="right-box">
        <a-card style="height: 100%;border:0;" :head-style="{height:'57px', fontSize:'20px', color:'rgba(0,0,0,0.85)'}" :body-style="{padding: 0, border: 0}">
          <!-- <iframe src="https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls" style="height: 100%;" width="100%" height="100%" frameborder="1">
          </iframe> -->
          <!-- <div slot="title">
            <span class="title-box">
              <a-icon type="file-word"/>&nbsp;融合服务开发平台前端部分工作规划.docx
            </span>
            <span class="title-box">
              <a-icon type="save"/>&nbsp;29.6MB
            </span>
            <span class="title-box">
              <a-icon type="clock-circle"/>&nbsp;2019-09-21
            </span>
          </div>
          <div slot="extra">
            <a-button style="margin-right:12px">原始大小</a-button>
            <a-button style="margin-right:12px">缩小</a-button>
            <a-button style="margin-right:12px">放大</a-button>
            <a-button style="margin-right:12px">原图</a-button>
            <a-button>下载</a-button>
          </div>-->
          <div class="title-detail">
            <div class="info">
              <span class="title-name" >
                <a-icon type="file-word"/>&nbsp;融合服务开发平台前端部分工作规划.docx
              </span>
              <span class="title-des">
                <a-icon type="save"/>&nbsp;29.6MB
              </span>
              <span class="title-des">
                <a-icon type="clock-circle"/>&nbsp;2019-09-21
              </span>
            </div>
            <div class="btn-warp">
              <a-button style="margin-right:12px">缩小</a-button>
              <a-button style="margin-right:12px">放大</a-button>
              <a-button style="margin-right:12px">原图</a-button>
              <a-button>下载</a-button>
            </div>
          </div>
          <!-- <a-divider/> -->
          <div class="preview-body" style="height: 100%; paddng: 24px 0 0 24px;">
            内容
          </div>
        </a-card>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Preview',
  data () {
    return {
      helpNum: 4,
      num: 20
    }
  },
  methods: {

  }

}
</script>
