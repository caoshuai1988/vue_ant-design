const getters = {
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  nickname: state => state.user.name,
  welcome: state => state.user.welcome,
  roles: state => state.user.roles,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
  multiTab: state => state.app.multiTab,
  layoutMode: state => state.app.layout, // cs
  // form 表单相关的的数据
  stepForm: state => {
    return {
      // 高级带分布表单的tabs数据
      data: state.stepform.dataList
    }
  }
}

export default getters
