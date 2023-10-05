import React, { Component } from "react";
class Checkout extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onCheckout()}
        className="btn btn-primary position-absolute bottom-0 end-0 translate-middle-x"
      >
        Checkout
      </button>
    );
  }
}

export default Checkout;
