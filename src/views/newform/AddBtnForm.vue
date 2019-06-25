<template>
  <a-modal
    title="新建项目"
    okText="保存"
    :width="640"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
    @cancel="handleCancel">
    <a-spin :spinning="confirmLoading">
      <span class="err-div">
        <a-alert
          message="Error Text"
          type="error"
          name="errs"
          showIcon
          closable
          @click="onClose"/>
      </span>

      <a-form :form="form">
        <a-form :form="form">
          <a-form-item label="行政区划" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-select
              v-decorator="[
                'aa',
                {rules: [{ required: true, message: 'Please select your gender!' }]}
              ]"
              placeholder="请选择"
            >
              <a-select-option value="male">male</a-select-option>
              <a-select-option value="female">female</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="项目类型" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <a-select
              v-decorator="[
                'bb',
                {rules: [{ required: true, message: 'Please select your gender!' }]}
              ]"
              placeholder="请选择"
            >
              <a-select-option value="male">male</a-select-option>
              <a-select-option value="female">female</a-select-option>
            </a-select>
          </a-form-item>
        </a-form>

        <a-form-item label="项目年份" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-select
            v-decorator="[
              'cc',
              {rules: [{ required: true, message: 'Please select your gender!' }]}
            ]"
            placeholder="请选择"
          >
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="项目名称" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-input
            v-decorator="['desc', {rules: [{required: true, min: 5, message: '请输入至少五个字符！'}]}]"
            placeholder="请输入"
          />
        </a-form-item>
        <a-form-item label="备注说明" :labelCol="labelCol" :wrapperCol="wrapperCol">
          <a-textarea
            v-decorator="[
              'gg',
              {rules: [{ required: false, message: 'Please select your gender!' }]}
            ]"
            placeholder="Autosize height based on content lines"
            :rows="4"
          />
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
<style lang="less" scoped>
.ant-alert-error{
  margin-bottom: 24px;
}
</style>
