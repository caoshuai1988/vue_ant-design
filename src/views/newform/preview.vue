<style lang="less" scoped>
@box-height: 980px;
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;
  width: 100%;
  background:'#f0f2f5';
  .preview-header{
    background: #fff;
    box-sizing: border-box;
    height: 64px;
    // padding: 24px 24px 20px;
    padding: 0 24px;
    font-size: 20px;
    color: rgba(0,0,0,0.85);
    border: 0;
    border-bottom: 1px;
    border-style: solid;
    border-color: #E8E8E8;
    line-height: 64px;
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
          font-size: 16px;
          color: rgba(0,0,0,0.85);
          line-height: 20px;
          // padding-left: 8px;
          border: 0;
          // border-left: 2px;
          border-style: solid;
          border-color: rgba(0,0,0,0.65);
          margin-bottom: 16px;
        }
        .content-nav{
          padding-right:24px;
          // padding-bottom: 50px;
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
              box-shadow: inset 0 0 5px rgba(0,0,0,0.4);
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
            cursor: pointer;
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
      // height: @box-height;
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
           .title__name{
             font-size: 16px;
             color: rgba(0,0,0,0.85);
           }
           .title-des{
             font-size: 16px;
             color: rgba(0,0,0,0.65);
           }
         }
         .btn-warp{
           padding-left: 20px;
         }
      }
      .preview-body{
        padding: 24px 32px;
        // height: 100%;
      }

    }
  }
}
.err-icon{
    display: flex;
    justify-content: center;
    align-items: center;
}

.bgc-class{
  width: 100%;
  height: 100%;

}
</style>
<template>
  <div class="preview-box">
    <div class="preview-header">
      2018年韶关市翁源县江尾镇高标准农田建设项目 - 计划阶段 - 附件信息
      <!-- <a-button type="primary" style="float:right;margin-top:16px" @click="backBtn">返回</a-button> -->
    </div>
    <!-- 侧边栏 -->
    <div class="preview-main" >
      <div class="preview-direction" >
        <div class="content-box" >
          <!-- 标题 -->
          <div class="title">
            {{ "可研报告" }}
          </div>
          <div class="content-nav" :style="contentStyle">
            <div class="preview-nav--item " :class="{on: wordShow==1}" @click="tabSwitcher(1)">
              <img src="@/assets/previewIcon/word.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.docx
              </div>
            </div>
            <!-- <a-divider/> -->
            <div class="preview-nav--item " :class="{on: wordShow==2}" @click="tabSwitcher(2)">
              <img src="@/assets/previewIcon/excel.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.excel
              </div>
            </div>
            <a-divider/>
            <div class="title" style="text-align: left;">
              {{ "绩效目标" }}
            </div>
            <div class="preview-nav--item" :class="{on: wordShow==3}" @click="tabSwitcher(3)">

              <img src="@/assets/previewIcon/unknow.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.jsxp
              </div>
            </div>
            <div class="preview-nav--item" :class="{on: wordShow==4}" @click="tabSwitcher(4)">
              <img src="@/assets/previewIcon/img.png" alt="word">
              <div class="file-name">
                融合服务开发平台前端部分工 作前端部分工作规划.jpg
              </div>
            </div>
            <div class="preview-nav--item" :class="{on: wordShow==5}" @click="tabSwitcher(5)">
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
        <a-card :head-style="{height:'57px', fontSize:'16px', color:'rgba(0,0,0,0.85)'}" :body-style="{padding: 0, border: 0,previewStyle}">
          <div class="title-detail">
            <div class="info">
              <span class="title__name" style="margin-right:12px">
                <a-icon type="file-word"/>&nbsp;融合服务开发平台前端部分工作规划.docx
              </span>
              <span class="title-des" style="margin-right:12px">
                <a-icon type="save"/>&nbsp;29.6MB
              </span>
              <span class="title-des" style="margin-right:12px">
                <a-icon type="clock-circle"/>&nbsp;2019-09-21
              </span>
            </div>
            <div class="btn-warp">
              <!-- <a-button style="margin-right:12px">缩小</a-button>
              <a-button style="margin-right:12px">放大</a-button> -->
              <a-button style="margin-right:12px">原图</a-button>
              <a-button>下载</a-button>
            </div>
          </div>
          <!-- <a-divider/> -->
          <!-- style="paddng: 24px 0 0 24px;" -->
          <div class="preview-body" :style="previewStyle" ref="text" >
            <iframe
              v-if="wordShow == 1"
              src="https://view.officeapps.live.com/op/view.aspx?src=http://www.xdocin.com/demo/demo.docx"
              width="100%"
              :height="value"
              frameborder="1">
            </iframe>
            <!-- excel  -->
            <iframe
              v-if="wordShow == 2"
              src="https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls"
              width="100%"
              :height="value"
              frameborder="1">
            </iframe>
            <!-- // PDF -->
            <iframe
              v-if="wordShow == 5"
              src="http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf"
              width="100%"
              :height="value"
              allowfullscreen
              webkitallowfullscreen>
            </iframe>
            <div class="err-icon " :style="imgBox" v-if="wordShow == 3">
              <img src="@/assets/previewIcon/unknow.png" alt="word" style="margin-right: 32px;">
              <div>
                <div style="margin-bottom: 32px; font-size:16px">抱歉此附件无法在线预览</div>
                <a-button type="primary" >下载</a-button>
              </div>

            </div>
            <div :style="imgBox" class="" v-if="wordShow == 4">
              <img src="@/assets/demoPng.jpg" alt="" class="bgc-class">
            </div>
          </div>
        </a-card>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Preview',
  props: {
    valKey: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      helpNum: 4,
      num: 20,
      value: '100%',
      wordShow: '',
      previewStyle: {
        height: ''
      },
      contentStyle: {
        height: ''
      },
      imgBox: {
        height: '100%'
      }
    }
  },

  mounted () {
    // this.value = document.documentElement.clientHeight - this.$refs.text.offsetHeight - 92 - 68 + 4 + 'px' // 暂时
    this.previewStyle.height = document.documentElement.clientHeight - this.$refs.text.offsetHeight - 94 + 'px'
    this.contentStyle.height = document.documentElement.clientHeight - 64 - 24 + 'px'
    // this.imgBox.height = document.documentElement.clientHeight - this.$refs.text.offsetHeight - 92 - 68 + 'px' // 暂时
    this.wordShow = this.$route.query.val
  },
  methods: {
    tabSwitcher (val) {
      this.wordShow = val
    },
    backBtn () {
      this.$router.push({
        name: 'pageSign',
        params: {
          scrollY: this.$route.params.scrollY
        }
      })
    }
  }

}
</script>
