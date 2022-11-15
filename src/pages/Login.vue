<script lang="ts">
import { IMUIKit } from '@xkit-yx/im-kit-ui'

import "antd/dist/antd.less";
import "@xkit-yx/im-kit-ui/es/style";

export default {
  name: 'Login',
  data() {
    return {
      appkey: '',
      token: '',
      account: '',
      sdkVersion: 2,
    }
  },
  methods: {
    init() {
      window.uikit = new IMUIKit({
        initOptions: {
          appkey: this.appkey,
          account: this.account,
          token: this.token,
          lbsUrls: JSON.parse(import.meta.env.VITE_APP_IM_LBS_URL),
          linkUrl: import.meta.env.VITE_APP_IM_DEFAULT_LINK,
          debugLevel: "debug",
          needReconnect: true,
          reconnectionAttempts: 5,
        },
        singleton: true,
        sdkVersion: Number(this.sdkVersion) as any,
      });
      this.$router.push('/chat/conversation');
    }
  }
}
</script>

<template>
  <div class="opt">
    <h2>UI Kit Vue Demo</h2>
    <div>
      <span>appkey：</span>
      <input v-model="appkey" />
    </div>
    <div>
      <span>token：</span>
      <input v-model="token" />
    </div>
    <div>
      <span>account：</span>
      <input v-model="account" />
    </div>
    <div>
      <span>sdkVersion：</span>
      <input v-model="sdkVersion" />
    </div>
    <div>
      <button @click="init">初始化</button>
    </div>
  </div>
</template>

<style scoped>
.opt {
  padding-left: 10px;
}
</style>
