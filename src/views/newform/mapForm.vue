<template>
  <div>
    <a-card
      style="width:100%"
      :tabList="tabListNoTitle"
      :activeTabKey="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <div v-if="noTitleKey === '基础信息'"></div>
      <div v-else-if="noTitleKey === '地理信息'">
        <div class="headMap">
          <a-button type="primary">保存</a-button>
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
            <a-icon type="shrink"/>
          </span>
        </div>
        <div id="container" ref="container">
          <baidu-map :center="center" :zoom="zoom" @ready="handler" style="width:100%;height:100%">
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!-- <bm-map-type
              :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
              anchor="BMAP_ANCHOR_TOP_LEFT"
            ></bm-map-type> -->
            <bm-geolocation
              anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
              :showAddressBar="true"
              :autoLocation="true"
            ></bm-geolocation>
          </baidu-map>
        </div>
      </div>

      <div v-else-if="noTitleKey === '基本情况表'"></div>

    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lng: 0, lat: 0 }, // 地图坐标
      zoom: 11, // 地图级别

      contentList: {
        tab2: 'content2'
      },
      tabListNoTitle: [
        {
          key: '基础信息',
          tab: '基础信息'
        },
        {
          key: '地理信息',
          tab: '地理信息'
        },
        {
          key: '基本情况表',
          tab: '基本情况表'
        },
        {
          key: '任务及投资情况估算表',
          tab: '任务及投资情况估算表'
        },
        {
          key: '资益估算表',
          tab: '资益估算表'
        },
        {
          key: '附件信息',
          tab: '附件信息'
        }
      ],
      noTitleKey: '基础信息'
    }
  },
  mounted () {
  },
  methods: {
    onTabChange (key, type) {
      console.log(key, type)
      this[type] = key
    },
    changeSize () {
      var docElm = document.getElementById('container') // 要被全屏的元素
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      }
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
    }
  }
}
</script>

<style>
/* map */
#container {
  width: 100%;
  height: 590px;
}
.headMap {
  width: 100%;
  padding-bottom: 10px;
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
}
</style>
