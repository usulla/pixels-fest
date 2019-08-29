import React, { Component } from "react";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
class MySelect2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { [props.name]: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [this.props.name]: event.target.value });
    }
    render() {
        const { t } = this.props;
        const nameState = this.props.name;
        const title = this.props.title;
        return (
            <label htmlFor={this.props.name}>
                <span>{title}</span>
                <div className="select">
                    <select
                        value={this.state[nameState]}
                        onChange={this.handleChange}
                        name={this.props.name}
                    >
                        {Object.keys(this.props.options).map((li, index) => (
                            <option key={index}
                                value={i18n.t(
                                    `dataApply.category_options.${index}.value`
                                )}
                            >
                                {i18n.t(
                                    `dataApply.category_options.${index}.title`
                                )}
                            </option>
                        ))}
                    </select>
                </div>
            </label>
        );
    }
}
export default MySelect2;
