<template>
  <div>
    <a-card
      style="width:100%"
      :tabList="tabList"
      :activeTabKey="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <span slot="customRender" slot-scope="item" >
        {{ item.key }}<a-icon type="check" class="checkIcon" />
      </span>
      <span slot="customRender1" >
        附件信息
      </span>
      <div v-if="noTitleKey === '基础信息'">
        <baseFormContent></baseFormContent>
      </div>
      <div v-else-if="noTitleKey === '地理信息'">

        <div :style="mapFd" :class="{screenload: screenloadFlag}" >

          <div :class="{mapHead: mapHeadFlag,headMap: !mapHeadFlag}">
            <a-button type="primary" style="margin-left: 24px">保存</a-button>
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
              <a-icon type="arrows-alt" v-if="iconSwitch" />
              <a-icon type="shrink" v-else />
            </span>
          </div>
          <div id="container" ref="container" :class="{mapContent: mapFlag}">
            <baidu-map :center="center" :zoom="zoom" @ready="handler" style="width:100%;height:100%">
              <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
              <bm-geolocation
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                :showAddressBar="true"
                :autoLocation="true"
              ></bm-geolocation>
            </baidu-map>
          </div>
        </div>
      </div>
      <div v-else-if="noTitleKey === '基本情况表'">
        <div class="attachmentHead">
          <div>项目可研报告</div>
          <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleChange">
            <a-button>
              <a-icon type="upload" /> 上传文件
            </a-button>
          </a-upload>
        </div>
      </div>

    </a-card>
  </div>
</template>

<script>
import baseFormContent from './baseFormContent'
export default {
  components: {
    baseFormContent
  },
  data () {
    return {
      center: { lng: 0, lat: 0 }, // 地图坐标
      zoom: 11, // 地图级别
      mapFlag: false, // 地图内容
      screenloadFlag: false, // 全屏
      mapHeadFlag: false, // 地图自定义head
      iconSwitch: true, // 缩放图标
      headers: {
        authorization: 'authorization-text'
      },
      mapFd: {
        width: '',
        height: ''
      },
      tabList: [{
        key: '基础信息',
        scopedSlots: { tab: 'customRender' }

      }, {
        key: '地理信息',
        scopedSlots: { tab: 'customRender' }
      },
      {
        key: '基本情况表',
        scopedSlots: { tab: 'customRender' }
      },
      {
        key: '任务及投资情况估算表',
        scopedSlots: { tab: 'customRender' }
      },
      {
        key: '资益估算表',
        scopedSlots: { tab: 'customRender' }
      },
      {
        key: '附件信息',
        scopedSlots: { tab: 'customRender1' }
      }

      ],
      noTitleKey: '基础信息'
    }
  },
  mounted () {

  },
  methods: {
    handleChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
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
    }
  }
}
</script>

<style>
/* map */
#container {
  width: 100%;
  height: 600px;
}
/* 全屏 add css */
.screenload{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1999;
}

.mapHead{
    padding: 10px 0;
    background-color: #fff;
}

.mapContent{
    height: 100% !important;
}
/* 全屏 add css end */

.headMap {
  width: 100%;
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
  margin-right: 24px;
}
/* icon */
.checkIcon{
    color:#52c41a;
}
</style>
