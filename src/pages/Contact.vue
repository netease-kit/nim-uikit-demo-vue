<template>
    <div ref="list" class="list"></div>
    <div ref="info" class="info"></div>
  </template>
  <script lang="ts">
  import {
    ContactInfoContainer,
    ContactListContainer,
  } from "@xkit-yx/im-kit-ui";

  export default {
    name: "Contact",
    mounted() {
      const goChat = () => {
        this.$router.push('/chat/conversation')
      }
      window.uikit.render(
        ContactListContainer,
        null,
        this.$refs.list as HTMLElement
      );
      window.uikit.render(
        ContactInfoContainer,
        {
          afterSendMsgClick: goChat,
          onGroupItemClick: goChat,
        },
        this.$refs.info as HTMLElement
      );
    },

    beforeUnmount() {
      window.uikit.unmount(this.$refs.list as HTMLElement);
      window.uikit.unmount(this.$refs.info as HTMLElement);
    },
  };
  </script>
  <style scoped>
  .list {
    width: 20%;
  }
  .info {
    width: 80%;
  }
  </style>
