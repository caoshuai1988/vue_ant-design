<!--
 * @Author: lxh
 * @Date: 2019-07-03 16:01:38
 * @LastEditTime: 2019-07-04 16:04:13
 * @Description:高级地图demo
 -->
<template>
  <a-card :body-style="{padding: '24px 32px'}">
    <div class="map-content">
      <div class="map-leftbox">
        <div class="map-headbox">
          <span class="searchSpan">
            <a-input-search placeholder="请输入地理位置" style="width: 280px"/>
          </span>
          <span style="margin-left:40px">
            显示:&nbsp;&nbsp;&nbsp;
            <a-checkbox @change="onChange">项目区</a-checkbox>
          </span>
          <div class="color-box"></div>
          <span style="margin-left:32px">
            <a-checkbox @change="onChange">高标准农田区</a-checkbox>
          </span>
          <div class="color-box-lv"></div>
        </div>
        <div id="container" ref="container">
          <baidu-map
            :center="center"
            :zoom="zoom"
            :map-click="false"
            @ready="handler"
            @click="paintPolyline"
            style="width:100%;height:100%"
          >
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!-- <bm-polygon
              :path="polygonPath"
              stroke-color="#0177d5"
              :stroke-weight="3"
              fillColor="#87c3fa"
              :editing="false"
              @lineupdate="updatePolygonPath"
            /> -->
            <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_SQUARE" color="#0177d5" size="BMAP_POINT_SIZE_BIG" ></bm-point-collection>
          </baidu-map>
        </div>

      </div>
      <div class="map-rightbox">
        <a-tabs defaultActiveKey="1" type="card">
          <a-tab-pane key="1">
            <span slot="tab">
              <span>项目区</span>
            </span>
            <a-card :body-style="{padding: '0 24px'}" :bordered="false">
              <a-button-group style="margin-left: 10px">
                <a-button>录入</a-button>
                <a-button>拾取</a-button>
                <a-button>绘制</a-button>
                <a-button style="margin-left: 24px">导入</a-button>
              </a-button-group>
            </a-card>
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              <span>高标准农田区</span>
            </span>
          </a-tab-pane>
          <a-tab-pane key="3">
            <span slot="tab">备注</span>
          </a-tab-pane>
          <div slot="tabBarExtraContent" class="amplification">
            <a-button type="primary" v-if="iconFlag">返回</a-button>
            <a-icon type="arrows-alt" v-else/>
          </div>
        </a-tabs>
      </div>
    </div>

  </a-card>
</template>

<script>
export default {
  data () {
    return {
      points: [], // 海量点
      polygonPath: [], // 绘制
      center: { lng: 0, lat: 0 }, // map 坐标
      zoom: 14, // map 级别,
      iconFlag: false
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    onChange (e) {
      // multiple
      console.log(`checked = ${e.target.checked}`)
    },
    handler ({ BMap, map }) {
      // map start
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = this.zoom
    },
    getClickInfo (e) {
      // map end
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    paintPolyline (e) {
      this.polygonPath.push({
        lng: e.point.lng,
        lat: e.point.lat
      })
      this.points.push({
        lng: e.point.lng,
        lat: e.point.lat
      })
    },
    updatePolygonPath (e) {
      this.polygonPath = e.target.getPath()
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 640px;
}
.map-content {
  display: flex;
}
.map-headbox {
  margin-bottom: 8px;
}
.map-leftbox {
  flex: 7;
}
.map-rightbox {
  flex: 3;
}
.color-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #067ce9;
}
.color-box-lv {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #49a51b;
}
.amplification {
  /* 放大 */
  float: right;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  padding: 0 10px;
}
</style>
