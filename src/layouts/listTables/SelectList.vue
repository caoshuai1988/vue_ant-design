<template>
  <div class="listjc ant-form-horizontal">
    <a-form-item
      label="列表展示"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px" @change="handleChange">
        <a-select-option value="0">流式</a-select-option>
        <a-select-option value="1">固宽</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      label="默认排序列"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px">
        <a-select-option value="0">创建日期</a-select-option>
        <a-select-option value="1">编号</a-select-option>
        <a-select-option value="2">序号</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      label="排序方式"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px">
        <a-select-option value="0">倒序</a-select-option>
        <a-select-option value="1">正序</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
    	style="margin-bottom:8px"
      label="默认行数"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px">
        <a-select-option value="0">25</a-select-option>
        <a-select-option value="1">50</a-select-option>
        <a-select-option value="2">100</a-select-option>
        <a-select-option value="3">200</a-select-option>
      </a-select>
    </a-form-item>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods:{
//	...mapActions([
//	    	'selectVal'
//	  ]),
  	handleChange(val){
			//this.selectVal(val)
			this.$store.dispatch('selectVal',val);
  	}
  }
}
</script>

<style lang="less" scoped>

</style>
