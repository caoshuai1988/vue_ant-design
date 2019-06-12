<template>
  <div>
    <baseFlowHead></baseFlowHead>
    <baseFormContent></baseFormContent>
  </div>
</template>

<script>
import baseFlowHead from './BaseFlowHead'
import baseFormContent from './BaseFormContent'
export default {
  name: 'BaseForm',
  components: {
    baseFlowHead,
    baseFormContent
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
