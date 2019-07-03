<template>
	<div class="flowImg">
		<span class="begin">开始</span>
		<div style="display: inline-block;margin:0 4px 0 4px" >
			<img src="../../../assets/arrow.png">
		</div>
		<div class="process">
			<span class="processNew">新建</span>
			<div>
				<span class="name">县级经办岗</span>
				<span class="status">已完成</span>
			</div>
		</div>
		<div style="display: inline-block;margin:0 4px 0 4px" >
			<img src="../../../assets/arrow.png">
		</div>
		<div class="process">
			<span class="processNew">编辑提交</span>
			<div>
				<span class="name">县级经办岗</span>
				<span class="status">已完成</span>
			</div>
		</div>
		<div style="display: inline-block;margin:0 4px 0 4px" >
			<img src="../../../assets/arrow.png">
		</div>
		<div class="process">
			<span class="processNew">审批</span>
			<div>
				<span class="name">县级经办岗</span>
				<span class="status">已完成</span>
			</div>
		</div>
		<div style="display: inline-block;margin:0 4px 0 4px" >
			<img src="../../../assets/arrow.png">
		</div>
		<div class="process">
			<span class="processNew textBackground">上报备案</span>
			<div>
				<span class="name">县级经办岗</span>
				<span class="status textSpanColor">进行中</span>
			</div>
		</div>
		<div style="display: inline-block;margin:0 4px 0 4px" >
			<img src="../../../assets/blueArrow.png">
		</div>
		<span class="begin textBeginColor">结束</span>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" scoped>
	.flowImg{
		width:1044px;
		margin:24px auto;
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