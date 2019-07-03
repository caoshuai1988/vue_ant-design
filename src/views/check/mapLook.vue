<template>
  <a-card class="maplook" :class="{screenload: screenloadFlag}">
    <div slot="title">
      <h1 style="font-size: 20px;">2018年韶关市翁源县江尾镇高标准农田建设项目 - 计划阶段 - 地理信息</h1>
    </div>
    <div id="container" ref="container" style="height:100%">
      <baidu-map :center="center" :zoom="zoom" @ready="handler" style="width:100%;height:100%">
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
  data   () {
    return {
      center: { lng: 0, lat: 0 }, // 地图坐标
      zoom: 11, // 地图级别
      mapFlag: false, // 地图内容
      screenloadFlag: false, // 全屏
      iconSwitch: true // 缩放图标
    }
  },
  beforeCreate   () {
    document.title = '地理信息 - 计划阶段 - 2018年韶关市翁源县江尾镇高标准农田建设项目'
  },
  mounted   () {
  },
  methods: {
    handler   ({ BMap, map }) {
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = this.zoom
    },
    getClickInfo   (e) {
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 0;
}
.maplook {
  display: flex;
  flex-direction: column;
  height: 100%;
  /deep/ .ant-card-head {
    height: 62px;
  }
  /deep/ .ant-card-body {
    flex: auto;
    padding: 24px 32px;
  }
}
</style>
