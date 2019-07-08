<template>
  <a-layout :class="['layout', device]">
    <!-- SideMenu -->
    <a-drawer
      v-if="isMobile()"
      placement="left"
      :wrapClassName="`drawer-sider ${navTheme}`"
      :closable="false"
      :visible="collapsed"
      @close="drawerClose"
    >
      <side-menu
        :class="surplusTheme"
        mode="inline"
        :menus="menus"
        :theme="navTheme"
        :collapsed="false"
        :collapsible="true"
        @menuSelect="menuSelect"
      ></side-menu>
    </a-drawer>
    <a-layout v-if="!isFullTopMenu()">
      <side-menu
        :class="surplusTheme"
        v-if="isSideMenu()"
        mode="inline"
        :menus="menus"
        :theme="navTheme"
        :collapsed="collapsed"
        :collapsible="true"
      ></side-menu>
      <a-layout
        :class="[layoutMode, `content-width-${contentWidth}`]"
        :style="{ paddingLeft: contentPaddingLeft, minHeight: 'calc(100vh)' }">
        <!-- layout header -->
        <global-header
          :mode="layoutMode"
          :menus="menus"
          :theme="navTheme"
          :collapsed="collapsed"
          :device="device"
          @toggle="toggle"
        />

        <!-- layout content -->
        <a-layout-content :style="{ margin: '24px 24px 0', paddingTop: fixedHeader ? '64px' : '0' }">
          <multi-tab v-if="multiTab"></multi-tab>
          <transition name="page-transition">
            <route-view/>
          </transition>
        </a-layout-content>

        <!-- layout footer -->
        <a-layout-footer>
          <global-footer/>
        </a-layout-footer>

        <!-- Setting Drawer (show in development mode) -->
        <setting-drawer v-if="!production"></setting-drawer>
      </a-layout>
    </a-layout>

    <a-layout v-if="isFullTopMenu()">
      <a-layout
        :class="[layoutMode, `content-width-${contentWidth}`]"
        :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }">
        <!-- layout header -->
        <global-header
          :mode="layoutMode"
          :menus="menus"
          :theme="navTheme"
          :collapsed="collapsed"
          :device="device"
          @toggle2="toggle2"
        />
        <a-layout class="ant-layout-has-sider">
          <low-side-menu
            :class="surplusTheme"
            mode="inline"
            :menus="menus"
            :theme="navTheme"
            :collapsed="collapsed"
            :collapsible="true"
          ></low-side-menu>
          <a-layout>

            <!-- layout content -->
            <a-layout-content
              :style="{ height: '100%', margin: '24px 24px 0', paddingTop: fixedHeader ? '64px' : '0' }">
              <multi-tab v-if="multiTab"></multi-tab>
              <transition name="page-transition">
                <route-view/>
              </transition>
            </a-layout-content>

            <!-- layout footer -->
            <a-layout-footer>
              <global-footer/>
            </a-layout-footer>

          </a-layout>

        </a-layout>
        <!-- Setting Drawer (show in development mode) -->
        <setting-drawer v-if="!production"></setting-drawer>
      </a-layout>
    </a-layout>

  </a-layout>

</template>

<script>
import Vue from 'vue'
import { triggerWindowResizeEvent } from '@/utils/util'
import { mapState, mapActions } from 'vuex'
import { mixin, mixinDevice } from '@/utils/mixin'
import config from '@/config/defaultSettings'

import RouteView from './RouteView'
import MultiTab from '@/components/MultiTab'
import SideMenu from '@/components/Menu/SideMenu'
import LowSideMenu from '@/components/Menu/LowSideMenu'
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import SettingDrawer from '@/components/SettingDrawer'
import ALayoutSider from 'ant-design-vue/es/layout/Sider'

export default {
  name: 'BasicLayout',
  mixins: [mixin, mixinDevice],
  components: {
    ALayoutSider,
    RouteView,
    MultiTab,
    SideMenu,
    GlobalHeader,
    GlobalFooter,
    SettingDrawer,
    LowSideMenu
  },
  data () {
    return {
      production: config.production,
      collapsed: false,
      menus: []
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      mainMenu: state => state.permission.addRouters
    }),
    contentPaddingLeft () {
      if (!this.fixSidebar || this.isMobile()) {
        return '0'
      }
      if (this.sidebarOpened) {
        return '256px'
      }
      return '80px'
    }
  },
  watch: {
    sidebarOpened (val) {
      this.collapsed = !val
    }
  },
  beforeCreate () {

  },
  created () {
    this.menus = this.mainMenu.find(item => item.path === '/').children
    this.collapsed = !this.sidebarOpened
    document.body.style.zoom = Vue.ls.get('DEFAULT_CONTAINER_ZOOM') ? Vue.ls.get('DEFAULT_CONTAINER_ZOOM') : 1
  },
  mounted () {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }
  },
  methods: {
    ...mapActions(['setSidebar']),
    toggle () {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      triggerWindowResizeEvent()
    },
    toggle2 () {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      triggerWindowResizeEvent()
    },
    paddingCalc () {
      let left = ''
      if (this.sidebarOpened) {
        left = this.isDesktop() ? '256px' : '80px'
      } else {
        left = (this.isMobile() && '0') || ((this.fixSidebar && '80px') || '0')
      }
      return left
    },
    menuSelect () {
      if (!this.isDesktop()) {
        this.collapsed = false
      }
    },
    drawerClose () {
      this.collapsed = false
    }
  }
}
</script>

<style lang="less">
  @import url('../components/global.less');

  /*
   * The following styles are auto-applied to elements with
   * transition="page-transition" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the page transition by editing
   * these styles.
   */

  .page-transition-enter {
    opacity: 0;
  }

  .page-transition-leave-active {
    opacity: 0;
  }

  .page-transition-enter .page-transition-container,
  .page-transition-leave-active .page-transition-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
