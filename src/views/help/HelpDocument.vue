<template>
  <div class="help-container" :style="{zoom:curZoom}">
    <div class="help-con-head">
      <div class="help-head-content">
        <router-link :to="{ path: '/help/helpdoc' }">
	        <div class="head-caption">
	          <span><img src="~@/assets/fslogo.svg" style="width:40px;height:40px;" alt="logo"></span>
	          <span>富深新平台模板</span>
	          <span>帮助</span>
	        </div>
        </router-link>
        <div class="head-search">
          <router-link :to="{ path: '/help/helpsearch' }">
	          <a-input-search
	            style="width: 272px"
	          />
	        </router-link>
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
          <div class="account-settings-info-left">
            <a-menu
              style="width: 256px"
              :defaultSelectedKeys="['/help/children/first']"
              :defaultOpenKeys="[]"
              mode="inline"
              theme="light"
            >
              <a-menu-item key="/help/children/first">
                <router-link :to="{ name: 'FirstChildren' }">
                  <a-icon type="mail" />
                  A级菜单
                </router-link>
              </a-menu-item>
              <a-menu-item key="/help/children/last">
                <router-link :to="{ name: 'FirstChildren' }">
                  <a-icon type="calendar" />
                  B级菜单
                </router-link>
              </a-menu-item>
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="appstore" /><span>C级菜单</span></span>
                <a-menu-item key="3">C级菜单 3</a-menu-item>
                <a-menu-item key="4">C级菜单 4</a-menu-item>
                <a-sub-menu key="sub1-2" title="C级菜单5">
                  <a-menu-item key="5">C级菜单 5-1</a-menu-item>
                  <a-menu-item key="6">C级菜单 5-2</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="setting" /><span>D级菜单</span></span>
                <a-menu-item key="7">D级菜单 7</a-menu-item>
                <a-menu-item key="8">D级菜单 8</a-menu-item>
                <a-menu-item key="9">D级菜单 9</a-menu-item>
                <a-menu-item key="10">D级菜单 10</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
          <div class="account-help-right">
            <div class="account-help-breadcrumb">
              <a-breadcrumb>
              	<router-link :to="{ path: '/help/helpdoc' }">
                	<a-breadcrumb-item>首页</a-breadcrumb-item>
               </router-link>
                <a-breadcrumb-item><a href="">帮助</a></a-breadcrumb-item>
                <a-breadcrumb-item>帮助文档</a-breadcrumb-item>
              </a-breadcrumb>
              <a-input-search
                placeholder="请输入搜索..."
                style="width: 200px"
              />
            <!-- <span>{{ $route.meta.title }}</span> -->
            </div>
            <route-view></route-view>
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
import Vue from 'vue'
import { PageView, RouteView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin.js'
import GlobalFooter from '@/components/GlobalFooter'

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

      pageTitle: ''
    }
  },
  computed: {
    curZoom () {
      return Vue.ls.get('DEFAULT_CONTAINER_ZOOM') ? Vue.ls.get('DEFAULT_CONTAINER_ZOOM') : 1
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
         vertical-align:top;
        }
        & span:nth-child(2) {
          font-size: 20px;
          padding-right: 8px;
          padding-left:8px;
          vertical-align:top;
          line-height:36px;
        }
        & span:last-child {
          font-size: 16px;
          vertical-align:middle;
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
