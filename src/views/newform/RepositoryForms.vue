<template>
  <a-form @submit="handleSubmit" :form="form" class="form">
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item >
          <span slot="label" :class="{textClass : ceshi == 'large'}">仓库名</span>
          <a-input
            :size="ceshi"
            placeholder="请输入仓库名称"
            v-decorator="[
              'name',
              {rules: [{ required: true, message: '请输入仓库名称', whitespace: true}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
        >
          <span slot="label" :class="{textClass : ceshi == 'large'}">仓库域名</span>
          <a-input
            :size="ceshi"
            addonBefore="http://"
            addonAfter=".com"
            placeholder="请输入"
            v-decorator="[
              'url',
              {rules: [{ required: true, message: '请输入仓库域名', whitespace: true}, {validator: validate}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
        >
          <span slot="label" :class="{textClass : ceshi == 'large'}">仓库管理员</span>
          <a-select :size="ceshi" placeholder="请选择管理员" v-decorator="[ 'owner', {rules: [{ required: true, message: '请选择管理员'}]} ]">
            <a-select-option value="王同学">王同学</a-select-option>
            <a-select-option value="李同学">李同学</a-select-option>
            <a-select-option value="黄同学">黄同学</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row class="form-row" :gutter="16">
      <a-col :lg="6" :md="12" :sm="24">
        <a-form-item
        >
          <span slot="label" :class="{textClass : ceshi == 'large'}">审批人</span>
          <a-select :size="ceshi" placeholder="请选择审批员" v-decorator="[ 'approver', {rules: [{ required: true, message: '请选择审批员'}]} ]">
            <a-select-option value="王晓丽">王晓丽</a-select-option>
            <a-select-option value="李军">李军</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 7, offset: 1}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
        <a-form-item
        >
          <span slot="label" :class="{textClass : ceshi == 'large'}">生效日期</span>
          <a-range-picker
            :size="ceshi"
            style="width: 100%"
            v-decorator="[
              'dateRange',
              {rules: [{ required: true, message: '请选择生效日期'}]}
            ]" />
        </a-form-item>
      </a-col>
      <a-col :xl="{span: 9, offset: 1}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
        <a-form-item
        >
          <span slot="label" :class="{textClass : ceshi == 'large'}">仓库类型</span>
          <a-select
            :size="ceshi"
            placeholder="请选择仓库类型"
            v-decorator="[
              'type',
              {rules: [{ required: true, message: '请选择仓库类型'}]}
            ]" >
            <a-select-option value="公开">公开</a-select-option>
            <a-select-option value="私密">私密</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item v-if="showSubmit">
      <a-button htmlType="submit" >Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  components: {

  },
  name: 'RepositoryForm',
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    },
    ceshi: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  mounted () {
    console.log(this.ceshi)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$notification['error']({
            message: 'Received values of form:',
            description: values
          })
        }
      })
    },
    validate (rule, value, callback) {
      const regex = /^user-(.*)$/
      if (!regex.test(value)) {
        callback(new Error('需要以 user- 开头'))
      }
      callback()
    }
  }
}
</script>

<style lang="less" scoped>
  .textClass{
    font-size: 16px;
  }
</style>
