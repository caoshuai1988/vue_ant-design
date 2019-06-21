<template>
  <div class="notiification">
    <div style="text-align:center; ">
      <a-select
        v-model="selected"
        :style="{ width: '120px', marginRight: '10px' }"
      >
        <a-select-option
          v-for="val in options"
          :key="val"
          :value="val"
        >{{ val }}</a-select-option>
      </a-select>
      <a-button
        type="primary"
        @click="openNotification"
      >开启通知框</a-button>
      <div style="margin-top:50px">
        <a-button type="primary" @click="openNotificationButton">自定义关闭按钮</a-button>
      </div>
      <div style="margin-top:50px">
        <a-button type="primary" @click="openNotificationText">自定义关闭文字</a-button>
      </div>
    </div>
    <div
      class="ant-notification ant-notification-topRight"
      style="right: 0px; top: 84px; bottom: auto;"
    >
      <div class="ant-notification-notice ant-notification-notice-closable">
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-with-icon">
            <i class="ant-notification-notice-icon ant-notification-notice-icon-success anticon anticon-check-circle-o">
              <svg
                viewBox="64 64 896 896"
                data-icon="check-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                class=""
              >
                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              </svg></i>
            <div class="ant-notification-notice-message">XXX已发布完成</div>
            <div class="ant-notification-notice-description">后台进行中的任务，进度完成。</div>
          </div>
        </div>
        <a
          tabindex="0"
          class="ant-notification-notice-close"
        >
          <i class="ant-notification-close-icon anticon anticon-close">
            <svg
              viewBox="64 64 896 896"
              data-icon="close"
              width="1em"
              height="1em"
              fill="currentColor">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </i>
        </a>
      </div>

      <div class="ant-notification-notice ant-notification-notice-closable">
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-with-icon">
            <i class="ant-notification-notice-icon ant-notification-notice-icon-info anticon anticon-info-circle-o">
              <svg
                viewBox="64 64 896 896"
                data-icon="info-circle"
                width="1em"
                height="1em"
                fill="currentColor">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </i>
            <div class="ant-notification-notice-message">请更新系统</div>
            <div class="ant-notification-notice-description">如果描述超过60字，请延长展示时间，一般人的阅读速度为8-10字每秒</div>
          </div>
        </div>
        <a tabindex="0" class="ant-notification-notice-close">
          <i class="ant-notification-close-icon anticon anticon-close">
            <svg
              viewBox="64 64 896 896"
              data-icon="close"
              width="1em"
              height="1em"
              fill="currentColor">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </i>
        </a>
      </div>

      <div class="ant-notification-notice ant-notification-notice-closable">
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-with-icon">
            <i class="ant-notification-notice-icon ant-notification-notice-icon-warning anticon anticon-exclamation-circle-o">
              <svg
                viewBox="64 64 896 896"
                data-icon="exclamation-circle"
                width="1em"
                height="1em"
                fill="currentColor">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </i>
            <div class="ant-notification-notice-message">Notification Title</div>
            <div class="ant-notification-notice-description">This is the content of the notification. This is the content of the notification. This is the content of the notification.</div>
          </div>
        </div>
        <a
          tabindex="0"
          class="ant-notification-notice-close"
        >
          <i class="ant-notification-close-icon anticon anticon-close">
            <svg
              viewBox="64 64 896 896"
              data-icon="close"
              width="1em"
              height="1em"
              fill="currentColor">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </i>
        </a>
      </div>

      <div class="ant-notification-notice ant-notification-notice-closable">
        <div class="ant-notification-notice-content">
          <div class="ant-notification-notice-with-icon">
            <i class="ant-notification-notice-icon ant-notification-notice-icon-error anticon anticon-close-circle-o">
              <svg
                viewBox="64 64 896 896"
                data-icon="close-circle"
                width="1em"
                height="1em"
                fill="currentColor">
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              </svg>
            </i>
            <div class="ant-notification-notice-message">XXX线发生严重拥堵</div>
            <div class="ant-notification-notice-description">一些告警通知</div>
          </div>
        </div>
        <a
          tabindex="0"
          class="ant-notification-notice-close"
        >
          <i class="ant-notification-close-icon anticon anticon-close">
            <svg
              viewBox="64 64 896 896"
              data-icon="close"
              width="1em"
              height="1em"
              fill="currentColor">
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
            </svg>
          </i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
export default {
  name: 'InputModal',
  components: {},
  data () {
    return {
      options,
      selected: 'topRight'
    }
  },
  watch: {
    selected (val) {
      this.$notification.config({
        placement: val
      })
    }
  },
  computed: {},
  methods: {
    openNotification (val) {
      this.$notification.open({
        message: '需要及时知道的系统通知',
        description: '因默认仅4.5s的展示时长，通知描述建议少于40字，句子分割为少于10字的短句'
      })
    },
    openNotificationButton () {
      const key = `open${Date.now()}`
      this.$notification.open({
        message: '通知通知通知通知通知',
        description: '因默认仅4.5s的展示时长，通知描述建议少于40字，句子分割为少于10字的短句因默认仅4.5s的展示时长，通知描述建议少于40字，句子分割为少于10字的短句',
        btn: (h) => {
          return [h('a-tag', {
            props: {
              color: ''
            },
            on: {
              click: () => this.$notification.close(key)
            }
          },
          '今晚提醒'), h('a-tag', {
            props: {
              color: '#108ee9'
            },
            on: {
              click: () => this.$notification.close(key)
            }
          }, '立即更新')]
        },
        key,
        onClose: close
      })
    },
    openNotificationText () {
      const key = `open${Date.now()}`
      this.$notification.open({
        message: '通知通知通知通知通知',
        description: '因默认仅4.5s的展示时长，通知描述建议少于40字，句子分割为少于10字的短句因默认仅4.5s的展示时长，通知描述建议少于40字，句子分割为少于10字的短句',
        btn: (h) => {
          return h('a', {
            props: {
              color: ''
            },
            on: {
              click: () => this.$notification.close(key)
            }
          },
          '查看')
        },
        key,
        onClose: close
      })
    }
  }
}
</script>
<style lang="less" scoped>
.notiification {
  height: 60vh;
}
</style>
