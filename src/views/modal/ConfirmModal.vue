<template>
  <div class="modalContainer">
    <div style="margin:50px auto; text-align:center">
      <a-button
        type="primary"
        @click="showModal"
      >打开弹出层对话框</a-button>
      <a-modal
        title="这是一个标题"
        :visible="visible"
        @ok="handleOk"
        :confirmLoading="confirmLoading"
        @cancel="handleCancel"
      >
        <p>{{ ModalText }}</p>
      </a-modal>
      <div role="document" class="ant-modal" style="width: 520px;">
        <div tabindex="0" style="width: 0px; height: 0px; overflow: hidden;">
          sentinelStart
        </div>
        <div class="ant-modal-content">
          <button aria-label="Close" class="ant-modal-close"><span class="ant-modal-close-x">
            <i class="ant-modal-close-icon anticon anticon-close">
              <svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor">
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></i></span></button>
          <div class="ant-modal-header">
            <div id="rcDialogTitle0" class="ant-modal-title">这是一个标题</div>
          </div>
          <div class="ant-modal-body"><p data-v-12a1e7ae="">此处是一条通知提醒，衬衫的价格是九磅十五便士，所以你选择B选项。衬衫的价格是九磅十五便士，所以你选择B选项。</p></div>
          <div class="ant-modal-footer"><div><button type="button" class="ant-btn ant-btn-default"><span>取 消</span></button><button type="button" class="ant-btn ant-btn-primary"><span>确 定</span></button></div></div></div><div tabindex="0" style="width: 0px; height: 0px; overflow: hidden;">sentinelEnd</div>
      </div>
    </div>

    <div
      role="document"
      class="ant-modal ant-modal-confirm ant-modal-confirm-warning ant-modal-warning"
      style="width: 416px;"
    >
      <div class="ant-modal-content">
        <div class="ant-modal-body">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i class="anticon anticon-exclamation-circle">
                <svg
                  viewBox="64 64 896 896"
                  data-icon="exclamation-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
                </svg></i>
              <span class="ant-modal-confirm-title">这是进行一项操作是必须了解的重要信息</span>
              <div class="ant-modal-confirm-content">用户须知的信息，你还要继续吗？</div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                type="button"
                class="ant-btn ant-btn-default"
              ><span>取 消</span>
              </button><button
                type="button"
                class="ant-btn ant-btn-primary"
              ><span>确 定</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      role="document"
      class="ant-modal ant-modal-confirm ant-modal-confirm-success ant-modal-success"
      style="width: 416px;"
    >
      <div class="ant-modal-content">
        <div class="ant-modal-body">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i class="anticon anticon-check-circle">
                <svg
                  viewBox="64 64 896 896"
                  data-icon="exclamation-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
                </svg></i>
              <span class="ant-modal-confirm-title">这是一条成功通知信息</span>
              <div class="ant-modal-confirm-content">一些附加信息一些附加信息一些附加信息</div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                type="button"
                class="ant-btn ant-btn-primary"
              ><span>确 定</span></button></div>
          </div>
        </div>
      </div>
    </div>

    <div
      role="document"
      class="ant-modal ant-modal-confirm ant-modal-confirm-info ant-modal-info"
      style="width: 416px;"
    >
      <div class="ant-modal-content">
        <div class="ant-modal-body">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i class="anticon anticon-check-circle">
                <svg
                  viewBox="64 64 896 896"
                  data-icon="exclamation-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
                </svg>
              </i>
              <span class="ant-modal-confirm-title">这是一条通知信息</span>
              <div class="ant-modal-confirm-content">一些附加信息一些附加信息一些附加信息</div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                type="button"
                class="ant-btn ant-btn-primary"
              ><span>知道了</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      role="document"
      class="ant-modal ant-modal-confirm ant-modal-confirm-error ant-modal-error"
      style="width: 416px;"
    >
      <div class="ant-modal-content">
        <div class="ant-modal-body">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i class="anticon anticon-check-circle">
                <svg
                  viewBox="64 64 896 896"
                  data-icon="exclamation-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                  <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
                </svg>
              </i>
              <span class="ant-modal-confirm-title">这是一条错误信息</span>
              <div class="ant-modal-confirm-content">一些附加信息一些附加信息一些附加信息</div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                type="button"
                class="ant-btn ant-btn-default"
              ><span>取 消</span>
              </button><button
                type="button"
                class="ant-btn ant-btn-primary"
              ><span>继续</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  data () {
    return {
      ModalText:
        '此处是一条通知提醒，衬衫的价格是九磅十五便士，所以你选择B选项。衬衫的价格是九磅十五便士，所以你选择B选项。',
      visible: false,
      confirmLoading: false
    }
  },
  mounted: function () {
    // this.showConfirm1()
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleOk (e) {
      this.ModalText = '此弹出层将在两秒后关闭'
      this.confirmLoading = true
      setTimeout(() => {
        this.visible = false
        this.confirmLoading = false
        this.ModalText =
          '此处是一条通知提醒，衬衫的价格是九磅十五便士，所以你选择B选项。衬衫的价格是九磅十五便士，所以你选择B选项。'
      }, 2000)
    },
    handleCancel (e) {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.modalContainer /deep/ .ant-modal {
  top: 0;
}
</style>
