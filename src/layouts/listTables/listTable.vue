<template>
	<div class="listtable">
		<div class="showHide">
			显示
		</div>
	  <a-table :columns="columns" :dataSource="data" :rowSelection="rowSelection" bordered>
		<span slot="customTitle"><a-icon type="smile-o" /> Name</span>
	    <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record, index">
				
	      <div :key="col">
	        <a-input
	          style="margin: -5px 0"
	          :value="text"
	          placeholder="输入序号"
	          @change="e => handleChange(e.target.value, record.key, col)"
	        />
	      </div>
	    </template>
	    <template v-for="coll in ['address']" :slot="coll" slot-scope="textl, record, index">
				
	      <div :key="coll">
	        <a-input
	          style="margin: -5px 0"
	          :value="textl"
	          placeholder="输入列宽"
	          @change="e => handleChange(e.target.value, record.key, coll)"
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
  width: '33.333%',
},
{
  title: '顺序',
  dataIndex: 'name',
  width: '33.333%',
  scopedSlots: { customRender: 'name' },
}, {
  title: '列宽(px)',
  dataIndex: 'address',
  width: '33.333%',
  scopedSlots: { customRender: 'address' },
}]

const data = [];
const name=['状态','进度','名称','编号','创建日期']
for (let i = 0; i < 5; i++) {
  data.push({
    key: i.toString(),
    name: '',
    age: name[i],
    address: '',
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
	.ant-drawer-content-wrapper .ant-table-wrapper .ant-checkbox-wrapper{
		position:relative;
		left:145px;
		top:0;
		z-index: 100;
	}
	.listtable{
		padding-bottom:48px;
		position:relative;
	}
	.listtable  .showHide{
		position:absolute;
		left:190px;
		top:19px;
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