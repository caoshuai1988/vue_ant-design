<template>
  <div>
    <!-- 三列 -->
    <a-card class="card" style="font-size: 26px" :bordered="false" >
      <layoutForm title="组标题" >
        <span class="foldStyle" @click="fold(true)">
          <a-icon type="up" v-if="iconToggle" />
          <a-icon type="down" v-else />
        </span>
        <verticaltoggle>
          <a-form @submit="handleSubmit" :form="form" class="form" v-if="foldOne" :hideRequiredMark="true">
            <a-row class="form-row" :gutter="16">
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">只读信息</span>
                  <span>antdesign@exarmple.com</span>
                </a-form-item>
              </a-col>
              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
                <a-form-item
                >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">地区级联选择</span>
                  <a-cascader
                    v-decorator="[
                      'residence',
                      {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                      }
                    ]"
                    :options="residences"
                  />
                </a-form-item>
              </a-col>
              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
                <a-form-item
                >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">带搜索树选择</span>
                  <a-select :size="ceshi" placeholder="请选择管理员" v-decorator="[ 'owner', {rules: [{ required: true, message: '请选择管理员'}]} ]">
                    <a-select-option value="王同学">王同学</a-select-option>
                    <a-select-option value="李同学">李同学</a-select-option>
                    <a-select-option value="黄同学">黄同学</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item
                >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">选择日期</span>
                  <a-date-picker v-decorator="['date-picker', config]" style="width:100%" />
                </a-form-item>
              </a-col>

              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 8}" :md="{span: 24}" :sm="24">
                <a-form-item
                >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">仓库类型     <a-tooltip title="What do you want others to call you?">
                    <a-icon type="info-circle" />
                  </a-tooltip></span>
                  <a-input
                    v-decorator="[
                      'username',
                      {rules: [{ required: true, message: 'Please input your name' }]}
                    ]"
                    placeholder="Please input your name"
                  />
                </a-form-item>
              </a-col>
              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
                <a-form-item
                >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">选择时间区间</span>
                  <a-range-picker
                    :size="ceshi"
                    style="width: 100%"
                    v-decorator="[
                      'dateRange',
                      {rules: [{ required: true, message: '请选择生效日期'}]}
                    ]" />
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item v-if="showSubmit">
              <a-button htmlType="submit" >Submit</a-button>
            </a-form-item>
          </a-form>
        </verticaltoggle>
      </layoutForm>
      <a-divider style="margin-bottom: 32px"/>

      <layoutForm title="组标题">
        <span class="foldStyle" @click="fold()">
          <a-icon type="up" v-if="iconToggleOne" />
          <a-icon type="down" v-else />
        </span>
        <verticaltoggle>
          <a-form @submit="handleSubmit" :form="form" class="form" v-if="foldTwo" :hideRequiredMark="true">
            <a-row class="form-row" :gutter="16">
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">数量</span>
                  <a-input-number :min="1" :max="10" @change="onChange" placeholder="请输入" />

                </a-form-item>
              </a-col>
              <!-- 银行卡号 -->
              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
                <a-form-item>
                  <span slot="label" :class="{textClass : ceshi == 'large'}">卡号</span>
                  <a-input
                    v-decorator="[
                      'num',
                      {rules: [{ required: false, number:true, message: '请输入卡号' }]}
                    ]"
                    placeholder="请输入卡号"/>
                  <!-- <a-input-group
                    compact
                    v-decorator="[
                      'num',
                      {rules: [{ required: true, message: '请填写完整卡号'}]}
                    ]" >
                    <a-input placeholder="请输入卡号" />
                    <a-input-number :min="0" @change="onChange" placeholder="请输入" />
                    <a-input style="width: 23%;margin-left: 2%; border-radius: 5px;" defaultValue="0571" />
                    <a-input style="width: 24%;margin-left: 2%; border-radius: 5px;" defaultValue="0571" />
                    <a-input style="width: 24%;margin-left: 2%; border-radius: 5px;" defaultValue="0571" />
                  </a-input-group> -->

                </a-form-item>
              </a-col>
              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
                <a-form-item>
                  <span slot="label" :class="{textClass : ceshi == 'large'}">地区级联选择</span>
                  <a-cascader
                    placeholder="请选择"
                    v-decorator="[
                      'residence',
                      {
                        initialValue: [],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                      }
                    ]"
                    :options="residences"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row class="form-row" :gutter="16">
              <a-col :lg="6" :md="12" :sm="24">
                <a-form-item>
                  <span slot="label" :class="{textClass : ceshi == 'large'}">选择地址</span>
                  <a-input
                    v-decorator="[
                      'site',
                      {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                      }
                    ]"
                    style="width: 100%"
                  >
                    <a-select
                      slot="addonBefore"
                      v-decorator="[
                        'prefix',
                        { initialValue: '公司' }
                      ]"
                      style="width: 70px"
                    >
                      <a-select-option value="公司">
                        公司
                      </a-select-option>
                      <a-select-option value="家">
                        家
                      </a-select-option>
                    </a-select>
                  </a-input>
                </a-form-item>
              </a-col>

              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 8}" :md="{span: 24}" :sm="24">
                <a-form-item
                >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">网址</span>
                  <a-input
                    :size="ceshi"
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="请输入"
                    v-decorator="[
                      'url',
                      {rules: [{ required: true, message: '请输入仓库域名', whitespace: true}, {validator: validate}]}
                    ]" />
                </a-form-item>
              </a-col>
              <a-col :xl="{span: 7, offset: 2}" :lg="{span: 8}" :md="{span: 24}" :sm="24">
                <a-form-item
                >
                  <span slot="label" :class="{textClass : ceshi == 'large'}">电话号码</span>
                  <a-input-group
                    compact
                    v-decorator="[
                      'iphone',
                      {rules: [{ required: false, message: '请填写电话号码'}]}
                    ]" >
                    <a-input style="width: 35%;border-radius: 5px;" defaultValue="0571" />
                    <span style="margin: 0 0; width: 5%;text-align: center ">--</span>
                    <a-input style="width: 60%; border-radius: 5px;" defaultValue="0571" />
                  </a-input-group>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item v-if="showSubmit">
              <a-button htmlType="submit" >Submit</a-button>
            </a-form-item>
          </a-form>
        </verticaltoggle>
      </layoutForm>
      <a-divider style="margin-bottom: 32px"/>
      <layoutForm title="组标题">
        <span class="foldStyle" @click="fold(0)">
          <a-icon type="up" v-if="iconTable" />
          <a-icon type="down" v-else />
        </span>
        <verticaltoggle>
          <div v-if="foldTable">
            <a-table :columns="columns" :dataSource="data" :pagination="false" :loading="memberLoading">
              <template
                v-for="(col, i) in ['name', 'workId', 'department','department1']"
                :slot="col"
                slot-scope="text, record"
              >
                <a-input
                  :key="col"
                  v-if="record.editable"
                  style="margin: -5px 0"
                  :value="text"
                  :placeholder="columns[i].title"
                  @change="e => handleChange(e.target.value, record.key, col)"
                />
                <template v-else>{{ text }}</template>
              </template>
              <template slot="operation" slot-scope="text, record">
                <template v-if="record.editable">
                  <span v-if="record.isNew">
                    <a @click="saveRow(record)">添加</a>
                    <a-divider type="vertical"/>
                    <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
                      <a>删除</a>
                    </a-popconfirm>
                  </span>
                  <span v-else>
                    <a @click="saveRow(record)">保存</a>
                    <a-divider type="vertical"/>
                    <a @click="cancel(record.key)">取消</a>
                  </span>
                </template>
                <span v-else>
                  <a @click="toggle(record.key)">编辑</a>
                  <a-divider type="vertical"/>
                  <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
                    <a>删除</a>
                  </a-popconfirm>
                </span>
              </template>
            </a-table>
            <a-button
              style="width: 100%; margin-top: 16px; margin-bottom: 8px"
              type="dashed"
              icon="plus"
              @click="newMember"
            >新增成员</a-button>
          </div>
        </verticaltoggle>
      </layoutForm>
      <div class="footerBox" >
        <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center; padding: 20px 0">
          <a-button htmlType="submit" type="primary" loading>
            提交
          </a-button>
          <a-button style="margin-left: 8px" type="primary" >保存</a-button>
          <a-button style="margin-left: 8px" >下一步</a-button>
        </a-form-item>
      </div>
    </a-card>

  </div>
