<template>
  <div>
    <!-- 三列 -->
    <a-card class="card" style="font-size: 26px" :bordered="false" >
      <span slot="title" :class="{abc : big == 'large'}">组件表题</span>
      <span slot="extra" class="foldStyle" @click="fold(true)">
        <a-icon type="up" v-if="iconToggle" />
        <a-icon type="down" v-else />
      </span>

    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
