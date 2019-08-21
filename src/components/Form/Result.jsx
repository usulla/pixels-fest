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
    render() {
        const { t } = this.props;
        const numberApply = 5;
        return (
            <div className="outer_block_result">
                <div className="inner_block_result">
                    <div>{i18n.t(`dataApply.success_text1`)}</div>
                    <div>
                        {i18n.t(`dataApply.success_text2`)}
                        <span> {`#${numberApply}`}</span>
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
}
export default withTranslation()(Result);
