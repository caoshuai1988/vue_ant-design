<style lang="less">
.approval-content{
  // padding: 24px;
  color: rgb(0,0,0,0.65);
  .approval-content__title{
    font-size: 16px;
    color: rgb(0,0,0,0.65)
  }
  // 细的分割线
  .divider-horizontal{
    margin-top:8px;
    margin-bottom:24px;
      display: block;
      clear: both;
      width: 100%;
      min-width: 100%;
      height: 1px;
      box-sizing: border-box;
      color: rgba(0,0,0,.65);
      list-style: none;
      background: #e8e8e8;
  }
  // 宽浅色的分割线
  .shallow-horizontal{
      margin: 24px 0;
      width: 100%;
      min-width: 100%;
      height: 8px;
      box-sizing: border-box;
      background: #f4f4f4;
  }
  .first-item{
    line-height: 22px;
    margin-bottom: 16px;
    .status{
      font-weight: 600;
    }
    .step{
      color: rgba(0,0,0,.45);
      font-weight: 800;
      margin: 0 8px;
    }
    .detail{
      color: #1890ff;
    }
  }
  .second-item{
    line-height: 22px;
    margin-bottom: 16px;
    clear: both;
    overflow: hidden;
    .left, .right{
      width: 50%;
      float: left;
    }
    .department{
      font-weight: 600;
    }
  }
  .approval__status{
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
  }
}

</style>

<template>
  <div>
    <a-drawer
      title="审批"
      :width="480"
      @close="onClose"
      :visible="isVisible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}">
      <div class="approval-content">
        <div class="common-title">
          <div class="approval-content__title">
            状态
          </div>
          <div class="divider-horizontal"></div>
          <div class="first-item">
            <span class="name">
              当前步骤：
            </span>
            <span class="status">{{ '未提交' }}</span>
            <span class="step">(1/5)</span>
            <span class="detail">详情</span>
          </div>
          <div class="second-item">
            <div class="left">
              <span class="name">
                当前岗位：
              </span>
              <span class="department">{{ '财务部领导' }}</span>
            </div>
            <div class="right">
              <span class="name">
                下步岗位：
              </span>
              <span class="department">{{ '财务部领导' }}</span>
            </div>
          </div>
        </div>
        <!-- 宽的浅色横线 -->
        <div class="shallow-horizontal"></div>
        <div class="common-title">
          <div class="approval-content__title">
            操作
          </div>
          <div class="divider-horizontal"></div>
          <a-form @submit="handleSubmit" :form="form" >
            <!-- 单选框 -->
            <a-form-item
              label="结果"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              :required="false">
              <a-radio-group >
                <a-radio value="1">同意</a-radio>
                <a-radio value="2">退回</a-radio>
              </a-radio-group>
            </a-form-item>
            <!-- 备注 -->
            <a-form-item
              label="备注"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-textarea
                rows="4"
                placeholder="请填写备注或审核意见（选填）" />
            </a-form-item>
            <!-- 附件 -->
            <div style="margin-bottom: 32px;">
              <a-form-item
                label="附件"
                help="支持扩展名：.rar .zip .doc .docx .pdf .jpg..."
                :labelCol="labelCol"
                :wrapperCol="wrapperCol">
                <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :multiple="true" :fileList="fileList" @change="handleChange">
                  <a-button>
                    <a-icon type="upload"/> 上传文件
                  </a-button>
                </a-upload>
              </a-form-item>
            </div>
            <!-- 提交 -->
            <a-form-item
              :wrapperCol="{ span: 14 }"
              style="text-align: center">
              <a-button htmlType="submit" type="primary">提交</a-button>
            </a-form-item>

          </a-form>
        </div>
        <!-- 宽的浅色横线 -->
        <div class="shallow-horizontal"></div>
        <div class="common-title">
          <div class="approval-content__title">
            历史
          </div>
          <div class="divider-horizontal"></div>
          <div class="approval__status">
            <span style="color:#52C41A">同意</span>
            <span>2017-12-14  &nbsp;09:00</span>
          </div>
          <a-table :columns="columns" :dataSource="data" bordered>
            <template slot="name" slot-scope="text">
              <a href="javascript:;">{{ text }}</a>
            </template>
            <!-- <template slot="title" slot-scope="currentPageData">
              Header
            </template> -->
          </a-table>

        </div>
      </div>

    </a-drawer>
  </div>
</template>
<script>
const columns = [{
  title: '审核人',
  dataIndex: 'name',
  scopedSlots: { customRender: 'name' }
}, {
  title: '名称(职位)',
  className: 'column-money',
  dataIndex: 'money'
}]

const data = [{
  key: '1',
  name: '备注',
  money: '审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容',
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: '附件',
  money: '￥1,256,000.00'
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00'
}]
export default {
  name: 'Drawer',
  props: {
    isVisible: {
      type: [Boolean],
      default: false,
      required: false
    }
  },
  data () {
    return {
      data,
      columns,
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
      }],
      form: this.$form.createForm(this)
      // visible: false
    }
  },
  methods: {
    showDrawer () {
      this.$emit('close-drawer')
    },
    onClose () {
      this.$emit('close-drawer')
    },
    // 提交
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
        }
      })
    },
    handleChange (info) {
      let fileList = [...info.fileList]

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-2)

      // 2. read from response and show file link
      fileList = fileList.map((file) => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })

      this.fileList = fileList
    }
  }
}
</script>
