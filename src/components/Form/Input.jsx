import React from "react";
// import style from "./input.scss";
import { useTranslation, initReactI18next } from "react-i18next";

const Input = ({ title }) => {
    const { t, i18n } = useTranslation();

    return (
        <label>
            {title}
            <input type="text" value="" />
        </label>
    );
};
export default Input;
