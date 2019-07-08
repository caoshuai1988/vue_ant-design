<template>
  <a-card class="mapCard" :body-style="{width: '100%'}" >
    <div>
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
        <a-button >全屏</a-button>
      </div>
    </div>
    <div class="mapCardBody">
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
    <a-modal
      :body-style="{top: '-100px', position: 'absolute', width: '100%', height: '100vh', backgroundColor:'#fff', display: 'flex', flexDirection: 'column'}"
      width="100%"
      :visible="visible"
      :footer="null"
      :closable="false"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel">
      <div>
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
          <a-button type="primary">返回</a-button>
        </div>
      </div>
      <div style="flex:auto;margin-top:28px">
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
    </a-modal>
  </a-card>
</template>

<script>
export default {
  data () {
    return {
      center: { lng: 0, lat: 0 }, // map lng lat
      zoom: 11, // map level
      mapFlag: false, // map content
      visible: false
    }
  },
  mounted () {},
  methods: {
    onTabChange (key, type) {
      this[type] = key
    },
    amplificationBtn () {
      this.visible = !this.visible
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

.mapCard {
  display: flex;
  justify-items: center;
  /deep/ .ant-card-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    .mapCardBody {
      flex: auto;
      margin-top: 24px;
    }
  }

}

</style>
