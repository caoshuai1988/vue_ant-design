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
  name: 'AdvancedStepFormCopy',
  components: {
    mapForm0,
    mapForm1,
    mapForm2,
    mapForm3
  },
  data () {
    return {

    }
  },
  computed: {
    curentIndex () {
      return this.$store.state.dataOne
    }

  }
}
</script>

<style lang="less" scoped>
  .steps {
    max-width: 750px;
    margin: 16px auto;
  }
</style>
