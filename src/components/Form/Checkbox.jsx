import React, { Component } from "react";
// import style from "./input.scss";
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { [props.name]: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [this.props.name]: event.target.checked });
    }
    render() {
        const nameState = this.props.name;
        const title = this.props.title;
        const required = this.props.isRequired ? this.props.isRequired : null;
        return (
            <div className="checkbox-row"> 
            <input id={this.props.name} className="checkbox"
                    name={this.props.name}
                    type="checkbox"
                    checked={this.state[nameState]}
                    onChange={this.handleChange}
                    required={required}
            />
            <label for={this.props.name}>
                <span>{title}</span>
           </label>
           </div>
        );
    }
}
export default Checkbox;
