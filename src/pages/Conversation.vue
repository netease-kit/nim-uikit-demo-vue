<template>
  <div ref="conversation" class="conversation"></div>
  <div ref="chat" class="chat"></div>
</template>
<script lang="ts">
import {
  ConversationContainer,
  ChatContainer,
} from "@xkit-yx/im-kit-ui";
import { compile } from "jsx-web-compiler";

export default {
  name: "Conversation",
  mounted() {
    window.uikit.render(
      ConversationContainer,
      null,
      this.$refs.conversation as HTMLElement
    );
    window.uikit.render(
      ChatContainer,
      {
        // 以下是自定义渲染，用 compile 函数包裹 html 就可以了，注意 class 要写成 className
        // renderHeader: () => compile(`<div className="my-header">123</div>`),
        // renderEmpty: () => compile("<div>This is empty</div>"),
      },
      this.$refs.chat as HTMLElement
    );
  },

  beforeUnmount() {
    window.uikit.unmount(this.$refs.conversation as HTMLElement);
    window.uikit.unmount(this.$refs.chat as HTMLElement);
  },
};
</script>
<style scoped>
.conversation {
  width: 20%;
}
.chat {
  width: 80%;
}
</style>
