<template>
  <div class="help-container">
    <div class="help-con-head">
      <div class="help-head-content">
        <div class="head-caption">
          <span>富深新平台模板</span>
          <span>帮助</span>
        </div>
        <div class="head-search">
          <a-input-search
            placeholder="请输入"
            style="width: 272px"
          />
        </div>
        <div class="head-contact">
          <div>
            <img src="~@/assets/telephone.svg" class="logo" alt="联系电话">
          </div>
          <div class="contact-info">
            <div class="contact-info-phone">400-800-1234</div>
            <div class="contact-info-date">周一至周五8:00至18:00</div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-header-index-wide">
      <a-card :bordered="false" :bodyStyle="{ padding: '16px 0', height: '100%' }" :style="{ height: '100%' }">
        <div class="account-settings-info-main" :class="device">
          <div class="account-help-right">
            <div class="account-help-breadcrumb">
              <a-breadcrumb>
                <a-breadcrumb-item>首页</a-breadcrumb-item>
                <a-breadcrumb-item><a href="">帮助</a></a-breadcrumb-item>
                <a-breadcrumb-item><a href="">帮助文档</a></a-breadcrumb-item>
                <a-breadcrumb-item>帮助信息</a-breadcrumb-item>
              </a-breadcrumb>
            </div>
            <div>
              <p>帮用名称帮助名称帮助名称</p>
              <p>关键字：关键字1,关键字2      关联：模块1-模块名称-列表,表单,审批；模块1-模块名称-列表,表单,审批             创建时间：2019-9-9 09:00</p>
              <hr>
              <div>文章浏览宽度默认为640px。如需调整，为了保障用户的阅读体验，建议不要超过720px；</div>
              <p>1. 基本样式示例</p>
              <p>本文用于示范，展示一些不同类型的内容，在文章中应该如何展示。包括：标题，段落，链接，附件，代码块，图片，表格内容。下载    Axure文件</p>
              <p>1.1 段落和列表</p>
              <p>有序列表</p>
              <p>1.   段落和列表示列</p>
              <p>2.   图片示例</p>
              <p>3.   表格示例</p>
              <p>4.   代码块示例</p>
              <p>无序列表</p>
              <p>1.   段落和列表示列</p>
              <p>2.   图片示例</p>
              <p>3.   表格示例</p>
              <p>4.   代码块示例</p>
              <p>1.2图片示例</p>
              <p>图片默认居中对齐，缩略至宽度等于文章限定快读，点击可查看原图。交互方式参照云雀即可。</p>
              <div>
                <img style="width:640px" :src="banner" />
              </div>
              <p>1.2.1 小图示例</p>
              <div>
                <img style="width:339px" :src="banner" />
              </div>
              <p>1.3 表格示例</p>
              <p>当表格超出文章设定宽度，通过横向滑动查看全部内容。</p>
              <div></div>
            </div>
          </div>
        </div>
      </a-card>
      <!-- layout footer -->
      <a-layout-footer>
        <global-footer />
      </a-layout-footer>
    </div>
  </div>
</template>

