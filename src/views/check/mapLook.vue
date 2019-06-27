<template>
  <a-card
    title="地理信息"
    :body-style="closePad"
    :style="mapFd"
    :class="{screenload: screenloadFlag}">
    <div id="container" ref="container" :style="mapFd" >
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
      iconSwitch: true, // 缩放图标
      mapFd: {
        // 自定义样式map
        width: '',
        height: ''
      },
      closePad: {
        padding: '24px 32px;'
      }
    }
  },
  mounted () {
    this.mapFd.height = window.screen.availHeight + 'px' // 暂时
  },
  methods: {
    handler ({ BMap, map }) {
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = this.zoom
    },
    getClickInfo (e) {
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
  }
}
</script>

<style>

</style>
