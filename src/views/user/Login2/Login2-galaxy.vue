<template>
  <div class="main main-login2-base">
    <div class="bgChoose">
      <ul>
        <li><router-link :to="{ name: 'login2Building'}">建筑</router-link></li>
        <li><router-link :to="{ name: 'login2Forest'}">森林</router-link></li>
        <li><router-link :to="{ name: 'login2Frontier'}">塞外</router-link></li>
        <li><router-link :to="{ name: 'login2Galaxy'}" class="active">银河</router-link></li>
        <li><router-link :to="{ name: 'login2Lake'}">湖泊</router-link></li>
        <li><router-link :to="{ name: 'login2Light'}">科技光</router-link></li>
        <li><router-link :to="{ name: 'login2Mountain'}">大山</router-link></li>
        <li><router-link :to="{ name: 'login2Space'}">太空</router-link></li>
        <li><router-link :to="{ name: 'login2Terrace'}">梯田</router-link></li>
      </ul>
    </div>
    <div class="login-box">
      <a-row>
        <a-col :span="20">
          <div>
            <a-form
              id="formLogin"
              class="user-layout-login"
              ref="formLogin"
              :form="form"
            >
              <a-tabs
                :animated="false"
                :activeKey="customActiveKey"
                :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
                @change="handleTabClick"
                class="login-tabs"
              >
                <a-tab-pane key="tab1" tab="账号密码登录">
                  <a-form-item>
                    <a-input
                      size="large"
                      type="text"
                      placeholder="账号"
                      v-decorator="[
                        'username',
                        {rules: [{ required: true, message: ' ' }], validateTrigger: 'change'}
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
                        {rules: [{ required: true, message: ' ' }], validateTrigger: 'blur'}
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
                  </a-form-item>
                  <a-form-item style="margin-bottom: 12px;">
                    <a-button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      class="login-button"
                      :loading="state.loginBtn"
                      :disabled="state.loginBtn"
                      @click="handleSubmit"
                    >登录</a-button>
                  </a-form-item>
                  <div class="login-tips" v-if="isError">
                    <span>用户名或密码错误！</span>
                  </div>
                </a-tab-pane>
                <a-tab-pane key="tab2" tab="CA密钥登录">
                  <div class="ca-uninstall" v-if="!isPassCA">
                    <div><img src="~@/assets/CA.png"></div>
                    <div>
                      <p>请插入您的CA密钥后</p>
                      <p>点击下方检测</p>
                    </div>
                    <a-form-item>
                      <a-button
                        size="large"
                        type="primary"
                        class="test-button"
                        @click="testCA"
                        :loading="state.testBtn"
                        :disabled="state.testBtn"
                      >检测</a-button>
                    </a-form-item>
                  </div>
                  <div class="ca-install" v-else>
                    <a-form-item>检测通过，请输入登录密码</a-form-item>
                    <a-form-item>
                      <a-input
                        size="large"
                        type="password"
                        autocomplete="false"
                        placeholder="密码"
                        v-decorator="[
                          'caPassword',
                          {rules: [{ required: true, message: '请输入登录密码' }], validateTrigger: 'blur'}
                        ]">
                        <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                      </a-input>
                    </a-form-item>
                    <a-form-item class="login-operation">
                      <router-link
                        :to="{ name: 'recover', params: { user: 'aaa'} }"
                        class="forge-password"
                        style="float: right;"
                      >忘记密码</router-link>
                    </a-form-item>
                    <a-form-item>
                      <a-button
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="login-button"
                        :loading="state.caLoginBtn"
                        :disabled="state.caLoginBtn"
                      >登录</a-button>
                    </a-form-item>
                  </div>
                </a-tab-pane>
              </a-tabs>
            </a-form>
          </div>
        </a-col>
        <a-col :span="4"></a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { mapActions } from 'vuex'
import { timeFix } from '@/utils/util'
import AFormItem from 'ant-design-vue/es/form/FormItem'
import ARow from 'ant-design-vue/es/grid/Row'
import $ from 'jquery'
import 'jquery-backstretch'
import imgSrc from '../../../assets/login_bg_galaxy.jpg'

export default {
  components: {
    ARow,
    AFormItem
  },
  data () {
    return {
      customActiveKey: 'tab1',
      testBtn: false,
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        testBtn: false,
        caLoginBtn: false,
        // login type: 0 email, 1 username, 2 telephone
        loginType: 0
      },
      isPassCA: false,
      isError: false // 错误提示
    }
  },
  created () {
  },
  mounted () {
    $('.main-login2-base').backstretch(imgSrc)
  },
  methods: {
    // 检测CA密钥
    testCA () {
      this.state.testBtn = true
      this.isPassCA = true
    },
    ...mapActions(['Login', 'Logout']),
    handleTabClick (key) {
      this.customActiveKey = key
      // this.form.resetFields()
    },
    handleSubmit (e) {
      const that = this
      that.isError = false
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
    // eslint-disable-next-line handle-callback-err
    requestFailed (err) {
      const that = this
      that.isError = true
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    height: calc(100% - 216px);
    min-height: 450px;
    position: relative;
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
        .login-tabs {
          width: 335px;
          input {
            font-size: 16px;
          }
        }
        .login-tips {
          color: #FF1A2E;
          font-size: 14px;
          height: 14px;
          line-height: 14px;
        }
        label {
          font-size: 14px;
        }
        .forge-password {
          font-size: 14px;
        }
        button.login-button,button.test-button {
          padding: 0 15px;
          font-size: 16px;
          height: 40px;
          width: 100%;
        }
        .ca-uninstall {
          margin-top: 32px;
          text-align: center;
          div:first-child {
            margin-bottom: 24px;
            img {
              width: 64px;
              height: 64px;
            }
          }
          div:nth-of-type(2){
            height: 38px;
            font-size: 16px;
            color: rgba(0,0,0,0.65);
            margin-bottom: 32px;
            p {
              height: 19px;
              margin-bottom: 0;
            }
          }
          div:last-child   {
            margin-bottom: 40px;
          }
        }
        .ca-install {
          margin-top: 24px;
          div:first-child {
            font-size: 16px;
            color: rgba(0,0,0,0.65);
          }
        }
      }
    }
  }
</style>
