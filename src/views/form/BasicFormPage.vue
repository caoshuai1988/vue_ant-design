<style lang="less" scoped>
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
  }

</style>
<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form" >
      <h1 class="title-name">标题组</h1>
      <!-- :colon="false"
        label="输入框" -->
      <!-- 输入框 -->
      <a-form-item
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <span slot="label">
          输入框&nbsp;
          <a-tooltip title="输入帮助">
            <a-icon type="info-circle"/>
          </a-tooltip>
        </span>
        <a-input
          v-decorator="[
            'input',
            {rules: [{ required: true, message: '输入提示' }]}
          ]"
          name="input"
          placeholder="输入建议" />
      </a-form-item>
      <!-- 带前缀输入框 -->
      <a-form-item
        label="带前缀输入框"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          v-decorator="[
            'input-prefix',
            {rules: [{ required: true, message: '请填写内容' }]}
          ]"
          placeholder="请输入">
          <a-icon
            slot="prefix"
            type="lock"
            style="color:rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <!-- 文本框 -->
      <a-form-item
        label="文本阈"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-textarea
          rows="4"
          placeholder="请输入备注"
          v-decorator="[
            'description',
            {rules: [{ required: true, message: '请输入备注' }]}
          ]" />
      </a-form-item>

      <!-- 选择标题 -->
      <a-form-item
        label="标题"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-select placeholder="请选择标题">
          <a-select-option value="Home">select1</a-select-option>
          <a-select-option value="Company">select2</a-select-option>
        </a-select>
      </a-form-item>

      <!-- 只读信息 -->
      <a-form-item
        label="只读信息"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <span>
          antdesign@example.com
        </span>
      </a-form-item>
      <!-- 不可输入状态 -->
      <a-form-item
        label="不可输入状态"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          disabled
          placeholder="默认值"
          v-decorator="[
            'readOnly'
          ]" />
      </a-form-item>

      <!-- 多选框 -->
      <a-form-item
        label="多选框"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false">
        <a-checkbox-group @change="onChange">
          <a-checkbox value="1">选项一</a-checkbox>
          <a-checkbox value="2">选项二</a-checkbox>
          <a-checkbox value="3">选项三 </a-checkbox>
        </a-checkbox-group>
      </a-form-item>

      <!-- 单选框 -->
      <a-form-item
        label="单选框"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false">
        <a-radio-group @change="onChange">
          <a-radio value="1">选项一</a-radio>
          <a-radio value="2">选项二</a-radio>
          <a-radio value="3">选项三 </a-radio>
        </a-radio-group>
      </a-form-item>
      <!-- 按钮分段器 -->
      <a-form-item
        label="按钮分段器"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false">
        <a-button-group>
          <a-button>筛选一</a-button>
          <a-button>筛选二</a-button>
          <a-button>筛选三</a-button>
        </a-button-group>
      </a-form-item>
      <div class="line"></div>
      <a-form-item
        :wrapperCol="{ span: 24 }"
        style="text-align: center">
        <a-button htmlType="submit" type="primary">提交</a-button>
        <a-button style="margin-left: 8px">保存</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'BaseForm',
  data () {
    return {
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,
      // form
      form: this.$form.createForm(this)

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
    // 多选框选择事件
    onChange () {

    }
  }
}
</script>
