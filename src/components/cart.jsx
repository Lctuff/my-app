import React, { Component } from "react";
import CartTable from "./cartTable";
import Checkout from "./checkout";

class Cart extends Component {
  state = {
    checkedout: false,
  };
  handleCheckout = () => {
    const checkedout = true;
    this.setState({ checkedout });
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <CartTable
            items={this.props.items}
            onSort={this.props.onSort}
            sortColumn={this.props.sortColumn}
          />
        </div>
        <div className="col-4">
          <Checkout onCheckout={this.handleCheckout} />
          <h1>{this.state.checkedout ? "Your Order Has Been Placed" : ""}</h1>
        </div>
      </div>
    );
  }
}

export default Cart;
