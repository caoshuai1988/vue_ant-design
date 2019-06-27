<template>
  <div class="help-container" :style="{zoom:curZoom}">
    <div class="help-con-head">
      <div class="help-head-content">
        <div class="head-caption">
        	<span><img src="~@/assets/fslogo.svg" style="width:40px;height:40px;" alt="logo"></span>
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
          <div class="account-help-left">
            <div class="help-left-condition">
              <div class="condition-block">
                <ul>
                  <li>查询范围</li>
                  <li v-for="item in group1" :key="item.id">
                    <a-checkable-tag v-model="item.checked" @change="handleChange(item.key)">
                      {{ item.name }}
                    </a-checkable-tag>
                  </li>
                  <!-- <li><a-checkable-tag v-model="checked3" @change="handleChange">仅正文</a-checkable-tag></li> -->
                  <!-- <li><a-checkable-tag v-model="checked4" @change="handleChange">标题+正文</a-checkable-tag></li> -->
                </ul>
              </div>
              <div class="condition-block">
                <ul>
                  <li>版块范围</li>
                  <li v-for="item in group2" :key="item.id">
                    <a-checkable-tag v-model="item.checked" @change="handleChange2(item.key)">
                      {{ item.name }}
                    </a-checkable-tag>
                  </li>
                </ul>
              </div>
              <div class="condition-block">
                <ul>
                  <li>搜索历史</li>
                  <li><a-checkable-tag v-model="checked9" @change="handleChange">帮助</a-checkable-tag></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="account-help-right">
            <div class="account-help-breadcrumb">
              <span style="font-size:14px; color:rgba(0,0,0,0.45)">“菜单”共检索到 <span style="color:red">88</span> 条相关结果</span>
              <a-input-search
                placeholder="请输入搜索..."
                style="width: 274px"
              />
            </div>
            <div>
              <a-list
                itemLayout="vertical"
                size="large"
                :pagination="pagination"
                :dataSource="listData"
              >
                <a-list-item slot="renderItem" slot-scope="item" key="item.title">
                  <a-list-item-meta
                    :description="item.description"
                  >
                    <a slot="title" :href="item.href">{{ item.title }}</a>
                  </a-list-item-meta>
                  {{ item.content }}
                </a-list-item>
              </a-list>
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
import Vue from 'vue'
import { PageView, RouteView } from '@/layouts'
import { mixinDevice } from '@/utils/mixin.js'
import GlobalFooter from '@/components/GlobalFooter'
const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://vue.ant.design/',
    title: `5G比4G多了什么？ ${i}`,
    description: '5G对你有什么影响.',
    content: '如果把2G、3G、4G几代移动通信技术比作不断把路修宽，让更多车可以跑，5G则利用技术在继续修宽高速路的同时，对路进行规划，实现分流，提高利用效率。比如利用边缘计算技术，数据不用传到遥远的云端，在边缘侧就可以计算，实现最近距离、最短时间，把网络上需要的资源推到用户面前。'
  })
}
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
      listData,
      group1: [
        {
          'key': 1,
          'name': '仅标题',
          'checked': false
        },
        {
          'key': 2,
          'name': '仅正文',
          'checked': false
        },
        {
          'key': 3,
          'name': '标题+正文',
          'checked': false
        }
      ],
      group2: [
        {
          'key': 4,
          'name': '全部(771)',
          'checked': false
        },
        {
          'key': 5,
          'name': '分类1(77)',
          'checked': false
        },
        {
          'key': 6,
          'name': '分类2(88)',
          'checked': false
        },
        {
          'key': 7,
          'name': '分类4(99)',
          'checked': false
        }
      ],
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      pageTitle: '',
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 10
      }
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
    },
    handleChange (e) {
      this.group1.forEach((item, index) => {
        item.checked = false
      })
      this.group1.forEach((item, index) => {
        if (item.key === e) {
          item.checked = true
        }
      })
    },
    handleChange2 (e) {
      this.group2.forEach((item, index) => {
        item.checked = false
      })
      this.group2.forEach((item, index) => {
        if (item.key === e) {
          item.checked = true
        }
      })
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

    .account-help-left {
      border-right: 1px solid #e8e8e8;
      max-width: 225px;
      width: 100%;
      .help-left-condition {
        .condition-block{
              margin: 0 33px 0 24px;
              border-bottom: 1px solid #E8E8E8;
              &:last-child {
                border: none;
              }
          & ul {
            list-style-type: none;
            color: rgba(0,0,0,0.65);
            text-align: right;
            & li {
              line-height: 40px;
              & /deep/ .ant-tag {
                font-size: 14px;
                margin-right: 0;
              }
            }
            & li:first-child {
            font-size: 16px;
            color: rgba(0,0,0,0.85);
            line-height: 60px;
            padding: 0 7px;
            }
          }
        }
      }

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
