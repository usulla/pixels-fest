import React, { Component } from "react";
import style from "./select.scss";
import Select from "react-select";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { withTranslation } from "react-i18next";

class MySelect extends React.Component {
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
        const options = Object.keys(this.props.options).map((item, index) => ({
            value: i18n.t(`dataApply.category_options.${index}.value`),
            label: i18n.t(`dataApply.category_options.${index}.label`)
        }));
        const customStyles = {
            borderRadius: 0,
            border: "1px solid #000",
            padding: 10,
            height: 41,
            option: (provided, state) => ({
                ...provided,
                border: "1px solid #000",
                color: !state.isSelected ? "#000" : "#fff",
                background: !state.isSelected ? "#fff" : "#000",
                padding: 10,
                height: 41
            })
        };
        return (
            <label for={this.props.name}>
                <span>{title}</span>
                <Select options={options} styles={customStyles} />
            </label>
        );
    }
}
export default MySelect;
