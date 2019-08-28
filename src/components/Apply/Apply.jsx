import React, { Component } from "react";
import style from "./apply.scss";
import style2 from "../Form/form.scss";
import Input from "../Form/Input.jsx";
import MySelect2 from "../Form/MySelect2.jsx";
import Textarea from "../Form/Textarea.jsx";
import Checkbox from "../Form/Checkbox.jsx";
import Result from "../Form/Result.jsx";
import { withTranslation } from "react-i18next";
class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResult: false,
            success: true,
            errors: [],
            requestNumber: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formElement = document.querySelector("form");
        const formData = new FormData(formElement);
        const url = "//pixelsfest.com/works/add";
        //send to server form data
        fetch(url, {
            method: "post",
            body: formData
        })
            .then(response => {
                if (response.status !== 200) {
                    console.log(
                        "Looks like there was a problem. Status Code: " +
                            response.status
                    );
                    this.setState({ success: false });
                    this.setState({
                        errors: ["Пожалуйста, повторите запрос позже"]
                    });
                    return;
                }
                response.json().then((data) => {
                    this.setState({ showResult: true });
                    this.setState({ success: data.success });
                    if (data.requestNumber) {
                        this.setState({ requestNumber: data.requestNumber });
                    }
                    if (data.errors) {
                        this.setState({ errors: data.errors });
                    }
                });
            })
            .catch(
                (err) => {
                    console.log("Fetch Error :-S", err);
                }
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
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-title">
                                {t("dataApply.form-title")}
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.name")}
                                    name={"author"}
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
                                    isRequired={"required"}
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
                                <MySelect2
                                    options={this.props.category_options}
                                    title={t("dataApply.category")}
                                    name={"category_id"}
                                />
                            </div>
                            <div className="form-row">
                                <Input
                                    title={t("dataApply.worktitle")}
                                    name={"worktitle"}
                                    isRequired={"required"}
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
                            {!this.state.showResult || (this.state.showResult && !this.state.success) ? (
                            <input
                                type="submit"
                                className="send-form"
                                value={t("dataApply.button-text")}
                            />
                            ) : null}
                            {this.state.showResult ? (
                                <Result
                                    success_text={this.props.success_text}
                                    success={this.state.success}
                                    requestNumber={this.state.requestNumber}
                                    errors={this.state.errors}
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
