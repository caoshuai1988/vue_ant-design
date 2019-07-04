<!--
 * @Author: 张志勇
 * @Date: 2019-06-14 15:59:26
 * @LastEditTime: 2019-07-04 16:19:02
 * @Description: 单列详情页 引用了流程图组件
 -->

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
            <Help @handleClose="handleClose" :boxHeight="boxHeight"/>
          </a-affix>
        </a-col>
      </template>
    </a-row>
  </a-card>
</template>

<script>
import BaseFlowHead from '@/views/formpages/BaseFlowHead'
import Help from '@/components/form/Help'
export default {
  components: {
    BaseFlowHead,
    Help
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
