<style lang="less">
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

  .page-direction{
    // right: @help-width;
    background: #fff;
    // min-width: 400px;
    // height: 600px;
    // min-height: 800px;
    z-index: 3;
    .title{
      position: relative;
      box-sizing: border-box;
      padding:0 24px;
      height: 57px;
      .title-des{
        box-sizing: border-box;
        height: 57px;
        // flex: 1 1;
        padding: 16px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .help{
          font-size: 16px;
          color: #272727;
          margin-right: 8px;
        }
        .detail{
          font-size: 14px;
          color: #62bfff;
        }
        .close{
          // position: absolute;
          // right: 24px;
          float: right;
          margin-top: 4px;
          // top: 16px;
          &:hover{
            cursor: pointer;
          }
        }
      }
    }
    .help-line{
      width: 100%;
      height: 0.5px;
      background: #e9e9e9;
    }
    .content-box{
      padding: 24px;
    }
    .content{
      // height: 650px;
      min-height: 300px;
      max-height: 650px;
      overflow-y: auto;
      &::-webkit-scrollbar{
        width: 4px;
        height: 8px;
        // background-color: #F5F5F5;
      }

/*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #a5a5a5;
      }

/*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb{
          border-radius: 5px;
          -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
          background-color: #EDEDED;
      }
    }
  }
  .form-body /deep/.ant-form{
    background: #fff;
    padding: 24px;
  }
  .form-body /deep/.ant-card-body {
    padding: 0;
  }

</style>
<template>
  <a-card :body-style="{background:'#eee'}" class="form-body" :bordered="false">

    <a-row :gutter="24">
      <a-col :body-style="{padding: '24px', background:'#fff'}" :xl="num" :lg="num" :md="num" :sm="num" >
        <a-form @submit="handleSubmit" :form="form" >
          <!-- <h1 class="title-name">标题组</h1> -->
          <!-- :colon="false"
            label="输入框" -->
          <!-- 输入框 -->
          <a-form-item
            :labelCol="labelCol"
            :wrapperCol="wrapperCol">
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
            <a-select placeholder="请选择标题">
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
                'readOnly'
              ]" />
          </a-form-item>

          <!-- 多选框 -->
          <a-form-item
            label="多选框"
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
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
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
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
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
            :required="false">
            <a-button-group>
              <a-button>筛选一</a-button>
              <a-button>筛选二</a-button>
              <a-button>筛选三</a-button>
            </a-button-group>
          </a-form-item>
          <!-- ====分界线====== -->
          <!-- <div class="line"></div> -->
          <!-- <h1 class="title-name">组标题</h1> -->
          <!-- 上传附件 -->
          <a-form-item
            label="上传附件"
            help="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
            :labelCol="labelCol"
            :wrapperCol="wrapperCol">
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
              <a-button>
                <a-icon type="upload" />上传文件
              </a-button>
            </a-upload>
          </a-form-item>

          <!-- 上传证件 -->
          <a-form-item
            label="上传证件"
            :labelCol="labelCol"
            :wrapperCol="wrapperCol">
            <template>
              <div class="clearfix">
                <a-upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  :fileList="fileList"
                  @preview="handlePreview"
                  @change="handleChange"
                >
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
            :wrapperCol="wrapperCol">
            <template>
              <a-upload-dragger name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" @change="handleChange">
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
            :wrapperCol="{ span: 24 }"
            style="text-align: center">
            <a-button htmlType="submit" type="primary">提交</a-button>
            <a-button style="margin-left: 8px">保存</a-button>
          </a-form-item>

        </a-form>
      </a-col>
      <template v-if="isShowHelp">
        <a-col
          style="padding: 0 12px"
          :xl="helpNum"
          :lg="helpNum"
          :md="helpNum"
          :sm="helpNum"
          :xs="helpNum">
          <div class="page-direction">
            <div class="title">
              <div class="title-des">
                <span class="help">帮助</span>
                <span class="detail">详情</span>
                <a-icon type="close" style="fontSize :16px; color:#a3a3a3;" class="close" @click="handleClose"/>
              </div>
            </div>
            <div class="help-line"></div>
            <div class="content-box">
              <div class="content">
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
                <div style="margin-bottom:20px">
                  <p class="question">
                    企业官网或轻量的Web应用
                  </p>
                  <p class="question">
                    网站初始阶段访问量小，只需要一台低配置的云服务器ECS实例即可运行Apache或Nginx等Web应用程序、数据库、存储文件等。随着网站发展，您可以随时升级ECS实例的配置，或者增加ECS实例数量，无需担心低配计算单元在业务突增时带来的资源不足。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </template>
    </a-row>

  </a-card>
</template>

<script>
export default {
  name: 'BaseFormPage',
  data () {
    return {
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
      // form
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
