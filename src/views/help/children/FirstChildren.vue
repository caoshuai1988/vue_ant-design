<template>
  <a-list
    itemLayout="vertical"
    size="large"
    :pagination="pagination"
    :dataSource="listData"
  >
    <!-- <div slot="footer"><b>ant design vue</b> footer part</div> -->
    <a-list-item slot="renderItem" slot-scope="item" key="item.title">
      <template slot="actions" v-for="{type, text} in actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <img slot="extra" width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
      <a-list-item-meta>
        <a slot="title" target="_blank">
        	<router-link :to="{ path: '/help/helpinfo' }" target='_blank'>
        	{{ item.title }}
        	</router-link>
        </a>
        <a slot="description">
          <span style="color:rgba(0,0,0,0.45)">{{ item.description }}</span>
        </a>
      </a-list-item-meta>
      {{ item.content }}
    </a-list-item>
  </a-list>
</template>

<script>
const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'javascript:;',
    title: ` 今日转会一览：曝巴萨1亿+库鸟报价内马尔，尤文7000万签德利赫特”${i}`,
    description: '阿根廷美洲杯前两场比赛1负1平，媒体、球迷及一些足坛名宿都对梅西领衔的阿根廷都大加批评，马拉多纳甚至说世界第200多名的汤加也能赢阿根廷。',
    content: '1六月上旬，国足在两场关键的热身赛中先后以2-0和1-0战胜了菲律宾和塔吉克斯坦，成功保住了世预赛种子队席位，里皮2.0时代的国足成功打响了冲击世界杯的第一枪。比赛结束后，里皮返回了意大利，里皮的教练团队依旧留在中国继续考察国脚们的状态。事实上，自从里皮重新执教国足后，外界的看法就有很大差别，对于中国足球未来的讨论也越来越多。近日，里皮在意大利的专访中谈到了中国足球说出了实话以及扎心的内幕。'
  })
}
export default {
  components: {
  },
  data () {
    return {
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 3
      },
      actions: [
        { type: 'like-o', text: '156' },
        { type: 'dislike', text: '156' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
