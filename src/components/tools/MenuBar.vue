<template>
  <div class="logo">
    <router-link :to="{name:'dashboard'}">
      <div>
        <a-icon class="trigger no-padding" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggleParent"/>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    toggleParent () {
      this.$emit('toggle')
    }
  }
}
</script>
