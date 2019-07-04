<template>
  <div class="user-wrapper">
    <div class="content-box">
      <span class="action" @click="bigScale">
         <a-tooltip placement="bottom">
        <template slot="title">
          增加倍数：D<br/>
          缩小倍数：A<br/>
          放大可视区：W<br/>
          缩小可视区：S <br/>
          关闭放大镜：右键 Esc
        </template>
         <a-icon type="zoom-in"/>
      </a-tooltip>
      </span>
      <a href="/help/children/first" target="_blank">
        <span class="action">
          <a-icon type="question-circle-o"></a-icon>
        </span>
      </a>
      <notice-icon class="action"/>
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" size="small" :src="avatar()"/>
          <span>{{ nickname() }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <router-link :to="{ name: 'center' }">
              <a-icon type="user"/>
              <span>个人中心</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <router-link :to="{ name: 'settings' }">
              <a-icon type="setting"/>
              <span>账户设置</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2" disabled>
            <a-icon type="setting"/>
            <span>测试示例</span>
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item key="6">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <span class="action" @click="openDrawer">
        <a-icon type="setting"/>
      </span>
    </div>
  </div>
</template>

<script>
  import NoticeIcon from '@/components/NoticeIcon'
  import { mapActions, mapGetters } from 'vuex'
  import $ from 'jquery'
  import '@/utils/bup'

  export default {
    name: 'UserMenu',
    components: {
      NoticeIcon
    },
    methods: {
      ...mapActions(['Logout', 'visible']),
      ...mapGetters(['nickname', 'avatar']),
      handleLogout() {
        const that = this

        this.$confirm({
          title: '提示',
          content: '真的要注销登录吗 ?',
          onOk() {
            return that.Logout({}).then(() => {
              // debugger
              window.location.reload()
            }).catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
          },
          onCancel() {
          }
        })
      },
      openDrawer() {
        this.$store.dispatch('ToggleSetDrawer', true)
      },
      bigScale() {
        setTimeout(function() {
          $('#app').BUP(1.5, 'App')
        }, 300)
      }
    }
  }
</script>
