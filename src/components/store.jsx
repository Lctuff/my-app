import React, { Component } from "react";
import { getProducts } from "../services/ItemsData";
import ItemsTable from "./itemsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";

class Store extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.props.prices}
            textProperty="name"
            titleProperty="Price"
            onItemSelect={this.props.onItemSelect}
            selectedItem={this.props.selectedItem}
          />
        </div>
        <div className="col">
          <ItemsTable
            items={this.props.items}
            onSort={this.props.onSort}
            sortColumn={this.props.sortColumn}
            onAddToCart={this.props.onAddToCart}
          />
          <Pagination
            itemsCount={this.props.itemsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.props.onPageChange}
          />
        </div>
      </div>
    );
  }
}

export default Store;
