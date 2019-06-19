<template>
      
<div class="tagModule">
	<!--<a-button-group style="margin-right: 4px;">
        <a-button style="margin-right:12px;">默认模板</a-button>
        <a-button style="margin-right:12px;">自定义模板1</a-button>
        <a-button style="margin-right:12px;">自定义模板2</a-button>
      </a-button-group>-->
	 <template v-for="(tag, index) in tags">
		<a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
		  <a-tag
		  	
		    :key="tag"
		    :closable="index !== 0"
		    :afterClose="() => handleTagClose(tag)"
		  >{{ `${tag.slice(0, 20)}...` }}</a-tag>
		</a-tooltip>
		<a-tag
			  v-else
			  :key="tag"
			  :closable="index !== 0"
			  :afterClose="() => handleTagClose(tag)"
			>{{ tag }}</a-tag>
	</template>
</div>
</template>

<script>
	export default {
		data() {
	      return {
	      	tags: ['默认模板', '自定义模板', '自定义模板2']
	      }
	    },
	}
</script>

<style>
	.tagModule{
		padding-bottom:48px;
		margin-top:-10px;
	}
	.tagModule .ant-tag:nth-child(1){
		color:#40a9ff;border-color:#40a9ff
	}
	.tagModule .ant-tag{
		padding:10px 10px 10px 10px !important;
		line-height:100% !important;
		text-align: center !important;
		height:100% !important;
	}
</style>