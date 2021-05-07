import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
export default class CartList extends Component {
    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>category id</th>
                        <th>productName</th>
                        <th>quantityPerUnit</th>
                        <th>unitPrice</th>
                        <th>unitsInStock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItim => (
                            <tr key={cartItim.product.id}>
                                <td>{cartItim.product.id}</td>
                                <td>{cartItim.product.categoryid}</td>
                                <td>{cartItim.product.productName}</td>
                                <td>{cartItim.product.quantityPerUnit}</td>
                                <td>{cartItim.product.unitPrice}</td>
                                <td>{cartItim.product.unitsInStock}</td>
                                <td>
                                    <Button color="danger" onClick={() => this.props.removeFromCart(cartItim.product)}>Remove</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
