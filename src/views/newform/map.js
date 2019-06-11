
import BMap from 'BMap'

export const BaiduMap = {
  init: function () {
    const BMapURL = 'https://api.map.baidu.com/api?v=3.0&ak=' + 'C67RCiQCG2eXouYcvPhBaI1IC7DqX2Eb' + '&s=1&callback=onBMapCallback'
    // const BMap = new BMap.Map('container')

    return new Promise((resolve, reject) => {
      // 如果已加载直接返回

      if (typeof BMap !== 'undefined') {
        resolve(BMap)
        return true
      }
      // 百度地图异步加载回调处理
      window.onBMapCallback = function () {
        console.log('百度地图脚本初始化成功...')
        resolve(BMap)
      }
      // 插入script脚本
      const scriptNode = document.createElement('script')
      scriptNode.setAttribute('type', 'text/javascript')
      scriptNode.setAttribute('src', BMapURL)
      document.body.appendChild(scriptNode)
    })
  }
}
