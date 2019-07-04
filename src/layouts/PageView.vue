<template>
  <div :style="!$route.meta.hiddenHeaderContent ? 'margin: -24px -24px 0px;' : 'width:100%'">
    <!-- pageHeader , route meta :true on hide -->
    <page-header v-if="!$route.meta.hiddenHeaderContent" :title="pageTitle" :logo="logo" :avatar="avatar">
      <slot slot="action" name="action">
        <div class="list-action" v-if="isPageList">
          <template>
            <span @click="refresh"><a-icon type="sync" style="font-size:14px; margin-right:8px"/>刷新</span>
            <span @click="showDrawer"><a-icon type="setting" style="font-size:14px; margin-right:8px"/>设置</span>
            <span><a-icon type="delete" style="font-size:14px; margin-right:8px"/>回收站</span>
            <span><a-icon type="file" style="font-size:14px; margin-right:8px"/>业务流程</span>
            <span><a-icon type="question-circle" style="font-size:14px; margin-right:8px"/>帮助</span>
          </template>
        </div>
      </slot>
      <slot slot="content" name="headerContent"></slot>
      <div slot="content" v-if="!this.$slots.headerContent && description">
        <p style="font-size: 14px;color: rgba(0,0,0,.65)">{{ description }}</p>
        <div class="link">
          <template v-for="(link, index) in linkList">
            <a :key="index" :href="link.href">
              <a-icon :type="link.icon"/>
              <span>{{ link.title }}</span>
            </a>
          </template>
        </div>
      </div>
      <slot slot="extra" name="extra">
        <div class="extra-img">
          <img v-if="typeof extraImage !== 'undefined'" :src="extraImage"/>
        </div>
      </slot>
      <div slot="pageMenu">
        <div class="page-menu-search" v-if="search">
          <a-input-search style="width: 80%; max-width: 522px;" placeholder="请输入..." size="large" enterButton="搜索"/>
        </div>
        <div class="page-menu-tabs" v-if="tabs && tabs.items">
          <!-- @change="callback" :activeKey="activeKey" -->
          <a-tabs :tabBarStyle="{margin: 0}" :activeKey="tabs.active()" @change="tabs.callback">
            <a-tab-pane v-for="item in tabs.items" :tab="item.title" :key="item.key"></a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </page-header>
    <!--弹窗消失隐藏-->
    <SetAlert ref="SetAlert"></SetAlert>
    <div class="content">
      <div class="page-header-index-wide">
        <slot>
          <!-- keep-alive  -->
          <keep-alive v-if="multiTab">
            <router-view ref="content"/>
          </keep-alive>
          <router-view v-else ref="content"/>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageHeader from '@/components/PageHeader'
import { mixin } from '@/utils/mixin'
import SetAlert from './listTables/SetAlert'

export default {
  name: 'PageView',
  mixins: [mixin],
  components: {
    PageHeader,
    SetAlert
  },
  props: {
    avatar: {
      type: String,
      default: null
    },
    title: {
      type: [String, Boolean],
      default: true
    },
    logo: {
      type: String,
      default: null
    },
    directTabs: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      tags: ['默认模板', '自定义模板', '自定义模板2'],
      pageTitle: null,
      description: null,
      linkList: [],
      extraImage: '',
      search: true,
      tabs: {},
      isPageList: false,
      memberLoading: false
    }
  },
  computed: {
    ...mapState({
      multiTab: state => state.app.multiTab
    })
  },
  mounted () {
    this.tabs = this.directTabs
    this.getPageMeta()
  },
  updated () {
    this.getPageMeta()
  },
  methods: {
    getPageMeta () {
      this.pageTitle = (typeof (this.title) === 'string' || !this.title) ? this.title : this.$route.meta.title
      this.isPageList = typeof (this.$route.meta.isList) === 'boolean' ? this.$route.meta.isList : false
      const content = this.$refs.content
      if (content) {
        if (content.pageMeta) {
          Object.assign(this, content.pageMeta)
        } else {
          this.description = content.description
          this.linkList = content.linkList
          this.extraImage = content.extraImage
          this.search = content.search === true
          this.tabs = content.tabs
        }
      }
    },
    // 刷新
    refresh () {
      window.location.reload()
    },
    // 父组件展示弹窗
    showDrawer () {
      this.$refs.SetAlert.toAlert()
    }
  }
}
</script>
<style lang="less" scoped>
  .content {
    // margin: 24px 24px 0;
    padding: 24px;
    .link {
      margin-top: 16px;
      &:not(:empty) {
        margin-bottom: 16px;
      }
      a {
        margin-right: 32px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
        i {
          font-size: 24px;
          margin-right: 8px;
          vertical-align: middle;
        }
        span {
          height: 24px;
          line-height: 24px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .list-set-drawer .ant-card-body{
		padding:1px !important;
	}
  .page-menu-search {
    text-align: center;
    margin-bottom: 16px;
  }

  .page-menu-tabs {
    margin-top: 48px;
  }

  .extra-img {
    margin-top: -60px;
    text-align: center;
    width: 195px;

    img {
      width: 100%;
    }
  }

  .mobile {
    .extra-img {
      margin-top: 0;
      text-align: center;
      width: 96px;

      img {
        width: 100%;
      }
    }
  }
</style>
