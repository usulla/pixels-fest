import React, { Component } from "react";

class addInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { [props.name]: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [this.props.name]: event.target.value });
    }
    render() {
        const nameState = this.props.name;
        const title = this.props.title;
        const required = this.props.isRequired ? this.props.isRequired : null;
        const type = this.props.type ? this.props.type : "text";
        const placeholder = this.props.iSplaceholder
            ? this.props.iSplaceholder
            : null;
        return (
            <label htmlFor={this.props.name}>
                <span>{title}</span>
                <input
                    type={type}
                    name={this.props.name}
                    value={this.state[nameState]}
                    onChange={this.handleChange}
                    required={required}
                    placeholder={placeholder}
                />
            </label>
        );
    }
}
export default addInput;
