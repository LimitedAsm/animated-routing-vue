import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/firstLink",
  },
  {
    path: "/firstLink",
    name: "firstLink",
    component: Home,
  },
  {
    path: "/secondLink",
    name: "secondLink",
    component: Home,
    props: {
      marginLeft: "-100vw",
    },
  },
  {
    path: "/thirdLink",
    name: "thirdLink",
    component: Home,
    props: {
      marginTop: "-100vh",
    },
  },
  {
    path: "/fourthLink",
    name: "fourthLink",
    component: Home,
    props: {
      marginLeft: "-100vw",
      marginTop: "-100vh",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
