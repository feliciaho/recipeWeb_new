<template>
  <div class="project" v-for="i in recipes" :key="i.id +'recipe'">
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
        <label v-for="tag in i.tags" :key="tag +'tag'">{{ tag }}</label>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(recipeStore, ['recipes'])
  },
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
  },
  created() {
    this.fetchApi();
  },
}
</script>
