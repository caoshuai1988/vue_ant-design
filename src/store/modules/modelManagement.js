export default {
    namespaced: true,
    state: {
        count:''
    },
    mutations: {
	    increment (state,type) {
	    	console.log(type)
	      // 变更状态
	      state.count=type;
	    }
  	}
}
