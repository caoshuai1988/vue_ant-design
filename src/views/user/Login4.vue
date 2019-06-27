<template>
  <div class="main">
    <img src="@/assets/login_bg1.png"/>
    <div class="login-box">
      <a-row>
        <a-col :span="20">
          <div>
           <a-form
        id="formLogin"
        class="user-layout-login"
        ref="formLogin"
        :form="form"
        @submit="handleSubmit"
      >
        <div>
          <div class="form-title">账号密码登录</div>
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="账号"
              v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入账号' }], validateTrigger: 'change'}
              ]"
            >
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              size="large"
              type="password"
              autocomplete="false"
              placeholder="密码"
              v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
              ]"
            >
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>
          <a-form-item class="login-operation">
            <a-checkbox v-decorator="['rememberMe']">记住账号</a-checkbox>
            <router-link
              :to="{ name: 'recover'}"
              class="forge-password"
              style="float: right;"
            >忘记密码</router-link>
  <!--              <router-link class="register" :to="{ name: 'register' }">注册账户</router-link>-->
          </a-form-item>
          <a-form-item>
          <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            :loading="state.loginBtn"
            :disabled="state.loginBtn"
          >登录</a-button>
        </a-form-item>
        </div>
      </a-form>
          </div>
        </a-col>
      </a-row>
    </div>
    <two-step-captcha
      v-if="requiredTwoStepCaptcha"
      :visible="stepCaptchaVisible"
      @success="stepCaptchaSuccess"
      @cancel="stepCaptchaCancel"
    ></two-step-captcha>
  </div>
</template>

<script>
import md5 from 'md5'
import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import { getSmsCaptcha, get2step } from '@/api/login'
import AFormItem from 'ant-design-vue/es/form/FormItem'
import dragVerify from 'vue-drag-verify'

export default {
  components: {
    AFormItem,
    TwoStepCaptcha,
    dragVerify
  },
  data () {
    return {
      customActiveKey: 'tab1',
      testBtn: false,
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      requiredTwoStepCaptcha: false,
      stepCaptchaVisible: false,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        testBtn: false,
        caLoginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0,
        smsSendBtn: false
      },
      // 滑块
      drag: {
        // show: true,
        // handlerIcon: 'fa fa-angle-double-right',
        // successIcon: 'fa fa-check',
        background: 'rgba(0,0,0,0.15)',
        progressBarBg: '#52c41a',
        completedBg: '#52c41a',
        handlerBg: '#fff',
        text: '请按住滑块，拖动到最右边',
        successText: '验证成功',
        width: 335,
        height: 40,
        textSize: '14px',
        circle: false,
        color: 'rgba(0,0,0,0.25)'
      },
      isPassCA: false
    }
  },
  created () {
    get2step({ })
      .then(res => {
        this.requiredTwoStepCaptcha = res.result.stepCode
      })
      .catch(() => {
        this.requiredTwoStepCaptcha = false
      })
    // this.requiredTwoStepCaptcha = true
  },
  methods: {
  // 滑动完成消失
    passcallback () {
      if (this.$refs.Verify.isPassing) {
        // this.show = false
      }
    },
    // 检测CA密钥
    testCA () {
      this.state.testBtn = true
      this.isPassCA = true
    },
    ...mapActions(['Login', 'Logout']),
    // handler
    // handleUsernameOrEmail (rule, value, callback) {
    //   const { state } = this
    //   const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
    //   if (regex.test(value)) {
    //     state.loginType = 0
    //   } else {
    //     state.loginType = 1
    //   }
    //   callback()
    // },
    handleTabClick (key) {
      this.customActiveKey = key
      // this.form.resetFields()
    },
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        customActiveKey,
        Login
      } = this

      state.loginBtn = true

      const validateFieldsKey = customActiveKey === 'tab1' ? ['username', 'password'] : ['mobile', 'captcha']

      validateFields(validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          console.log('login form', values)
          const loginParams = { ...values }
          delete loginParams.username
          // debugger
          // loginParams[!state.loginType ? 'email' : 'username'] = values.username
          loginParams['username'] = values.username
          loginParams.password = md5(values.password)
          Login(loginParams)
            .then((res) => this.loginSuccess(res))
            .catch(err => this.requestFailed(err))
            .finally(() => {
              state.loginBtn = false
            })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    getCaptcha (e) {
      e.preventDefault()
      const { form: { validateFields }, state } = this

      validateFields(['mobile'], { force: true }, (err, values) => {
        if (!err) {
          state.smsSendBtn = true

          const interval = window.setInterval(() => {
            if (state.time-- <= 0) {
              state.time = 60
              state.smsSendBtn = false
              window.clearInterval(interval)
            }
          }, 1000)

          const hide = this.$message.loading('验证码发送中..', 0)
          getSmsCaptcha({ mobile: values.mobile }).then(res => {
            setTimeout(hide, 2500)
            this.$notification['success']({
              message: '提示',
              description: '验证码获取成功，您的验证码为：' + res.result.captcha,
              duration: 8
            })
          }).catch(err => {
            setTimeout(hide, 1)
            clearInterval(interval)
            state.time = 60
            state.smsSendBtn = false
            this.requestFailed(err)
          })
        }
      })
    },
    stepCaptchaSuccess () {
      this.loginSuccess()
    },
    stepCaptchaCancel () {
      this.Logout().then(() => {
        this.loginBtn = false
        this.stepCaptchaVisible = false
      })
    },
    loginSuccess (res) {
      console.log(res)
      this.$router.push({ name: 'dashboard' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
    },
    requestFailed (err) {
      this.$notification['error']({
        message: '错误',
        description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    height: calc(100% - 304px);
    min-height: 450px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .login-box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      #formLogin.user-layout-login {
        float: right;
        background: #ffffff;
        padding: 32px 32px 0;
        height: 428px;
        border-radius: 4px;
        .ant-form-item {
          margin-bottom: 24px;
        }
        >div {
          width: 335px;
          .form-title {
            font-size: 18px;
            color: rgba(0,0,0,0.85);
            margin-bottom: 24px;
            height: 46px;
            line-height: 46px;
          }
          label {
            font-size: 14px;
          }

          .forge-password {
            font-size: 14px;
          }
          button.login-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
          }
        }
      }
    }
  }
</style>
