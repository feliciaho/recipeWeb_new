import { createRouter, createWebHashHistory } from 'vue-router'
//createWebHistoty改成createWebHashHistor----改成hash模式
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //改成linkActiveClass active
  linkActiveClass: 'active',
  routes: [
    {
      path: '/allRecipe',
      name: 'allRecipe',
      component: () => import('../views/AllRecipe.vue'),
    },
    {
      path: '/popular',
      name: 'popular',
      component: () => import('../views/Popular.vue'),
    },
    {
      path: '/myFavorite',
      name: 'myFavorite',
      component: () => import('../views/MyFavorite.vue'),
    },
    //新增404page 記得要在router也新增頁面
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
