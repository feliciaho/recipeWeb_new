import { defineStore } from 'pinia'
import recipeStore from '@/stores/recipeStore'
export default defineStore('favoriteStore', {
  // data
  state: () => ({
    favoriteRecipes: [],
  }),
  // methods
  actions: {
    addFavorite(recipeAddId) {
      const recipeInfo = recipeStore();
      // 檢查此食譜是否已經存在於收藏中
      const existingRecipe = this.favoriteRecipes.find((item) => item.id === recipeAddId)
      // 如果已存在則return
      if (existingRecipe) {
        console.log('已存在於收藏中')
        console.log(this.isFavorite);
        return
      } else{
        // 如果不存在則從食譜列表中找到該食譜
        const recipe = recipeInfo.recipes.find((item) => item.id === recipeAddId)
        // 如果不存在則加入收藏
        this.favoriteRecipes.push(recipe);
      }
    },
    removeFavorite(recipeRemoveId) {
      // const recipeInfo = recipeStore();
      // 檢查此食譜是否已經存在於收藏中
      const existingRecipe = this.favoriteRecipes.find((item) => item.id === recipeRemoveId);
      // 如果不存在則return
      if(!existingRecipe){
        return
      // 如果存在則從收藏中刪除
      }else{
        console.log('已從收藏中刪除')
        const index = this.favoriteRecipes.find((item) => item.id === recipeRemoveId);
        this.favoriteRecipes.splice(index, 1);
      }
    }
  },
})
