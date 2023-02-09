
import { createRouter, createWebHashHistory } from "vue-router";

//creacción de las rutas para poder navegar entre las pestañas de la web
const routes = [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
  
    {
      path: "/game",
      name: "game",
      component: () => import("../views/Game.vue"),
    },
  
   
  ];
  
  const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
  });
  
 
  
  console.log("router: ", import.meta.env.BASE_URL);
  
  export default router;
  