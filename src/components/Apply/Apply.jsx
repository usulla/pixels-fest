import React, { Component } from "react";
import style from "./apply.scss";
import Input from "../Form/Input.jsx";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { withTranslation } from "react-i18next";
class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("Отправленное имя: " + this.state.value);
        event.preventDefault();
    }
    render() {
        console.log(this.props.dataApply, "ii");
        const { t } = this.props;
        return (
            <div className="apply-page page" id="apply">
                <div className="mobile-title-page">{t("dataApply.title")}</div>
                <div className="apply-page__content page__content">
                    <div className="form-content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <Input title={t("dataApply.name")} />
                            </div>
                            <div className="form-row">
                                <Input title={t("dataApply.email")} />
                            </div>
                            <div className="form-row">
                                <Input title={t("dataApply.country")} />
                            </div>
                            <div className="form-row">
                                <Input title={t("dataApply.website")} />
                            </div>
                            <div className="form-row">
                                <Input title={t("dataApply.shortbiography")} />
                            </div>
                            <div className="form-row">
                                <label>
                                    {t("dataApply.category")}
                                    <select
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    >
                                        {Object.keys(
                                            this.props.category_options
                                        ).map((li, index) => (
                                            <option
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
                                </label>
                            </div>
                            <div className="form-row">
                                <Input title={t("dataApply.worktitle")} />
                            </div>
                            <div className="form-row">
                                <Input title={t("dataApply.worktitle_en")} />
                            </div>
                            <div className="form-row">
                                <label>
                                    {t("dataApply.work_short_desc")}
                                    <textarea
                                        rows="10"
                                        cols="45"
                                        name="text"
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div className="form-row">
                                <Input title={t("dataApply.address")} />
                            </div>
                            <div className="form-row">
                            <label>
                                    {t("dataApply.agreement1")}
                                <input
                                    type="checkbox"
                                    id="agreement1"
                                    name="agreement1"
                                    value="agreement"
                                />
                                    </label>
                            </div>
                            <div className="form-row">
                            <label>
                                    {t("dataApply.agreement2")}
                                <input
                                    type="checkbox"
                                    id="agreement2"
                                    name="agreement3"
                                    value="agreemen2"
                                />
                            </label>
                            </div>
                            <input type="submit" value="Отправить" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Apply);
