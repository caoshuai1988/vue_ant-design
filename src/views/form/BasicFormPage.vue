<!--
 * @Author: 张志勇
 * @Date: 2019-06-05 10:54:17
 * @LastEditTime: 2019-07-04 17:20:45
 * @Description: 基础表单组件
 -->

<template>
  <a-card :body-style="{background:'#f0f2f5', padding:0}" class="form-body" :bordered="false">

    <a-row :gutter="24">
      <a-col :body-style="{background:'#fff'}" :xl="num" :lg="num" :md="num" :sm="num" >
        <div style="background: #fff; padding: 24px 32px">
          <a-form @submit="handleSubmit" :form="form" >
            <!-- :colon="false"
              label="输入框" -->
            <!-- 输入框 -->
            <a-form-item
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <span slot="label">
                输入框&nbsp;
                <span class="label-select">
                  <a-tooltip title="输入帮助">
                    <a-icon type="info-circle"/>
                  </a-tooltip>
                </span>
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
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
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
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
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
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-select
                placeholder="请选择标题"
                v-decorator="[
                  'b-title',
                  {rules: [{ required: true, message: '请选择标题' }]}
                ]">
                <a-select-option value="Home">select1</a-select-option>
                <a-select-option value="Company">select2</a-select-option>
              </a-select>
            </a-form-item>

            <!-- 只读信息 -->
            <!-- <a-form-item
              label="只读信息"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <span>
                antdesign@example.com
              </span>
            </a-form-item> -->
            <!-- 不可输入状态 -->
            <a-form-item
              label="不可输入状态"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                disabled
                placeholder="默认值"
                v-decorator="[
                  'readOnly',
                  {rules: [{ required: true, message: '请输入默认值' }]}
                ]" />
            </a-form-item>

            <!-- 多选框 -->
            <a-form-item
              label="多选框"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              :required="true">
              <a-checkbox-group
                @change="onChange"
                v-decorator="[
                  'input-prefixa',
                  {rules: [{ required: true, message: '请选择' }]}
                ]">
                <!-- v-decorator="[
                  'b-checkout',
                  {rules: [{ required: true}]}
                ]" -->
                <a-checkbox value="1">选项一</a-checkbox>
                <a-checkbox value="2">选项二</a-checkbox>
                <a-checkbox value="3">选项三 </a-checkbox>
              </a-checkbox-group>
            </a-form-item>

            <!-- 单选框 -->
            <a-form-item
              label="单选框"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              :required="true">
              <a-radio-group
                @change="onChange"
                v-decorator="[
                  'input-prefixb',
                  {rules: [{ required: true, message: '请选择' }]}
                ]">
                <a-radio value="1">选项一</a-radio>
                <a-radio value="2">选项二</a-radio>
                <a-radio value="3">选项三 </a-radio>
              </a-radio-group>
            </a-form-item>
            <!-- 按钮分段器 -->
            <a-form-item
              label="按钮分段器"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              :required="true">
              <a-button-group
                v-decorator="[
                  'input-prefixc',
                  {rules: [{ required: true, message: '请选择' }]}
                ]">
                <a-button>筛选一</a-button>
                <a-button>筛选二</a-button>
                <a-button>筛选三</a-button>
              </a-button-group>
            </a-form-item>
            <!-- ====分界线====== -->
            <!-- <div class="line"></div> -->
            <!-- <h1 class="title-name">组标题</h1> -->
            <!-- 上传附件 -->
            <!-- style="margin-bottom:32px" -->
            <a-form-item
              label="上传附件"
              help="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
              :labelCol="labelCol"
              style="margin-bottom: 24px;"
              :wrapperCol="wrapperCol"
              :required="true">
              <a-upload
                v-decorator="[
                  'input-prefix',
                  {rules: [{ required: true, message: '请选择' }]}
                ]"
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :headers="headers"
                @change="handleChange">
                <a-button>
                  <a-icon type="upload" />上传文件
                </a-button>
              </a-upload>
            </a-form-item>

            <!-- 上传证件 -->
            <a-form-item
              label="上传证件"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              :required="true">
              <template>
                <div class="clearfix">
                  <a-upload
                    v-decorator="[
                      'input-prefix',
                      {rules: [{ required: true, message: '请上传证件' }]}
                    ]"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    :fileList="fileList"
                    @preview="handlePreview"
                    @change="handleChange">
                    <div v-if="fileList.length < 3">
                      <a-icon type="plus" />
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </a-upload>
                  <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                    <img alt="example" style="width: 100%" :src="previewImage" />
                  </a-modal>
                </div>
              </template>
            </a-form-item>
            <!-- 批量上传 -->
            <a-form-item
              label="批量上传"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              :required="true">
              <template>
                <a-upload-dragger
                  v-decorator="[
                    'input-prefix',
                    {rules: [{ required: true, message: '请上传文件' }]}
                  ]"
                  name="file"
                  :multiple="true"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  @change="handleChange">
                  <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" />
                  </p>
                  <p class="ant-upload-text">点击或将文件拖拽到这里上传</p>
                  <p class="ant-upload-hint">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
                </a-upload-dragger>
              </template>
            </a-form-item>
            <!-- 提交 -->
            <a-form-item
              :wrapperCol="{span: 10, offset: 7}"
              style="margin-top:32px">
              <a-button htmlType="submit" type="primary">提交</a-button>
              <a-button style="margin-left: 8px">保存</a-button>
            </a-form-item>
          </a-form>
          <a-divider />
          <div class="step-form-style-desc">
            <h3>说明</h3>
            <h4>转账到支付宝账户</h4>
            <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
            <h4>转账到银行卡</h4>
            <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
          </div>
        </div>
      </a-col>
      <!-- 帮助侧边栏 -->
      <template v-if="isShowHelp">
        <a-col
          style="padding: 0 12px"
          :xl="helpNum"
          :lg="helpNum"
          :md="helpNum"
          :sm="helpNum"
          :xs="helpNum">
          <a-affix :offsetTop="this.top">
            <Help @handleClose="handleClose" :boxHeight="boxHeight"/>
          </a-affix>
        </a-col>
      </template>
    </a-row>

  </a-card>
