<script lang="ts">
import {
  AddContainer,
  SearchContainer,
  MyAvatarContainer,
} from "@xkit-yx/im-kit-ui";

export default {
  name: "Chat",
  mounted() {
    window.uikit.render(
      SearchContainer, {
        onClickChat: this.goChat.bind(this)
      }, this.$refs.search as HTMLElement
    );
    window.uikit.render(AddContainer, {
      onClickChat: this.goChat.bind(this)
    }, this.$refs.add as HTMLElement);
    window.uikit.render(
      MyAvatarContainer,
      null,
      this.$refs.user as HTMLElement
    );
  },
  methods: {
    goChat() {
        this.$router.push('/chat/conversation')
    },
    goContact() {
        this.$router.push('/chat/contact')
    }
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div ref="user"></div>
      <div ref="search" class="search"></div>
      <div ref="add"></div>
    </div>
    <div class="nav">
        <button @click="goChat">聊天</button>
        <button @click="goContact">通讯录</button>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  padding: 10px;
}
.header {
  display: flex;
  align-items: center;
  height: 10%;
}
.nav {
    height: 10%;
}
.main {
  display: flex;
  height: 80%;
}
.search {
  width: 80%;
  margin: 0 10px;
}
</style>
