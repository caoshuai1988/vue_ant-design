<template>
  <a-card :bordered="false" :body-style="{ padding:0}">
    <div class="content">
      <template v-if="curentIndex === 0">
        <map-form0 />
      </template>
      <template v-else-if="curentIndex === 1">
        <map-form1 />
      </template>
      <template v-else-if="curentIndex === 2">
        <map-form2 />
      </template>
      <template v-else>
        <map-form3/>
      </template>
    </div>
  </a-card>
</template>

<script>
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
    // 对当前tab为哪个组件进行监听 从vuex store 中获取
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
