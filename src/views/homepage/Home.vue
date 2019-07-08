<!--
 * @Author: 张志勇
 * @Date: 2019-07-01 17:58:19
 * @LastEditTime: 2019-07-04 11:20:32
 * @Description: 新增首页页面 重用功能设置利用穿梭框的样式
 *               包含一些图表信息
 -->
<template>
  <home-view :avatar="avatar" :title="false">
    <div>
      <modal :visible="isVisible" @handelClose="closeSetting"/>
      <a-row :gutter="24">
        <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
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
        <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="访问量" :total="8846 | NumberFormat">
            <a-tooltip title="指标说明" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-area color="rgb(19, 194, 194)" />
            </div>
            <template slot="footer">日访问量<span> {{ '1234' | NumberFormat }}</span></template>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
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
        <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
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
        <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="线上热门搜索" total="78%">
            <a-tooltip title="搜索用户数" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <mini-smooth-area :style="{ height: '45px' }" :dataSource="searchUserData" :scale="searchUserScale" />
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">搜索关键词</span>
                富深协通
              </trend>
            </template>
          </chart-card>
        </a-col>
        <a-col :sm="24" :md="12" :xl="4" :style="{ marginBottom: '24px' }">
          <chart-card :loading="loading" title="分类处理">
            <a-tooltip title="搜索用户数" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div class="last">
              <mini-rectangle :style="{ height: '45px'}" />
            </div>
            <template slot="footer">
              <trend flag="down" style="margin-right: 16px;">
                <span slot="term">分类</span>
                1，2，3
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
            :head-style="{ padding: '0 32px'}"
            :body-style="{ padding: '24px 32px' }">
            <a slot="extra" @click="handelSetting">设置</a>
            <div>
              <div class="module-card-grid " :key="i" v-for="(item, i) in projects">
                <div class="card-grid">
                  <div class="img-wrap grid-icon" :style="{background: item.color}">
                    <img style="width: 34px; height:34px;" :src="item.icon" alt="">
                  </div>
                  <div class="grid-caption">{{ item.caption }}</div>
                </div>
              </div>
            </div>
          </a-card>

          <!-- 我的待办 -->
          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            :head-style="{ padding: '0 32px'}"
            :body-style="{ padding: 0 }">
            <span slot="title">我的待办 （<a href="javascript:void(0)" style="color:red">6</a>）</span>
            <a slot="extra">更多</a>
            <a-table :dataSource="table1" :pagination="false" style="padding: 24px 32px">
              <a-table-column title="名称" data-index="name" key="name" :width="'380px'" />
              <a-table-column title="模块" data-index="module" key="module" />
              <a-table-column title="进度" >
                <template slot-scope="text, record">
                  <a-badge status="success" text="编辑(1/3)" />
                </template>
              </a-table-column>
              <a-table-column title="操作时间" data-index="datetime" key="datetime">
                <template slot-scope="text, record" rowKey="id">
                  <span style="color:#52c41a" v-if="record.datetime==='今天'">{{ record.datetime }}</span>
                  <span style="color:#FF9933" v-if="record.datetime==='昨天'">{{ record.datetime }}</span>
                  <span style="color:#FF0000" v-if="record.datetime==='2天前'">{{ record.datetime }}</span>
                  <span style="color:#FF0000" v-if="record.datetime==='08-12'">{{ record.datetime }}</span>
                </template>
              </a-table-column>
              <a-table-column title="操作" key="operation">
                <template slot-scope="text, record" rowKey="id">
                  <a href style="margin-right:10px">{{ record.operation.transaction }}</a>
                  <a>{{ record.operation.delayed }}</a>
                </template>
              </a-table-column>
            </a-table>
          </a-card>

          <!-- 近期办理 -->
          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            :head-style="{ padding: '0 32px'}"
            :body-style="{ padding: 0 }">
            <span slot="title">近期办理 <span style="color:#999999;font-size:12px;padding-left:10px;">只显示近10条业务</span></span>
            <a slot="extra">更多</a>
            <a-table :dataSource="table1" :pagination="false" style="padding: 24px 32px">
              <a-table-column title="名称" data-index="name" key="name" :width="380"/>
              <a-table-column title="模块" data-index="module" key="module"/>
              <a-table-column title="进度" data-index="progress" key="progress">
                <template slot-scope="text, record">
                  <a-badge status="success" text="编辑(1/3)" />
                </template>
              </a-table-column>
              <a-table-column title="操作时间" key="datetime">
                <template slot-scope="text, record">
                  <span style="color:#52c41a" v-if="record.datetime==='今天'">{{ record.datetime }}</span>
                  <span style="color:#FF9933" v-if="record.datetime==='昨天'">{{ record.datetime }}</span>
                  <span style="color:#FF0000" v-if="record.datetime==='2天前'">{{ record.datetime }}</span>
                  <span style="color:#FF0000" v-if="record.datetime==='08-12'">{{ record.datetime }}</span>
                </template>
              </a-table-column>
              <a-table-column title="操作" key="operation">
                <template slot-scope="text, record">
                  <a>{{ record.operation.toView }}</a>
                </template>
              </a-table-column>
            </a-table>
          </a-card>

          <!-- 常用下载 -->
          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            :head-style="{ padding: '0 32px'}"
            :body-style="{ padding: 0 }">
            <span slot="title">常用下载 <span style="color:#999999;font-size:12px;padding-left:10px;">只显示近10条业务</span></span>
            <a slot="extra">更多</a>
            <a-table :dataSource="table1" :pagination="false" style="padding: 24px 32px">
              <a-table-column title="名称" data-index="name" key="name" :width="380"/>
              <a-table-column title="类型" data-index="module" key="module"/>
              <a-table-column title="发布日期" data-index="publicTime" key="publicTime"/>
              <a-table-column title="操作" key="operation">
                <template slot-scope="text, record">
                  <a>{{ record.operation.download }}</a>
                </template>
              </a-table-column>
            </a-table>
          </a-card>

          <!-- 数据统计 -->
          <a-card
            class="table-list"
            :loading="loading"
            style="margin-bottom: 24px;"
            :bordered="false"
            title="数据统计"
            :head-style="{ padding: '0 32px'}"
            :body-style="{ padding: 0 }">
            <a-form slot="extra">
              <a-form-item
                label="选择日期范围:"
                :label-col="{ span: 7}"
                :wrapper-col="{ span: 17 }"
                class="picker-label">
                <a-range-picker @change="onChange" />
              </a-form-item>
            </a-form>
            <gradient style="padding:24px 32px; box-sizing: border-box;"/>
          </a-card>
        </a-col>
        <!-- 右侧侧边栏 -->
        <!-- 便签 -->
        <a-col
          style="padding: 0 12px"
          :xl="6"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24">
          <a-card style="margin-bottom: 24px" :bordered="false" :body-style="{padding: '24px',overflow: 'hidden'}">
            <span slot="title">
              便签
              <a-icon type="plus" style="margin-left: 8px"/>
            </span>
            <a slot="extra">更多</a>

            <div class="content-main">
              <div class="note-row" v-for="(ele, index) in statusMap" :key="index">
                <div class="content">
                  <a-badge :status="ele.status " :text="ele.text " />
                </div>
              </div>
            </div>
          </a-card>
          <!-- 通知公告 -->
          <a-card style="margin-bottom: 24px" :bordered="false" :body-style="{padding: '24px', overflow: 'hidden'}">
            <span slot="title">
              通知公告
            </span>
            <a slot="extra">更多</a>
            <div class="announce-main">
              <div class="announce-row" v-for="(ele, index) in announceList" :key="index">
                <div class="left">{{ ele.content }}</div>
                <div class="right">{{ ele.time }}</div>
              </div>
            </div>
          </a-card>
          <!-- 快捷菜单 -->
          <a-card style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 24}">
            <span slot="title">
              快捷菜单
            </span>
            <a slot="extra">设置</a>
            <div class="item-group">
              <a>操作一</a>
              <a>操作二</a>
              <a>操作三</a>
              <a>操作四</a>
              <a>操作五</a>
              <a>操作六</a>
              <a-button size="small" type="primary" ghost icon="plus">添加</a-button>
            </div>
          </a-card>
          <!-- 登录历史 -->
          <a-card style="margin-bottom: 24px" :loading="radarLoading" :bordered="false" :body-style="{ padding: 24 }">
            <span slot="title">
              登录历史
            </span>
            <a slot="extra">更多</a>
            <a-table :dataSource="table2" :pagination="false">
              <a-table-column title="日期时间" data-index="datetime" key="datetime" />
              <a-table-column title="IP" data-index="ip" key="module"/>
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </home-view>
</template>

