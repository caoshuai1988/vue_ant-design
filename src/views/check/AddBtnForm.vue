<style lang="less" scoped>
// .ant-alert-error{
//   margin-bottom: 24px;
// }
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
  <a-modal
    title="项目基础信息"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel">
    <a-spin :spinning="confirmLoading">
      <!-- <span class="err-div">
        <a-alert
          message="Error Text"
          type="error"
          name="errs"
          showIcon
          closable
          @click="onClose"/>
      </span> -->

      <!-- <detail-list :col="1">
        <detail-list-item term="取货单号">1000000000</detail-list-item>
        <detail-list-item term="状态">已取货</detail-list-item>
        <detail-list-item term="销售单号">1234123421</detail-list-item>
        <detail-list-item term="子订单">3214321432</detail-list-item>
      </detail-list> -->
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
            {{ "浙江省杭州市西湖区万塘路118号浙江省杭州市西湖区万塘路18号浙江省杭州市西湖区万塘路18号" }}
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
    </a-spin>
  </a-modal>
</template>

<script>
// 暂时未用到 可删除
import DetailList from '@/components/tools/DetailList'
const DetailListItem = DetailList.Item
export default {
  components: {
    DetailList,
    DetailListItem
  },
  data () {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      },
      visible: false,
      confirmLoading: false,

      form: this.$form.createForm(this)

    }
  },
  methods: {
    add () { // 弹出框弹出
      this.visible = true
    },
    onClose (e) { // 警告框
      console.log(e, 'I was closed.')
    },
    handleSubmit () {
      const {
        form: { validateFields }
      } = this

      this.confirmLoading = true
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          setTimeout(() => {
            this.visible = false
            this.confirmLoading = false
            this.$emit('monitor', values)
          }, 1500)
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false
    }
  }
}
</script>
