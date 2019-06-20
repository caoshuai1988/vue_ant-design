
export default {
  namespaced: true,
  state: {
    dataList: {
      currentTab: 1,
      bb: 'mapForm1'
      // which_to_show: [
      //   'mapForm1',
      //   'mapForm2',
      //   'mapForm3',
      //   'mapForm4'
      // ]
    }
  },
  mutations: {
    SET_DATALIST (state, data) {
      state.currentTab = data
      state.bb = `mapForm${data}`
      console.log('state.currentTab', state.currentTab)
    }
    // SET_LIST_TOTAL (state, n) {
    //   state.listTotal = n
    // },
    // SHOW_SHOPINGINFO (state, data) {
    //   state.shippingInfo.visible = true
    //   state.shippingInfo.data = data
    // }

  },
  actions: {
    // async index ({ commit, dispatch }, data) {
    //   const {
    //     data: { items, total }
    //   } = await applicationRecordListApi({
    //     pageSize: 20,
    //     sortBy: 'applyTime',
    //     orderBy: -1,
    //     ...data
    //   })
    //   commit('SET_DATALIST', items)
    //   commit('SET_LIST_TOTAL', total)
    // }

  }
}
