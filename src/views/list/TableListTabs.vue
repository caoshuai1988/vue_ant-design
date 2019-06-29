<template>
  <a-card :bordered="false" class="table-list-tabs">
    <a-tabs @change="callback" type="card">
      <template v-for="item in tabsList">
        <a-tab-pane :tab="item.tab" :key="item.key">
        <div class="table-page-search-wrapper">
          <a-form layout="inline">
            <a-row :gutter="48">
              <a-col :md="8" :sm="24">
                <a-form-item label="项目名称">
                  <a-input v-model="queryParam.title" placeholder=""/>
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="项目年份">
                  <a-select v-model="queryParam.year" placeholder="请选择" default-value="0">
                    <a-select-option value="0">2019</a-select-option>
                    <a-select-option value="1">2018</a-select-option>
                    <a-select-option value="2">2017</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <template v-if="advanced">
                <a-col :md="8" :sm="24">
                  <a-form-item label="项目名称">
                    <a-input v-model="queryParam.title" placeholder=""/>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="行政区划">
                    <a-select v-model="queryParam.area" placeholder="请选择" default-value="0">
                      <a-select-option value="0">韶关市翁源县</a-select-option>
                      <a-select-option value="1">上海市徐汇区</a-select-option>
                      <a-select-option value="2">南京市浦口区</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="行政区划">
                    <a-select v-model="queryParam.area" placeholder="请选择" default-value="0">
                      <a-select-option value="0">韶关市翁源县</a-select-option>
                      <a-select-option value="1">上海市徐汇区</a-select-option>
                      <a-select-option value="2">南京市浦口区</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item label="项目名称">
                    <a-input v-model="queryParam.title" placeholder=""/>
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
        <div class="table-operator">
          <a-button type="primary" icon="plus" @click="$refs.createModal.add()">新建</a-button>
          <a-button>提交</a-button>
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
          ref="table"
          rowKey="key"
          :columns="columns"
          :data="loadData"
          :alert="options.alert"
          :rowSelection="options.rowSelection"
          :showPagination="true"
          size="large"
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
      </a-tab-pane>
      <!--      <a-tab-pane tab="Tab 2" key="2">Content of Tab Pane 2</a-tab-pane>-->
      <!--      <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>-->
      </template>
      <template>
			  <div style="text-align: right;margin-top:30px;">
			    <a-pagination showSizeChanger :pageSize.sync="pageSize" @showSizeChange="onShowSizeChange" :total="500" v-model="current"/>
			  </div>
			</template>
    </a-tabs>
   
    <create-form ref="createModal" @ok="handleOk"/>
  </a-card>
</template>
<script>
import { STable } from '@/components'
import CreateForm from './modules/CreateForm'
import { getRoleList, getServiceList, getTestList } from '@/api/manage'

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
      tabsList: [
        { tab: '全部',
          key: 1
        },
        { tab: '项目登记',
          key: 2
        },
        { tab: '科研申报',
          key: 3
        },
        { tab: '计划上报',
          key: 4
        },
        { tab: '在建管理',
          key: 5
        },
        { tab: '计划上报',
          key: 6
        },
        { tab: '项目登记',
          key: 7
        },
        { tab: '科研申报',
          key: 8
        },
        { tab: '计划上报',
          key: 9
        },
        { tab: '在建管理',
          key: 10
        },
        { tab: '项目登记',
          key: 11
        }
      ],
      pageSize: 20,
      current: 1,
      // 高级搜索 展开/关闭 false:关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '规则编号',
          dataIndex: 'no'
        },
        {
          title: '描述',
          dataIndex: 'description',
          scopedSlots: { customRender: 'description' }
        },
        {
          title: '服务调用次数',
          dataIndex: 'callNo',
          sorter: true,
          needTotal: true,
          customRender: (text) => text + ' 次'
        },
        {
          title: '状态',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' },
          filters: [
				    { text: '填报中', value: 'male' },
				    { text: '待审批', value: 'female' },
				    { text: '已审批', value: 'malea' },
				    { text: '已完成', value: 'femalea' },
					]
        },
        {
          title: '更新时间',
          dataIndex: 'updatedAt',
          sorter: true
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        console.log('loadData.parameter', parameter)
        return getServiceList(Object.assign(parameter, this.queryParam))
          .then(res => {
            // debugger
            console.log('result:', res.result)
            return res.result
          })
      },
      // 选中行key值
      selectedRowKeys: [],
      // 选中的行
      selectedRows: [],
      // custom table alert & rowSelection
      pagination: {
        pageSize: 20, // 默认每页显示数量
        showSizeChanger: true, // 显示可改变每页数量
        pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
        showTotal: total => `Total ${total} items`, // 显示总数
        // eslint-disable-next-line no-return-assign
        showSizeChange: (current, pageSize) => this.pageSize = pageSize // 改变每页数量时更新显示
      },
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
      optionAlertShow: false,
      // scrollDisabled: false,
      scroll: {}
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
    // 切换标签
    callback (key) {
      console.log(key)
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
    }
  }
}
</script>
<style lang="less" scoped>
/*  .ant-card-wider-padding /deep/ .ant-card-body {
    padding: 0px !important;
  }*/
  /deep/ .ant-tabs-bar{
  	margin-bottom:0px !important;
  	padding-top:24px !important;
  }
  /deep/ .ant-tabs-nav div{
  	padding-left:24px !important;
  }
  /deep/ .ant-tabs .ant-tabs-top-content, .ant-tabs .ant-tabs-bottom-content{
  	padding:24px 32px !important;
  }
</style>
