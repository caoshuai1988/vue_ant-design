<template>
  <div class="footer">
    <div class="copyright">
      Copyright
      <a-icon type="copyright" /> 版权所有： <span>江苏富深协通科技股份有限公司</span>
      <span class="telephone">技术支持电话：0519-86612998</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  .telephone {
    margin-left: 30px;
  }
}
</style>
