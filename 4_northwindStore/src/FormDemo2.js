import alertify from "alertifyjs";
import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { title: "", category: "", price: "", quantity: "", stock: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.title + " added to db!", 2);
    alertify.success(this.state.category + " added to db!", 2);
    alertify.success(this.state.price + " added to db!", 2);
    alertify.success(this.state.quantity + " added to db!", 2);
    alertify.success(this.state.stock + " added to db!", 2);
  };
  componentDidMount() {
    this.props.onNavigateToForm();
  }
  render() {
    return (
      <div>
        <h2>Add</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Product Name</Label>
            <Input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input
              type="select"
              name="category"
              id="category"
              onChange={this.handleChange}
            >
              <option disabled selected>
                Seçiniz
              </option>
              <option>Beverages</option>
              <option>Condiments</option>
              <option>Confections</option>
              <option>Dairy Products</option>
              <option>Grains/Cereals</option>
              <option>Meat/Poultry</option>
              <option>Produce</option>
              <option>Seafood</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="price">Unit Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="quantity">Quantity Per Unit</Label>
            <Input
              type="text"
              name="quantity"
              id="quantity"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="stock">Unit In Stock</Label>
            <Input
              type="number"
              name="stock"
              id="stock"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
