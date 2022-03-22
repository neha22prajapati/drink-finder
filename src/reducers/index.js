import { combineReducers } from "redux";
import { SET_RECIPES, FAV_RECIPES, REMOVE_FAV } from "../actions";

function recipes(state = [], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.item;
    default:
      return state;
  }
}

function favRecipes(state = [], action) {
  switch (action.type) {
    case FAV_RECIPES:
      state = [
        ...state.filter((f) => f.idDrink !== action.recipe.idDrink),
        action.recipe,
      ];
      return state;
    case REMOVE_FAV:
      let fav = state.filter((r) => r.idDrink !== action.recipe.idDrink);
      return fav;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  recipes,
  favRecipes,
});

export default rootReducer;
