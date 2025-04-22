<script>
import recipeStore from '@/stores/recipeStore';
import favoriteStore from '@/stores/favoriteStore';
import paginationStore from '@/stores/paginationStore';

import { mapActions, mapState } from 'pinia';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(favoriteStore, ['favoriteRecipes']),
    ...mapState(recipeStore, ['recipes']),
    ...mapState(paginationStore, ['nowPageStore']),
  },
  methods: {
    ...mapActions(favoriteStore, ['addFavorite', 'removeFavorite']),
    ...mapActions(recipeStore, ['fetchApi']),
  },
};
</script>
<template>
  <section class="myFavorite" id="myFavorite">
    <h1 class="secTitle">My Favorites</h1>
    <h3 v-if="!favoriteRecipes.length">
      Add your favorite recipes to this list!
    </h3>
    <div class="homeRecipsWrap">
      <div class="homeRecipes" v-for="i in favoriteRecipes" :key="i.id + 'recipe'">
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
            <label class="remove" @click="removeFavorite(i.id)">
              <img src="../images/removeIcon.png" alt="remove to favorite" width="25px" />
              remove
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
