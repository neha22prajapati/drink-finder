import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeItem from "./recipeItem";

class RecipeList extends React.PureComponent {
  constructor() {
    super();

    this.setFav = this.setFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
    this.allRecipes = [];
  }
  setFav(recipe) {
    this.allRecipes = [...this.props.recipes];
    for (let i = 0; i < this.allRecipes.length; i++) {
      if (
        this.allRecipes[i].idDrink === recipe.idDrink ||
        this.allRecipes[i].favorite === true
      ) {
        this.allRecipes[i].favorite = true;
      } else {
        this.allRecipes[i].favorite = false;
      }
    }
    return this.allRecipes;
  }
  removeFav(recipe) {
    this.allRecipes = [...this.props.recipes];
    for (let i = 0; i < this.allRecipes.length; i++) {
      if (this.allRecipes[i].idDrink === recipe.idDrink) {
        this.allRecipes[i].favorite = false;
      }
    }
    return this.allRecipes;
  }

  render() {
    let recipes;
    if (this.allRecipes && this.allRecipes.length > 0) {
      recipes = this.allRecipes;
    } else {
      recipes = this.props.recipes;
    }
    return (
      <div>
        <h4 className="link">
          <Link to="/fav">Favorites</Link>
        </h4>
        {recipes.map((r, i) => (
          <RecipeItem
            key={i}
            recipe={r}
            favorite={true}
            allRecipes={this.props.recipes}
            setFav={this.setFav}
            removeFav={this.removeFav}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(RecipeList);