<script>
import { PageView, RouteView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin.js'
import GlobalFooter from '@/components/GlobalFooter'

import banner from '@/assets/login_bg1.png'

export default {
  components: {
    RouteView,
    PageView,
    GlobalFooter
  },
  mixins: [mixinDevice],
  data () {
    return {
      // horizontal  inline
      mode: 'inline',
      openKeys: [],
      selectedKeys: [],
      // cropper
      preview: {},
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      },

      pageTitle: '',
      contentText: '<div id="u6" class="ax_default heading_1">' +
        '<div id="u6_div" class=""></div>' +
        '<div id="u6_text" class="text ">' +
          '<p><span>帮用名称帮助名称帮助名称</span></p>' +
        '</div>' +
      '</div>',
      conText: '<div id="u6" class="ax_default heading_1" style="font-family: MicrosoftYaHei, &quot;Microsoft YaHei&quot;; font-size: 40px; color: rgba(0, 0, 0, 0.847); line-height: 48px; border-width: 0px; position: absolute; left: 164px; top: 167px; width: 481px; height: 48px; background-color: rgb(240, 242, 245);"><div id="u6_text" class="text " style="border-width: 0px; position: absolute; left: 0px; top: 0px; width: 481px; white-space: nowrap;"><p style="margin-top: 0px; margin-bottom: 0px; text-rendering: optimizelegibility; font-feature-settings: &quot;kern&quot;; font-kerning: normal;">帮用名称帮助名称帮助名称</p></div></div><div id="u7" class="ax_default line" style="font-family: MicrosoftTaiLe, &quot;Microsoft Tai Le&quot;; font-size: 13px; text-align: center; line-height: normal; border-width: 0px; position: absolute; left: 131px; top: 272px; width: 941px; height: 1px; background-color: rgb(240, 242, 245);"><img id="u7_img" class="img " src="http://127.0.0.1:32767/08.57.31/images/%E5%B8%AE%E5%8A%A9%E6%9C%80%E7%BB%88%E9%A1%B5/u7.png" style="position: absolute; left: 0px; top: 0px; width: 942px; height: 2px;"></div><div id="u8" class="ax_default heading_1" style="font-family: MicrosoftYaHei, &quot;Microsoft YaHei&quot;; color: rgba(0, 0, 0, 0.447); line-height: 24px; border-width: 0px; position: absolute; left: 166px; top: 296px; width: 640px; height: 24px; background-color: rgb(240, 242, 245);"><div id="u8_div" class="" style="position: absolute; left: 0px; top: 0px; width: 640px; height: 24px; background-image: inherit; background-position: inherit; background-size: inherit; background-repeat: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: rgba(255, 255, 255, 0); border-width: 0px 0px 0px 3px; border-left-style: ...'
    }
  },
  computed: {
    banner () { // 引入流程图片
      return banner
    }
  },
  created () {
    this.updateMenu()
  },
  methods: {
    onOpenChange (openKeys) {
      this.openKeys = openKeys
    },
    updateMenu () {
      const routes = this.$route.matched.concat()
      this.selectedKeys = [ routes.pop().path ]
    }
  },
  watch: {
    '$route' (val) {
      this.updateMenu()
    }
  }
}
</script>

<style lang="less" scoped>
.help-container {
  background-color: #EFF3F5;
  .help-con-head{
    height:64px;
    background-color: #004081;
    .help-head-content {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      .head-caption {
        color: #FFFFFF;
        & span:first-child {
          font-size: 20px;
          padding-right: 8px;
        }
        & span:last-child {
          font-size: 16px;
        }
      }
      .head-contact {
        display: flex;
        align-items: center;
        .contact-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          padding-left: 8px;
          .contact-info-phone{
            font-size: 14px;
            line-height: 20px;
          }
          .contact-info-date{
            font-size: 10px;
            line-height: 14px;
          }
        }
      }
    }
  }
  .page-header-index-wide {
    max-width: 1200px;
    margin: 24px auto 0;
     background-color: #fff
  }
}
  .account-settings-info-main {
    width: 100%;
    display: flex;
    height: 100%;
    overflow: auto;
    /deep/ .ant-menu-inline {
     border: 0;
    }
    &.mobile {
      display: block;
      .account-settings-info-left {
        border-right: unset;
        border-bottom: 1px solid #e8e8e8;

        width: 100%;
        height: 50px;
        overflow-x: auto;
        overflow-y: scroll;
      }
      .account-settings-info-right {
        padding: 20px 40px;
      }
    }

    .account-settings-info-left {
      border-right: 1px solid #e8e8e8;
    }

    .account-help-right {
      flex: 1 1;
      padding: 8px 40px;
      .account-help-breadcrumb {
        color: rgba(0,0,0,.85);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        padding-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
      }
      .account-settings-info-view {
        padding-top: 12px;
      }
    }
  }

</style>
