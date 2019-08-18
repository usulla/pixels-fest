import React from "react";
import { useTranslation } from "react-i18next";
import "./nav.scss";

const Nav = ({ list }) => {
    const { t, i18n } = useTranslation();
    var leftLastPosNav = 0;
    var rightFirstPosNav = 0;
    function setPrefixesTransform(el, prop) {
        console.log(el, prop, "ff");
        el.style.msTransform = `translateX(${prop})`; //IE
        el.style.webkitTransform = `translateX(${prop})`; //Chrome and Safari
        el.style.MozTransform = `translateX(${prop})`; //Firefox
        el.style.OTransform = `translateX(${prop})`; //Opera
        el.style.transform = `translateX(${prop})`;
    }
    function liClick(e) {
        e.preventDefault();
        const activeLi = e.currentTarget;
        const idActiveEl = activeLi
            .querySelector("a")
            .getAttribute("href")
            .slice(1);

        var indexActiveLi = activeLi.dataset.index;
        activeLi.classList.add("li-slide-left");
        if (activeLi.classList.contains("li-pos-right")) {
            activeLi.classList.remove("li-pos-right");
            leftLastPosNav++;
        }
        document.querySelectorAll(".menu-ul__li.li-pos-right").forEach(li => {
            if (li.dataset.index < indexActiveLi) {
                li.classList.add("li-slide-left");
                li.classList.remove("li-pos-right");
                leftLastPosNav++;
            }
        });
        console.log(leftLastPosNav, "leftLastPosNav");
        document.querySelectorAll(".page").forEach(page => {
            var leftPosPage = "3vw";
            var rightPosPage;
            if (page.id === idActiveEl) {
                page.classList.add("active2");
                setTimeout(function() {
                    page.classList.add("animate");
                    console.log(leftPosPage, 'leftPosPage');
                    setPrefixesTransform(page, leftPosPage);
                    leftPosPage = `${leftLastPosNav * 3}vw`;
                }, 0);
                setTimeout(function() {
                    document
                        .querySelector(".page.active")
                        .classList.remove("active");
                    document
                        .querySelector(".page.active2")
                        .classList.add("active");
                    document
                        .querySelector(".page.active2")
                        .classList.remove("active2");
                }, 500);
            } else {
                setTimeout(function() {
                    rightPosPage = `${100 - (6 - leftLastPosNav) * 3}vw`;
                    setTimeout(function() {
                        setPrefixesTransform(page, rightPosPage);
                    }, 600);
                }, 100);
            }

            // var pageHeight = page.querySelector(".page__content")
            //     .offsetHeight;
            // document.querySelector(
            //     ".pages"
            // ).style.height = `${pageHeight}px`;
        });
        if (idActiveEl === "jury") {
            setTimeout(function() {
                document.querySelector(".jury-page").classList.add('fix');
            }, 0);
        }
    }
    return (
        <nav className="menu">
            {/* {t("dataHeader.alt")} */}
            <ul className="menu-ul menu__menu-ul">
                {list.map((li, index) => (
                    <li
                        key={index}
                        data-index={index + 1}
                        className={`menu-ul__li menu-ul__li-${
                            li.src
                        } li-pos-right`}
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
