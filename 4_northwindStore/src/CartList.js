import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class CartList extends Component {
  componentDidMount() {
    this.props.onNavigateToCart();
  }
  renderCart() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    className=" bg-danger border-0 text-light"
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