</template>

<script>
import Help from '@/components/form/Help'

export default {
  name: 'BaseFormPage',
  components: {
    Help
  },
  data () {
    return {
      boxHeight: {
        height: ''
      },
      // 固钉
      top: 0,
      isShowHelp: false,
      num: 24,
      // num: 18,
      helpNum: 6,
      labelCol: { lg: { span: 7 }, sm: { span: 7 } },
      wrapperCol: { lg: { span: 10 }, sm: { span: 10 } },
      headers: {
        authorization: 'authorization-text'
      },
      // description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场',
      value: 1,
      form: this.$form.createForm(this),
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]

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
    handleClose () {
      this.isShowHelp = false
      this.num = 24
    },
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    },
    onChange () {

    }
  }
}
</script>

<style lang="less" scoped>
  .label-select{
    color:rgba(0,0,0,0.45);
  }
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
    margin-bottom: 24px;
  }
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }

  .form-body /deep/.ant-form{
    background: #fff;
  }
  .step-form-style-desc {
    padding: 0 56px;
    color: rgba(0,0,0,.45);

    h3 {
      margin: 0 0 12px;
      color: rgba(0,0,0,.45);
      font-size: 16px;
      line-height: 32px;
    }

    h4 {
      margin: 0 0 4px;
      color: rgba(0,0,0,.45);
      font-size: 14px;
      line-height: 22px;
    }

    p {
      margin-top: 0;
      margin-bottom: 12px;
      line-height: 22px;
    }
  }

  // 局部样式图片默认样式消除底部margin-bottom:8px  现在提到全局样式了
  // /deep/.ant-upload-list-picture-card .ant-upload-list-item{
  //   margin-bottom: 0
  // }
  // /deep/.ant-upload.ant-upload-select-picture-card{
  //   margin-bottom: 0;
  // }
</style>
