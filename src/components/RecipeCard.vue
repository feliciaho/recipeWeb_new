<script>
import { mapActions, mapState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
import filterStore from '@/stores/filterStore';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(recipeStore, ['recipes']),
    ...mapState(filterStore, ['filterRecipes'])
  },
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
    ...mapActions(filterStore, ['filterData'])
  },
  async mounted() {
    await this.fetchApi();
    this.filterData();
},
}
</script>
<template>
    <div class="project" v-for="i in filterRecipes" :key="i.id + 'recipe'">
    <!-- banner -->
    <div class="banner">
      <a target="_blank"> <img :src="i.image" /></a>
      <div class="mask">
        <label class="seemore">see more</label>
      </div>
    </div>
    <!-- text -->
    <div class="secText">
      <h2 class="projectTitle">{{ i.name }}</h2>
      <p>Rating<span>{{ i.rating }}</span></p>
      <div class="skillWrap">
        <label v-for="tag in i.tags" :key="tag + 'tag'">{{ tag }}</label>
      </div>
    </div>
  </div>
</template>

