import React from "react";
import { useTranslation } from "react-i18next";
import "./nav.scss";

const Nav = ({ list }) => {
    const { t, i18n } = useTranslation();
    function liClick(e) {
        e.preventDefault();
        const activeLi = e.currentTarget;

        const idActiveEl = activeLi
            .querySelector("a")
            .getAttribute("href")
            .slice(1);

        const indexActiveLi = activeLi.dataset.index;
        activeLi.classList.add("li-slide-left");
        document.querySelectorAll(".menu-ul__li").forEach(li => {
            if (li.dataset.index < indexActiveLi) {
                li.classList.add("li-slide-left");
            }
        });

        document.querySelectorAll(".page").forEach(page => {
            if (page.id === idActiveEl) {
                if (!document.querySelector(".page.active")) {
                    page.classList.add("active");
                } else {
                    if (document.querySelector(".page.active2")) {
                        document
                            .querySelector(".page.active")
                            .classList.remove("active");
                        document
                            .querySelector(".page.active2")
                            .classList.add("active");
                        document
                            .querySelector(".page.active2")
                            .classList.remove("active2");
                        page.classList.add("active2");
                    } else {
                        page.classList.add("active2");
                    }
                }

                setTimeout(function() {
                    page.classList.add("animate");
                }, 0);
                // var pageHeight = page.querySelector(".page__content")
                //     .offsetHeight;
                // document.querySelector(
                //     ".pages"
                // ).style.height = `${pageHeight}px`;
            }
            if (idActiveEl === "jury") {
                setTimeout(function() {
                    document.querySelector(".jury-page").style.transform =
                        "none";
                }, 0);
            }
        });
    }
    return (
        <nav className="menu">
            {/* {t("dataHeader.alt")} */}
            <ul className="menu-ul menu__menu-ul">
                {list.map((li, index) => (
                    <li
                        key={index}
                        data-index={index + 1}
                        className={`menu-ul__li menu-ul__li-${li.src}`}
                        onClick={liClick}
                    >
                        <span />
                        <a href={`#${li.src}`}>{li.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
