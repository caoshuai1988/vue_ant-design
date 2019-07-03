<style lang="less" scoped>
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
    background: #fff;
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
      padding: 0 24px 24px;
      padding-right: 2px;
    }
    .content{
      padding: 24px 24px 0 0;
      // min-height: 300px;
      background: #fff;
      // max-height: 650px;
      // height: calc(100% - 56px);
      height:100%;
      overflow-y: auto;
      p{
        margin: 0;
        padding: 0;
      }
      &::-webkit-scrollbar{
        width: 6px;
        height: 8px;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #fff;
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb{
          border-radius: 5px;
          box-shadow: inset 0 0 5px rgba(0,0,0,0.4);
          background-color: #9B9B9B;
      }
    }
  }

// 单列
.ant-form-horizontal .ant-form-item {
  margin-bottom: 16px;
}
/deep/ .ant-form-horizontal .ant-form-item > .ant-form-item-label{
  line-height: 24px;
}
/deep/ .ant-form-horizontal .ant-form-item .ant-form-item-control-wrapper .ant-form-item-control{
  line-height: 24px;

}
</style>
<template>
  <a-card :body-style="{background:'#f0f2f5', padding: 0}" :bordered="false" class="card-box">
    <a-row :gutter="24">
      <a-col :body-style="{ background:'#fff'}" :xl="num" :lg="num" :md="num" :sm="num" >
        <BaseFlowHead></BaseFlowHead>
        <div class="form-detial" style="background: #fff; padding: 24px 32px;">
          <a-form class="detailInfo" :form="form">
            <a-form-item label="取货单号" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "1000000000" }}
              </span>
            </a-form-item>
            <a-form-item label="子订单" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "3214321432" }}
              </span>
            </a-form-item>
            <a-form-item label="状态" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "已取货" }}
              </span>
            </a-form-item>
            <a-form-item label="销售单号" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "1234123421" }}
              </span>
            </a-form-item>
            <a-form-item label="用户姓名：" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "付小小" }}
              </span>
            </a-form-item>
            <a-form-item label="取货地址" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "浙江省杭州市西湖区万塘路18号" }}
              </span>
            </a-form-item>
            <a-form-item label="备注：" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "无" }}
              </span>
            </a-form-item>
            <a-form-item label="联系电话：" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "18100000000" }}
              </span>
            </a-form-item>
            <a-form-item label="常用快递：" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <span>
                {{ "菜鸟仓储" }}
              </span>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
      <!-- 帮助侧边栏 -->
      <template v-if="isShowHelp">
        <a-col
          style="padding: 0 12px"
          :xl="helpNum"
          :lg="helpNum"
          :md="helpNum"
          :sm="helpNum"
          :xs="helpNum">
          <a-affix :offsetTop="this.top">
            <div class="page-direction" ref="pageDirection">
              <div class="title">
                <div class="title-des">
                  <span class="help">帮助</span>
                  <span class="detail">详情</span>
                  <a-icon type="close" style="fontSize :16px; color:#a3a3a3;" class="close" @click="handleClose"/>
                </div>
              </div>
              <div class="help-line"></div>
              <div class="content-box" :style="boxHeight">
                <div class="content" style="margin:0">
                  <div style="margin-bottom:20px">
                    <p class="question">
                      为什么选择云服务器ECS？
                    </p>
                    <p class="answer">
                      选择云服务器ECS，您可以轻松构建具有以下优势的计算资源：无需自建机房，无需采购以及配置硬件设施。分钟级交付，快速部署，缩短应用上线周期。
                    </p>
                  </div>
                  <div style="margin-bottom:20px">
                    <p class="question">
                      企业官网或轻量的Web应用
                    </p>
                    <p class="answer">
                      网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                    </p>
                  </div>
                  <div style="margin-bottom:20px">
                    <p class="question">
                      多媒体以及高并发应用或网站
                    </p>
                    <p class="answer">
                      云服务器ECS与对象存储OSS搭配，对象存储OSS承载静态图片、视频或者下载包，进而降低存储费用。同时配合内容分发网络CDN和负载均衡SLB，可大幅减少用户访问等待时间、降低网络带宽费用以及提高可用性
                    </p>
                  </div>
                  <div style="margin-bottom:20px">
                    <p class="question">
                      高I/O要求数据库
                    </p>
                    <p class="answer">
                      支持承载高I/O要求的数据库，如OLTP类型数据库以及NoSQL类型数据库。您可以使用较高配置的I/O优化型云服务器ECS，同时采用ESSD云盘，可实现高I/O并发响应和更高的数据可靠性。您也可以使用多台中等偏下配置的I/O优化型ECS实例，搭配负载均衡SLB，建设高可用底层架构
                    </p>
                  </div>
                  <div style="margin-bottom:20px">
                    <p class="question">
                      访问量波动剧烈的应用或网站
                    </p>
                    <p class="answer">
                      某些应用，如抢红包应用、优惠券发放应用、电商网站和票务网站，访问量可能会在短时间内产生巨大的波动。您可以配合使用弹性伸缩，自动化实现在请求高峰来临前增加ECS实例，并在进入请求低谷时减少ECS实例。满足访问量达到峰值时对资源的要求，同时降低了成本。如果搭配负载均衡SLB，您还可以实现高可用应用架构
                    </p>
                  </div>
                  <div style="margin-bottom:20px">
                    <p class="question">
                      大数据及实时在线或离线分析
                    </p>
                    <p class="answer">
                      云服务器ECS提供了大数据类型实例规格族，支持Hadoop分布式计算、日志处理和大型数据仓库等业务场景。由于大数据类型实例规格采用了本地存储的架构，云服务器ECS在保证海量存储空间、高存储性能的前提下，可以为云端的Hadoop集群、Spark集群提供更高的网络性能。
                    </p>
                  </div>
                  <div style="margin-bottom:20px">
                    <p class="question">
                      机器学习和深度学习等AI应用
                    </p>
                    <p class="answer">
                      通过采用GPU计算型实例，您可以搭建基于TensorFlow框架等的AI应用。此外，GPU计算型还可以降低客户端的计算能力要求，适用于图形处理、云游戏云端实时渲染、AR/VR的云端实时渲染等瘦终端场景。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a-affix>
        </a-col>
      </template>
    </a-row>
  </a-card>
</template>

<script>
import { STable } from '@/components'
import DetailList from '@/components/tools/DetailList'
import BaseFlowHead from '@/views/newform/BaseFlowHead'
const DetailListItem = DetailList.Item
export default {
  components: {
    DetailList,
    DetailListItem,
    STable,
    BaseFlowHead
  },
  data () {
    return {
      boxHeight: {
        height: ''
      },
      // 固钉
      top: 0,
      isShowHelp: true,
      // num: 24,
      num: 18,
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
      }

    }
  },
  mounted () {
    this.checkResize()
    const evt = 'onorientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(evt, this.checkResize)
  },
  methods: {
    checkResize () {
      this.boxHeight.height = document.documentElement.clientHeight - 48 - 65 - 65 + 'px'
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
    onChange () {

    }
  }
}
</script>
