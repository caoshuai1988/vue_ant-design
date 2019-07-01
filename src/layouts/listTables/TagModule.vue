<template>
  <div class="tagModule">
    <template v-for="(tag, index) in tags">
      <div class="tagBox">
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
      tags: ['默认模板', '自定义模板', '自定义模板2'],
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
		display: inline-block;
	}
	.active{
		color:#40a9ff !important;
		border-color:#40a9ff !important;
	}
  /*.tagBox .ant-tag:nth-of-type(1){
		color:#40a9ff !important;
		border-color:#40a9ff !important;
	}*/
	.tagModule .ant-tag{
		padding:10px 10px 10px 10px !important;
		line-height:100% !important;
		text-align: center !important;
		height:34px !important;
	}
</style>
