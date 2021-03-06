import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AttachFile from "@material-ui/icons/AttachFile";
import Close from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { borderRadius } from "@material-ui/system";

const styles = {
    helpTextWrapper: {
        width: "100%"
    },
    fab: {
        width: "2.5vw",
        height: "2.5vw",
        minHeight: "2.5vw",
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "1px solid #000"
    },
    close: {
        fontSize: "1rem"
    },
    attach: {
        fontSize: "1.7rem",
        verticalAlign: "bottom"
    }
};
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

const CustomizedUpload = props => {
    const { t, i18n } = useTranslation();
    const {
        classes = {},
        id = "",
        name = "",
        helperText = "",
        files = [],
        uploadRefs = {},
        error = false,
        maxFilesLength = 1,
        onFileDelete = f => f,
        onFilesChoose = f => f,
        ...other
    } = props;
    return (
        <div className="form__group--upload">
            <label className="label-uplod">{i18n.t("dataApply.file")}</label>
            {files.map((file, index) => {
                const fileName = file.name;
                return (
                    <div className="selected-file" key={index}>
                        <AttachFile className={classes.attach} />
                        <span className="file-name">{fileName}</span>
                        <LightTooltip
                            title={i18n.t("dataApply.delete")}
                            className={classes.tooltip}
                            placement="bottom-end"
                        >
                            <Fab
                                size="small"
                                component="span"
                                className={classes.fab}
                                onClick={() => onFileDelete(file.id)}
                            >
                                <Close className={classes.close} />
                            </Fab>
                        </LightTooltip>
                    </div>
                );
            })}
            {Array(maxFilesLength)
                .fill(0)
                .map((empty, index) => (
                    <input
                        {...other}
                        key={index}
                        id={id}
                        name={name}
                        onChange={onFilesChoose}
                        ref={uploadRefs[name]}
                    />
                ))}
            {(() => {
                if (!files.length) {
                    return (
                        // button
                        <Fragment>
                            <label
                                key={id}
                                htmlFor={id}
                                className={classes.label}
                            >
                                <div className="uploadfile-btn--border">
                                    <div className="uploadfile-btn">
                                        {i18n.t("dataApply.overview")}
                                    </div>
                                </div>
                            </label>
                        </Fragment>
                    );
                } else {
                    return (
                        <Fragment>
                            {files.some(file => file.id === id) ? null : (
                                <label
                                    key={id}
                                    htmlFor={id}
                                    className={classes.label}
                                >
                                    <Fab
                                        size="small"
                                        component="span"
                                        className={classes.fab}
                                    >
                                        <AttachFile fontSize="small" />
                                    </Fab>
                                </label>
                            )}
                        </Fragment>
                    );
                }
            })()}
            <div className={classes.helpTextWrapper}>
                {helperText && error && (
                    <FormHelperText>{helperText}</FormHelperText>
                )}
            </div>
        </div>
    );
};

CustomizedUpload.propTypes = {
    classes: PropTypes.object.isRequired,
    files: PropTypes.array,
    maxFilesLength: PropTypes.number,
    onFileDelete: PropTypes.func,
    onFilesChoose: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    helperText: PropTypes.string,
    error: PropTypes.bool,
    uploadRefs: PropTypes.object
};

export default withStyles(styles)(CustomizedUpload);
