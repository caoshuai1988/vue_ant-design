/**
 * @author mkk
 * @date 2019/7/4
 * @Description: 放大镜Jq 插件 依赖Jquery
 * @param scale  缩放倍数
 * @param className 容器名字
 * @param zoom body缩放比例
 * @constructor
 */

$.fn.BUP = function(scale, className, zoom) {
  zoom = zoom ? zoom : 1
  let $element = this
  let $className = className
  let $BOX_WIDTH = $element.width()
  let $BOX_HEIGHT = $element.height()
  let $options = {
    round: false,
    width: 400,
    height: 200,
    background: '#FFF',
    shadow: '0 8px 17px 0 rgba(0, 0, 0, 1)',
    border: '3px solid #FFF',
    cursor: true,
    zIndex: 9999999
  }

  $element.on('dragstart', function(e) {
    e.preventDefault()
  })

  // create element
  let lens = document.createElement('div')
  lens.id = '' + $className + 'BlowupLens'
  let mask = document.createElement('div')
  mask.id = '' + $className + 'BlowupMask'

  // attack the element to the body
  $('body').append(lens)
  $('body').append(mask)
  let $blowupMask = $('#' + mask.id)
  $blowupMask.css({
    'cursor': $options.cursor ? 'crosshair' : 'none',
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'right': '0',
    'bottom': '0',
    'background': 'transparent',
    'z-index': '100000'
  })
  let el = $element.clone(true).css({
    'width': ($BOX_WIDTH) + 'px',
    'height': ($BOX_HEIGHT) + 'px',
    'transform': 'scale(' + scale + ')',
    'transform-origin': 'top left',
    'position': 'relative'
  })
  $(lens).append(el)
  // Updates styles
  let $blowupLens = $('#' + lens.id)
  $blowupLens.css({
    'overflow': 'hidden',
    'position': 'absolute',
    'visibility': 'hidden',
    'pointer-events': 'none',
    'zIndex': $options.zIndex,
    'width': $options.width / zoom,
    'height': $options.height / zoom,
    'border': $options.border,
    'background': $options.background,
    'border-radius': $options.round ? '50%' : 'none',
    'box-shadow': $options.shadow
  })

  // keydown A or D
  document.onkeydown = function(e) {
    debugger
    e = event || window.event
    if (e && e.keyCode === 65) {//A 缩小
      scale -= 0.1
      if (scale <= 1) {
        scale = 1
        console.log('已经最小了')
      }
    }
    if (e && e.keyCode === 68) {//D 放大
      scale += 0.1
      if (scale >= 5) {
        scale = 5
        console.log('已经最大了')
      }
    }
    if (e && e.keyCode === 87) {// w container big
      if ($options.width <= 1200) {
        $options.width += $options.width * 0.1
        $options.height += $options.height * 0.1
      }
      console.log('放大镜变大')
    }
    if (e && e.keyCode === 83) {// s container small
      $options.width -= $options.width * 0.1
      $options.height -= $options.height * 0.1
      if ($options.width <= 400) {
        $options.width = 400
        $options.height = 200
      }
      console.log('放大镜变小')
    }
    if (e && e.keyCode === 27) {
      document.onkeydown = null
      $blowupMask.remove()
      $blowupLens.remove()
    }
    console.log(scale)

    //
    $blowupLens.css({
      'width': $options.width / zoom,
      'height': $options.height / zoom
    })
    $blowupLens.children().css({
      'transform': 'scale(' + scale + ')'
    })
  }

  // show magnification lens
  $blowupMask.mouseenter(function() {
    $blowupLens.css('visibility', 'visible')
  })

  // mouse motion on el
  $blowupMask.mousemove(function(e) {
    //
    let lensX = e.pageX - $options.width / 2
    let lensY = e.pageY - $options.height / 2

    // zoom  coordinates
    let zoomX = -Math.floor(lensX * scale) - ($options.width / 2) * (scale - 1)
    let zoomY = -Math.floor(lensY * scale) - ($options.height / 2) * (scale - 1)

    // apply styles to lens
    $blowupLens.css({
      left: lensX / zoom,
      top: lensY / zoom
    })
    $blowupLens.children().css({
      left: zoomX / zoom,
      top: zoomY / zoom
    })
  })
  //
  // mouse leave
  $blowupMask.mouseleave(function() {
    $blowupLens.css('visibility', 'hidden')
  })
  // move defaults contextmenu
  $blowupMask.bind('contextmenu', function() {
    return false
  })
  $blowupMask.contextmenu(function() {
    document.onkeydown = null
    $blowupMask.remove()
    $blowupLens.remove()
  })
}