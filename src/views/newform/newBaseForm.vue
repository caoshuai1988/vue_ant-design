<template>
  <div>
    <div class="flowDiv" v-if="flowFlag">
      <div class="flowHeader">
        <div class="flowOne">
          <span class="sizeFLow">流程</span>
          <span class="sizeTpl">详情</span>
        </div>
        <div class="flowTwo" @click="closeDiv">
          <a-icon type="close" />
        </div>
      </div>
      <div class="flowContent">
        <img :src="flowPng" alt="" class="flowImg">
      </div>
    </div>
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">
        <a-form-item
          label="标题"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        >
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
          :wrapperCol="{lg: {span: 10}, sm: {span: 17}}"
        >
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
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        >
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
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
        >
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
          :required="false"
        >
          <span slot="label" class="abc">
            邀评人(选填)&nbsp;
            <a-tooltip title="What do you want others to call you?">
              <a-icon type="info-circle" />
            </a-tooltip>
          </span>
          <a-input placeholder="请直接 @姓名／工号，最多可邀请 5 人"/>
        </a-form-item>
        <a-form-item
          label="权重(选填)"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
        >
          <a-input-number :min="0" :max="100"/>
          <span>%</span>
        </a-form-item>
        <a-form-item
          label="目标公开"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }"
          :required="false"
          help="客户、邀评人默认被分享"
        >
          <a-radio-group v-model="value">
            <a-radio :value="1">公开</a-radio>
            <a-radio :value="2">部分公开</a-radio>
            <a-radio :value="3">不公开</a-radio>
          </a-radio-group>
          <a-form-item>
            <a-select mode="multiple" v-if="value === 2" placeholder="请直接@花名/姓名/工号">
              <a-select-option value="4">同事一</a-select-option>
              <a-select-option value="5">同事二</a-select-option>
              <a-select-option value="6">同事三</a-select-option>
            </a-select>
          </a-form-item>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 18 }" style="text-align: center; padding-top: 20px">
          <!-- <a-button htmlType="submit" type="primary">提交</a-button> -->
          <a-button htmlType="submit" type="primary" loading>
            提交
          </a-button>
          <a-button style="margin-left: 8px" >保存</a-button>
          <a-button type="danger" ghost style="margin-left: 8px">删除</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import flowPng from '@/assets/flow.png'
export default {
  name: 'BaseForm',
  data () {
    return {
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,
      flowFlag: true,
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
  computed: {
    flowPng () { // 引入流程图片
      return flowPng
    }
  },
  mounted () {

  },
  methods: {
    closeDiv () { // hide 流程图
      this.flowFlag = false
    },
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

<style lang="less" scoped>

.sizeFLow{
  color: rgba(0, 0, 0, 85%)
}

.flowDiv{
  width: 100%;
  margin-bottom: 24px;
  background-color: #fff;
  .flowHeader{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e9e9e9;
    .flowOne{
      padding-left: 15px;
      font-size: 20px;
      color: rgba(0, 0, 0, 85%);
      .sizeTpl{
        font-size: 14px;
        color: #1890ff;
        padding-left: 10px;
        cursor:pointer;
      }
    }
    .flowTwo{
      padding-right: 15px;
      font-size: 18px;
      cursor:pointer;
    }
  }
  .flowContent{
    width: 100%;
    height: 140px;
    line-height: 140px;
    margin: auto;
    .flowStart{}
    .flowImg{
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
