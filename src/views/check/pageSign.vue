<style lang="less">
.ant-tabs-nav-container{
  margin-bottom: 0;
}
.page-sign-title {
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
}
.lable {
  text-align: right;
}
.title-name {
  font-size: 18px;
  margin-left: 200px;
}

.line {
  box-sizing: border-box;
  width: 100%;
  padding: 0 20px;
  height: 0.5px;
  background: #cccccc;
  margin-bottom: 24px;
}
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.page-direction {
  // right: @help-width;
  background: #fff;
  // min-width: 400px;
  // height: 600px;
  // min-height: 800px;
  z-index: 3;
  .title {
    position: relative;
    box-sizing: border-box;
    padding: 0 24px;
    height: 56px;
    .title-des {
      box-sizing: border-box;
      height: 56px;
      // flex: 1 1;
      padding: 16px 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .help {
        font-size: 16px;
        color: #272727;
        margin-right: 8px;
      }
      .detail {
        font-size: 14px;
        color: #62bfff;
      }
      .close {
        // position: absolute;
        // right: 24px;
        float: right;
        margin-top: 4px;
        // top: 16px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  .help-line {
    width: 100%;
    height: 0.5px;
    background: #e9e9e9;
  }
  .content-box {
    padding: 24px;
  }
  .content {
    // height: 650px;
    min-height: 300px;
    max-height: 650px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 4px;
      height: 8px;
      // background-color: #F5F5F5;
    }

    /*定义滚动条轨道 内阴影+圆角*/
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background-color: #a5a5a5;
    }

    /*定义滑块 内阴影+圆角*/
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
      background-color: #ededed;
    }
  }
}
.form-detial /deep/ .ant-card .ant-card-body {
  padding: 0;
}
.card-header {
  box-sizing: border-box;
  // height: 56px;
  z-index: 1;
  padding-top: 11px;
  width: 100%;
  margin-bottom: 24px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(129, 129, 129, 0.2);
}
.ant-tabs-bar {
  margin: 0;
  border: none !important;
}
// 附件打包现在样式
.table-wrap {
  margin-bottom: 48px;
  .title-box {
    // height: 32px;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-des {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}

// 地图的样式
/* 放大生效 */

.mapContent {
  height: 100% !important;
}
#container {
  width: 100%;
  height: 640px;
}
.screenload {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;
}
.amplification{
  cursor: pointer;
  padding: 0 10px;
}

</style>
<template>
  <div>
    <a-card
      :body-style="{background:'#f0f2f5', padding: 0}"
      :bordered="false"
      class="aa"
      ref="content"
    >
      <a-row :gutter="24">
        <a-col :body-style="{ background:'#f0f2f5'}" :xl="num" :lg="num" :md="num" :sm="num">
          <a-affix :offsetTop="this.top">
            <a-tabs
              :activeKey="activeKey"
              class="tabMar card-header"
              :animated="false"
              @tabClick="callback"
              style="padding:8px 24px 0 24px"
            >
              <a-tab-pane key="1">
                <span slot="tab">
                  <span>基础信息</span>
                </span>
              </a-tab-pane>
              <a-tab-pane key="2">
                <span slot="tab">
                  <span>地理信息</span>
                </span>
              </a-tab-pane>
              <a-tab-pane key="3">
                <span slot="tab">基本情况表</span>
              </a-tab-pane>
              <a-tab-pane key="4">
                <span slot="tab">任务及投资情况估算表</span>
              </a-tab-pane>
              <a-tab-pane key="5">
                <span slot="tab">资益估算表</span>
              </a-tab-pane>
              <a-tab-pane key="6">
                <span slot="tab">附件信息</span>
              </a-tab-pane>
            </a-tabs>
          </a-affix>
          <a-card :body-style="{padding:'24px'}" title="基础信息" class="anchor">
            <div class="form-detial" style="background: #fff;">
              <detail-list title="退款申请" :col="3">
                <detail-list-item term="取货单号">1000000000</detail-list-item>
                <detail-list-item term="状态">已取货</detail-list-item>
                <detail-list-item term="销售单号">1234123421</detail-list-item>
                <detail-list-item term="子订单">3214321432</detail-list-item>
              </detail-list>
              <a-divider style="margin-bottom: 32px"/>
              <detail-list title="用户信息">
                <detail-list-item term="用户姓名">付小小</detail-list-item>
                <detail-list-item term="联系电话">18100000000</detail-list-item>
                <detail-list-item term="常用快递">菜鸟仓储</detail-list-item>
                <detail-list-item term="取货地址">浙江省杭州市西湖区万塘路18号</detail-list-item>
                <detail-list-item term="备注">无</detail-list-item>
              </detail-list>
              <a-divider style="margin-bottom: 32px"/>

              <div class="page-sign-title">退货商品</div>
              <s-table
                style="margin-bottom: 24px"
                row-key="id"
                :columns="goodsColumns"
                :data="loadGoodsData"
              ></s-table>

              <div class="page-sign-title" @click="aa">退货进度</div>
              <s-table
                style="margin-bottom: 24px"
                row-key="key"
                :columns="scheduleColumns"
                :data="loadScheduleData"
              >
                <template slot="status" slot-scope="status">
                  <a-badge :status="status" :text="status"/>
                <!-- <a-badge :status="status" :text="status | statusFilter"/> -->
                </template>
              </s-table>
            </div>
          </a-card>
          <div style="margin-top:24px;" class="anchor" >
            <a-card
              title="地理信息"
              :body-style="closePad"
              :style="mapFd"
              :class="{screenload: screenloadFlag}">
              <span class="amplification" slot="extra" @click="amplificationBtn" >
                <a-icon type="arrows-alt" v-if="iconSwitch"/>
                <a-button type="primary" v-else>返回</a-button>
              </span>
              <div id="container" ref="container" :style="mapFd" >
                <baidu-map

                  :center="center"
                  :zoom="zoom"
                  @ready="handler"
                  style="width:100%;height:100%"
                >
                  <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
                  <bm-geolocation
                    anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                    :showAddressBar="true"
                    :autoLocation="true"
                  ></bm-geolocation>
                </baidu-map>
              </div>
            </a-card>
          </div>
          <!-- 附件信息 -->
          <div style="margin-top:24px;" class="anchor">
            <a-card :body-style="{padding: '24px', marginTop: '24px'}" title="附件信息">
              <!-- <a href="#" slot="extra">More</a> -->
              <div class="accessory-box" style="background: #fff;">
                <div class="table-wrap">
                  <div class="title-box">
                    <div class="title-des">项目可研报告</div>
                    <a-button size="small">打包下载</a-button>
                  </div>
                  <a-table :dataSource="data" :pagination="false">
                    <a-table-column title="种类" data-index="icon" key="icon">
                      <template slot-scope="icon">
                        <div v-for="img in icon" :key="img.id">
                          <img :src="img" style="width:24px;height: 24px" alt="文件图标">
                        </div>
                      </template>
                    </a-table-column>
                    <a-table-column title="名称" data-index="name" key="name"/>
                    <a-table-column title="大小" data-index="size" key="size"/>
                    <a-table-column title="上传时间" data-index="time" key="time"/>
                    <a-table-column title="操作" key="operation">
                      <template slot-scope="text, record">
                        <a href style="margin-right:10px" @click.prevent="addAmplifier(record.key)">{{ record.operation.text }}</a>
                        <a style="margin-right:10px">{{ record.operation.textOne }}</a>
                      </template>
                    </a-table-column>
                  </a-table>
                </div>
                <div class="table-wrap">
                  <div class="title-box">
                    <div class="title-des">绩效目标</div>
                    <a-button size="small">打包下载</a-button>
                  </div>
                  <a-table :dataSource="data" :pagination="false">
                    <a-table-column title="种类" data-index="icon" key="icon">
                      <template slot-scope="icon">
                        <div v-for="img in icon" :key="img.id">
                          <img :src="img" style="width:24px;height: 24px" alt="文件图标">
                        </div>
                      </template>
                    </a-table-column>
                    <a-table-column title="名称" data-index="name" key="name"/>
                    <a-table-column title="大小" data-index="size" key="size"/>
                    <a-table-column title="上传时间" data-index="time" key="time"/>
                    <a-table-column title="操作" key="operation">
                      <template slot-scope="text, record" >
                        <a href style="margin-right:10px" @click.prevent="addAmplifier(record.key)">{{ record.operation.text }}</a>
                        <a style="margin-right:10px">{{ record.operation.textOne }}</a>
                      </template>
                    </a-table-column>
                  </a-table>
                </div>
              </div>
            </a-card>
          </div>
        </a-col>
        <template v-if="isShowHelp">
          <a-col
            style="padding: 0 12px"
            :xl="helpNum"
            :lg="helpNum"
            :md="helpNum"
            :sm="helpNum"
            :xs="helpNum"
          >
            <a-affix :offsetTop="this.top">
              <div class="page-direction">
                <div class="title">
                  <div class="title-des">
                    <span class="help">帮助</span>
                    <span class="detail">详情</span>
                    <a-icon
                      type="close"
                      style="fontSize :16px; color:#a3a3a3;"
                      class="close"
                      @click="handleClose"
                    />
                  </div>
                </div>
                <div class="help-line"></div>
                <div class="content-box">
                  <div class="content">
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                    <div style="margin-bottom:20px">
                      <p class="question">企业官网或轻量的Web应用</p>
                      <p
                        class="question"
                      >网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。</p>
                    </div>
                  </div>
                </div>
              </div>
            </a-affix>
          </a-col>
        </template>
      </a-row>
    </a-card>
    <preview v-if="flag" @monitor="monitor" :valKey="valueKey"></preview>
  </div>
</template>

<script>
import { STable } from '@/components'
import DetailList from '@/components/tools/DetailList'
// word格式
import icon1 from '@/assets/iconfiles/fileicon4.svg'
// MP4格式
import icon2 from '@/assets/iconfiles/fileicon10.svg'
// pdf格式
import icon3 from '@/assets/iconfiles/fileicon15.svg'
// ppt格式
import icon4 from '@/assets/iconfiles/fileicon1.svg'
import preview from '@/views/newform/preview'
const DetailListItem = DetailList.Item
// 列表的数据定义
const data = [
  {
    key: '1',
    icon: [icon1],
    name: '融合服务开发服务平台前端部分工作规划.docx',
    size: '23.6MB',
    time: '2016-09-21 08:50:08',
    state: [{ c: 60, d: 'active' }],
    operation: {
      text: '预览',
      textOne: '下载',
      flagOpen: true
    }
  },
  {
    key: '2',
    icon: [icon2],
    name: '融合服务开发服务平台前端部分工作规划.docx',
    size: '23.6MB',
    time: '2016-09-21 08:50:08',
    state: [{ c: 100, d: 'success' }],
    operation: {
      text: '预览',
      textOne: '下载',
      flagOpen: true
    }
  },
  {
    key: '3',
    icon: [icon3],
    name: '融合服务开发服务平台前端部分工作规划.docx',
    size: '23.6MB',
    time: '2016-09-21 08:50:08',
    state: [{ c: 80, d: 'exception' }],
    operation: {
      text: '预览',
      textOne: '下载',
      flagOpen: true
    }
  },
  {
    key: '4',
    icon: [icon4],
    name: '融合服务开发服务平台前端部分工作规划.docx',
    size: '23.6MB',
    time: '2016-09-21 08:50:08',
    state: [{ c: 60, d: 'active' }],
    operation: {
      text: '预览',
      textOne: '下载',
      flagOpen: true
    }
  },
  {
    key: '5',
    icon: [icon1],
    name: '融合服务开发服务平台前端部分工作规划.docx',
    size: '23.6MB',
    time: '2016-09-21 08:50:08',
    state: [{ c: 60, d: 'active' }],
    operation: {
      text: '预览',
      textOne: '下载',
      flagOpen: true
    }
  }
]
export default {
  components: {
    DetailList,
    DetailListItem,
    STable,
    preview
  },
  data () {
    return {
      data,
      flag: false,
      valueKey: 1,
      // 固钉
      top: 0,
      // 当前tab标签为第几个
      activeKey: '1',
      num: 18,
      helpNum: 6,
      lablenum: 7,
      valuenum: 17,
      isShowHelp: true,
      labelCol: { lg: { span: 7 }, sm: { span: 7 } },
      wrapperCol: { lg: { span: 10 }, sm: { span: 10 } },
      headers: {
        authorization: 'authorization-text'
      },
      // description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场',
      value: 1,
      // form
      form: this.$form.createForm(this),
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ],

      // 高级表单
      goodsColumns: [
        {
          title: '商品编号',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: '商品名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '商品条码',
          dataIndex: 'barcode',
          key: 'barcode'
        },
        {
          title: '单价',
          dataIndex: 'price',
          key: 'price',
          align: 'right'
        },
        {
          title: '数量（件）',
          dataIndex: 'num',
          key: 'num',
          align: 'right'
        },
        {
          title: '金额',
          dataIndex: 'amount',
          key: 'amount',
          align: 'right'
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadGoodsData: () => {
        return new Promise(resolve => {
          resolve({
            data: [
              {
                id: '1234561',
                name: '矿泉水 550ml',
                barcode: '12421432143214321',
                price: '2.00',
                num: '1',
                amount: '2.00'
              },
              {
                id: '1234562',
                name: '凉茶 300ml',
                barcode: '12421432143214322',
                price: '3.00',
                num: '2',
                amount: '6.00'
              },
              {
                id: '1234563',
                name: '好吃的薯片',
                barcode: '12421432143214323',
                price: '7.00',
                num: '4',
                amount: '28.00'
              },
              {
                id: '1234564',
                name: '特别好吃的蛋卷',
                barcode: '12421432143214324',
                price: '8.50',
                num: '3',
                amount: '25.50'
              }
            ],
            pageSize: 10,
            pageNo: 1,
            totalPage: 1,
            totalCount: 10
          })
        }).then(res => {
          return res
        })
      },

      scheduleColumns: [
        {
          title: '时间',
          dataIndex: 'time',
          key: 'time'
        },
        {
          title: '当前进度',
          dataIndex: 'rate',
          key: 'rate'
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '操作员ID',
          dataIndex: 'operator',
          key: 'operator'
        },
        {
          title: '耗时',
          dataIndex: 'cost',
          key: 'cost'
        }
      ],
      loadScheduleData: () => {
        return new Promise(resolve => {
          resolve({
            data: [
              {
                key: '1',
                time: '2017-10-01 14:10',
                rate: '联系客户',
                status: 'processing',
                operator: '取货员 ID1234',
                cost: '5mins'
              },
              {
                key: '2',
                time: '2017-10-01 14:05',
                rate: '取货员出发',
                status: 'success',
                operator: '取货员 ID1234',
                cost: '1h'
              },
              {
                key: '3',
                time: '2017-10-01 13:05',
                rate: '取货员接单',
                status: 'success',
                operator: '取货员 ID1234',
                cost: '5mins'
              },
              {
                key: '4',
                time: '2017-10-01 13:00',
                rate: '申请审批通过',
                status: 'success',
                operator: '系统',
                cost: '1h'
              },
              {
                key: '5',
                time: '2017-10-01 12:00',
                rate: '发起退货申请',
                status: 'success',
                operator: '用户',
                cost: '5mins'
              }
            ],
            pageSize: 10,
            pageNo: 1,
            totalPage: 1,
            totalCount: 10
          })
        }).then(res => {
          return res
        })
      },

      // 地图相关 待删除
      center: { lng: 0, lat: 0 }, // 地图坐标
      zoom: 11, // 地图级别
      mapFlag: false, // 地图内容
      screenloadFlag: false, // 全屏
      iconSwitch: true, // 缩放图标
      mapFd: {
        // 自定义样式map
        width: '',
        height: ''
      },
      closePad: {
        padding: '24px'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听滚动条
  },
  methods: {
    addAmplifier (val) {
      // this.$router.push({
      //   path: '/preview'
      // })
      this.valueKey = parseInt(val)
      this.flag = true
    },
    monitor (val) {
      this.flag = val
    },
    amplificationBtn () { // 地图放大
      if (this.mapFd.width === window.screen.availWidth + 'px') {
        this.mapFd = {}
        this.closePad.padding = 24 + 'px' // 缩小清除边距
      } else {
        this.mapFd.width = window.screen.availWidth + 'px'
        this.mapFd.height = window.screen.availHeight + 'px'
        this.closePad.padding = 0 + 'px' // 放大清除边距
      }

      this.screenloadFlag = !this.screenloadFlag
      this.mapFlag = !this.mapFlag
      this.iconSwitch = !this.iconSwitch
    },
    handleScroll (el) { // 监听滚动条
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTo
      const jump = document.querySelectorAll('.anchor') // 用 class" 添加锚点
      const total = jump[1].offsetTop
      const totalOne = jump[2].offsetTop
      const totalOnes = jump[0].offsetTop
      if (scrollTop >= totalOnes) {
        this.activeKey = '1'
      }
      if (scrollTop >= total) {
        this.activeKey = '2'
      }
      if (scrollTop >= totalOne) {
        this.activeKey = '3'
      }
    },

    handler ({ BMap, map }) { // 地图处理
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = this.zoom
    },
    callback (val) { // 点击tab
      window.removeEventListener('scroll', this.handleScroll)
      this.$forceUpdate()
      val = val - 1
      if (val >= 3) {
        // 暂时防止页面报错
        return
      }
      if (val === 0) { // 主动切换
        this.activeKey = '1'
      } else if (val === 2) {
        this.activeKey = '3'
      } else if (val === 1) {
        this.activeKey = '2'
      }
      const jump = document.querySelectorAll('.anchor') // 用 class" 添加锚点
      const total = jump[val].offsetTop
      let distance = document.documentElement.scrollTop || document.body.scrollTop

      let step = total / 40 // 平滑滚动，时长500ms，每10ms一跳，共30跳
      if (total > distance) {
        smoothDown()
      } else {
        const newTotal = distance - total
        step = newTotal / 40
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
      }
    },
    aa () {
      this.defaultActiveKey = 4
      console.log('@@@@@', this.defaultActiveKey)
    },
    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
        }
      })
    },
    handleClose () {
      this.isShowHelp = false
      this.num = 24
    },
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    },
    onChange () {}
  },
  beforeDestroy () { // 取消监听滚动条
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
