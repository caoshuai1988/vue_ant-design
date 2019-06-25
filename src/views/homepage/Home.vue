<template>
  <home-view :avatar="avatar" :title="false">
    <div>
      <a-row :gutter="24">
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="总销售额" total="￥126,560">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <trend flag="up" style="margin-right: 16px;">
                <span slot="term">周同比</span>
                12%
              </trend>
              <trend flag="down">
                <span slot="term">日同比</span>
                11%
              </trend>
            </div>
            <template slot="footer">日均销售额<span>￥ 234.56</span></template>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="访问量" :total="8846 | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-area />
            </div>
            <template slot="footer">日访问量<span> {{ '1234' | NumberFormat }}</span></template>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="支付笔数" :total="6560 | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-bar />
            </div>
            <template slot="footer">转化率 <span>60%</span></template>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="6" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="运营活动效果" total="78%">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-progress color="rgb(19, 194, 194)" :target="80" :percentage="78" height="8px" />
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">同周比</span>
                12%
              </trend>
              <trend flag="up">
                <span slot="term">日环比</span>
                80%
              </trend>
            </template>
          </chart-card>
        </a-col>
      </a-row>
      <a-row :gutter="24">
        <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24">
          <a-card
            class="module-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="常用功能"
            :body-style="{ padding: 0 }">
            <a slot="extra">设置</a>
            <div>
              <div class="module-card-grid " :key="i" v-for="(item, i) in projects">
                <div class="card-grid">
                  <div class="grid-icon">
                    <a-badge :count="1">
                      <a-avatar :size="64" :icon="item.icon" />
                    </a-badge>
                  </div>
                  <div class="grid-caption">{{ item.caption }}</div>
                </div>
              </div>
            </div>
          </a-card>

          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            :body-style="{ padding: 0 }">
            <span slot="title">我的代办 <a href="javascript:void(0)" style="color:red">( 6 )</a></span>
            <a slot="extra">更多</a>
            <a-table :dataSource="table1" :pagination="false" style="padding: 24px">
              <a-table-column title="名称" data-index="name" key="name" />
              <a-table-column title="模块" data-index="module" key="module"/>
              <a-table-column title="进度" data-index="progress" key="progress"/>
              <a-table-column title="操作时间" data-index="datetime" key="datetime"/>
              <a-table-column title="操作" key="operation">
                <template slot-scope="text, record">
                  <a href style="margin-right:10px">{{ record.operation.transaction }}</a>
                  <a style="margin-right:10px">{{ record.operation.delayed }}</a>
                </template>
              </a-table-column>
            </a-table>
          </a-card>

          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            :body-style="{ padding: 0 }">
            <span slot="title">近期办理 <span style="color:#999999;font-size:14px;padding-left:10px;">只显示近10条业务</span></span>
            <a slot="extra">更多</a>
            <a-table :dataSource="table1" :pagination="false" style="padding: 24px">
              <a-table-column title="名称" data-index="name" key="name" />
              <a-table-column title="模块" data-index="module" key="module"/>
              <a-table-column title="进度" data-index="progress" key="progress"/>
              <a-table-column title="操作时间" data-index="datetime" key="datetime"/>
              <a-table-column title="操作" key="operation">
                <template slot-scope="text, record">
                  <a-badge :count="5" :numberStyle="{backgroundColor: '#199ED8'}">
                    <a href style="margin-right:10px">{{ record.operation.transaction }}</a>
                    <a style="margin-right:10px">{{ record.operation.delayed }}</a>
                  </a-badge>
                </template>
              </a-table-column>
            </a-table>
          </a-card>

          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            :body-style="{ padding: 0 }">
            <span slot="title">常用下载 <span style="color:#999999;font-size:14px;padding-left:10px;">只显示近10条业务</span></span>
            <a slot="extra">更多</a>
            <a-table :dataSource="table1" :pagination="false" style="padding: 24px">
              <a-table-column title="名称" data-index="name" key="name" />
              <a-table-column title="模块" data-index="module" key="module"/>
              <a-table-column title="进度" data-index="progress" key="progress"/>
              <a-table-column title="操作时间" data-index="datetime" key="datetime"/>
              <a-table-column title="操作" key="operation">
                <template slot-scope="text, record">
                  <a href style="margin-right:10px">{{ record.operation.transaction }}</a>
                  <a style="margin-right:10px">{{ record.operation.delayed }}</a>
                </template>
              </a-table-column>
            </a-table>
          </a-card>
          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="数据统计"
            :body-style="{ padding: 0 }">
            <a-form slot="extra">
              <a-form-item
                label="选择日期范围:"
                :label-col="{ span: 7}"
                :wrapper-col="{ span: 17 }"
              >
                <a-range-picker @change="onChange" />
              </a-form-item>
            </a-form>
            <gradient />
          </a-card>
        </a-col>
        <a-col
          style="padding: 0 12px"
          :xl="6"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24">
          <a-card style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <span slot="title">
              便签
              <a-icon type="plus" />
            </span>
            <a slot="extra">更多</a>
            <a-list
              :dataSource="list1.results"
            >
              <a-list-item slot="renderItem" slot-scope="item" style="padding:24px">
                <a-list-item-meta :description="item.email">
                  <a slot="title" :href="item.href">{{ item.name.last }}</a>
                  <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </a-list-item-meta>
                <div>Content</div>
              </a-list-item>

            </a-list>
          </a-card>
          <a-card style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <span slot="title">
              通知公告
              <a-icon type="plus" />
            </span>
            <a slot="extra">更多</a>
            <a-list
              :dataSource="list1.results"
            >
              <a-list-item slot="renderItem" slot-scope="item" style="padding:24px">
                <a-list-item-meta :description="item.email">
                  <a slot="title" :href="item.href">{{ item.name.last }}</a>
                  <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </a-list-item-meta>
                <div>Content</div>
              </a-list-item>
            </a-list>
          </a-card>

          <a-card style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
            <span slot="title">
              快捷菜单
            </span>
            <a slot="extra">设置</a>
            <a-row :gutter="24" style="padding:5px 15px">
              <a-col style="padding: 2px 0" :span="12" v-for="(item, index) in teams" :key="index">
                <div class="shortcut-menu">
                  <a-button type="primary">
                    <a-icon type="menu-fold" />
                    菜单名称菜单名称
                  </a-button>
                </div>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="登陆历史" style="margin-bottom: 24px" :loading="radarLoading" :bordered="false" :body-style="{ padding: 0 }">
            <a slot="extra">更多</a>
            <a-table :dataSource="table1" :pagination="false" style="padding: 24px">
              <a-table-column title="日期时间" data-index="datetime" key="datetime" />
              <a-table-column title="IP" data-index="module" key="module"/>
            </a-table>
          </a-card>
          <a-card :loading="loading" title="团队" :bordered="false">
            <div class="members">
              <a-row>
                <a-col :span="12" v-for="(item, index) in teams" :key="index">
                  <a>
                    <a-avatar size="small" :src="item.avatar" />
                    <span class="member">{{ item.name }}</span>
                  </a>
                </a-col>
              </a-row>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </home-view>
