import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, NavItem, NavLink } from "reactstrap";
export default class CartSummary extends Component {
    renderSummary() {
        return (<UncontrolledButtonDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Yout Cart - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map(cartItem => (
                    <DropdownItem key={cartItem.product.id}>
                        <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>Del</Badge>
                        {cartItem.product.productName}
                        <Badge color="success">{cartItem.quantity}</Badge>
                    </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart">Go to cart</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledButtonDropdown>)
    }

    renderEmptyCart() {
        return (<NavItem>
            <NavLink>Empty Cart</NavLink>
        </NavItem>)
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    };
}