<script>
import moment from 'moment'
import { timeFix } from '@/utils/util'
import { mapGetters } from 'vuex'
import { HomeView } from '@/layouts'
import HeadInfo from '@/components/tools/HeadInfo'
import { Radar, Gradient, ChartCard, MiniArea, MiniBar, MiniProgress, MiniSmoothArea, RankList, Bar, Trend, NumberInfo, MiniRectangle } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'
import modal from './component/modal'

// word格式
import icon1 from '@/assets/icons/icon1.png'
import icon2 from '@/assets/icons/icon2.png'
import icon3 from '@/assets/icons/icon3.png'
import icon4 from '@/assets/icons/icon4.png'
import icon5 from '@/assets/icons/icon5.png'
import icon6 from '@/assets/icons/icon6.png'
import icon7 from '@/assets/icons/icon7.png'
import icon8 from '@/assets/icons/icon8.png'
import icon9 from '@/assets/icons/icon9.png'
import icon10 from '@/assets/icons/icon10.png'

/*
    Create By 20190620
    Author caoshuai
    Description 首页布局页面
 */
const DataSet = require('@antv/data-set')
const searchUserData = []
for (let i = 0; i < 7; i++) {
  searchUserData.push({
    x: moment().add(i, 'days').format('YYYY-MM-DD'),
    y: Math.ceil(Math.random() * 10)
  })
}
const searchUserScale = [
  {
    dataKey: 'x',
    alias: '时间'
  },
  {
    dataKey: 'y',
    alias: '用户数',
    min: 0,
    max: 10
  }]

