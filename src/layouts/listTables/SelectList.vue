<template>
  <div class="listjc">
    <a-form-item
      label="列表展示"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px">
        <a-select-option value="0">流式</a-select-option>
        <a-select-option value="1">流式1</a-select-option>
        <a-select-option value="2">流式2</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      label="默认排序列"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px">
        <a-select-option value="0">创建日期</a-select-option>
        <a-select-option value="1">创建日期1</a-select-option>
        <a-select-option value="2">创建日期2</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
      label="排序方式"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px">
        <a-select-option value="0">倒序</a-select-option>
        <a-select-option value="1">倒序1</a-select-option>
        <a-select-option value="2">倒序2</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item
    	style="margin-bottom:8px"
      label="默认行数"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 12 }">
      <a-select placeholder="请选择" default-value="0" style="width:300px">
        <a-select-option value="0">40</a-select-option>
        <a-select-option value="1">401</a-select-option>
        <a-select-option value="2">402</a-select-option>
      </a-select>
    </a-form-item>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

</style>
