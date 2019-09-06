import React, { Component } from "react";
import style from "./result.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { withTranslation } from "react-i18next";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = { success: true };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [this.props.name]: event.target.value });
    }
    componentDidUpdate() {
        if (!this.props.isMobile) {
            var pageHeight = document
                .querySelector("#apply")
                .getBoundingClientRect().height;
            document.querySelector(".pages").style.height = `${pageHeight +
                207}px`;
        }
    }

    render() {
        const { t } = this.props;
        const requestNumber = this.props.requestNumber;
        const successStatus = this.props.success;
        const errors = this.props.errors;
        if (successStatus) {
            return (
                <div className="outer_block_result">
                    <div className="inner_block_result">
                        <div>{i18n.t(`dataApply.success_text1`)}</div>
                        <div>
                            {i18n.t(`dataApply.success_text2`)}
                            <span> {`#${requestNumber}`}</span>
                        </div>
                        <div>{i18n.t(`dataApply.success_text3`)}</div>
                        <p>{i18n.t(`dataApply.success_text4`)}</p>
                        <p>
                            {i18n.t(`dataApply.success_text5`)}{" "}
                            <a href="mailto:support@pixelsfest.com">
                                support@pixelsfest.com
                            </a>
                        </p>
                    </div>
                </div>
            );
        }
        return (
            <div className="outer_block_result">
                <div className="inner_block_result">
                    {errors.map((error, index) => (
                        <div key={index} className="result-error">
                            {error}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default withTranslation()(Result);
