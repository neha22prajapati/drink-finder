export const SET_RECIPES = "SET_RECIPES";
export const FAV_RECIPES = "FAV_RECIPES";
export const REMOVE_FAV = "REMOVE_FAV";

export function setRecipes(item) {
  const action = {
    type: SET_RECIPES,
    item,
  };
  return action;
}

export function favRecipe(recipe) {
  const action = {
    type: FAV_RECIPES,
    recipe,
  };
  return action;
}

export function removeFavRecipe(recipe) {
  const action = {
    type: REMOVE_FAV,
    recipe,
  };
  return action;
}
