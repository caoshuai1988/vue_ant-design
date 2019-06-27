<template>
  <div :style="!$route.meta.hiddenHeaderContent && !isFullTopMenu() ? 'margin: -24px -24px 0px;' : 'width:100%'">
    <!-- pageHeader , route meta :true on hide -->
    <page-header v-if="!$route.meta.hiddenHeaderContent" :title="pageTitle" :logo="logo" :avatar="avatar">
      <slot slot="action" name="action">
        <div class="list-action" v-if="isPageList">
          <template>
            <span @click="refresh"><a-icon type="sync" style="font-size:14px; margin-right:8px"/>刷新</span>
            <span @click="showDrawer"><a-icon type="setting" style="font-size:14px; margin-right:8px"/>设置</span>
            <span><a-icon type="delete" style="font-size:14px; margin-right:8px"/>回收站</span>
            <span><a-icon type="snippets" style="font-size:14px; margin-right:8px"/>业务流程</span>
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
    <template>
      <div class="alert">
        <a-drawer
          title="设置"
          :width="640"
          @close="onClose"
          :visible="visible"
          :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
          <template>
            <div style="padding-bottom:40px;">
              <a-card class="card list-set-drawer" style="font-size: 26px" :bordered="false" >

                <layoutForm title="模板" >
                  <span class="foldStyle" @click="fold(1)">
                    <a-icon type="up" v-if="iconToggle" />
                    <a-icon type="down" v-else />
                  </span>
                  <verticaltoggle>
                    <TagModule v-if="foldOne"></TagModule>
                  </verticaltoggle>
                </layoutForm>
                <a-divider style="margin-bottom: 32px"/>
                <layoutForm title="列表基础">
                  <span class="foldStyle" @click="fold(2)">
                    <a-icon type="up" v-if="iconToggleOne" />
                    <a-icon type="down" v-else />
                  </span>
                  <verticaltoggle>
                    <Listjc v-if="foldTwo"></Listjc>
                  </verticaltoggle>
                </layoutForm>
                <a-divider style="margin-bottom: 32px"/>
                <layoutForm title="列表列">
                  <span class="foldStyle" @click="fold(3)">
                    <a-icon type="up" v-if="iconTable" />
                    <a-icon type="down" v-else />
                  </span>
                  <verticaltoggle>
                    <ListTable v-if="foldTable"></ListTable>
                  </verticaltoggle>
                </layoutForm>
                <a-divider style="margin-bottom: 32px"/>
                <layoutForm title="默认筛选">
                  <span class="foldStyle" @click="fold(4)">
                    <a-icon type="up" v-if="iconFour" />
                    <a-icon type="down" v-else />
                  </span>
                  <verticaltoggle>
                    <ScreeningTable v-if="dataFour"></ScreeningTable>
                  </verticaltoggle>
                </layoutForm>
                <a-divider style="margin-bottom: 32px"/>
              </a-card>
            </div>
          </template>
          <div
            :style="{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }"
          >
            <a-popconfirm placement="top" @confirm="confirm" @cancel="cancel" okText="Yes" cancelText="No">
              <template slot="title">
                <p>我是内容我是内容我是内容我是内容我是内容我是内容</p>
                <p>
                  <span>姓名</span>
                  <span style="display:inline-block; margin-left:6px;"><a-input placeholder="Basic usage"/></span>
                </p>
              </template>
              <a-button :style="{marginRight: '12px'}">
                保存为模板
              </a-button>
            </a-popconfirm>
            <a-button
            	type="primary"
              @click="onClose"
            >
              确定
            </a-button>
          </div>
        </a-drawer>
      </div>
    </template>
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
import TagModule from './listTables/TagModule'
import ListTable from './listTables/listTable'
import ScreeningTable from './listTables/ScreeningTable'
import verticaltoggle from '@/views/newform/verticaltoggle.js'
import Listjc from './listTables/listjc'
import layoutForm from '@/views/newform/LayoutForm'

export default {
  name: 'PageView',
  mixins: [mixin],
  components: {
    PageHeader,
    TagModule,
    ListTable,
    ScreeningTable,
    verticaltoggle,
    Listjc,
    layoutForm
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
      visible: false,
      foldOne: true, // 折叠组件1
      foldTwo: true, // 折叠组件2
      foldTable: false, // 折叠表格
      iconTable: false, // 图标表格
      iconToggle: true, // 图标1
      iconToggleOne: true, // 图标2
      memberLoading: false,
      iconFour: false, // 筛选icon
      dataFour: false // 筛选组件
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
    //  	消失隐藏
    fold (flag) {
      if (flag === 1) {
        this.foldOne = !this.foldOne
        this.iconToggle = !this.iconToggle
      } else if (flag === 2) {
        this.foldTwo = !this.foldTwo
        this.iconToggleOne = !this.iconToggleOne
      } else if (flag === 3) {
        this.foldTable = !this.foldTable
        this.iconTable = !this.iconTable
      } else if (flag === 4) {
        this.iconFour = !this.iconFour
        this.dataFour = !this.dataFour
      }
    },
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
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    confirm (e) {
      console.log(e)
      this.$message.success('Click on Yes');
      this.visible = false;
    },
    cancel (e) {
      console.log(e)
      this.$message.error('Click on No');
      this.visible = false;
    }
  }
}
</script>
<style>
	.ant-drawer-close{
		right:3px !important;
	}
  .ant-drawer-title{
    font-size:18px !important;
  }
</style>
<style lang="less" scoped>
  .content {
    margin: 24px 24px 0;
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
	// 底部
.footerBox{
  background-color: #fff;
}
// icon
.foldStyle{
    position: absolute;
    top: -34px;
    right: 0;
    font-size: 16px;
    color: #a3a3a3;
    cursor: pointer;
    color:rgba(0, 0, 0, 0.45)
}
</style>
