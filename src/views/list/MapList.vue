<!--该组件 地图信息里的表格组件-->
<!--现在不适用任何地方 地图组件已经暂停 现在为测试表格组件-->
<!--2019.6.27 mkk-->
<template>
  <div class="map-list">
    <a-card>
      <a-table
        :columns="columns"
        :dataSource="data"
        :pagination="false"
        :loading="memberLoading"
      >
        <template   slot="markId" slot-scope="text, record">
          <span>{{text}}</span>
        </template>
        <template  slot="coordinate" slot-scope="text, record">
          <a-input
            :key="coordinate"
            style="margin: -5px 0"
            :value="text"
            :placeholder="columns[1].title"
            @change="e => handleChange(e.target.value, record.key, 'coordinate')"
          />
        </template>

        <template slot="operation" slot-scope="text, record">
          <span>
            <a-popconfirm title="是否要删除此行？" @confirm="remove(record.markId)">
              <a>删除</a>
            </a-popconfirm>
          </span>
        </template>
      </a-table>
      <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">
        新增成员
      </a-button>
    </a-card>
  </div>
</template>

<script>

export default {
  name: 'MapList',
  data () {
    return {
      loading: false,
      memberLoading: false,
      columns: [
        {
          title: '标号',
          dataIndex: 'markId',
          key: 'markId',
          width: '20%',
          scopedSlots: { customRender: 'markId' }
        },
        {
          title: '拐点坐标',
          dataIndex: 'coordinate',
          key: 'coordinate',
          width: '20%',
          scopedSlots: {
            customRender: 'coordinate',
          },
          filterIcon: () => {
            return (
              <a-popover trigger="hover">
                <template slot="content">
                  <p>Content</p>
                </template>
                <a-button type="primary">Hover me</a-button>
              </a-popover>
            )
          }
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      data: [
        {
          markId: '1',
          coordinate: '001'
        },
        {
          markId: '2',
          coordinate: '002'
        },
        {
          markId: '3',
          coordinate: '003'
        }
      ],
      errors: []
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
    },
    newMember() {
      const length = this.data.length
      this.data.push({
        markId: length === 0 ? '1' : (parseInt(this.data[length - 1].markId) + 1).toString(),
        coordinate: '',
        isNew: true
      })
    },
    remove(key) {
      this.data = this.data.filter(item => item.markId !== key)
    },
    saveRow(record) {
      this.memberLoading = true
      const { key, name, workId, department } = record
      if (!name || !workId || !department) {
        this.memberLoading = false
        this.$message.error('请填写完整成员信息。')
        return
      }
      // 模拟网络请求、卡顿 800ms
      new Promise((resolve) => {
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
    toggle(key) {
      const target = this.data.filter(item => item.key === key)[0]
      target.editable = !target.editable
    },
    getRowByKey(key, newData) {
      const data = this.data
      return (newData || data).filter(item => item.key === key)[0]
    },
    cancel(key) {
      const target = this.data.filter(item => item.key === key)[0]
      target.editable = false
    },
    handleChange(value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },

    // 最终全页面提交
    validate() {
      const { $refs: { repository, task }, $notification } = this
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
      Promise.all([repositoryForm, taskForm]).then(values => {
        $notification['error']({
          message: 'Received values of form:',
          description: JSON.stringify(values)
        })
      }).catch(() => {
        const errors = Object.assign({}, repository.form.getFieldsError(), task.form.getFieldsError())
        const tmp = { ...errors }
        this.errorList(tmp)
        console.log(tmp)
      })
    },
    errorList(errors) {
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
    scrollToField(fieldKey) {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`)
      if (labelNode) {
        labelNode.scrollIntoView(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
