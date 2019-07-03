<template>
  <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
    <a-form @submit="handleSubmit" :form="form" :hideRequiredMark="true">
      <a-form-item
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <span slot="label">
          <span>
            标题
          </span>
          <span class="label-select">
            <a-tooltip title="What do you want others to call you?">
              <a-icon type="info-circle" />
            </a-tooltip>
          </span>
        </span>
        <a-input
          v-decorator="[
            'name',
            {rules: [{ required: true, message: '请输入标题' }]},
          ]"
          name="name"
          placeholder="给目标起个名字"
        />
      </a-form-item>

      <a-form-item
        label="起止日期"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17}}">
        <a-range-picker
          name="buildTime"
          style="width: 100%"
          v-decorator="[
            'buildTime',
            {rules: [{ required: true, message: '请选择起止日期' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="目标描述"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-textarea
          rows="4"
          placeholder="请输入你阶段性工作目标"
          v-decorator="[
            'description',

            {rules: [{ required: true, message: '请输入目标描述' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        label="客户"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
        <a-input
          placeholder="请描述你服务的客户，内部客户直接 @姓名／工号"
          v-decorator="[
            'customer',
            {rules: [{ required: true, message: '请描述你服务的客户' }]}
          ]"
        />
      </a-form-item>
      <a-form-item
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false">
        <span slot="label">
          邀评人
          <span class="label-select">
            (选填)
            <a-tooltip title="What do you want others to call you?">
              <a-icon type="info-circle" />
            </a-tooltip>
          </span>
        </span>
        <a-input placeholder="请直接 @姓名／工号，最多可邀请 5 人"/>
      </a-form-item>
      <a-form-item
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false">
        <span slot="label">
          权重
          <span class="label-select">
            (选填)
          </span>
        </span>
        <a-input-number :min="0" :max="100"/>
        <span style="margin-left: 8px">%</span>
      </a-form-item>
      <a-form-item
        label="目标公开"
        :labelCol="{lg: {span: 7}, sm: {span: 7}}"
        :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        :required="false"
        help="客户、邀评人默认被分享">
        <a-radio-group v-model="value">
          <a-radio :value="1">公开</a-radio>
          <a-radio :value="2">部分公开</a-radio>
          <a-radio :value="3">不公开</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item :wrapperCol="{ span: 17, offset: 7 }" style=" padding-top: 32px">
        <!-- <a-button htmlType="submit" type="primary">提交</a-button> -->
        <a-button htmlType="submit" type="primary">
          提交
        </a-button>
        <a-button style="margin-left: 8px" >保存</a-button>
        <a-button type="danger" ghost style="margin-left: 8px">删除</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  data () {
    return {
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,
      form: this.$form.createForm(this),
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      }
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style  lang="less" scoped>
  .label-select{
    color:rgba(0,0,0,0.45);
  }

</style>
