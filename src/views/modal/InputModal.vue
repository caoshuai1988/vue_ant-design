<template>
  <div>
    <div class="container">
      <div class="space-bottom_24" style="margin-top:24px;">
        <a-button type="primary" @click="showModal_860">860宽</a-button>
      </div>
      <!--样式模板-->
      <div class="content-warp" style="width:860px; background: white;">
        <div class="content-title">
          <span style="float:left">账单调整</span><span style="float:right;"><img :src="close" /></span>
        </div>
        <div class="content-from">
          <a-form
            class="ant-advanced-search-form"
            :form="form"
            @submit="handleSubmit">
            <a-row :gutter="24">
              <a-col :span="10" offset="2">
                <a-form-item
                  label="支付宝账户："
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>AntDesign@test.com</span>
                </a-form-item>
              </a-col>
              <a-col :span="10">
                <a-form-item
                  label="产品"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>--</span>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="10" offset="2">
                <a-form-item
                  label="商户登录ID："
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>城里的月光</span>
                </a-form-item>
              </a-col>
              <a-col :span="10">
                <a-form-item
                  label="结算方式"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>--</span>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="10" offset="2">
                <a-form-item
                  label="合约号"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>--</span>
                </a-form-item>
              </a-col>
              <a-col :span="10">
                <a-form-item
                  label="币种"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>--</span>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="10" offset="2">
                <a-form-item
                  label="调整账单日期"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>--</span>
                </a-form-item>
              </a-col>
              <a-col :span="10">
                <a-form-item
                  label="当前会计日期"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span>--</span>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="10" offset="2">
                <a-form-item
                  label="调整金额"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input
                    v-decorator="[
                      'taskName',
                      {rules: [{ required: true, message: '请输入调整金额' }],}
                    ]"
                    addonBefore="￥"
                    defaultValue="-100"
                    style="width:210px" />
                </a-form-item>
              </a-col>
              <a-col :span="10">
                <a-form-item
                  label="调整后金额"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <span style="color:red">--</span>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="10" offset="2">
                <a-form-item
                  label="计费依据"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-select
                    defaultValue="lucy"
                    style="width: 210px"
                    @change="handleChange"
                    v-decorator="[
                      'leader',
                      {rules: [{ required: true, message: '请选择计费依据' }]}
                    ]"
                  >
                    <a-select-option value="">交易金额</a-select-option>
                    <a-select-option value="amount">交易金额</a-select-option>
                    <a-select-option value="amount1">交易金额1</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="10">
                <a-form-item
                  label="调整计费量"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-input-number
                    :min="1"
                    :max="10"
                    v-decorator="[
                      'leader',
                      {rules: [{ required: true, message: '请输入计费量' }]}
                    ]"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="24" >
              <a-col :span="10" offset="2" style="width:780px;margin-left:-76px;">
                <a-form-item
                  label="原因说明"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-textarea placeholder="请输入至少五个字符" :rows="4" cols="70"/>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row :gutter="24">
              <a-col :span="10" offset="2">
                <a-form-item
                  label="附件上传"
                  :label-col="formItemLayout.labelCol"
                  :wrapper-col="formItemLayout.wrapperCol"
                >
                  <a-upload
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                    v-decorator="[
                      'leader',
                      {rules: [{ required: true, message: '请上传' }]}
                    ]"
                  >
                    <a-button>
                      <a-icon type="upload" /> 上传文件
                    </a-button><br>
                    <span style="width:300px;font-size:14px;color:#ccc;margin-top: 10px;display: inline-block;">支持扩展名：.doc .docx .pdf .jpg...</span>
                  </a-upload>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
        <div class="content-foot">
          <a-button>取消</a-button><a-button type="primary" style="margin-left:8px;">确定</a-button>
        </div>
      </div>
      <div class="space-bottom_24">
        <a-button type="primary" @click="showModal">640宽</a-button>
      </div>
      <div class="content" style="width:640px; background: white;">
        <div class="content-title">
          <span style="float:left">新建任务</span><span style="float:right;"><img :src="close" /></span>
        </div>
        <div class="content-from">
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
          </a-form>
        </div>
        <div class="content-foot">
          <a-button>取消</a-button><a-button type="primary" style="margin-left:8px;">确定</a-button>
        </div>
      </div>
      <div class="space-bottom_24">
        <a-button type="primary" @click="showDocument">480宽</a-button>
      </div>
      <div class="content" style="width:480px; background: white;">
        <div class="content-title">
          <span style="float:left">新建文档<i style="color:rgb(204, 204, 204);font-size:12px;margin-left:6px;font-style:normal;">辅助信息</i></span><span style="float:right;"><img :src="close" /></span>
        </div>
        <div class="content-from">
          <a-form
            :form="form"
            @submit="handleSubmit">
            <a-form-item
              label="产品名称"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-input placeholder="请输入"/>
            </a-form-item>
            <a-form-item
              label="产品描述"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 16 }"
            >
              <a-textarea placeholder="请输入至少五个字符" :rows="4"/>
            </a-form-item>
          </a-form>
        </div>
        <div class="content-foot">
          <a-button>取消</a-button><a-button type="primary" style="margin-left:8px;">确定</a-button>
        </div>
      </div>
      <div class="space-bottom_24">
        <a-popconfirm placement="top" @confirm="confirm" @cancel="cancel" okText="确定" cancelText="取消">
          <template slot="title">
            <p style="margin-top:20px;">
              <span>备注：</span>
              <span style="display:inline-block; margin-left:6px;"><a-input style="width:182px" placeholder=""/></span>
            </p>
          </template>
          <a-button type="primary">264宽</a-button>
        </a-popconfirm>
      </div>
      <div style="margin-top:150px">
        <a-popconfirm
          placement="top"
          @confirm="confirm"
          @cancel="cancel"
          okText="确定"
          visible="true"
          cancelText="取消">
          <template slot="title">
            <p style="margin-top:20px;">
              <span>备注：</span>
              <span style="display:inline-block; margin-left:6px;"><a-input style="width:182px" placeholder=""/></span>
            </p>
          </template>
          <a-button>按钮位置</a-button>
        </a-popconfirm>
      </div>
    </div>
    <!--640-->
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
      </a-form>
    </a-modal>

    <!--480-->
    <a-modal
      title="新建文档"
      :visible="visible2"
      @ok="handleSubmit"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel2"
      :width="width"
    >
      <span style="position:relative;left:70px;top:-60px;color:#ccc;font-size:12px;">辅助信息</span>
      <a-form
        :form="form"
        @submit="handleSubmit">
        <a-form-item
          label="产品名称"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-input placeholder="请输入"/>
        </a-form-item>
        <a-form-item
          label="产品描述"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-textarea placeholder="请输入至少五个字符" :rows="4"/>
        </a-form-item>
      </a-form>
    </a-modal>

    <!--218-->

    <!--860-->
    <a-modal
      title="账单调整"
      :visible="visible1"
      @ok="handleSubmit1"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel1"
      :width="860"
    >
      <a-form
        class="ant-advanced-search-form"
        :form="form"
        @submit="handleSubmit">
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item
              label="支付宝账户："
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>AntDesign@test.com</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="产品"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item
              label="商户登录ID："
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>城里的月光</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="结算方式"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item
              label="合约号"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="币种"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item
              label="调整账单日期"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="当前会计日期"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span>--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item
              label="调整金额"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input
                v-decorator="[
                  'taskName',
                  {rules: [{ required: true, message: '请输入调整金额' }],}
                ]"
                addonBefore="￥"
                defaultValue="-100"
                style="width:210px" />
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="调整后金额"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <span style="color:red">--</span>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item
              label="计费依据"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-select
                defaultValue="lucy"
                style="width: 210px"
                @change="handleChange"
                v-decorator="[
                  'leader',
                  {rules: [{ required: true, message: '请选择计费依据' }]}
                ]"
              >
                <a-select-option value="">交易金额</a-select-option>
                <a-select-option value="amount">交易金额</a-select-option>
                <a-select-option value="amount1">交易金额1</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item
              label="调整计费量"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-input-number
                :min="1"
                :max="10"
                v-decorator="[
                  'leader',
                  {rules: [{ required: true, message: '请输入计费量' }]}
                ]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24" >
          <a-col :span="10" offset="2" style="width:780px;margin-left:-76px;">
            <a-form-item
              label="原因说明"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-textarea placeholder="请输入至少五个字符" :rows="4" cols="70"/>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :span="10" offset="2">
            <a-form-item
              label="附件上传"
              :label-col="formItemLayout.labelCol"
              :wrapper-col="formItemLayout.wrapperCol"
            >
              <a-upload
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :headers="headers"
                @change="handleChange"
                v-decorator="[
                  'leader',
                  {rules: [{ required: true, message: '请上传' }]}
                ]"
              >
                <a-button>
                  <a-icon type="upload" /> 上传文件
                </a-button><br>
                <span style="width:300px;font-size:14px;color:#ccc;margin-top: 10px;display: inline-block;">支持扩展名：.doc .docx .pdf .jpg...</span>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import close from '@/assets/close.png'
