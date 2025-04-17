import { createRouter, createWebHashHistory } from 'vue-router'
//createWebHistoty改成createWebHashHistor----改成hash模式
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //改成linkActiveClass active
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'AllRecipe',
      component: () => import('../views/AllRecipe.vue'),
    },
    {
      path: '/Popular',
      name: 'Popular',
      component: () => import('../views/Popular.vue'),
    },
    {
      path: '/MyFavorite',
      name: 'MyFavorite',
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
