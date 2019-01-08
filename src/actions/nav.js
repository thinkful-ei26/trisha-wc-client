export const INFO_CLICK = 'INFO_CLICK';
export const infoClick = () => ({
  type: INFO_CLICK
})

export const GOT_IT = 'GOT_IT';
export const gotIt = () => ({
  type: GOT_IT 
})

//add recipe takes in the data from the redux form
export const ADD_RECIPE = 'ADD_RECIPE';
export const addRecipe = data => ({
  type: ADD_RECIPE,
  data
})

export const CANCEL_ADD_RECIPE = ' CANCEL_ADD_RECIPE';
export const cancel = () => ({
  type: CANCEL_ADD_RECIPE 
})

export const SURPRISE_CLICK = 'SURPRISE_CLICK';
export const surpriseClick = () => ({
  type: SURPRISE_CLICK
})

export const VIEW_ALL_RECIPES = 'VIEW_ALL_RECIPES';
export const allRecipes = () => ({
  type: VIEW_ALL_RECIPES
})