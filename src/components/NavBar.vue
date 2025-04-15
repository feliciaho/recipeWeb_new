<script>
//HelloWorld.vue
export default{
  props:{
    msg: String
  },
  data(){
    return{
      count: 0
    }
  }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="searchWrap">
          <!-- <input type="text" class="search" id="search" placeholder="search" v-model="searchData"/> -->
          <!-- <button name="button" type="submit" @click="searchFunc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              class="mise-icon mise-icon-search-unselected"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m15 15 5 5"
              ></path>
            </svg>
          </button> -->
        </div>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item"><RouterLink to="/allRecipe">All Recipe</RouterLink></li>
            <li class="nav-item"><RouterLink to="/popular">Popular</RouterLink></li>
            <li class="nav-item"><RouterLink to="/myFavorite">My Favorite</RouterLink></li>
          </ul>
        </div>
      </nav>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
