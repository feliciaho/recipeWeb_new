<script>
//app.vue
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
export default {
  components: {
    NavBar,
    Footer,
    RouterView
  }
}
</script>

<template>
  <body>
    <!-- <div id="tsparticles"></div> -->
    <NavBar></NavBar>
    <RouterView></RouterView>
    <Footer></Footer>
  </body>
</template>
