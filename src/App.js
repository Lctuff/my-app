import "./App.css";
import Store from "./components/store";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import Cart from "./components/cart";
import { Component } from "react";
import { getProducts } from "./services/ItemsData";
import _ from "lodash";
import { paginate } from "./utils/paginate";

class App extends Component {
  state = {
    items: [],
    currentPage: 1,
    pageSize: 3,
    sortColumn: { path: "name", order: "asc" },
    prices: [],
    selectedPrice: null,
    cartItems: [],
  };

  componentDidMount() {
    const prices = [
      { name: "Any Price" },
      { name: "Under $20", lowerPrice: 0, higherPrice: 19.99 },
      { name: "$20-$40", lowerPrice: 20, higherPrice: 40 },
      { name: "$50 & above", lowerPrice: 50, higherPrice: 20000 },
    ];
    this.setState({ items: getProducts(), prices });
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handlePriceSelect = (price) => {
    this.setState({
      selectedPrice: price,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleAddToCart = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    const cartItems = [items[index], ...this.state.cartItems];
    this.setState({ cartItems });
  };
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedPrice,
      items: allItems,
      sortColumn,
    } = this.state;
    let filtered = allItems;
    if (selectedPrice && selectedPrice.higherPrice)
      filtered = allItems.filter(
        (i) =>
          i.price <= selectedPrice.higherPrice &&
          i.price >= selectedPrice.lowerPrice
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const items = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: items };
  };

  render() {
    const { totalCount, data: items } = this.getPageData();
    return (
      <div>
        <NavBar />
        <br />
        <div className="container">
          <Switch>
            <Route
              path="/store"
              render={(props) => (
                <Store
                  items={items}
                  itemsCount={totalCount}
                  currentPage={this.state.currentPage}
                  pageSize={this.state.pageSize}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                  prices={this.state.prices}
                  onItemSelect={this.handlePriceSelect}
                  selectedItem={this.state.selectedPrice}
                  onPageChange={this.handlePageChange}
                  onAddToCart={this.handleAddToCart}
                  {...props}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <Cart
                  items={this.state.cartItems}
                  sortColumn={this.state.sortColumn}
                  onSort={this.handleSort}
                />
              )}
            />
            <Redirect from="/" to="/store" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
