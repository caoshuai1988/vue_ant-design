<template>
  <div>
    <div>
      <a-button style="margin-right:10px;" type="primary" @click="showModal">新建任务</a-button>
      <a-button type="primary" @click="showDocument">新建文档</a-button>
    </div>
    <!-- <div>
      <a-button type="primary" @click="showDocument">文档</a-button>
    </div> -->
    <a-modal
      title="新建任务"
      :visible="visible"
      @ok="handleSubmit"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      :width="width"
    >
      <a-alert type="error" message="错误提示的文案" banner closable />
      <a-form
        :form="form"
        @submit="handleSubmit">
        <a-form-item
          style="margin-top:24px"
          label="创建人"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <span>--</span>
        </a-form-item>
        <a-form-item
          label="任务名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input
            v-decorator="[
              'taskName',
              {rules: [{ required: true, message: '请输入你的任务名称' }]}
            ]"
          />
        </a-form-item>
        <a-form-item
          label="起止时间"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-range-picker v-decorator="['range-picker', {rules: [{ type: 'array', required: true, message: '请选择时间范围' }]}]" />
        </a-form-item>
        <a-form-item
          label="任务负责人"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-select
            v-decorator="[
              'leader',
              {rules: [{ required: true, message: '请选择负责人' }]}
            ]"
            placeholder="请选择"
            @change="handleSelectChange"
          >
            <a-select-option value="zhangsan">
              张三
            </a-select-option>
            <a-select-option value="lisi">
              李四
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="产品描述"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea placeholder="请输入至少五个字符" :rows="4"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>

export default {
  name: 'InputModal',
  components: {},
  data () {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this),
      width: '800px'
    }
  },
  computed: {},
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
          if (!err) {
            this.visible = false
          }
          this.confirmLoading = false
        })
      }, 2000)
    },
    handleSelectChange (value) {
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    },
    showModal () {
      this.visible = true
      this.width = '800px'
    },
    showDocument () {
      this.visible = true
      this.width = '500px'
    },
    handleCancel (e) {
      console.log('Clicked cancel button')
      this.visible = false
    }
  }
}
</script>
<style lang="less" scoped>

</style>
