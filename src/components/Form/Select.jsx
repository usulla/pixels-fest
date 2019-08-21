import React, { Component } from "react";
import style from "./select.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { withTranslation } from "react-i18next";
class Select extends React.Component {
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
            <label for={this.props.name}>
                <span>{title}</span>
                <select
                    value={this.state[nameState]}
                    onChange={this.handleChange}
                    name={this.props.name}
                >
                    {Object.keys(this.props.options).map(
                        (li, index) => (
                            <option
                                value={i18n.t(
                                    `dataApply.category_options.${index}.value`
                                )}
                            >
                                {i18n.t(
                                    `dataApply.category_options.${index}.title`
                                )}
                            </option>
                        )
                    )}
                </select>
            </label>
        );
    }
}
export default Select;
