<script>
import SearchCom from '@/components/SearchCom.vue';
import { mapActions, mapState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
export default {
  components:{ SearchCom },
  data() {
    return {};
  },
  computed: {
    ...mapState(recipeStore, ['recipes'])
  },
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
  },

}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <SearchCom></SearchCom>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/">All Recipe</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/Popular">Popular</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/MyFavorite">My Favorite</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
