<template>
  <div class="user-wrapper">
    <div class="content-box">
      <span class="antd-pro-components-global-header-index-action antd-pro-components-global-header-index-search antd-pro-components-header-search-index-headerSearch">

      </span>
      <a href="https://pro.loacg.com/docs/getting-started" target="_blank">
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
          <a-menu-item key="3">
            <router-link :to="{ name: 'login2' }">
              <a-icon type="logout"/>
              <span>登录模板1</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4">
            <router-link :to="{ name: 'login3' }">
              <a-icon type="logout"/>
              <span>登录模板2</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="5">
            <router-link :to="{ name: 'login4' }">
              <a-icon type="logout"/>
              <span>登录模板3</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="6">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <span class="action" @click="openDrawer">
        <a-icon type="setting" />
      </span>
    </div>
  </div>
</template>

<script>
import NoticeIcon from '@/components/NoticeIcon'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    NoticeIcon
  },
  methods: {
    ...mapActions(['Logout', 'visible']),
    ...mapGetters(['nickname', 'avatar']),
    handleLogout () {
      const that = this

      this.$confirm({
        title: '提示',
        content: '真的要注销登录吗 ?',
        onOk () {
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
        onCancel () {
        }
      })
    },
    openDrawer () {
      console.log(this.$router)
      this.$store.dispatch('ToggleSetDrawer', true)
      // this.$router.push({name:'login2'})
    }
  }
}
</script>
