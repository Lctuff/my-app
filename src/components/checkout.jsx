import React, { Component } from "react";
class Checkout extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onCheckout()}
        className="btn btn-primary"
      >
        Checkout
      </button>
    );
  }
}

export default Checkout;
