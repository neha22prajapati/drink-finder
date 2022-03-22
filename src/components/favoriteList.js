import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeItem from "./recipeItem";

class FavoriteList extends React.Component {
  render() {
    return (
      <div>
        <h4 className="link">
          <Link to="/">Home</Link>
        </h4>
        <h2>Favorite Drinks</h2>
        {this.props.favRecipes.length > 0 ? (
          this.props.favRecipes.map((f, i) => (
            <RecipeItem key={i} recipe={f} favorite={false} />
          ))
        ) : (
          <h3>No Favorite Drink Added!</h3>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favRecipes: state.favRecipes,
  };
}

export default connect(mapStateToProps, null)(FavoriteList);