</template>

<script>
import { timeFix } from '@/utils/util'
import { mapGetters } from 'vuex'
import { HomeView } from '@/layouts'
import HeadInfo from '@/components/tools/HeadInfo'
import { Radar, Gradient, ChartCard, MiniArea, MiniBar, MiniProgress, RankList, Bar, Trend, NumberInfo, MiniSmoothArea } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'
/*
    Create By 20190620
    Author caoshuai
    Description 首页布局页面
 */
const DataSet = require('@antv/data-set')

export default {
  name: 'Workplace',
  components: {
    HomeView,
    HeadInfo,
    Radar,
    Gradient,
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    RankList,
    Bar,
    Trend,
    NumberInfo,
    MiniSmoothArea
  },
  data () {
    return {
      timeFix: timeFix(),
      avatar: '',
      user: {},

      projects: [],
      loading: true,
      radarLoading: true,
      activities: [],
      teams: [],

      // data
      axis1Opts: {
        dataKey: 'item',
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        }
      },
      axis2Opts: {
        dataKey: 'score',
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null
          }
        }
      },
      scale: [{
        dataKey: 'score',
        min: 0,
        max: 80
      }],
      axisData: [
        { item: '引用', a: 70, b: 30, c: 40 },
        { item: '口碑', a: 60, b: 70, c: 40 },
        { item: '产量', a: 50, b: 60, c: 40 },
        { item: '贡献', a: 40, b: 50, c: 40 },
        { item: '热度', a: 60, b: 70, c: 40 },
        { item: '引用', a: 70, b: 50, c: 40 }
      ],
      radarData: [],
      table1: [
        {
          key: '1',
          name: '融合服务开发服务平台前端部分工作规划.docx',
          module: '23.6MB',
          progress: '编辑(1/3)',
          datetime: '今天',
          operation: {
            transaction: '办理',
            delayed: '延时'
          }
        },
        {
          key: '2',
          name: '融合服务开发服务平台前端部分工作规划.docx',
          module: '23.6MB',
          progress: '编辑(1/3)',
          datetime: '今天',
          operation: {
            transaction: '办理',
            delayed: '延时'
          }
        },
        {
          key: '3',
          name: '融合服务开发服务平台前端部分工作规划.docx',
          module: '23.6MB',
          progress: '编辑(1/3)',
          datetime: '今天',
          operation: {
            transaction: '办理',
            delayed: '延时'
          }
        },
        {
          key: '4',
          name: '融合服务开发服务平台前端部分工作规划.docx',
          module: '23.6MB',
          progress: '编辑(1/3)',
          datetime: '今天',
          operation: {
            transaction: '办理',
            delayed: '延时'
          }
        },
        {
          key: '5',
          name: '融合服务开发服务平台前端部分工作规划.docx',
          module: '23.6MB',
          progress: '编辑(1/3)',
          datetime: '今天',
          operation: {
            transaction: '办理',
            delayed: '延时'
          }
        }
      ],
      list1: { 'results': [{ 'gender': 'female', 'name': { 'title': 'mrs', 'first': 'phoebe', 'last': 'dean' }, 'email': 'phoebe.dean@example.com', 'nat': 'IE' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': 'adam', 'last': 'johansen' }, 'email': 'adam.johansen@example.com', 'nat': 'DK' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': 'ایلیا', 'last': 'رضاییان' }, 'email': 'ایلیا.رضاییان@example.com', 'nat': 'IR' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': 'طاها', 'last': 'رضایی' }, 'email': 'طاها.رضایی@example.com', 'nat': 'IR' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': 'alexander', 'last': 'gagné' }, 'email': 'alexander.gagné@example.com', 'nat': 'CA' }] }
    }
  },
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  created () {
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar

    getRoleList().then(res => {
      console.log('workplace -> call getRoleList()', res)
    })

    getServiceList().then(res => {
      console.log('workplace -> call getServiceList()', res)
    })
  },
  mounted () {
    this.getProjects()
    this.getActivity()
    this.getTeams()
    this.initRadar()
  },
  methods: {
    ...mapGetters(['nickname', 'welcome']),
    getProjects () {
      this.$http.get('/list/search/projects')
        .then(res => {
          // this.projects = res.result && res.result.data
          this.projects = [{
            icon: 'android',
            caption: '高标准农田'
          }, {
            icon: 'apple',
            caption: '常用功能'
          }, {
            icon: 'windows',
            caption: '常用功能'
          }, {
            icon: 'ie',
            caption: '常用功能'
          }, {
            icon: 'chrome',
            caption: '常用功能'
          }, {
            icon: 'github',
            caption: '常用功能'
          }, {
            icon: 'aliwangwang',
            caption: '常用功能'
          }, {
            icon: 'dingding',
            caption: '常用功能'
          }, {
            icon: 'html5',
            caption: '常用功能'
          }, {
            icon: 'weibo',
            caption: '常用功能'
          }]
          this.loading = false
        })
    },
    getActivity () {
      this.$http.get('/workplace/activity')
        .then(res => {
          this.activities = res.result
        })
    },
    getTeams () {
      this.$http.get('/workplace/teams')
        .then(res => {
          this.teams = res.result
        })
    },
    initRadar () {
      this.radarLoading = true
      this.$http.get('/workplace/radar')
        .then(res => {
          const dv = new DataSet.View().source(res.result)
          dv.transform({
            type: 'fold',
            fields: ['个人', '团队', '部门'],
            key: 'user',
            value: 'score'
          })

          this.radarData = dv.rows
          this.radarLoading = false
        })
    },
    onChange (date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>

<style lang="less" scoped>
  .module-list {
    .module-card-grid {
      width: 20%;
      display: inline-block;
      .card-grid {
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .table-list {
    /deep/ .ant-table-thead > tr > th {
      font-weight: bold;
    }
    /deep/ .ant-form-item {
      margin-bottom: 0;
    }
  }

  .shortcut-menu {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-group {
    padding: 20px 0 8px 24px;
    font-size: 0;
    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }

  .members {
    a {
      display: block;
      margin: 12px 0;
      line-height: 24px;
      height: 24px;
      .member {
        font-size: 14px;
        color: rgba(0, 0, 0, .65);
        line-height: 24px;
        max-width: 100px;
        vertical-align: top;
        margin-left: 12px;
        transition: all 0.3s;
        display: inline-block;
      }
      &:hover {
        span {
          color: #1890ff;
        }
      }
    }
  }

  .mobile {

    .project-list {

      .project-card-grid {
        width: 100%;
      }
    }

    .more-info {
      border: 0;
      padding-top: 16px;
      margin: 16px 0 16px;
    }

    .headerContent .title .welcome-text {
      display: none;
    }
  }

</style>
