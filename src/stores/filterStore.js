import { defineStore } from 'pinia'
import recipeStore from '@/stores/recipeStore';
export default defineStore('filterStore', {
  // data
  state: () => ({
    filterRecipes: [],
    // cacheSearch: "",
    searchData: "",
  }),
  // computed
  getters:{
    // searchFunc() {
    //   // this.currentPage = 1;
    //   this.cacheSearch = this.searchData;
    // },
  },
  // methods
  actions: {
    filterData() {
      // **********切記要用recipeStore()來取用整個實例*********
      // 如果searchData有值 則開始搜索過濾
      if (this.searchData) {
        // filter 搭配 includes 會回傳true 或 false
        // toLowerCase 是代表無論大小寫都匹配
        this.filterRecipes = recipeStore().recipes.filter((item) =>
          item.name.toLowerCase().includes(this.searchData.toLowerCase()),
        console.log(222),
        );
      }else{
      // 如果 searchData是空值則直接回傳一樣的產品列表
      this.filterRecipes = recipeStore().recipes;
      };
    },
  },
})
