export const SURPRISE_CLICK = 'SURPRISE_CLICK';
export const surpriseClick = () => ({
  type: SURPRISE_CLICK
})

export const VIEW_ALL_RECIPES = 'VIEW_ALL_RECIPES';
export const allRecipes = () => ({
  type: VIEW_ALL_RECIPES
})

export const SEARCH_CLICK = 'SEARCH_CLICK';
export const searchClick = () => ({
  type: SEARCH_CLICK
})

export const HOME_CLICK = 'HOME_CLICK';
export const homeClick = () => ({
  type: HOME_CLICK 
})

export const TOGGLE_EXPAND = 'TOGGLE_EXPAND';
export const toggleExpand = (id) => ({
  type: TOGGLE_EXPAND,
  id 
})

export const TOGGLE_EXPAND_SEARCH = 'TOGGLE_EXPAND';
export const toggleExpandSearch = (id) => ({
  type: TOGGLE_EXPAND,
  id 
})