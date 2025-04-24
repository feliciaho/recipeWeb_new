<script>
import SearchCom from '@/components/SearchCom.vue';
import { mapActions, mapState } from 'pinia';
import recipeStore from '@/stores/recipeStore';
import { Collapse } from 'bootstrap';

export default {
  components: { SearchCom },
  computed: {
    ...mapState(recipeStore, ['recipes']),
  },
  methods: {
    ...mapActions(recipeStore, ['fetchApi']),
    toogleNavbar() {
      // 手動切換navbar-collapse的顯示狀態
      // 由於增加router後navBar無法正開合
      const navbarCollapse = document.querySelector('#navbarNavDropdown');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    },
    // 路由影響collapse 無法正常關閉
    closeNavbar() {
      //由於router 會導致navbar-collapse無法正常關閉
      //所以這裡使用bootstrap 5.0 的 collapse API 來手動關閉
      const navbarCollapse = document.querySelector('#navbarNavDropdown');
      if (navbarCollapse) {
        const bsCollapse = Collapse.getInstance(navbarCollapse) || new Collapse(navbarCollapse);
        bsCollapse.hide(); // 使用 Bootstrap 的 API 隱藏
      };
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbarLogo">
      <RouterLink to ="/homeView">
        <img src="../images/logo.png">Felicia Ho's Recipes
      </RouterLink>
    </div>
    <button class="navbar-toggler" id="toogleButton" type="button" aria-expanded="false" aria-label="Toggle navigation"
      @click="toogleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/homeView" @click="closeNavbar">
            <img src="../images/home.png" width="25px">Home
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/popularView" @click="closeNavbar">
            <img src="../images/fire.png" width="25px">Popular Recipes
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/myFavoriteView" @click="closeNavbar">
            <img src="../images/addIcon.png" width="25px">My Favorites
          </RouterLink>
        </li>
      </ul>
      <SearchCom></SearchCom>
    </div>
  </nav>
</template>
