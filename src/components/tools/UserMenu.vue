<template>
  <div class="user-wrapper">
    <div class="content-box">
      <span class="action" @click="bigScale">
        <a-icon type="zoom-in"/>
      </span>
      <a href="/help/children/first" target="_blank">
        <span class="action">
          <a-icon type="question-circle-o"></a-icon>
        </span>
      </a>
      <notice-icon class="action"/>
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" size="small" :src="avatar()"/>
          <span>{{ nickname() }}</span>
        </span>
        <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
          <a-menu-item key="0">
            <router-link :to="{ name: 'center' }">
              <a-icon type="user"/>
              <span>个人中心</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="1">
            <router-link :to="{ name: 'settings' }">
              <a-icon type="setting"/>
              <span>账户设置</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2" disabled>
            <a-icon type="setting"/>
            <span>测试示例</span>
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item key="6">
            <a href="javascript:;" @click="handleLogout">
              <a-icon type="logout"/>
              <span>退出登录</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <span class="action" @click="openDrawer">
        <a-icon type="setting"/>
      </span>
    </div>
  </div>
</template>

<script>
  import NoticeIcon from '@/components/NoticeIcon'
  import { mapActions, mapGetters } from 'vuex'
  import $ from 'jquery'

  export default {
    name: 'UserMenu',
    components: {
      NoticeIcon
    },
    methods: {
      ...mapActions(['Logout', 'visible']),
      ...mapGetters(['nickname', 'avatar']),
      handleLogout() {
        const that = this

        this.$confirm({
          title: '提示',
          content: '真的要注销登录吗 ?',
          onOk() {
            return that.Logout({}).then(() => {
              // debugger
              window.location.reload()
            }).catch(err => {
              that.$message.error({
                title: '错误',
                description: err.message
              })
            })
          },
          onCancel() {
          }
        })
      },
      openDrawer() {
        this.$store.dispatch('ToggleSetDrawer', true)
      },
      bigScale() {
        $.fn.BUP = function(scale, className) {
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

          // Create element
          let lens = document.createElement('div')
          lens.id = '' + $className + 'BlowupLens'
          let mask = document.createElement('div')
          mask.id = '' + $className + 'BlowupMask'

          // Attack the element to the body
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
            'width': $options.width,
            'height': $options.height,
            'border': $options.border,
            'background': $options.background,
            'border-radius': $options.round ? '50%' : 'none',
            'box-shadow': $options.shadow
          })

          // 尝试使用滚轮控制放大 wheelDelta 兼容性问题
          document.onmousewheel = function(e) {
            e = event || window.event
            console.log(e.wheelDelta)
            if (e.wheelDelta === 120) {
              scale += 0.1
              if (scale >= 5) {
                scale = 5
                console.log('已经最大了')
              }
              console.log('Q')
            }
            if (e.wheelDelta === -120) {
              scale -= 0.1
              if (scale <= 1) {
                scale = 1
                console.log('已经最小了')
              }
              console.log('H')
            }
            console.log(scale)
            $blowupLens.children().css({
              'transform': 'scale(' + scale + ')'
            })

          }

          // Show magnification lens
          $blowupMask.mouseenter(function() {
            $blowupLens.css('visibility', 'visible')
          })

          // Mouse motion on el
          $blowupMask.mousemove(function(e) {
            //
            let lensX = e.pageX - $options.width / 2
            let lensY = e.pageY - $options.height / 2

            // Zoomed  coordinates
            let zoomX = -Math.floor(lensX * scale) - ($options.width / 2) * (scale - 1)
            let zoomY = -Math.floor(lensY * scale) - ($options.height / 2) * (scale - 1)

            // Apply styles to lens
            $blowupLens.css({
              left: lensX,
              top: lensY
            })
            $blowupLens.children().css({
              left: zoomX,
              top: zoomY
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
            document.onmousewheel = null
            $blowupMask.remove()
            $blowupLens.remove()
          })
        }
        setTimeout(function() {
          $('#app').BUP(1, 'App')
        }, 1000)
      }
    }
  }
</script>
