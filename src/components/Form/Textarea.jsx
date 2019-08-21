import React, { Component } from "react";
// import style from "./input.scss";
class Textarea extends React.Component {
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
        const rows = this.props.rows;
        const cols = this.props.cols;
        const placeholder = this.props.iSplaceholder
            ? this.props.iSplaceholder
            : null;
        return (
            <label for={this.props.name}>
                <span>{title}</span>
                <textarea
                    rows={rows}
                    cols={cols}
                    name={this.props.name}
                    value={this.state[nameState]}
                    onChange={this.handleChange}
                    placeholder={placeholder}
                />
            </label>
        );
    }
}
export default Textarea;
