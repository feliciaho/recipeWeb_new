<script>
import { mapState, mapActions } from 'pinia';
import recipeStore from '@/stores/recipeStore';

export default {
  computed: {
    ...mapState(recipeStore, ['recipes']),
    sortProducts() {
      //如果不解構會直接修改返回新的數組
      // 使用[...]解構,這樣可以避免修改原始數據。
      // 返回排序後的新數組,取前10組
      return [...this.recipes].sort((a, b) => b.rating - a.rating).slice(0, 5);
    },
  },
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
  },
  // 這樣可以避免一開始filterData沒有資料
  mounted() {
    this.fetchApi();
  }
}
</script>
<template>
  <section class="popularRecipe" id="PopularRecipe">
    <div class="popularBanner">
      <h1 class="secTitle">Popular Recipes</h1>
      <h3 class="homeSubTitle">
        Discover the most popular recipes among our users.
      </h3>
    </div>
    <!-- 提取被search pagination過濾後的nowPageStore -->
    <div class="popularRecipes" v-for="i in sortProducts" :key="i.id + 'recipe'">
      <div class="banner">
        <label class="rating"><img src="../images/star.png" alt="rating" width="25px"/>
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
          <h2 class="popularTitle">{{ i.name }}</h2>
          <p>Time <span>{{ i.prepTimeMinutes + i.cookTimeMinutes }}min</span></p>
          <div class="skillWrap">
            <label v-for="tag in i.tags" :key="tag + 'tag'">#{{ tag }}</label>
          </div>
          <p class="ingredients">
            Ingredients
            <span>
              {{ i.ingredients.join(', ') }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