const statusMap = {
  0: {
    status: 'default',
    text: '24小时内要做的工作红字要做的工作红字'
  },
  1: {
    status: 'success',
    text: '72小时内要做的工作橙字要做的工作橙字'
  },
  2: {
    status: 'error',
    text: '72小时内要做的工作橙字要做的工作橙字'
  },
  3: {
    status: 'processing',
    text: '提醒事项提醒事项提醒事项提醒事项提醒'
  },
  4: {
    status: 'warning',
    text: '提醒事项提醒事项提醒事项提醒事项提醒'
  }
}

export default {
  name: 'Workplace',
  components: {
    modal, // 穿梭框
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
    MiniSmoothArea,
    MiniRectangle
  },
  data () {
    return {
      // 穿梭框是否显示
      isVisible: false,
      statusMap, // 便签数据
      // 便签数据
      // noteList: [
      //   { time: '08-12 09:00', content: '24小时内要做的工作红字要做的工作红字', color: '#FF0000' },
      //   { time: '08-12 09:00', content: '72小时内要做的工作橙字要做的工作橙字', color: '#FF9933' },
      //   { time: '08-12 09:00', content: '72小时内要做的工作橙字要做的工作橙字', color: '#FF9933' },
      //   { time: '08-12 09:00', content: '提醒事项提醒事项提醒事项提醒事项提醒', color: 'rgba(0,0,0,0.65)' },
      //   { time: '08-12 09:00', content: '提醒事项提醒事项提醒事项提醒事项提醒', color: 'rgba(0,0,0,0.65)' }
      // ],
      announceList: [
        { content: '【公告】公告名称公告名称公告名称', time: '06-25' },
        { content: '【公告】公告名称公告名称公告名称', time: '06-25' },
        { content: '【公告】公告名称公告名称公告名称', time: '06-25' },
        { content: '【公告】公告名称公告名称公告名称', time: '06-25' },
        { content: '【公告】公告名称公告名称公告名称', time: '06-25' }
      ],
      timeFix: timeFix(),
      avatar: '',
      user: {},
      // icons: [ icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10 ],
      projects: [],
      loading: true,
      radarLoading: true,
      activities: [],
      teams: [],
      buttons: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
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
          name: '条目名称条目名称条目名称条目名称条目名称条目名称条目名称条目名称条目名称条目名称条目名称条目名称',
          module: '模块名称1',
          publicTime: '2019-09-09',
          progress: '编辑(1/3)',
          datetime: '今天',
          operation: {
            transaction: '办理',
            delayed: '延时',
            toView: '查看',
            download: '下载'
          }
        },
        {
          key: '2',
          name: '条目名称条目名称条目名称条目名称',
          module: '模块名称2',
          publicTime: '2019-09-09',
          progress: '编辑(1/3)',
          datetime: '昨天',
          operation: {
            transaction: '办理',
            delayed: '延时',
            toView: '查看',
            download: '下载'
          }
        },
        {
          key: '3',
          name: '条目名称条目名称条目名称条目名称',
          module: '模块名称3',
          publicTime: '2019-09-09',
          progress: '编辑(1/3)',
          datetime: '2天前',
          operation: {
            transaction: '办理',
            delayed: '延时',
            toView: '查看',
            download: '下载'
          }
        },
        {
          key: '4',
          name: '条目名称条目名称条目名称条目名称',
          module: '模块名称4',
          publicTime: '2019-09-09',
          progress: '编辑(1/3)',
          datetime: '2天前',
          operation: {
            transaction: '办理',
            delayed: '延时',
            toView: '查看',
            download: '下载'
          }
        },
        {
          key: '5',
          name: '一二三四五六七八九十十一十二十三',
          module: '模块名称5',
          publicTime: '2019-09-09',
          progress: '编辑(1/3)',
          datetime: '08-12',
          operation: {
            transaction: '办理',
            delayed: '延时',
            toView: '查看',
            download: '下载'
          }
        }
      ],
      table2: [
        { datetime: '2019-09-09 09:00', ip: '211.192.1.13(北京)' },
        { datetime: '2019-09-09 09:00', ip: '211.192.1.13(北京)' },
        { datetime: '2019-09-09 09:00', ip: '211.192.1.13(北京)' },
        { datetime: '2019-09-09 09:00', ip: '211.192.1.13(北京)' },
        { datetime: '2019-09-09 09:00', ip: '211.192.1.13(北京)' }

      ],
      list1: { 'results': [{ 'gender': 'female', 'name': { 'title': 'mrs', 'first': 'phoebe', 'last': '辉含云' }, 'email': '银川这些街路巷桥重新命名更名！新华路、解放路……别叫错了', 'nat': 'IE' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': 'adam', 'last': '公良映' }, 'email': 'adam.johansen@example.com', 'nat': 'DK' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': '王晓明', 'last': '张立杰' }, 'email': '565686987@qq.com', 'nat': 'IR' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': '刘欣', 'last': '王日龙' }, 'email': '9u8u98@google.com', 'nat': 'IR' }, { 'gender': 'male', 'name': { 'title': 'mr', 'first': 'alexander', 'last': '萧清松' }, 'email': 'alexander.gagné@example.com', 'nat': 'CA' }] },
      searchUserData,
      searchUserScale
    }
  },
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  // filters: {
  //   statusFilter (type) {
  //     return statusMap[type].text
  //   },
  //   statusTypeFilter (type) {
  //     return statusMap[type].status
  //   }
  // },
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
            icon: [icon1],
            color: '#f3667c',
            caption: '查看备案'
          }, {
            icon: [icon2],
            caption: '地理信息',
            color: '#48a1ff'
          }, {
            icon: [icon3],
            caption: '实施计划',
            color: '#4ECCCB'
          }, {
            icon: [icon4],
            caption: '项目规划',
            color: '#AED839'
          }, {
            icon: [icon5],
            caption: '查看审批',
            color: '#9860E5'
          }, {
            icon: [icon6],
            caption: '组织机构管理',
            color: '#4ECCCB'
          }, {
            icon: [icon7],
            caption: '登录日志',
            color: '#FBD44B'
          }, {
            icon: [icon8],
            caption: '关联项目规划',
            color: '#AED839'
          }, {
            icon: [icon9],
            caption: '申请批复',
            color: '#F3667C'
          }, {
            icon: [icon10],
            caption: '新建编辑',
            color: '#48A1FF'
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
    },
    handelSetting () {
      this.isVisible = true
    },
    closeSetting () {
      this.isVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
  // 处理左侧表格单行文本溢出
  /deep/ .ant-table-tbody > tr > td {
    // padding-right: 88px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /deep/.ant-table table{
      // width:30em;
      table-layout:fixed;/* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
  }
  .last{
    position: relative;
    top:-40px;
  }
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
        .grid-caption {
          // position: relative;
          margin-top: 8px;
        }
      }
    }
  }
  // 常用功能模块图标样式
  .img-wrap{
    width: 64px;
    text-align: center;
    line-height: 64px;
    height: 64px;
    background:rgb(19, 194, 194);border-radius:50%;
  }
  /deep/ .ant-card-extra {
      a {
        color: rgba(0,0,0,.45);
        font-size: 14px;
        &:hover {
          color: #1890ff;
        }
      }
      .picker-label {
        .ant-form-item-label label{
          color: rgba(0, 0, 0, .65)
        }
      }
  }
  .table-list {
    /deep/ .ant-table-thead > tr > th {
      font-size: 12px;
    }
    /deep/ .ant-form-item {
      margin-bottom: 0;
    }
  }

  .shortcut-menu {
    // height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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

  //便签
  .note-row{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 36px;
    cursor: pointer;
    .time{
      display: inline-block;
      width: 120px;
    }
    .content{
      display: inline-block;
      // width: 60%;
      width: 100%;
      text-align: left;
      overflow: hidden;
      text-overflow:ellipsis; //溢出用省略号显示
      white-space:nowrap;
      &:hover{
        color:#1890ff;
      }
    }

  }

   //通知公告
  .announce-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    height: 36px;
    cursor: pointer;
    &:hover{
      color:#1890ff;
      .right{
        color:#1890ff;
      }
    }
    .left{
      width: 80%;
      overflow: hidden;
      text-overflow:ellipsis; //溢出用省略号显示
      white-space:nowrap;
    }
    .right{
      text-align: right;
      width: 20%;
      color: rgba(0,0,0,.45);
    }
  }
  // 快捷菜单
  .item-group {
    // padding: 20px 0 8px 24px;
    font-size: 0;
    a {
      color: rgba(0, 0, 0, 0.65);
      display: inline-block;
      font-size: 14px;
      margin-bottom: 13px;
      width: 25%;
    }
  }

</style>
