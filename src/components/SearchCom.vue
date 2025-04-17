<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
import filterStore from '@/stores/filterStore';

export default {
  data: () => ({
    currentPage: 1,
  }),
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
    ...mapActions(filterStore, ['filterData']),
    // switchPage(page) {
    //   this.currentPage = page;
    // },
    searchFunc() {
      this.currentPage = 1;
    }
  },
  computed: {
    ...mapState(recipeStore, ['recipes']),
    ...mapWritableState(filterStore, ['filterRecipes' ,'searchData']),
  },
}

</script>
<template>
  <div class="searchWrap">
    <input type="text" class="search" id="search" placeholder="search" v-model="searchData" />
    <button name="button" type="submit" @click="filterData">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
        class="mise-icon mise-icon-search-unselected">
        <path stroke="currentColor" stroke-width="1.5" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 15 5 5">
        </path>
      </svg>
    </button>
  </div>
</template>
