<script>
import { mapActions, mapState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
import filterStore from '@/stores/filterStore';
import paginationStore from '@/stores/paginationStore';
import favoriteStore from '@/stores/favoriteStore';

export default {
  data: () => ({
  }),
  computed: {
    ...mapState(recipeStore, ['recipes']),
    ...mapState(filterStore, ['filterRecipes']),
    ...mapState(paginationStore, ['nowPageStore']),
    // showFavorite() {
    //   return this.$route.path === '/myFavoriteView';
    // }
  },
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
    ...mapActions(filterStore, ['filterData']),
    ...mapActions(favoriteStore, ['addFavorite', 'removeFavorite']),
  },
  // 取得api資料後才執行filterData
  // 這樣可以避免一開始filterData沒有資料
  async mounted() {
    await this.fetchApi();
    this.filterData();
  },
}
</script>
<template>
  <!-- 提取被search pagination過濾後的nowPageStore -->
  <div>
    <h2 v-if="!nowPageStore.length">
      Not Found
    </h2>
  </div>
  <div class="homeRecipsWrap">
    <div class="homeRecipes" v-for="i in nowPageStore" :key="i.id + 'recipe'">
      <!-- banner -->
      <div class="banner">
        <a target="_blank"><img :src="i.image"></a>
        <div class="mask">
          <label class="seemore">see more</label>
        </div>
      </div>
      <!-- text -->
      <div class="secText">
        <div>
          <h2 class="homeRecipesTitle">{{ i.name }}</h2>
          <p>Rating<span>{{ i.rating }}</span></p>
          <div class="skillWrap">
            <label v-for="tag in i.tags" :key="tag + 'tag'">#{{ tag }}</label>
          </div>
        </div>
        <div class="labelWrap">
          <label class="time">Time : {{ i.prepTimeMinutes + i.cookTimeMinutes }}min</label>
          <label class="add" @click="addFavorite(i.id)">
            <img src="../images/addIcon.png" alt="add to favorite" width="25px"/>
            add
          </label>
          <label class="remove" @click="removeFavorite(i.id)">
            <img src="../images/removeIcon.png" alt="remove to favorite" width="25px"/>
            remove
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
