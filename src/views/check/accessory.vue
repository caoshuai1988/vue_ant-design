<!--
 * @Author: 张志勇
 * @Date: 2019-06-15 15:08:51
 * @LastEditTime: 2019-07-04 10:04:08
 * @Description: 附件详情页 图标使用的是本地图片
 -->

<template>
  <a-card :body-style="{background:'#f0f2f5', padding: 0}" :bordered="false" class="card-box">

    <a-row :gutter="24">
      <a-col :body-style="{ background:'#fff'}" :xl="num" :lg="num" :md="num" :sm="num" >
        <div class="accessory-box" style="background: #fff; padding: 24px 32px">
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
                  <a href style="margin-right:10px">{{ record.operation.text }}</a>
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
                <template slot-scope="text, record">
                  <a href style="margin-right:10px">{{ record.operation.text }}</a>
                  <a style="margin-right:10px">{{ record.operation.textOne }}</a>
                </template>
              </a-table-column>
            </a-table>
          </div>
        </div>
      </a-col>
      <!-- 帮助 -->
      <template v-if="isShowHelp">
        <a-col
          style="padding: 0 12px"
          :xl="helpNum"
          :lg="helpNum"
          :md="helpNum"
          :sm="helpNum"
          :xs="helpNum">
          <div class="page-direction">
            <div class="title">
              <div class="title-des">
                <span class="help">帮助</span>
                <span class="detail">详情</span>
                <a-icon type="close" style="fontSize :16px; color:#a3a3a3;" class="close" @click="handleClose"/>
              </div>
            </div>
            <div class="help-line"></div>
            <div class="content-box">
              <div class="content">
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </template>
    </a-row>

  </a-card>
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
    name: '融合服务开发服务平台前端部分工作规划.mp4',
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
    name: '融合服务开发服务平台前端部分工作规划.pdf',
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
    name: '融合服务开发服务平台前端部分工作规划.ppt',
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
    name: '融合服务开发服务平台前端部分工作规划.doc',
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
    STable
  },
  data () {
    return {
      data,
      isShowHelp: false,
      num: 24,
      // num: 18,
      helpNum: 6,
      lablenum: 7,
      valuenum: 17,
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
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }],

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
      }

    }
  },
  methods: {
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
    onChange () {

    }
  }
}
</script>

<style lang="less" scoped>
  .table-wrap{
    margin-bottom: 48px;
    .title-box{
      // height: 32px;
      padding-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title-des{
        font-size: 16px;
        color:rgba(0, 0, 0, 0.85);
      }
    }
  }

  .lable{
    text-align: right;
  }
  .title-name {
    font-size: 18px;
    margin-left: 200px ;
  }

  .line{
    box-sizing: border-box;
    width:100%;
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

  .page-direction{
    // right: @help-width;
    background: #fff;
    // min-width: 400px;
    // height: 600px;
    // min-height: 800px;
    z-index: 3;
    .title{
      position: relative;
      box-sizing: border-box;
      padding:0 24px;
      height: 56px;
      .title-des{
        box-sizing: border-box;
        height: 56px;
        // flex: 1 1;
        padding: 16px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .help{
          font-size: 16px;
          color: #272727;
          margin-right: 8px;
        }
        .detail{
          font-size: 14px;
          color: #1890ff;
        }
        .close{
          // position: absolute;
          // right: 24px;
          float: right;
          margin-top: 4px;
          // top: 16px;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
    .help-line{
      width: 100%;
      height: 0.5px;
      background: #e9e9e9;
    }
    .content-box{
      padding: 24px;
    }
    .content{
      // height: 650px;
      min-height: 300px;
      max-height: 650px;
      overflow-y: auto;
      &::-webkit-scrollbar{
        width: 4px;
        height: 8px;
        // background-color: #F5F5F5;
      }

      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
        border-radius: 10px;
        background-color: #a5a5a5;
      }

      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb{
          border-radius: 5px;
          box-shadow: inset 0 0 5px rgba(0,0,0,0.3);
          background-color: #EDEDED;
      }
    }
  }

</style>
