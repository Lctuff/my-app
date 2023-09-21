import React, { Component } from "react";
import Table from "./common/table";
import AddToCart from "./addToCart";
class ItemsTable extends Component {
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
    {
      key: "addtocart",
      content: (item) => (
        <AddToCart item={item} onAddToCart={this.props.onAddToCart} />
      ),
    },
  ];

  render() {
    const { items, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={items}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ItemsTable;
