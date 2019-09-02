import React, { Component } from "react";
import style from "./apply.scss";
import style2 from "../Form/form.scss";
import Input from "../Form/Input.jsx";
import MySelect2 from "../Form/MySelect2.jsx";
import Textarea from "../Form/Textarea.jsx";
import Checkbox from "../Form/Checkbox.jsx";
import CustomizedUpload from "../Form/CustomizedUpload";
import Result from "../Form/Result.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";

const LightTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: "#fff",
        color: "#000",
        border: "solid 1px #707070",
        boxShadow: "none",
        fontSize: ".9rem",
        borderRadius: "0px",
        fontFamily: "'FiveYearsLaterRegular', monospace, Roboto, sans-serif",
        top: "-10px"
    }
}))(Tooltip);

class Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResult: false,
            success: true,
            errors: [],
            requestNumber: null,
            files: [],
            maxFilesLength: 1,
            inputs: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.constructor.onFilesChoose = this.constructor.onFilesChoose.bind(
            this
        );
        this.constructor.onFileDelete = this.constructor.onFileDelete.bind(
            this
        );
    }
    addInput = e => {
        // const inputName = e.currentTarget.dataset.name;
        var newInput = "input-${this.state.inputs.length}";
        this.setState(prevState => ({
            inputs: prevState.inputs.concat([newInput])
        }));
        if (!this.props.isMobile) {
            var pageHeight = document
                .querySelector("#apply")
                .getBoundingClientRect().height;
            document.querySelector(".pages").style.height = `${pageHeight +
                207}px`;
        }
    };
    static onFileDelete(id) {
        const { validate } = Apply;
        const { files } = this.state;
        this.setState(
            {
                files: files.filter(file => file.id !== id)
            },
            () => {
                document.getElementById(id).value = "";
            }
        );
    }
    static onFilesChoose(e) {
        const { validate } = Apply;
        const { files, maxFilesLength } = this.state;

        let readyFiles = Array.from(e.target.files).filter(file =>
            file.type.includes("video")
        );
        readyFiles.forEach(file => (file.id = e.target.id));
        readyFiles = files.concat(readyFiles).slice(0, maxFilesLength);

        if (readyFiles.length) this.setState({ files: readyFiles }, validate);
    }
    handleSubmit(event) {
        event.preventDefault();
        const formElement = document.querySelector("form");
        const formData = new FormData(formElement);
        const currentLangBtn = document.querySelector(
            ".switch-language--button.active"
        );
        var currentLang = "ru";
        currentLangBtn.classList.contains("button-ru")
            ? (currentLang = "ru")
            : (currentLang = "en");
        formData.append("lang", currentLang);
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
                response.json().then(data => {
                    this.setState({ showResult: true });
                    this.setState({ success: data.success });
                    if (data.requestNumber) {
                        this.setState({ requestNumber: data.requestNumber });
                    }
                    if (data.errors) {
                        this.setState({ errors: data.errors });
                    }
                    if (data.success) {
                        document.form.reset();
                    }
                });
            })
            .catch(err => {
                console.log("Fetch Error :-S", err);
            });
    }
    render() {
        const { onFilesChoose, onFileDelete } = Apply;
        const { files, maxFilesLength } = this.state;
        const { t } = this.props;
        const order = this.props.order;
        const { classes } = this.props;
        return (
            <div className="apply-page page" id="apply" data-order={order}>
                <div className="mobile-title-page">{t("dataApply.title")}</div>
                <div className="apply-page__content page__content">
                    <div className="form-content">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-title">
                                {t("dataApply.form-title")}
                            </div>
                            <div className="form-row with-add-btn">
                                <Input
                                    title={t("dataApply.name")}
                                    name={"author[]"}
                                    isRequired={"required"}
                                />
                                <LightTooltip
                                    title={t("dataApply.toolip-name")}
                                    placement="bottom-end"
                                    className='light-tooltip'
                                >
                                    <div
                                        className="add-input"
                                        onClick={this.addInput}
                                    >
                                        +
                                    </div>
                                </LightTooltip>
                            </div>

                            {this.state.inputs.map(input => (
                                <div className="form-row with-add-btn">
                                    <Input key={input} name={"author[]"} />
                                </div>
                            ))}

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
                                    isRequired={"required"}
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
                            <CustomizedUpload
                                accept="video/mp4"
                                id="media"
                                name="media"
                                type="file"
                                files={files}
                                maxFilesLength={maxFilesLength}
                                onFilesChoose={onFilesChoose}
                                onFileDelete={onFileDelete}
                                hidden
                            />
                            <div className="form-row">
                                <Checkbox
                                    title={t("dataApply.agreement1")}
                                    name="agreement1"
                                    isRequired={"required"}
                                />
                            </div>
                            {!this.state.showResult ||
                            (this.state.showResult && !this.state.success) ? (
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
                                    isMobile={this.props.isMobile}
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
