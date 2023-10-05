import React, { Component } from "react";
import CartTable from "./cartTable";

class Cart extends Component {
  state = {
    checkedout: false,
    subtotal: 0.0,
    shipping: 0.0,
    tax: 0.0,
    total: 0.0,
  };
  handleCheckout = () => {
    const checkedout = true;
    this.setState({ checkedout });
  };

  componentDidMount() {
    let subtotal, shipping, tax, total;
    subtotal = 0;
    shipping = 0;
    tax = 0;
    total = 0;

    const items = [...this.props.items];
    items.map((item) => {
      subtotal += item.price;
      shipping += 1;
    });
    tax = (subtotal + shipping) * 0.061;
    total = subtotal + shipping + tax;

    this.setState({ subtotal, shipping, tax, total });
  }

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
        <div
          style={{ width: 350, height: 265 }}
          className="rounded-1 col-4 border bg-secondary-subtle position-relative"
        >
          <h4 className="mt-2 position-absolute top-0 start-50 translate-middle-x">
            Order Summary
          </h4>
          <div
            style={{ width: 300, height: 150 }}
            className="m-auto mt-5  border bg-white rounded"
          >
            <ul class="list-group">
              <li class="list-group-item">
                Subtotal: {this.state.subtotal.toFixed(2)}
              </li>
              <li class="list-group-item">
                Shipping: {this.state.shipping.toFixed(2)}
              </li>
              <li class="list-group-item">
                Sales Tax: {this.state.tax.toFixed(2)}
              </li>
              <li class="list-group-item">
                Total: {this.state.total.toFixed(2)}
              </li>
            </ul>
          </div>
          <button
            onClick={() => this.handleCheckout()}
            className="mb-2 ms-5 btn btn-primary position-absolute bottom-0 end-0 translate-middle-x"
          >
            Checkout
          </button>
          <h1 className="mt-5">
            {this.state.checkedout ? "Your Order Has Been Placed" : ""}
          </h1>
        </div>
      </div>
    );
  }
}

export default Cart;
