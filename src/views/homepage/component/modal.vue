<style lang="less" scoped>

.ant-form-horizontal .ant-form-item {
  margin-bottom: 16px;
}
/deep/ .ant-form-horizontal .ant-form-item > .ant-form-item-label{
  line-height: 24px;
}
/deep/ .ant-form-horizontal .ant-form-item .ant-form-item-control-wrapper .ant-form-item-control{
  line-height: 24px;

}
</style>

<template>
  <a-modal
    title="穿梭框"
    :width="720"
    :visible="visible"
    :confirmLoading="confirmLoading"
    :footer="null"
    okText="保存"
    @ok="handleSubmit"
    @cancel="handleCancel"
  >
    <a-spin :spinning="confirmLoading">
      <a-transfer
        :dataSource="mockData"
        :titles="['未选功能', '已选功能']"
        :targetKeys="targetKeys"
        :selectedKeys="selectedKeys"
        @change="handleChange"
        @selectChange="handleSelectChange"
        @scroll="handleScroll"
        :render="item=>item.title"
        :disabled="disabled"
      />
      <!-- <a-switch
        unCheckedChildren="disabled"
        checkedChildren="disabled"
        :checked="disabled"
        @change="handleDisable"
        style="margin-top: 16px"
      /> -->
    </a-spin>
  </a-modal>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const mockData = []
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1
      })
    }

    const oriTargetKeys = mockData
      .filter(item => +item.key % 3 > 1)
      .map(item => item.key)
    return {
      mockData,
      targetKeys: oriTargetKeys,
      selectedKeys: ['1', '4'],
      disabled: false,
      confirmLoading: false
    }
  },
  methods: {
    handleSubmit () {
      const {
        form: { validateFields }
      } = this
      this.confirmLoading = true
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          setTimeout(() => {
            this.visible = false
            this.confirmLoading = false
            this.$emit('monitor', values)
          }, 1500)
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleChange (nextTargetKeys, direction, moveKeys) {
      this.targetKeys = nextTargetKeys

      console.log('targetKeys: ', nextTargetKeys)
      console.log('direction: ', direction)
      console.log('moveKeys: ', moveKeys)
    },
    handleSelectChange (sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys]

      console.log('sourceSelectedKeys: ', sourceSelectedKeys)
      console.log('targetSelectedKeys: ', targetSelectedKeys)
    },
    handleScroll (direction, e) {
      console.log('direction:', direction)
      console.log('target:', e.target)
    },
    handleDisable (disabled) {
      this.disabled = disabled
    },
    handleCancel () {
      this.$emit('handelClose', false)
    }
  }
}
</script>
