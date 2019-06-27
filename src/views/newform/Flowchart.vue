<template>
  <div>
    <!-- 仓库 -->
    <a-card class="card" style="font-size: 26px" :bordered="false" >
      <span slot="title" :class="{abc : big == 'large'}">流程图</span>
      <span slot="extra" class="foldStyle" @click="fold(true)">
        <!--<a-icon type="up" v-if="iconToggle" />
        <a-icon type="down" v-else />-->
        <!--<img src="../../assets/tshi.png">-->
        <div class="imgLook">
          <b>图示:</b>
          <span style="background: #00a854;"></span>已完成/同意
          <span style="background: #1890ff;"></span>进行中
          <span style="background: #94c4ff;"></span>待进行
          <span style="background: #cccccc;"></span>待进行
          <span style="background: #f04134;"></span>退回
        </div>

      </span>
      <verticaltoggle>
        <!--<img src="../../assets/flow.png" class="flowImg" style="width:1000px;margin:24px auto;display: block;">-->
        <FlowImg></FlowImg>
      </verticaltoggle>
    </a-card>
    <!-- 表格 -->
    <a-card class="card" >
      <span slot="title" :class="{abc : big == 'large'}">流程历史</span>
      <!--<span slot="extra" class="foldStyle" @click="fold(0)">
        <a-icon type="up" v-if="iconTable" />
        <a-icon type="down" v-else />
      </span>-->
      <verticaltoggle>
        <div v-if="foldTable">
          <a-table :columns="columns" :dataSource="data">

            <span slot="name" slot-scope="text">
              <a href="javascript:;">{{ text }}</a>
            </span>
            <span slot="status" slot-scope="text">
              <a-badge :status="2 | statusTypeFilter" :text="2 | statusFilter"/>
            </span>
          </a-table>
        </div>
      </verticaltoggle>
    </a-card>
  </div>
</template>

