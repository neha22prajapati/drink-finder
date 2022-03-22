import React from "react";
import { connect } from "react-redux";
import { setRecipes } from "../actions";
import { Form, Button } from "react-bootstrap";
import "../styles/index.css";

class SearchRecipes extends React.Component {
  constructor() {
    super();

    this.state = {
      drink: "",
    };
  }

  search() {
    let { drink } = this.state;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((r) =>
        r.drinks.map(
          (d) => (d.favorite = false),
          this.props.setRecipes(r.drinks)
        )
      );
  }
  render() {
    return (
      <Form inline="true">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search Drink"
            onChange={(e) => this.setState({ drink: e.target.value })}
          />
        </Form.Group>
        <Button className="button" onClick={() => this.search()}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);
