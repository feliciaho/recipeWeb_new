<script>
import RecipeCard from '@/components/RecipeCard.vue';
export default {
  components: {
    RecipeCard
  },
}
</script>

<template>
  <section class="allRecipe" id="allRecipe">
    <h1 class="secTitle">Find a recipe</h1>
    <div class="projectWrap">
       <RecipeCard></RecipeCard>
    </div>
  </section>
</template>
