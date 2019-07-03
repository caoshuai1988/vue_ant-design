<template>
  <div class="listtable">
    <a-table :columns="columns" :dataSource="data" bordered>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>

      <template v-for="col1 in ['hide']" :slot="col1">

        <div :key="col1">
          <a-switch defaultChecked checkedChildren="是" unCheckedChildren="否"/>
        </div>
      </template>
      <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record,">

        <div :key="col">
          <a-input
            style="margin: -5px 0"
            :value="text"
            placeholder="输入序号"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
        </div>
      </template>
      <template v-for="coll in ['address']" :slot="coll" slot-scope="textl, record,">

        <div :key="coll">
          <a-input
            style="margin: -5px 0"
            :value="textl"
            placeholder="输入列宽"
            @change="e => handleChange(e.target.value, record.key, coll)"
            :disabled="isdisabled"
          />
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import { mapState} from 'vuex'
const columns = [{
  title: '列名',
  dataIndex: 'age',
  width: '25%'
},
{
  title: '显示',
  dataIndex: 'hide',
  width: '25%',
  scopedSlots: { customRender: 'hide' }
},
{
  title: '顺序',
  dataIndex: 'name',
  width: '25%',
  scopedSlots: { customRender: 'name' }
}, {
  title: '列宽(px)',
  dataIndex: 'address',
  width: '25%',
  scopedSlots: { customRender: 'address' }
}]

const data = []
const name = ['状态', '进度', '名称', '编号', '创建日期']
for (let i = 0; i < 5; i++) {
  data.push({
    key: i.toString(),
    name: '',
    age: name[i],
    address: ''
  })
}
export default {
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      data,
      columns,
      hideOnSinglePage: false,
      isdisabled:true,
      val:this.value
    }
  },
  created(){
  	this.isdisabled=true;
  },
  computed: {
		...mapState([
		  'value'
		])
//			value() {
//	      return this.$store.state.value;
//	   }
//		isdisabledFn(){
//			console.log(this.val)
//			if(this.val==0){
//				return this.isdisabled=false;
//			}else{
//				return this.isdisabled=true;
//			}
//		}
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
  watch: {
			'value'(num,value) {
				immediate: true,
				console.log(num);
				console.log(value)
				if(num!=0){
					this.isdisabled=false;
				}else{
					this.isdisabled=true;
				}
			}

		}
}
</script>
<style>
.listtable .ant-table-bordered .ant-table-thead > tr > th, .ant-table-bordered .ant-table-tbody > tr > td{
	border-right:0px !important;

}
.listtable .ant-table-bordered .ant-table-header > table, .ant-table-bordered .ant-table-body > table, .ant-table-bordered .ant-table-fixed-left table, .ant-table-bordered .ant-table-fixed-right table{
	border-left:0px !important;
}
.listtable .editable-row-operations a {
  margin-right: 8px;
}
.listtable .ant-pagination{
	display:none;
}
.listtable .ant-table-pagination{
	display:none;
}
</style>
