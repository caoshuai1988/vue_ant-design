<template>
  <div>
    <template>
      <div>
        <a-button type="primary" @click="$refs.createModal.add()">新增</a-button>
      </div>
    </template>
    <AddForm ref="createModal" @monitor="monitor"></AddForm>

  </div>
</template>

<script>
import AddForm from './addForm.vue'
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
