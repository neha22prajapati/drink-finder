import React, { Component } from "react";
import "../styles/index.css";
import { favRecipe, removeFavRecipe } from "../actions";
import { connect } from "react-redux";

class RecipeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFav: this.props.recipe.favorite,
    };
  }

  favorite(recipe) {
    if (!this.state.isFav) {
      this.props.favRecipe(recipe);
      this.props.setFav(recipe);
    } else {
      this.props.removeFavRecipe(recipe);
      this.props.removeFav(recipe);
    }
    this.setState({ isFav: !this.state.isFav });
  }

  render() {
    let { recipe } = this.props;
    const filledStar = "\u2605"; //&#9733;
    const star = "\u2606"; //&#9734;
    return (
      <div className="recipe-item">
        {this.props.favorite ? (
          <h1
            onClick={() => this.favorite(recipe)}
            className={`star ${this.state.isFav ? "fill" : ""}`}
          >
            {this.state.isFav ? filledStar : star}
          </h1>
        ) : (
          <div></div>
        )}

        <div className="recipe-text">
          <a target="_blank" rel="noreferrer" href={recipe.strDrinkThumb}>
            <h4>{recipe.strDrink}</h4>
          </a>
          <p>
            {recipe.strIngredient1}, {recipe.strIngredient2},{" "}
            {recipe.strIngredient3}
          </p>
        </div>
        <img
          src={recipe.strDrinkThumb}
          alt={recipe.strDrink}
          className="recipe-image"
        />
      </div>
    );
  }
}

export default connect(null, { favRecipe, removeFavRecipe })(RecipeItem);