</template>

<script>
import layoutForm from '@/views/newform/LayoutForm'
import verticaltoggle from './verticaltoggle.js'

// 表单
const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型'
}
// 级联假数据
const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}]
export default {
  components: {
    layoutForm,
    verticaltoggle
  },
  props: {
    showSubmit: {
      type: Boolean,
      default: false
    },
    ceshi: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      foldOne: true, // 折叠组件1
      foldTwo: true, // 折叠组件2
      foldTable: true, // 折叠表格
      iconTable: true, // 图标表格
      iconToggle: true, // 图标1
      iconToggleOne: true, // 图标2
      form: this.$form.createForm(this),
      residences,
      memberLoading: false,
      config: {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }]
      },
      columns: [
        {
          title: '资金账户',
          dataIndex: 'name',
          key: 'name',
          width: '20%',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '用途',
          dataIndex: 'workId',
          key: 'workId',
          width: '20%',
          scopedSlots: { customRender: 'workId' }
        },
        {
          title: '管理员',
          dataIndex: 'department',
          key: 'department',
          width: '40%',
          scopedSlots: { customRender: 'department' }
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      data: [
        {
          key: '1',
          name: '小明',
          workId: '001',
          editable: false,
          department: '行政部'
        },
        {
          key: '2',
          name: '李莉',
          workId: '002',
          editable: false,
          department: 'IT部'
        },
        {
          key: '3',
          name: '王小帅',
          workId: '003',
          editable: false,
          department: '财务部'
        }

      ]
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
    onChange (value) { // number
      console.log('changed', value)
    },
    handleSubmit (e) { // 表单
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$notification['error']({
            message: 'Received values of form:',
            description: values
          })
        }
      })
    },
    validate (rule, value, callback) {
      const regex = /^user-(.*)$/
      if (!regex.test(value)) {
        callback(new Error('需要以 user- 开头'))
      }
      callback()
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
// icon
.foldStyle{
    position: absolute;
    top: -34px;
    right: 0;
    font-size: 16px;
    cursor: pointer;
}

</style>
