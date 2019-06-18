<template>
	<div class="listtable">
		<div class="showHide">
			显示/隐藏
		</div>
	  <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection" bordered>
		
	    <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record, index">
				
	      <div :key="col">
	        <a-input
	          style="margin: -5px 0"
	          :value="text"
	          @change="e => handleChange(e.target.value, record.key, col)"
	        />
	      </div>
	    </template>
	  </a-table>
  </div>
</template>
<script>
const columns = [{
  title: '列名',
  dataIndex: 'age',
  width: '25%',
},
{
  title: '顺序',
  dataIndex: 'name',
  width: '25%',
  scopedSlots: { customRender: 'name' },
}, {
  title: '列宽(px)',
  dataIndex: 'address',
  width: '25%',
  scopedSlots: { customRender: 'address' },
}]

const data = []
for (let i = 0; i < 5; i++) {
  data.push({
    key: i.toString(),
    name: `我是顺序 ${i}`,
    age: `我是列名. ${i}`,
    address: `我是列宽. ${i}`,
  })
}
export default {
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      columns,
    }
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
      }
    }
  },
  methods: {
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    }
  },
}
</script>
<style>
	.listtable{
		padding-bottom:24px;
		position:relative;
	}
	.listtable  .showHide{
		position:absolute;
		left:87px;
		top:18px;
		z-index: 100;
		font-size:13px;
		color:rgba(0, 0, 0, 0.85)
	}
.ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td{
	border-right:0px !important;

}
.ant-table-bordered .ant-table-header > table, .ant-table-bordered .ant-table-body > table, .ant-table-bordered .ant-table-fixed-left table, .ant-table-bordered .ant-table-fixed-right table{
	border-left:0px !important;
}
.editable-row-operations a {
  margin-right: 8px;
}
.ant-pagination{
	display:none;
}
.ant-table-pagination{
	display:none;
}
</style>