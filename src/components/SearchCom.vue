<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
import filterStore from '@/stores/filterStore';

export default {
  data: () => ({
  }),
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
    ...mapActions(filterStore, ['filterData']),
  },
  computed: {
    ...mapState(recipeStore, ['recipes']),
    ...mapWritableState(filterStore, ['filterRecipes', 'searchData']),
    // 這裡的showSearch是用來判斷當前路由是否為'/homeView'
    // 如果是'/homeView'，則顯示搜尋框
    showSearch() {
      return this.$route.path === '/homeView';
    },
  },
}

</script>
<template>
<div class="searchWrap" v-if="showSearch">
  <form @submit.prevent="filterData">  <!-- 加上.prevent -->
    <input
      type="text"
      class="search"
      id="search"
      placeholder="search"
      v-model="searchData"
    />
    <button type="submit">  <!-- 記得 type="submit" -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
        class="mise-icon mise-icon-search-unselected">
        <path stroke="currentColor" stroke-width="1.5" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 15 5 5">
        </path>
      </svg>
    </button>
  </form>
</div>

</template>
