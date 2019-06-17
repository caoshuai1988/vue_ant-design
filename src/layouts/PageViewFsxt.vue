
<style lang="less" scoped>
.content {
  padding: 24px;
  // margin: 24px 24px 0;
  // width: calc(100% - (10px + 5px) * 2);
  // .main-wrap {
  //   width: 1200px;
  //   height: 100%;
  //   .main {
  //     &.content-fix {
  //       width: calc(1200px - 400px);
  //     }
  //   }
  // }

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
.page-title {
  width: 100%;
  padding-top: 16px;
  font-size: 14px;
  // display: flex;
  // justify-content: space-between;
  overflow: hidden;
  .item {
    margin-right: 32px;
    float: left;
  }
  .label {
    color: rgba(0, 0, 0, 0.85);
  }
  .value {
    color: rgba(0, 0, 0, 0.65);
  }
  .editor,
  .detial {
    cursor: pointer;
  }
}
.step-content{
  padding-top: 56px;
  padding-left: 10%;
  padding-right: 10%;
  .steps-content {
      margin-top: 16px;
      border: 1px dashed #e9e9e9;
      border-radius: 6px;
      background-color: #fafafa;
      min-height: 200px;
      text-align: center;
      padding-top: 80px;
    }

    .steps-action {
      margin-top: 24px;
    }
}
// ant-steps-item

.step-content /deep/ .ant-steps-label-vertical .ant-steps-item-title{
  padding-right: 0;
}
.step-content /deep/ .ant-steps-small .ant-steps-item-title{
  line-height: 16px;
  padding: 16px;
}
.ant-steps-item-title{
  &:hover{
    color: #1890ff;
  }
}

// progress 字体透明度
.step-content /deep/ .ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-title{
  color: rgba(0, 0, 0, 0.65);
  &:hover{
    color: #1890ff;
  }
}
// progress 字体透明度
.step-content /deep/ .ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title{
  &:hover{
    color: #1890ff;
  }
}
.step-content /deep/.ant-steps-label-vertical .ant-steps-item{
  cursor: pointer;
  // progress
  &.ant-steps-item-process .ant-steps-item-icon {
    background: #fff;
    .ant-steps-icon{
      color: #1890ff;
    }
  }
  &.active{
    .ant-steps-item-title{
      // position: relative;
      &::after{
        contain: '';
        display: inline-block;
        width: 100%;
        height: 2px;
        background: #1890ff;
        position: absolute;
        top: 46px;
        left: 0;
      }
    }
    .ant-steps-item-content > .ant-steps-item-title{
      color: #1890ff;
    }
    .ant-steps-item-icon{
      background: #1890ff;
      .ant-steps-icon{
        color: #fff;
      }
      .anticon svg{
        color: #fff;
      }
    }
  }
}

.step-content /deep/ .ant-steps-small .ant-steps-item-tail{
  top:12px;
}
.submit{
  padding-top: 48px;
  display: flex;
  justify-content: flex-end;
}
</style>
<template>
  <div :style="!$route.meta.hiddenHeaderContent ? 'margin: -24px -24px 0px;' : null">
    <!-- pageHeader , route meta :true on hide -->
    <page-header
      v-if="!$route.meta.hiddenHeaderContent"
      :title="pageTitle"
      :logo="logo"
      :avatar="avatar">
      <slot slot="action" name="action"></slot>
      <slot slot="content" name="headerContent"></slot>
      <div slot="content" v-if="!this.$slots.headerContent && description">
        <!-- <p style="font-size: 14px;color: rgba(0,0,0,.65)">{{ description }}</p> -->
        <!-- <div class="link">
          <template v-for="(link, index) in linkList">
            <a :key="index" :href="link.href">
              <a-icon :type="link.icon" />
              <span>{{ link.title }}</span>
            </a>
          </template>
        </div>-->
      </div>
      <slot slot="extra" name="extra">
        <div class="extra-img">
          <img v-if="typeof extraImage !== 'undefined'" :src="extraImage">
        </div>
      </slot>
      <div slot="pageMenu">
        <div class="page-menu-search" v-if="search">
          <a-input-search
            style="width: 80%; max-width: 522px;"
            placeholder="请输入..."
            size="large"
            enterButton="搜索"
          />
        </div>
        <div class="page-menu-tabs" v-if="tabs && tabs.items">
          <!-- @change="callback" :activeKey="activeKey" -->
          <a-tabs :tabBarStyle="{margin: 0}" :activeKey="tabs.active()" @change="tabs.callback">
            <a-tab-pane v-for="item in tabs.items" :tab="item.title" :key="item.key"></a-tab-pane>
          </a-tabs>
        </div>
      </div>
      <div slot="step" v-if="$route.meta.showStep">
        <!-- 标题 -->
        <div class="page-title">
          <div class="item">
            <span class="label">名称：</span>
            <span class="value">{{ name }}</span>
          </div>
          <div class="item">
            <span class="label">编码：</span>
            <span class="value">{{ code }}</span>
          </div>
          <div class="item">
            <span class="label">录入日期：</span>
            <span class="value">{{ date }}</span>
          </div>
          <span class="item editor" style="color: #1890ff;">编辑</span>
          <span class="item detial" style="color: #1890ff;">流程详情</span>
        </div>
        <!-- 高级带分布步骤 -->
        <div class="step-content">
          <template>
            <div>
              <a-steps :current="current" size="small" labelPlacement="vertical" >
                <a-step v-for="(item, index) in steps" :key="item.title" :title="item.title" :class="{ active: currentStep === index, }" @click="handelStepclick(index, item.content)">
                </a-step>
              </a-steps>
              <!-- <div class="steps-content">{{ steps[current].content }}</div> -->
              <!-- <div class="steps-action">
                <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
                <a-button
                  v-if="current == steps.length - 1"
                  type="primary"
                  @click="$message.success('Processing complete!')">Done</a-button>
                <a-button v-if="current>0" style="margin-left: 8px" @click="prev">Previous</a-button>
              </div> -->
            </div>
          </template>
        </div>
        <div class="submit">
          <div class="btn-wrap">
            <a-button type="primary" style="margin-right: 8px; color:#fff;">保存</a-button>
            <a-button-group style="margin-left: 8px;margin-right: 16px">
              <a-button>提交审批</a-button>
              <a-button>演示提醒</a-button>
              <a-button>删除</a-button>
              <a-button><a-icon type="ellipsis"/></a-button>
            </a-button-group>
            <span class="sign">|</span>
            <a-button style="width: 130px;margin-left:16px;">审批：<span style="color:#F5222D">待审批</span> <a-icon type="caret-down" /></a-button>
          </div>
        </div>
      </div>
    </page-header>
    <div class="content">
      <div class="page-header-index-wide main" :class="showHelp?'content-fix':''">
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
import { mapState, mapMutations } from 'vuex'
import PageHeader from '@/components/PageHeaderFsxt'

export default {
  name: 'PageView',
  components: {
    PageHeader
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
      pageTitle: null,
      description: null,
      linkList: [],
      extraImage: '',
      search: false,
      tabs: {},
      showHelp: true,
      name: '2018年韶关市翁源县江尾镇高标准农田建设项目',
      code: '4402290011140201810',
      date: 20190909,
      current: 3,
      currentStep: 0,
      steps: [
        { title: '项目库阶段',
          content: 'First-content' },
        { title: '申报阶段',
          content: 'Second-content' },
        { title: '计划阶段',
          content: '3-content' },
        { title: '在建阶段',
          content: '4-content' },
        { title: '竣工阶段',
          content: '5-content' },
        { title: '验收阶段',
          content: '6-content' },
        { title: '管护阶段',
          content: '7-content' }

      ]
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
    // next () {
    //   this.current++
    // },
    // prev () {
    //   this.current--
    // },
    ...mapMutations('stepform', ['SET_DATALIST']),
    handelStepclick (index, content) {
      if (this.current < index) return
      this.currentStep = index
      // this.SET_DATALIST(index)
      this.$store.dispatch('changOneActions', index)
      this.$forceUpdate()
    },
    getPageMeta () {
      // eslint-disable-next-line
      this.pageTitle = typeof this.title === 'string' || !this.title ? this.title : this.$route.meta.title

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
    }
  }
}
</script>
