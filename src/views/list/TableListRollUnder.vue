<template>
  <div ref="content">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="规则编号">
                <a-input v-model="queryParam.id" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="使用状态">
                <a-select v-model="queryParam.status" placeholder="请选择" default-value="0">
                  <a-select-option value="0">全部</a-select-option>
                  <a-select-option value="1">关闭</a-select-option>
                  <a-select-option value="2">运行中</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="调用次数">
                  <a-input-number v-model="queryParam.callNo" style="width: 100%"/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="更新日期">
                  <a-date-picker v-model="queryParam.date" style="width: 100%" placeholder="请输入更新日期"/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="使用状态">
                  <a-select v-model="queryParam.useStatus" placeholder="请选择" default-value="0">
                    <a-select-option value="0">全部</a-select-option>
                    <a-select-option value="1">关闭</a-select-option>
                    <a-select-option value="2">运行中</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="使用状态">
                  <a-select placeholder="请选择" default-value="0">
                    <a-select-option value="0">全部</a-select-option>
                    <a-select-option value="1">关闭</a-select-option>
                    <a-select-option value="2">运行中</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="!advanced && 8 || 24" :sm="24">
              <span
                class="table-page-search-submitButtons"
                :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
                <a @click="toggleAdvanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'"/>
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div class="table-operator" >
        <a-button type="primary" icon="plus" @click="$refs.createModal.add()">新建</a-button>
        <a-button>批量操作</a-button>
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item key="1">更多操作1</a-menu-item>
            <a-menu-item key="2">更多操作2</a-menu-item>
            <a-menu-item key="3">更多操作3</a-menu-item>
          </a-menu>
          <a-button>
            ...
          </a-button>
        </a-dropdown>
      </div>
      <s-table
        style="min-height:400px;"
        ref="table"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="options.alert"
        :rowSelection="options.rowSelection"
        :showPagination="true"
        size="large"
        :scroll="scroll"
      >
        <span slot="status" slot-scope="text">
          <a-badge :status="text | statusTypeFilter" :text="text | statusFilter"/>
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleDel(record)">删除</a>
            <a-divider type="vertical"/>
            <a @click="handleSub(record)">订阅报警</a>
          </template>
        </span>

      </s-table>
      <template>
        <div style="text-align: right;margin-top:16px;">
          <a-pagination showSizeChanger :pageSize.sync="pageSize" @showSizeChange="onShowSizeChange" :total="500" v-model="current"/>
        </div>
      </template>
      <create-form ref="createModal" @ok="handleOk"/>
    </a-card>

  </div>
</template>
<script>
import './jquery-1.7.2.js'
import { STable } from '@/components'
import CreateForm from './modules/CreateForm'
import { getServiceList } from '@/api/manage'

const statusMap = {
  0: {
    status: 'default',
    text: '项目登记 - 待审批'
  },
  1: {
    status: 'processing',
    text: '在建管理 - 填报中'
  },
  2: {
    status: 'success',
    text: '验收申请 - 完成'
  },
  3: {
    status: 'error',
    text: '审目终止 - 待审批'
  }
}

export default {
  components: {
    STable,
    CreateForm
  },
  data () {
    return {
      // 高级搜索 展开/关闭 false:关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '规则编号',
          dataIndex: 'no',
          width: 100
        },
        {
          title: '描述',
          width: 150,
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: '服务调用次数',
          width: 200,
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' 次'
        },
        {
          title: '状态',
          width: 300,
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' },
          filters: [
            { text: '填报中', value: 'male' },
            { text: '待审批', value: 'female' },
            { text: '已审批', value: 'malea' },
            { text: '已完成', value: 'femalea' }
          ]
        },
        {
          title: '更新时间',
          width: 300,
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: 150,
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return getServiceList(Object.assign(parameter, this.queryParam))
          .then(res => {
            console.log('result:', res.result)
            return res.result
          })
      },
      // 选中行key值
      selectedRowKeys: [],
      // 选中的行
      selectedRows: [],
      // custom table alert & rowSelection
      options: {
        alert: {
          show: true,
          clear: () => {
            this.selectedRowKeys = []
          }
        },
        rowSelection: {
          selectedRowKeys: this.selectedRowKeys,
          onChange: this.onSelectChange
        }
      },
      pageSize: 20,
      optionAlertShow: false,
      scrollDisabled: false,
      current: 1,
      scroll: {
        x: 2000,
        y: 350
      }
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
  mounted () {
    this.changeBrowser()
    window.addEventListener('resize', () => {
      // debugger
      this.changeBrowser()
      console.log('scroll', this.scroll)
    })
  },
  methods: {
  // 根据浏览器缩小改变样式
    changeBrowser () {
      const oHeight = document.documentElement['clientHeight'] - 510
      $('.ant-table-body').css({ 'height': 'oHeight' })
      $('.table-wrapper').css({ 'minHeight': '0px' })
      this.scroll = {
        y: document.documentElement['clientHeight'] - 510
      }
      if (document.documentElement['clientHeight'] < 710) {
        this.scroll = {
          y: 200
        }
      }
    },
    // 收起/展开
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    // 新增
    handleOk () {
      this.$refs.table.refresh()
    },
    // 获取选中行
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    // 删除
    handleDel (record) {
      alert('test')
    },
    // 订阅警报
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onShowSizeChange (current, pageSize) {
      console.log(current, pageSize)
    }
  }
}
</script>
<style lang="less">
</style>
