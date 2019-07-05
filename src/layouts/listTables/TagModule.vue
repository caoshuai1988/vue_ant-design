<template>
  <div class="tagModule">
    <template v-for="(tag, index) in tags" >
      <div class="tagBox" :key="index">
        <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
          <a-tag
            :key="tag"
            :closable="index !== 0"
            :afterClose="() => handleTagClose(tag)"
          >{{ `${tag.slice(0, 20)}...` }}</a-tag>
        </a-tooltip>
        <a-tag
          v-else
          @click="toTag(index)"
          :class="{ active:index == num}"
          :key="tag"
          :closable="index !== 0"
          :afterClose="() => handleTagClose(tag)"
        >{{ tag }}
        </a-tag>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: ['默认模板', '自定义模板1', '自定义模板2', '自定义模板3', '自定义模板4', '自定义模板5', '自定义模板6'],
      num: 0
    }
  },
  methods: {
    toTag (index) {
      this.num = index
    }
  }
}
</script>

<style lang="less" scoped>
	.tagBox{
		display:inline-block;
	}
	.active{
		color:#40a9ff !important;
		border-color:#40a9ff !important;
	}
  /*.tagBox .ant-tag:nth-of-type(1){
		color:#40a9ff !important;
		border-color:#40a9ff !important;
	}*/
	.tagModule{
		margin-bottom:-16px;
	}
	.tagModule .ant-tag{
		padding:10px 10px 10px 10px !important;
		line-height:100% !important;
		text-align: center !important;
		height:34px !important;
		float:left;
		margin-bottom:16px;
	}
</style>
