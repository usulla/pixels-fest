import React, { Component } from "react";
import style from "./apply.scss";
import style2 from "../Form/form.scss";
import Input from "../Form/Input.jsx";
import MySelect from "../Form/MySelect.jsx";
import Textarea from "../Form/Textarea.jsx";
import Checkbox from "../Form/Checkbox.jsx";
import Result from "../Form/Result.jsx";
import { withTranslation } from "react-i18next";
class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = { success: true };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formElement = document.querySelector("form");
        const formData = new FormData(formElement);
        const url = window.location.href;
        //send to server form data
        fetch(url, {
            method: "post",
            body: formData
        })
            .then(function(response) {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " +
                            response.status
                    );
                    this.setState({ success: true });
                    return;
                }
                response.json().then(function(data) {
                    console.log(data);
                });   
            })
            .catch(
                function(err) {
                    console.log("Fetch Error :-S", err);
                }.bind(this)
            );
    }
    render() {
        const { t } = this.props;
        const order = this.props.order;
        return (
            <div className="apply-page page" id="apply" data-order={order}>
                <div className="mobile-title-page">{t("dataApply.title")}</div>
                <div className="apply-page__content page__content">
                    <div className="form-content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-title">
                                {t("dataApply.form-title")}
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.name")}
                                    name={"title"}
                                    isRequired={"required"}
                                />
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.email")}
                                    name={"email"}
                                    type={"email"}
                                    isRequired={"required"}
                                />
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.country")}
                                    name={"country"}
                                />
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.website")}
                                    name={"website"}
                                />
                            </div>
                            <div className="form-row">
                                <Textarea
                                    title={t("dataApply.shortbiography")}
                                    name={"shortbiography"}
                                    rows={10}
                                    iSplaceholder={t(
                                        "dataApply.work_short_desc_pl"
                                    )}
                                />
                            </div>
                            <div className="form-row">
                                <MySelect
                                    options={this.props.category_options}
                                    title={t("dataApply.category")}
                                    name={"category"}
                                />
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.worktitle")}
                                    name={"worktitle"}
                                />
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.worktitle_en")}
                                    name={"worktitle_en"}
                                />
                            </div>
                            <div className="form-row">
                                <Textarea
                                    title={t("dataApply.work_short_desc")}
                                    name={"work_short_desc"}
                                    rows={10}
                                    iSplaceholder={t(
                                        "dataApply.work_short_desc_pl"
                                    )}
                                />
                            </div>
                            <div className="form-row">
                                <Checkbox
                                    title={t("dataApply.agreement1")}
                                    name="agreement1"
                                    isRequired={"required"}
                                />
                            </div>
                            <input
                                type="submit"
                                className="send-form"
                                value={t("dataApply.button-text")}
                            />
                            {this.state.success ? (
                                <Result
                                    success_text={this.props.success_text}
                                />
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Apply);
