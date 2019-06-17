<template>
  <a-card :bordered="false">
    <div class="content">
      <map-form1 v-if="currentTab === 0" />
      <map-form2 v-if="currentTab === 1" />
    </div>
  </a-card>
</template>

<script>
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
      description: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。',
      currentTab: 1,

      // form
      form: null
    }
  },
  methods: {

    // handler
    nextStep () {
      if (this.currentTab < 2) {
        this.currentTab += 1
      }
    },
    prevStep () {
      if (this.currentTab > 0) {
        this.currentTab -= 1
      }
    },
    finish () {
      this.currentTab = 0
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
