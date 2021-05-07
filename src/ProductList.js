import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
export default class ProductList extends Component {
    render() {
        return (
            <div>
                <p> {this.props.info.title} Component - {this.props.currentCategory} </p>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>productName</th>
                            <th>quantityPerUnit</th>
                            <th>unitPrice</th>
                            <th>unitsInStock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
                                    <th><Button onClick={() => this.props.addToCart(product)} color="info">Add</Button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