<script>
import repositoryForm from './RepositoryForms'
import flowPng from '@/assets/flow.png'
import taskForm from './TaskForms'
import FlowImg from './flowchart/FlowImg'
import verticaltoggle from '@/views/newform/verticaltoggle'
const statusMap = {
  0: {
    status: 'default',
    text: '已完成'
  },
  1: {
    status: 'processing',
    text: '退回'
  },
  2: {
    status: 'success',
    text: '同意'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}
const columns = [
  { title: '序号', dataIndex: 'name', key: 'name', scopedSlots: { customRender: 'name' } },
  { title: '节点', dataIndex: 'platform', key: 'platform' },
  { title: '操作', dataIndex: 'status', scopedSlots: { customRender: 'status' } },
  { title: '岗位', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: '操作人', dataIndex: 'creator', key: 'creator' },
  { title: '操作时间', dataIndex: 'createdAt1', key: 'createdAt1' },
  { title: '备注', dataIndex: 'createdAt2', key: 'createdAt2' },
  { title: '附件', dataIndex: 'createdAt3', key: 'createdAt3' }
]

const data = []
const indexNumber = [8, 7, 6, 5, 4, 3, 2, 1]
for (let i = 0; i < 8; ++i) {
  data.push({
    key: i,
    name: indexNumber[i],
    platform: '省级审批',
    upgradeNum: '县级经办岗',
    creator: '张三',
    createdAt1: '2014-12-24 23:12:00',
    createdAt2: '备注',
    createdAt3: '文档.docx'
  })
}
export default {
  components: {
    repositoryForm,
    taskForm,
    verticaltoggle, // 动画组件
    FlowImg// 流程图
  },
  data () {
    return {
      // 变大
      big: 'default',
      foldOne: true, // 折叠组件1
      foldTwo: true, // 折叠组件2
      foldTable: true, // 折叠表格
      iconTable: true, // 图标表格
      iconToggle: true, // 图标1
      iconToggleOne: true, // 图标2
      memberLoading: false,
      data,
      columns
      // table
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  methods: {
    fold (flag) {
      if (flag) {
        this.foldOne = !this.foldOne
        this.iconToggle = !this.iconToggle
      } else if (flag === 0) {
        this.foldTable = !this.foldTable
        this.iconTable = !this.iconTable
      } else {
        this.foldTwo = !this.foldTwo
        this.iconToggleOne = !this.iconToggleOne
      }
    },
    sizeBig (num) {
      this.big = num
      this.$forceUpdate()
    },
    handleSubmit (e) {
      e.preventDefault()
    },
    newMember () {
      const length = this.data.length
      this.data.push({
        key: length === 0 ? '1' : (parseInt(this.data[length - 1].key) + 1).toString(),
        name: '',
        workId: '',
        department: '',
        editable: true,
        isNew: true
      })
    },
    remove (key) {
      const newData = this.data.filter(item => item.key !== key)
      this.data = newData
    },
    saveRow (record) {
      this.memberLoading = true
      const { key, name, workId, department } = record
      if (!name || !workId || !department) {
        this.memberLoading = false
        this.$message.error('请填写完整成员信息。')
        return
      }
      // 模拟网络请求、卡顿 800ms
      new Promise(resolve => {
        setTimeout(() => {
          resolve({ loop: false })
        }, 800)
      }).then(() => {
        const target = this.data.filter(item => item.key === key)[0]
        target.editable = false
        target.isNew = false
        this.memberLoading = false
      })
    },
    toggle (key) {
      const target = this.data.filter(item => item.key === key)[0]
      target.editable = !target.editable
    },
    getRowByKey (key, newData) {
      const data = this.data
      return (newData || data).filter(item => item.key === key)[0]
    },
    cancel (key) {
      const target = this.data.filter(item => item.key === key)[0]
      target.editable = false
    },
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },

    // 最终全页面提交
    validate () {
      const {
        $refs: { repository, task },
        $notification
      } = this
      const repositoryForm = new Promise((resolve, reject) => {
        repository.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })
      const taskForm = new Promise((resolve, reject) => {
        task.form.validateFields((err, values) => {
          if (err) {
            reject(err)
            return
          }
          resolve(values)
        })
      })

      // clean this.errors
      this.errors = []
      Promise.all([repositoryForm, taskForm])
        .then(values => {
          $notification['error']({
            message: 'Received values of form:',
            description: JSON.stringify(values)
          })
        })
        .catch(() => {
          const errors = Object.assign({}, repository.form.getFieldsError(), task.form.getFieldsError())
          const tmp = { ...errors }
          this.errorList(tmp)
          console.log(tmp)
        })
    },
    errorList (errors) {
      if (!errors || errors.length === 0) {
        return null
      }
      this.errors = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null
        }

        return {
          key: key,
          message: errors[key][0],
          fieldLabel: fieldLabels[key]
        }
      })
    },
    scrollToField (fieldKey) {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`)
      if (labelNode) {
        labelNode.scrollIntoView(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
// 底部
.footerBox{
  background-color: #fff;
}
// icon 样式
.foldStyle{
  cursor: pointer;
  color: #a3a3a3;
}
.abc {
  font-size: 18px;
}
.popover-wrapper {
  /deep/ .antd-pro-pages-forms-style-errorPopover .ant-popover-inner-content {
    min-width: 256px;
    max-height: 290px;
    padding: 0;
    overflow: auto;
  }
}
.antd-pro-pages-forms-style-errorIcon {
  user-select: none;
  margin-right: 24px;
  color: #f5222d;
  cursor: pointer;
  i {
    margin-right: 4px;
  }
}
/deep/ .ant-card-head{
	border-bottom:none;
}
.ant-card-bordered{
	border:none;

}
/deep/ .ant-card-body{
	padding:24px !important;
}
.antd-pro-pages-forms-style-errorListItem {
  padding: 8px 16px;
  list-style: none;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6f7ff;
  }
  .antd-pro-pages-forms-style-errorIcon {
    float: left;
    margin-top: 4px;
    margin-right: 12px;
    padding-bottom: 22px;
    color: #f5222d;
  }
  .antd-pro-pages-forms-style-errorField {
    margin-top: 2px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
  }
}
/*隐藏分页*/
/deep/ .ant-pagination{
	display:none;
}
/deep/  .ant-table-pagination{
	display:none;
}
.imgLook{
	text-align: center;

	line-height: 100%;
	span{
		display: inline-block;
		width:16px;
		height:16px;
		margin-left:30px;
		border-radius: 5px;
		margin-right:3px;
		vertical-align: middle;
		font-size: 14px;
	}
}
</style>
