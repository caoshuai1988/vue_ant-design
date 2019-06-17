<template>
  <a-card :bordered="false">
    <div class="content">
      <keep-alive>
        <component :is="stepForm.data.bb"></component>
        <!-- <component :is="which_to_show[stepForm.data.currentTab]"></component>
        <map-form1 v-if="stepForm.data.currentTab ===1" />
        <map-form2 v-if="stepForm.data.currentTab ===2" /> -->
      </keep-alive>
      <!-- <template v-if="stepForm.data.currentTab">
        <map-form1 />
      </template>
      <template>
        <map-form2 />
      </template> -->
      <!-- <map-form2 v-show="stepForm.data.currentTab ===1" /> -->
    </div>
  </a-card>
</template>

<script>
import { mapGetters } from 'vuex'

import mapForm1 from './MapForm1'
import mapForm2 from './MapForm2'

export default {
  name: 'AdvancedStepForm',
  components: {
    mapForm1,
    mapForm2
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
      aa: 'mapForm1'
    }
  },
  computed: {
    ...mapGetters(['stepForm'])
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
