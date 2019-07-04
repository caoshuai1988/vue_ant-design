
<template>
  <a-card :body-style="{background:'#f0f2f5', padding:0}" class="form-body" :bordered="false">
    <a-row :gutter="24">
      <a-col :body-style="{background:'#fff'}" :xl="num" :lg="num" :md="num" :sm="num" >
        <div style=" padding: 0">
          <baseFlowHead></baseFlowHead>
          <baseFormContent></baseFormContent>
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
import baseFlowHead from './BaseFlowHead'
import baseFormContent from '@/components/form/BaseFormContent'
import Help from '@/components/form/Help'
export default {
  name: 'BaseForm',
  components: {
    baseFlowHead,
    baseFormContent,
    Help
  },
  data () {
    return {
      boxHeight: {
        height: ''
      },
      // 固钉
      top: 0,
      num: 18,
      helpNum: 6,
      isShowHelp: true,
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

</style>
