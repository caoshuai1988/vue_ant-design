<template>
  <div style="background:#fff;padding-top:11px;" >
    <a-tabs defaultActiveKey="2" >
      <a-tab-pane key="1">
        <span slot="tab" class="tabMar">
          <span>基础信息</span>
          <div class="checkIcon">
            <a-icon type="check" />
          </div>
        </span>
        <baseFormContent></baseFormContent>
      </a-tab-pane>
      <a-tab-pane key="2" style="padding:10px 24px 24px 24px">
        <span slot="tab">
          <span >地理信息</span>
          <div class="checkIcon">
            <a-icon type="check" />
          </div>
        </span>
        <a-card :body-style="{padding: '0'}">
          <div :style="mapFd" :class="{screenload: screenloadFlag}">
            <div :class="{mapHead: mapHeadFlag,headMap: !mapHeadFlag}" ref="text">
              <a-button type="primary" style="margin-left: 12px">保存</a-button>
              <a-button-group style="margin-left: 10px">
                <a-button>新增</a-button>
                <a-button>绘制</a-button>
                <a-button>审核</a-button>
                <a-button>监管</a-button>
                <a-button>导入</a-button>
              </a-button-group>
              <span class="searchSpan">
                <a-input-search placeholder="请输入" style="width: 300px"/>
              </span>
              <span class="amplification" @click="amplificationBtn">
                <a-icon type="arrows-alt" v-if="iconSwitch"/>
                <a-icon type="shrink" v-else/>
              </span>
            </div>
            <div id="container" ref="container" :style="mapMr" :class="{mapContent: mapFlag}">
              <baidu-map
                :center="center"
                :zoom="zoom"
                @ready="handler"
                style="width:100%;height:100%"
              >
                <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
                <bm-geolocation
                  anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                  :showAddressBar="true"
                  :autoLocation="true"
                ></bm-geolocation>
              </baidu-map>
            </div>
          </div>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">基本情况表</span>
      </a-tab-pane>
      <a-tab-pane key="4">
        <span slot="tab">任务及投资情况估算表</span>
      </a-tab-pane>
      <a-tab-pane key="5">
        <span slot="tab">资益估算表</span>
      </a-tab-pane>
      <a-tab-pane key="6">
        <span slot="tab">附件信息</span>
        <AccessoryForm></AccessoryForm>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import baseFormContent from '@/components/form/BaseFormContent'
import AccessoryForm from '@/components/form/AccessoryForm'
export default {
  components: {
    baseFormContent,
    AccessoryForm
  },
  data () {
    return {
      center: { lng: 0, lat: 0 }, // 地图坐标
      zoom: 11, // 地图级别
      mapFlag: false, // 地图内容
      screenloadFlag: false, // 全屏
      mapHeadFlag: false, // 地图自定义head
      iconSwitch: true, // 缩放图标
      mapFd: { // 自定义样式map
        width: '',
        height: ''
      },
      mapMr: {
        width: '100%',
        height: ''
      }
    }
  },
  computed: {
    mapH () {
      return 1
    }
  },
  mounted () {
    console.log(window.screen.availHeight - this.$refs.text.offsetHeight - 64)
    this.mapMr.height = window.screen.availHeight - this.$refs.text.offsetHeight - 64 - 61 - 45 - 52.5 - 93 + 'px'
  },
  methods: {

    onTabChange (key, type) {
      console.log(key, type)
      this[type] = key
    },
    changeSize () {
      if (this.mapFd.width === window.screen.availWidth + 'px') {
        this.mapFd = {}
      } else {
        this.mapFd.width = window.screen.availWidth + 'px'
        this.mapFd.height = window.screen.availHeight + 'px'
      }

      this.screenloadFlag = !this.screenloadFlag
      this.mapHeadFlag = !this.mapHeadFlag
      this.mapFlag = !this.mapFlag
      this.iconSwitch = !this.iconSwitch
    },
    amplificationBtn () {
      // 全屏
      this.changeSize()
    },
    handler ({ BMap, map }) {
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = this.zoom
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        delete target.editable
        this.data = newData
        this.cacheData = newData.map(item => ({ ...item }))
      }
    },
    cancel (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    }
  }
}
</script>

 <style lang="less" scoped>

// tab 间距
.tabMar{
  padding-left: 24px;
}

.boxBoder {
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 15px;
}
/* map */
// #container {
//   width: 100%;
//   height: 590px;
// }
/* 全屏 add css */

.screenload {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;
}

/* 放大生效 */
.mapHead {
  padding: 10px 0;
  background-color: #fff;
}

.mapContent {
  height: 100% !important;
}

/* 全屏 add css end */

/* icon */
.checkIcon {
  color: #52c41a;
  position: absolute;
  top: 11px;
  right: -9px;
}

.headMap {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
}

/* serch 位置 */
.searchSpan {
  margin: 45px;
}

/* 放大 */
.amplification {
  float: right;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  margin-right: 12px;
}

</style>
