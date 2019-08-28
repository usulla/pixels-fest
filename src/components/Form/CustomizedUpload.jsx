import React, { Fragment } from "react";
import Chip from "@material-ui/core/Chip";
import FormLabel from "@material-ui/core/FormLabel";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AttachFile from "@material-ui/icons/AttachFile";
import Close from "@material-ui/icons/Close";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const styles = {
    helpTextWrapper: {
        width: "100%"
    },
    fab: {
        width: "24px",
        height: "24px",
        minHeight: "24px",
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "1px solid #000"
    },
    close:{
        fontSize: '1rem'
    },
    attach:{
        fontSize: '1.7rem',
        verticalAlign: 'bottom'
    }
};

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
                    <div
                        className="selected-file"
                        key={index}
                    >
                        <AttachFile className={classes.attach} />
                        <span className="file-name">{fileName}</span>
                        <Fab
                            size="small"
                            component="span"
                            className={classes.fab}
                            onClick={() => onFileDelete(file.id)}
                        >
                            <Close className={classes.close}
                            />
                        </Fab>
                       
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
