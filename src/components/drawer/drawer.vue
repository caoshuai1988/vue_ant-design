<style lang="less">
@import "~@/utils/utils.less";
.approval-content{
  // padding: 24px;
  color: rgb(0,0,0,0.65);
  .approval-content__title{
    font-size: 16px;
    color: rgb(0,0,0,0.65);
    display: flex;
    align-items: center;
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
    margin: 0 auto;
    width: 400px;
    display: flex;
    justify-content: space-between;
    padding: 16px 8px;
    &.title-submit{
      padding: 0 8px;
      background: #fafafa;
      height: 40px;
      line-height: 40px;
    }
  }
}

.drawer-content-box{
    margin: 0 auto;
  margin-bottom: 24px;
  p{
    padding: 0;
    margin: 0;
  }
  width: 400px;
  // width: 100%;
  color: rgba(0,0,0,.85);
  border:0;
  border-top: 1px;
  border-left: 1px;
  border-style: solid;
  border-color: #E5E5E5;
  .table-lable, .table-content{
    box-sizing: border-box;
    // float: left;
    display: inline-block;
    line-height: 1.5;
    padding: 0 16px;
  }
  .table-lable{
    width: 80px;
    // width: calc(100%-318px);
  }
  .table-content{
    width: 318px;
    padding:0;
    box-sizing: border-box;
    // width: calc(100%-80px);
    border: 0;
    border-left: 1px;
    border-style: solid;
    border-color: #E5E5E5;
  }
  .first-row, .second-row, .third-row{
    .clearfix();
    border: 0;
    box-sizing: border-box;
    border-right: 1px;
    border-bottom: 1px;
    border-style: solid;
    border-color: #E5E5E5;
    display: flex;
    align-items: center;
    .table-content{
      padding: 8px 16px;
      &.doc-wrap{
        padding: 0;
        .doc{
           padding: 8px 16px;
          &.doc--line{
            width: 100%;
            border: 0;
            border-bottom: 1px;
            border-style: solid;
            border-color: #E5E5E5;
            position: relative;
          }
          .look{
            margin: 0 16px;
          }
        }
      }
    }
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
            <a-icon type="codepen-circle" style="font-size:32px;margin-right:8px "/>状态
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
            <a-icon type="behance-square" style="font-size:32px;margin-right:8px "/>操作
          </div>
          <div class="divider-horizontal"></div>
          <a-form @submit="handleSubmit" :form="form" >
            <!-- 单选框 -->
            <a-form-item
              label="结果"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
              :required="false">
              <a-radio-group @change="onChange">
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
            <a-icon type="slack" style="font-size:32px;margin-right:8px "/>
            <span>
              历史
            </span>
          </div>
          <div class="divider-horizontal"></div>
          <!-- 同意 -->
          <div class="approval__status">
            <span style="color:#52C41A">同意</span>
            <span>2017-12-14  &nbsp;09:00</span>
          </div>
          <div class="drawer-content-box">
            <div class="first-row">
              <div class="table-lable">
                <span>
                  审核人
                </span>
              </div>
              <div class="table-content">
                名称(职位)
              </div>
            </div>
            <div class="second-row">
              <div class="table-lable">
                备注
              </div>
              <div class="table-content">
                <p>
                  审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容。
                </p>
              </div>
            </div>
            <div class="third-row">
              <div class="table-lable">
                附件
              </div>
              <div class="table-content doc-wrap">
                <div class="doc">
                  <i class="anticon anticon-paper-clip" style="color: rgba(0, 0, 0, 0.45);"><svg
                    viewBox="64 64 896 896"
                    data-icon="paper-clip"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    class=""><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"></path></svg></i>
                  <span style="margin-left:8px">文档.docx</span>
                  <a href="javascript:;" class="look">预览</a>
                  <a href="javascript:;">下载</a>
                </div>
                <div class="doc">
                  <i class="anticon anticon-paper-clip" style="color: rgba(0, 0, 0, 0.45);"><svg
                    viewBox="64 64 896 896"
                    data-icon="paper-clip"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    class=""><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"></path></svg></i>
                  <span style="margin-left:8px">文档.docx</span>
                  <a href="javascript:;" class="look">预览</a>
                  <a href="javascript:;">下载</a>
                </div>
              </div>
            </div>
          </div>
          <!-- 驳回 -->
          <div class="approval__status">
            <span style="color:#F5222D">驳回</span>
            <span>2017-12-14  &nbsp;09:00</span>
          </div>
          <div class="drawer-content-box">
            <div class="second-row">
              <div class="table-lable">
                备注
              </div>
              <div class="table-content">
                <p>
                  审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容。
                </p>
              </div>
            </div>
            <div class="third-row">
              <div class="table-lable">
                附件
              </div>
              <div class="table-content doc-wrap">
                <div class="doc doc--line">
                  <i class="anticon anticon-paper-clip" style="color: rgba(0, 0, 0, 0.45);"><svg
                    viewBox="64 64 896 896"
                    data-icon="paper-clip"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    class=""><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"></path></svg></i>
                  <span style="margin-left:8px">文档.docx</span>
                  <!-- <a href="javascript:;" class="look">预览</a>
                  <a href="javascript:;">下载</a> -->
                </div>
                <div class="doc">
                  <i class="anticon anticon-paper-clip" style="color: rgba(0, 0, 0, 0.45);"><svg
                    viewBox="64 64 896 896"
                    data-icon="paper-clip"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    class=""><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"></path></svg></i>
                  <span style="margin-left:8px">文档.docx</span>
                  <!-- <a href="javascript:;" class="look">预览</a>
                  <a href="javascript:;">下载</a> -->
                </div>
              </div>
            </div>
            <div class="first-row">
              <div class="table-lable">
                <span>
                  审核人
                </span>
              </div>
              <div class="table-content">
                名称(职位)
              </div>
            </div>

          </div>
          <!-- 提交 -->
          <div class="approval__status title-submit">
            <span style="color:#FACC14">提交</span>
            <span>2017-12-14  &nbsp;09:00</span>
          </div>
          <div class="drawer-content-box">
            <div class="second-row">
              <div class="table-lable">
                备注
              </div>
              <div class="table-content">
                <p>
                  审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容审核内容。
                </p>
              </div>
            </div>
            <div class="third-row">
              <div class="table-lable">
                附件
              </div>
              <div class="table-content doc-wrap">
                <div class="doc doc--line">
                  <i class="anticon anticon-paper-clip" style="color: rgba(0, 0, 0, 0.45);"><svg
                    viewBox="64 64 896 896"
                    data-icon="paper-clip"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    class=""><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"></path></svg></i>
                  <span style="margin-left:8px">文档.docx</span>
                </div>
                <div class="doc">
                  <i class="anticon anticon-paper-clip" style="color: rgba(0, 0, 0, 0.45);"><svg
                    viewBox="64 64 896 896"
                    data-icon="paper-clip"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                    class=""><path d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"></path></svg></i>
                  <span style="margin-left:8px">文档.docx</span>
                </div>
              </div>
            </div>
            <div class="first-row">
              <div class="table-lable">
                <span>
                  审核人
                </span>
              </div>
              <div class="table-content">
                名称(职位)
              </div>
            </div>

          </div>
        </div>
      </div>

    </a-drawer>
  </div>
</template>
<script>

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
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
      }],
      form: this.$form.createForm(this)
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
