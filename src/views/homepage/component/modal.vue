<!--
 * @Author: 张志勇
 * @Date: 2019-07-01 17:58:19
 * @LastEditTime: 2019-07-04 11:21:16
 * @Description:穿梭框样式的实现 可进行常用功能的设置
 -->

<template>
  <a-modal
    title="常用功能设置"
    :width="720"
    :visible="visible"
    :confirmLoading="confirmLoading"
    okText="保存"
    @ok="handleSubmit"
    @cancel="handleCancel">
    <a-spin :spinning="confirmLoading">
      <a-transfer
        :dataSource="mockData"
        :titles="['已选功能', '未选功能']"
        :targetKeys="targetKeys"
        :selectedKeys="selectedKeys"
        @change="handleChange"
        @selectChange="handleSelectChange"
        @scroll="handleScroll"
        :render="item=>item.title"
        :disabled="disabled"/>
      <!-- 是否禁止进行选择的按钮 -->
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
    const dataList = [
      '查看备案',
      '地理信息',
      '实施计划',
      '实施计划1',
      '实施计划2',
      '项目规划',
      '查看审批',
      '查看审批1',
      '查看审批2',
      '组织机构管理',
      '组织机构管理1',
      '组织机构管理2',
      '组织机构管理3',
      '登录日志',
      '关联项目规划',
      '申请批复',
      '申请批复1',
      '申请批复2',
      '申请批复3',
      '新建编辑' ]
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `${dataList[i]}`,
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
  /deep/.ant-transfer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/.ant-transfer-list{
    width: 200px;
    height: 320px;
  }
</style>
