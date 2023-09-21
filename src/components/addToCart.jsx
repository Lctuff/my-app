import React, { Component } from "react";
class AddToCart extends Component {
  render() {
    return (
      <button
        className="btn btn-primary"
        onClick={() => this.props.onAddToCart(this.props.item)}
      >
        Add To Cart
      </button>
    );
  }
}

export default AddToCart;
