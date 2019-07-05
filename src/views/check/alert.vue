<!--
 * @Author: 张志勇
 * @Date: 2019-06-14 17:46:50
 * @LastEditTime: 2019-07-04 15:31:33
 * @Description:查看审批弹窗入口
 -->
<template>
  <div>
    <a-button type="primary" @click="$refs.createModal.add()">查看</a-button>
    <AddForm ref="createModal" @monitor="monitor"></AddForm>
  </div>
</template>

<script>
import AddForm from './AddBtnForm.vue'
export default {
  components: {
    AddForm
  },
  data () {
    return {
    }
  },
  methods: {
    monitor (val) {

    }
  }

}
</script>
