<template>
  <div>
    <template>
      <a-button type="primary" style="margin-right: 24px" @click="$refs.createModal.add()">弹窗</a-button>
      <a-button type="primary" style="margin-right: 24px" @click="drawer">单列抽屉</a-button>
      <a-button type="primary" @click="showDrawer">双列抽屉</a-button>
    </template>
    <AddForm ref="createModal" @monitor="monitor"></AddForm>
    <!-- 抽屉 -->
    <a-drawer
      title="双列抽屉"
      :width="720"
      @close="onClose"
      :visible="visible"
      :closable="false"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
      <a-form :form="form" layout="vertical" :hideRequiredMark="true">
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="名字">
              <a-input
                v-decorator="['name', {
                  rules: [{ required: true, message: 'Please enter user name' }]
                }]"
                placeholder="Please enter user name"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="地址">
              <a-input
                v-decorator="['url', {
                  rules: [{ required: true, message: 'please enter url' }]
                }]"
                style="width: 100%"
                addonBefore="http://"
                addonAfter=".com"
                placeholder="please enter url"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="所有人">
              <a-select
                v-decorator="['owner', {
                  rules: [{ required: true, message: 'Please select an owner' }]
                }]"
                placeholder="Please a-s an owner"
              >
                <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
                <a-select-option value="mao">Maomao Zhou</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="类型">
              <a-select
                v-decorator="['type', {
                  rules: [{ required: true, message: 'Please choose the type' }]
                }]"
                placeholder="Please choose the type"
              >
                <a-select-option value="private">Private</a-select-option>
                <a-select-option value="public">Public</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="批准人">
              <a-select
                v-decorator="['approver', {
                  rules: [{ required: true, message: 'Please choose the approver' }]
                }]"
                placeholder="Please choose the approver"
              >
                <a-select-option value="jack">Jack Ma</a-select-option>
                <a-select-option value="tom">Tom Liu</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="日期时间">
              <a-date-picker
                v-decorator="['dateTime', {
                  rules: [{ required: true, message: 'Please choose the dateTime' }]
                }]"
                style="width: 100%"
                :getPopupContainer="trigger => trigger.parentNode"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="描述">
              <a-textarea
                v-decorator="['description', {
                  rules: [{ required: true, message: 'Please enter url description' }]
                }]"
                :rows="4"
                placeholder="please enter url description"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <a-button
          :style="{marginRight: '8px'}"
          @click="onClose"
        >
          Cancel
        </a-button>
        <a-button @click="onClose" type="primary">Submit</a-button>
      </div>
    </a-drawer>
    <a-drawer
      title="单列抽屉"
      :width="640"
      :closable="false"
      @close="onCloses"
      :visible="visibles"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
      <a-card :body-style="{padding: '0'}" :bordered="false">
        <a-form @submit="handleSubmit" :form="form" :hideRequiredMark="true">
          <a-form-item
            label="标题"
            :labelCol="{lg: {span: 6}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 15}, sm: {span: 17} }">
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
            :labelCol="{lg: {span: 6}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 15}, sm: {span: 17}}">
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
            :labelCol="{lg: {span: 6}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 15}, sm: {span: 17} }"
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
            :labelCol="{lg: {span: 6}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 15}, sm: {span: 17} }"
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
            :labelCol="{lg: {span: 6}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 15}, sm: {span: 17} }"
            :required="false">
            <span slot="label">
              邀评人(选填)
              <a-tooltip title="What do you want others to call you?">
                <a-icon type="info-circle" />
              </a-tooltip>
            </span>
            <a-input placeholder="请直接 @姓名／工号，最多可邀请 5 人"/>
          </a-form-item>
          <a-form-item
            label="权重(选填)"
            :labelCol="{lg: {span: 6}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 15}, sm: {span: 17} }"
            :required="false">
            <a-input-number :min="0" :max="100"/>
            <span>%</span>
          </a-form-item>
          <a-form-item
            label="目标公开"
            :labelCol="{lg: {span: 6}, sm: {span: 7}}"
            :wrapperCol="{lg: {span: 15}, sm: {span: 17} }"
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
          <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center; padding-top: 20px">
          </a-form-item>
        </a-form>
      </a-card>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <a-button @click="onClose" type="primary">保存</a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import AddForm from './AddBtnForm.vue'
import BaseFormContent from './BaseFormContent.vue'
export default {
  components: {
    AddForm,
    BaseFormContent
  },
  data () {
    return {
      form: this.$form.createForm(this),
      visible: false,
      visibles: false,
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,
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
    },
    drawer () {
      this.visibles = true
    },
    monitor (val) {

    },
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    onCloses () {
      this.visibles = false
    }
  }

}
</script>
