import React, { Component } from "react";
import RecipeList from "./recipeList";
import SearchRecipes from "./SearchRecipes";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Drink Finder</h2>
        <SearchRecipes />
        <RecipeList />
      </div>
    );
  }
}

export default App;
