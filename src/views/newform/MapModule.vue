<template>
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
</template>

<script>
export default {
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
  mounted () {
    // console.log(window.screen.availHeight - this.$refs.text.offsetHeight - 64)
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
/* map */
// #container {
//   width: 100%;
//   height: 590px;
// }

.screenload { /* 全屏 add css */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999;
}

.mapHead { /* 放大生效 */
  padding: 10px 0;
  background-color: #fff;
}

.mapContent { /* 全屏 add css end */
  height: 100% !important;
}

.searchSpan { /* serch 位置 */
  margin: 45px;
}

.amplification { /* 放大 */
  float: right;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 12px;
}

.headMap {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
}

</style>
