<template>
  <a-card :body-style="{padding: '24px'}">
    <a-form-item v-bind="formItemLayout" class="boxBoder">
      <div>
        项目可研报告
        <span class="foldStyle" @click="fold()">
          <a-icon type="up" v-if="iconToggleOne" />
          <a-icon type="down" v-else />
        </span>
      </div>

      <a-upload
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
      >
        <a-button>
          <a-icon type="upload"/>文件上传
        </a-button>
        <span style="padding-left:10px">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</span>
      </a-upload>
    </a-form-item>
    <verticaltoggle>
      <a-form-item v-bind="formItemLayout" class="boxBoder" v-if="iconShow">
        <div>绩效目标</div>
        <a-upload
          :showUploadList="false"
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
        >
          <a-button style="margin-bottom:15px">
            <a-icon type="upload"/>文件上传
          </a-button>
          <span style="padding-left:10px">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</span>
        </a-upload>

        <a-table :dataSource="data" :pagination="false">
          <a-table-column title="种类" data-index="icon" key="icon">
            <template slot-scope="icon">
              <a-icon :type="item" v-for="item in icon" :key="item.icon"/>
            </template>
          </a-table-column>
          <a-table-column title="名称" data-index="name" key="name"/>
          <a-table-column title="大小" data-index="size" key="size"/>
          <a-table-column title="上传时间" data-index="time" key="time"/>
          <a-table-column title="上传状态" data-index="state" key="state">
            <template slot-scope="state">
              <div style="width: 100%" v-for="aa in state" :key="aa.id">
                <div>
                  <a-progress :percent="aa.c" size="small" :status="aa.d"/>
                  <!-- <a-progress :percent="100" /> -->
                </div>
              </div>
            </template>
          </a-table-column>
          <a-table-column title="操作" key="operation">
            <template slot-scope="text, record">
              <a href style="margin-right:10px">{{ record.operation.text }}</a>
              <a style="margin-right:10px">{{ record.operation.textOne }}</a>
            </template>
          </a-table-column>
        </a-table>
      </a-form-item>
    </verticaltoggle>
    <a-form-item v-bind="formItemLayout" class>
      <div>项目可研报告</div>
      <a-upload
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
      >
        <a-button>
          <a-icon type="upload"/>文件上传
        </a-button>
        <span style="padding-left:10px">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</span>
      </a-upload>
    </a-form-item>
  </a-card>
</template>

<script>
import verticaltoggle from '@/views/newform/verticaltoggle' // 你看不懂的 js  别看了
const data = [
  {
    key: '1',
    icon: ['file-text'],
    name: '融合服务开发服务平台前端部分工作规划.doc',
    size: '23.6kb',
    time: '2016-09-21 08:50:08',
    state: [{ c: 60, d: 'active' }],
    operation: {
      text: '取消',
      flagOpen: true
    }
  },
  {
    key: '2',
    icon: ['file-text'],
    name: '融合服务开发服务平台前端部分工作规划.doc',
    size: '23.6kb',
    time: '2016-09-21 08:50:08',
    state: [{ c: 100, d: 'success' }],
    operation: {
      text: '删除',
      textOne: '下载',
      flagOpen: true
    }
  },
  {
    key: '3',
    icon: ['file-text'],
    name: '融合服务开发服务平台前端部分工作规划.doc',
    size: '23.6kb',
    time: '2016-09-21 08:50:08',
    state: [{ c: 80, d: 'exception' }],
    operation: {
      text: '取消',
      textOne: '重新上传',
      flagOpen: true
    }
  },
  {
    key: '4',
    icon: ['file-text'],
    name: '融合服务开发服务平台前端部分工作规划.doc',
    size: '23.6kb',
    time: '2016-09-21 08:50:08',
    state: [{ c: 60, d: 'active' }],
    operation: {
      text: '取消',
      flagOpen: true
    }
  }
]
export default {
  components: {
    verticaltoggle
  },
  data () {
    return {
      data,
      headers: {
        authorization: 'authorization-text' // 上传文件
      },
      iconShow: true,
      iconToggleOne: true,
      formItemLayout: {
        // labelCol: { span: 6 },
        wrapperCol: { span: 24 }
      }
    }
  },
  methods: {
    fold () { // 伸缩
      this.iconShow = !this.iconShow
      this.iconToggleOne = !this.iconToggleOne
    },
    handleChange (info) { // 上传文件
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
}
</script>

<style lang="less" scoped>

/* a-card 取消上边框 */
.ant-card-bordered {
  border: none;
}

.foldStyle {
  float: right;
  padding-right: 24px;
}
</style>
