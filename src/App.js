import React, { Component } from 'react'
import { Row, Container, Col } from 'reactstrap'
import CategoryList from './CategoryList'
import Navi from './Navi'
import CartList from './CartList'
import ProductList from './ProductList'
import NotFound from './NotFound'
import alertify from 'alertifyjs'
import { Route, Switch } from 'react-router-dom'
import FormDemo1 from './FormDemo1'
import FormDemo2 from './FormDemo2'

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }

  componentDidMount() {
    this.getProducts(); //apiden gelen verileri çeker
  }

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url) // bir api calistir
      .then(response => response.json()) //apiden gelen(response) jsona dondur
      .then(data => this.setState({ products: data })); //gelen veriyi state.categories verisi yapıyoruz
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addaetItem = newCart.find(c => c.product.id === product.id);
    if (addaetItem) {
      addaetItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 1.5); //alertify.alertifyType(messaj, time)
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id) //gelen id den farkli olanlari alp newCarta alıyor
    this.setState({ cart: newCart })
    alertify.error(product.productName + " removed from cart!", 1.5);
  }

  render() {
    let titleCategoryList = { title: "CategoryList" };
    let titleProductList = { title: "ProductList" };
    return (
      <div className="App">
        <Container>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={titleCategoryList} />
            </Col>
            <Switch> {/*//Routeleri sırasiyla geziyor */}
              <Route exact path="/" render={props => (
                <Col xs="9">
                  <ProductList
                    {...props} //propların bir kopyasını al öyle gönder
                    addToCart={this.addToCart}
                    products={this.state.products}
                    currentCategory={this.state.currentCategory}
                    info={titleProductList} />
                </Col>)
              } />
              <Route exact path="/cart" render={props => (
                <Col xs="9">
                  <CartList
                    {...props} //propların bir kopyasını al öyle gönder
                    removeFromCart={this.removeFromCart}
                    cart={this.state.cart}
                  />
                </Col>)} />
              <Route path="/form1" component={FormDemo1}></Route>
              <Route path="/form2" component={FormDemo2}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Row>
        </Container>
      </div>
    );
  }
}
