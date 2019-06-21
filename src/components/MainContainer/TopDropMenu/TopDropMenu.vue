<template>
  <div>
    <a-dropdown placement="bottomCenter" :trigger="['click']">
      <a class="ant-dropdown-link" style="display: flex;" href="#">
        <a-icon class="trigger" type="bars" style="color:rgba(255, 255, 255, 0.65);" />
      </a>
      <div class="top-drop-menu" slot="overlay">
        <div class="drop-menu-item">
          <div class="drop-menu-row">
            <div class="drop-menu-col title">业务系统</div>
            <div class="drop-menu-col">采购计划</div>
            <div class="drop-menu-col">采购方式变更</div>
            <div class="drop-menu-col">委托单</div>
            <div class="drop-menu-col">采购文件</div>
            <div class="drop-menu-col">采购文件确认函</div>
          </div>
          <div class="drop-menu-row">
            <div class="drop-menu-col"></div>
            <div class="drop-menu-col">采购结果</div>
            <div class="drop-menu-col">合同管理</div>
            <div class="drop-menu-col">付款记录</div>
            <div class="drop-menu-col">验收评价</div>
            <div class="drop-menu-col"></div>
          </div>
        </div>
        <div class="drop-menu-item">
          <div class="drop-menu-row">
            <div class="drop-menu-col title">待办已办</div>
            <div class="drop-menu-col">待办事项</div>
            <div class="drop-menu-col">已办事项</div>
            <div class="drop-menu-col"></div>
            <div class="drop-menu-col"></div>
            <div class="drop-menu-col"></div>
          </div>
        </div>
        <div class="drop-menu-item">
          <div class="drop-menu-row">
            <div class="drop-menu-col title">数据统计</div>
            <div class="drop-menu-col">综合查询</div>
            <div class="drop-menu-col">采购大数据</div>
            <div class="drop-menu-col">废标数量</div>
            <div class="drop-menu-col"></div>
            <div class="drop-menu-col"></div>
          </div>
        </div>
        <div class="drop-menu-item">
          <div class="drop-menu-row">
            <div class="drop-menu-col title">系统相关</div>
            <div class="drop-menu-col">操作日志</div>
            <div class="drop-menu-col">登录日志</div>
            <div class="drop-menu-col">帮助设置</div>
            <div class="drop-menu-col"></div>
            <div class="drop-menu-col"></div>
          </div>
        </div>
        <div class="drop-menu-item">
          <div class="drop-menu-row">
            <div class="drop-menu-col title">个人中心</div>
            <div class="drop-menu-col">个人信息</div>
            <div class="drop-menu-col">消息</div>
            <div class="drop-menu-col">修改密码</div>
            <div class="drop-menu-col"></div>
            <div class="drop-menu-col"></div>
          </div>
        </div>
      </div>
    </a-dropdown>
  </div>
</template>
<script>
export default {
  name: 'TopDropMenu'
  // props: {
  //   menus: {
  //     type: Array,
  //     required: true
  //   }
  // },
  // data () {
  //   return {
  //     menus: [
  //       {}
  //     ]
  //   }
  // },
  // mounted () {}
}
</script>

<style lang="less" scoped>
.top-drop-menu {
  position: relative;
  display: flex;
  width: 1000px;
  flex-direction: column;
  background:#fff;
  border: 1px solid #f4f4f4;
  padding: 0 20px;
  .drop-menu-item {
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    flex-direction: column;
    padding: 20px;
    .drop-menu-row{
      display: flex;
      padding: 10px 0;
      .drop-menu-col {
        flex: 1;
        font-size: 18px;
      }
    }
  }
}
.title {
  font-weight: bold;
}
</style>
