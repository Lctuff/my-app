import React, { Component } from "react";
import Table from "./common/table";
class CartTable extends Component {
  columns = [
    {
      path: "image",
      label: "",
      content: (item) => <img src={item.image} width="250" />,
    },
    { path: "name", label: "Product" },
    { path: "description", label: "Description" },
    { path: "price", label: "Price", content: (item) => <p>${item.price}</p> },
    {
      path: "quantity",
      label: "Amount in stock",
    },
  ];

  render() {
    const { items } = this.props;
    return (
      <Table
        columns={this.columns}
        data={items}
        sortColumn={this.props.sortColumn}
        onSort={this.props.onSort}
      />
    );
  }
}

export default CartTable;
