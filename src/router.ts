import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "./pages/Login.vue";
import Chat from "./pages/Chat.vue";
import Conversation from "./pages/Conversation.vue";
import Contact from "./pages/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    children: [
      {
        path: "conversation",
        name: "Conversation",
        
        component: Conversation,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
    if (to.name !== 'Login' && !window.uikit) {
        return { name: 'Login' }
    }
})

export default router;