export default {
  name: 'InputModal',
  components: {
  },
  data () {
    return {
      formLayout: 'horizontal',
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      form: this.$form.createForm(this),
      width: '800px',
      visible1: false,
      visible2: false,
      visible3: false
    }
  },
  computed: {
    formItemLayout () {
      const { formLayout } = this
      return formLayout === 'horizontal' ? {
        labelCol: { span: 8 },
        wrapperCol: { span: 14 }
      } : {}
    },
    buttonItemLayout () {
      const { formLayout } = this
      return formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 4 }
      } : {}
    },
    close () {
      return close
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
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
    handleSubmit1 (e) {
      e.preventDefault()
      this.confirmLoading = true
      setTimeout(() => {
        this.form.validateFields((err, values) => {
          if (!err) {
            this.visible1 = false
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
      this.width = '640px'
    },
    showModal_860 () {
      this.visible1 = true
    },
    showDocument () {
      this.visible2 = true
      this.width = '480px'
    },
    showRemarks () {
      // this.visible3 = true
      this.width = '264px'
    },
    handleCancel (e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
    handleCancel1 (e) {
      console.log('Clicked cancel button')
      this.visible1 = false
    },
    handleCancel2 (e) {
      this.visible2 = false
    },
    handleCancel3 (e) {
      this.visible3 = false
    }
  }
}
</script>
<style scoped>
	.content-warp{
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}
	.content-warp .content-title{
		overflow: hidden;
		padding:16px 24px;
		border-radius:4px 4px 0 0;
		color:rgba(0, 0, 0, 0.85);
		border-bottom:1px solid #e8e8e8;
		font-size:16px;
	}
	.content-from{
		padding:24px;
	}
	.content-foot
	{
		border-top:1px solid #e8e8e8;
		padding:10px 16px;
		border-radius: 0 0 4px 4px;
		text-align: right;
	}
.ant-popover-inner-content{
	width:264px !important;
}
.ant-popover-message-title{
	padding-left:0px !important;
}
</style>
<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .space-bottom_24 {
    margin-bottom: 24px;
    margin-top:64px;
  }
}
//  /deep/.ant-advanced-search-form {
//     padding: 24px;
//     background: #fbfbfb;
//     border: 1px solid #d9d9d9;
//     border-radius: 6px;
//     margin: 0 60px;
//   }

//   /deep/ .ant-advanced-search-form .ant-form-item {
//     display: flex;
//   }

//   /deep/ .ant-advanced-search-form .ant-form-item-control-wrapper {
//     flex: 1;
//   }
</style>
