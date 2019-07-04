<!--
 * @Author: lxh
 * @Date: 2019-07-03 16:01:38
 * @LastEditTime: 2019-07-04 16:04:34
 * @Description: 基础表单默认头部
 -->
<template>
  <a-card :bordered="false" v-if="flowFlag" :body-style="{ padding:'24px 32px'}" style="margin-bottom:24px;">
    <!-- <a-card :bordered="false" v-if="flowFlag" :body-style="{ padding:'50px 24px'}" style="margin-bottom:24px;min-width:1150px"> -->
    <span slot="title">
      <span>流程</span>
      <a style="font-size:14px;margin-left:8px">详情</a>
    </span>
    <span slot="extra" @click="closeDiv" style="cursor: pointer; font-size: 16px;color:#a3a3a3;"><a-icon type="close" /></span>
    <div class="flowImg-wrap">
      <div class="flowImg">
        <span class="begin">开始</span>
        <div style="display: inline-block;margin:0 4px 0 4px" >
          <img src="../../assets/arrow.png">
        </div>
        <div class="process">
          <span class="processNew">新建</span>
          <div>
            <span class="name">县级经办岗</span>
            <span class="status">已完成</span>
          </div>
        </div>
        <div style="display: inline-block;margin:0 4px 0 4px" >
          <img src="../../assets/arrow.png">
        </div>
        <div class="process">
          <span class="processNew">编辑提交</span>
          <div>
            <span class="name">县级经办岗</span>
            <span class="status">已完成</span>
          </div>
        </div>
        <div style="display: inline-block;margin:0 4px 0 4px" >
          <img src="../../assets/arrow.png">
        </div>
        <div class="process">
          <span class="processNew">审批</span>
          <div>
            <span class="name">县级经办岗</span>
            <span class="status">已完成</span>
          </div>
        </div>
        <div style="display: inline-block;margin:0 4px 0 4px" >
          <img src="../../assets/arrow.png">
        </div>
        <div class="process">
          <span class="processNew textBackground">上报备案</span>
          <div>
            <span class="name">县级经办岗</span>
            <span class="status textSpanColor">进行中</span>
          </div>
        </div>
        <div style="display: inline-block;margin:0 4px 0 4px" >
          <img src="../../assets/blueArrow.png">
        </div>
        <span class="begin textBeginColor">结束</span>
      </div>
    </div>
  </a-card>
</template>

<script>
export default {
  data () {
    return {
      flowFlag: true
    }
  },
  methods: {
    closeDiv () { // hide 流程图
      this.flowFlag = false
    }
  }
}
</script>

<style lang="less" scoped>
// 流程图 qss
.flowImg-wrap{
  padding: 32px 0;
  min-width: 60%;
  overflow-x: auto;
  &::-webkit-scrollbar{
    width: 6px;
    height: 6px;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #fff;
  }
  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb{
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(0,0,0,0.4);
      background-color: #9B9B9B;
  }
}
.flowImg{
    width:1050px;
    text-align: center;
    margin: auto;
    padding-bottom: 24px;
		.begin{
			font-size:16px;
			background: #00a854;
			width:88px;
			line-height:32px;
			display: inline-block;
			text-align: center;
			color:white;
			border-radius: 20px;
			margin-top: -40px;

		}
		.textBeginColor{
			background:#94c4ff;
		}
		.process{
			font-size:14px;
			color:white;
			width:120px;
			display: inline-block;
			border-radius: 4px;
			border:1px solid #e8e8e8;
			overflow:hidden;
			margin-bottom:-30px;
			.processNew{
				background:#00a854;
				display: inline-block;
				width:120px;
				text-align: center;
				line-height: 32px;
			}
			.textBackground{
				background:#1890ff
			}
			div{
				background:white;
				text-align: center;
				font-size:12px;
				padding:3px 0 3px 0;

				.name{
					color:#000000;
					display: block;
				}
				.status{
					color:#00a854;
				}
				.textSpanColor{
					color:#1890ff
				}
			}
		}
	}
</style>
