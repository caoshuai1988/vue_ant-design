<!--
 * @Author: 张志勇
 * @Date: 2019-06-14 17:46:50
 * @LastEditTime: 2019-07-04 10:17:03
 * @Description:查看页弹窗详情 包含单行表单信息的样式
 -->

<template>
  <a-modal
    title="项目基础信息"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel">
    <a-spin :spinning="confirmLoading">
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
export default {
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
          }, 500)
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

<style lang="less" scoped>
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
