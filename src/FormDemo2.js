import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
    state = { email: "", password: "", city: "Ankara", description: "" }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " added to db!");
        alertify.success(this.state.password + " added to db!");
        alertify.success(this.state.city + " added to db!");
        alertify.success(this.state.description + " added to db!");
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter mail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            onChange={this.handleChange}
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Enter description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>Sivas</option>
                            <option>İzmir</option>
                            <option>Antalya</option>
                            <option>Muğla</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
