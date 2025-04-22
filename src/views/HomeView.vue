<script>
import { mapActions, mapState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
import filterStore from '@/stores/filterStore';
import loadingStore from '@/stores/loadingStore';
import favoriteStore from '@/stores/favoriteStore';
import paginationStore from '@/stores/paginationStore';
import PaginationCom from '@/components/PaginationCom.vue';

export default {
  components: {
    PaginationCom,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(loadingStore, ['isloading']),
    ...mapState(paginationStore, ['nowPageStore']),
    ...mapState(favoriteStore, ['favoriteRecipes']),
  },
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
    ...mapActions(filterStore, ['filterData']),
    ...mapActions(loadingStore, ['startLoading', 'stopLoading']),
    ...mapActions(favoriteStore, ['addFavorite', 'removeFavorite']),
    // 檢測是否有收藏
    isFavorite(favoriteId) {
      return this.favoriteRecipes.some((item) => item.id === favoriteId);
    },
  },
  // 取得api資料後才執行filterData
  // 這樣可以避免一開始filterData沒有資料
  async mounted() {
    this.startLoading();
    await this.fetchApi();
    this.filterData();
    this.stopLoading();
  },

}
</script>
<template>
  <LoadingOverlay :active="isloading"></LoadingOverlay>
  <section class="home" id="home">
    <div class="homeBanner">
      <h1 class="secTitle">Explore Recipes</h1>
      <h3 class="homeSubTitle">
        Discover a world of flavors and culinary delights <br> with our curated collection of recipes.
      </h3>
    </div>
    <h2 v-if="!nowPageStore.length">
      Not Found
    </h2>
    <!-- 提取被search pagination過濾後的nowPageStore -->
    <div class="homeRecipsWrap">
      <div class="homeRecipes" v-for="i in nowPageStore" :key="i.id + 'recipe'">
        <!-- banner -->
        <div class="banner">
          <label class="rating"><img src="../images/star.png" alt="rating" width="25px" />
            {{ i.rating }}
          </label>
          <a target="_blank"><img :src="i.image"></a>
          <div class="mask">
            <label class="seemore">see more</label>
          </div>
        </div>
        <!-- text -->
        <div class="secText">
          <div>
            <h2 class="homeRecipesTitle">{{ i.name }}</h2>
            <p>Time <span>{{ i.prepTimeMinutes + i.cookTimeMinutes }}min</span></p>
            <div class="skillWrap">
              <label v-for="tag in i.tags" :key="tag + 'tag'">#{{ tag }}</label>
            </div>
          </div>
          <div class="labelWrap">
            <!-- 抓取id當入參數回傳給isFavorite查看是否有收藏 -->
            <label class="add" @click="addFavorite(i.id)" v-if="!isFavorite(i.id)">
              <img src="../images/addIcon.png" alt="add to favorite" width="25px" />
              add
            </label>
            <label class="remove" @click="removeFavorite(i.id)" v-if="isFavorite(i.id)">
              <img src="../images/removeIcon.png" alt="remove to favorite" width="25px" />
              remove
            </label>
          </div>
        </div>
      </div>
    </div>
    <PaginationCom></PaginationCom>
  </section>
</template>
