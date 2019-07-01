<template>
  <div>
    <template>
      <div>
        <a-button type="primary" @click="$refs.createModal.add()">查看</a-button>
      </div>
    </template>
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
