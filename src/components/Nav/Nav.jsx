import React from "react";
import "./nav.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Nav = ({ list, isMobile }) => {
    const { t, i18n } = useTranslation();
    function liClick(e) {
        e.preventDefault();
        const activeLi = e.currentTarget;

        const idActiveEl = activeLi
            .querySelector("a")
            .getAttribute("href")
            .slice(1);

        const indexActiveLi = activeLi.dataset.index;
        if (!isMobile) {
            activeLi.classList.add("li-slide-left");
            if (document.querySelector(".menu-ul__li.active")) {
                document
                    .querySelector(".menu-ul__li.active")
                    .classList.toggle("active");
            }
            activeLi.classList.toggle("active");
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
                        document.querySelector(
                            ".home"
                        ).id = `${idActiveEl}page`;
                    }, 0);
                }
                if (idActiveEl === "jury") {
                    setTimeout(function() {
                        document.querySelector(".jury-page").style.transform =
                            "none";
                    }, 0);
                    setTimeout(function() {
                        document
                            .querySelector(".jury-page")
                            .classList.remove("fix");
                        document
                            .querySelector("#jurypage")
                            .querySelector(".footer").style.display = "flex";
                    }, 500);
                }
            });
            setTimeout(function() {
                if (document.querySelector(".footer")) {
                    leftSidebarSlideUp();
                    window.addEventListener("scroll", function() {
                        leftSidebarSlideUp();
                    });
                }
            }, 0);

            function leftSidebarSlideUp() {
                var footerDetect = isScrolledIntoView(
                    document.querySelector(".footer")
                );
                var footerDetectView = footerDetect[0];
                var footerDetectCoord = footerDetect[1];
                if (footerDetectView) {
                    document.querySelector(
                        ".left-sidebar-ul"
                    ).style.height = `calc(100% - ${window.innerHeight -
                        footerDetectCoord}px)`;
                }
            }
            function isScrolledIntoView(el) {
                var rect = el.getBoundingClientRect();
                var elemTop = rect.top;
                var elemBottom = rect.bottom;
                var isVisible = elemTop < window.innerHeight;
                return [isVisible, elemTop];
            }
        }
    }
    return (
        <nav className="menu">
            <ul className="menu-ul menu__menu-ul">
                {list.map((li, index) => (
                    <li
                        key={index}
                        data-index={index + 1}
                        className={`menu-ul__li menu-ul__li-${li.src}`}
                        onClick={liClick}
                    >
                        <span />
                        <a href={`#${li.src}`}>
                            {i18n.t(`dataHeader.navtitle.${index}.title`)}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
