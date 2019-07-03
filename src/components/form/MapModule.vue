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
        <div class="amplification" @click="amplificationBtn">
          <a-button v-if="iconSwitch" >全屏</a-button>
          <a-button type="primary" v-else>返回</a-button>
        </div>
      </div>
      <div id="container" ref="container" :style="mapMr" :class="{mapContent: mapFlag}">
        <baidu-map
          :center="center"
          :zoom="zoom"
          @ready="handler"
          style="width:100%;height:100%">
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
      center: { lng: 0, lat: 0 }, // map lng lat
      zoom: 11, // map level
      mapFlag: false, // map content
      screenloadFlag: false, // full screen
      mapHeadFlag: false, // map head
      iconSwitch: true, //  zoom icon
      mapFd: {
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
    this.mapMr.height = window.screen.availHeight - this.$refs.text.offsetHeight - 64 - 61 - 45 - 52.5 - 93 + 'px' // 暂时
  },
  methods: {

    onTabChange (key, type) {
      this[type] = key
    },
    changeSize () {
      if (this.mapFd.width === document.documentElement.clientWidth + 'px') {
        this.mapFd = {}
      } else {
        this.mapFd.width = document.documentElement.clientWidth + 'px'
        this.mapFd.height = document.documentElement.clientHeight + 'px'
      }

      this.screenloadFlag = !this.screenloadFlag
      this.mapHeadFlag = !this.mapHeadFlag
      this.mapFlag = !this.mapFlag
      this.iconSwitch = !this.iconSwitch
    },
    amplificationBtn () {
      this.changeSize() // full screen
    },
    handler ({ BMap, map }) {
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = this.zoom
    },
    getClickInfo (e) {
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

.screenload { /* full screen add css */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.mapHead { /* 放大生效 */
  padding: 10px 0;
  background-color: #fff;
}

.mapContent { /* full screen add css end */
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
  padding: 0 10px;
  margin-right: 12px;
}

.headMap {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #fff;
  border-left: 1px solid #e8e8e8;
}

</style>
