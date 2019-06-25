<template>
  <a-card :bordered="false" :body-style="{ padding:0}">
    <div class="content">
      <!-- <keep-alive>
        <component :is="aaa"></component>
        <map-form1 v-if="stepForm.data.currentTab ===1" />
        <map-form2 v-if="stepForm.data.currentTab ===2" />
      </keep-alive> -->
      <!-- // 4 -->
      <template v-if="curentIndex === 0">
        <map-form0 />
      </template>
      <template v-else-if="curentIndex === 1">
        <map-form1 />
      </template>
      <template v-else-if="curentIndex === 2">
        <map-form2 />
      </template>
      <!-- 3 -->
      <template v-else>
        <map-form3/>
      </template>
      <!-- <map-form2 v-show="stepForm.data.currentTab ===1" /> -->
    </div>
  </a-card>
</template>

<script>
// import { mapState } from 'vuex'

import mapForm0 from './MapForm0'
import mapForm1 from './MapForm1'
import mapForm2 from './MapForm2'
import mapForm3 from './MapForm3'

export default {
  name: 'AdvancedStepForm',
  components: {
    mapForm0,
    mapForm1,
    mapForm2,
    mapForm3
  },
  data () {
    return {
      // description: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。',
      // currentTab: 1,
      // form
      // which_to_show: [
      //   'mapForm1',
      //   'mapForm2',
      //   'mapForm3',
      //   'mapForm4'
      // ],
    }
  },
  computed: {
    curentIndex () {
      return this.$store.state.dataOne
    }
    // ...mapGetters(['stepForm']),
    // which_to_show () {
    //   return mapForm1
    // }

  }
}
</script>

<style lang="less" scoped>
  .steps {
    max-width: 750px;
    margin: 16px auto;
  }
</style>
