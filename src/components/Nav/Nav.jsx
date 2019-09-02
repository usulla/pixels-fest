import React from "react";
import "./nav.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Nav = ({ list, isMobile }) => {
    const { t, i18n } = useTranslation();
    document.addEventListener("DOMContentLoaded", () => {
        const leftPixelsLogo = document.querySelector(".left-sidebar__li.logo");
        const compApplyBtn = document.querySelector(".toapply.menu-ul__li");
        const footerApplyBtn = document.querySelector(".toapply1.menu-ul__li");
        const programApplyBtn = document.querySelector(
            ".toprogram.menu-ul__li"
        );
        const toApplyBtn2 = document.querySelector(".toapply2.menu-ul__li");
        const toCompetition = document.querySelector(
            ".tocompetition.menu-ul__li"
        );

        elemClick(leftPixelsLogo);
        elemClick(footerApplyBtn);
        elemClick(programApplyBtn);
        elemClick(toApplyBtn2);
        elemClick(toCompetition);
        elemClick(compApplyBtn);

        function elemClick(elem) {
            if (elem) {
                elem.addEventListener("click", e => {
                    liClick(e);
                });
            }
        }
    });
    function liClick(e) {
        e.preventDefault();
        // if (document.querySelector(".fix-apply")) {
        //     document.querySelector(".fix-apply").classList.remove("fix-apply");
        // }
        const activeLi = e.currentTarget;
        if (!activeLi.classList.contains("li-slide-left")) {
            if (document.querySelector(".menu-ul__li.move-left")) {
                document
                    .querySelector(".menu-ul__li.move-left")
                    .classList.remove("move-left");
            }
            if (document.querySelector(".menu-ul__li.move-right")) {
                document
                    .querySelector(".menu-ul__li.move-right")
                    .classList.remove("move-right");
            }

            activeLi.classList.add("move-left");
        } else {
            if (document.querySelector(".menu-ul__li.move-left")) {
                document
                    .querySelector(".menu-ul__li.move-left")
                    .classList.remove("move-left");
            }
            if (document.querySelector(".menu-ul__li.move-right")) {
                document
                    .querySelector(".menu-ul__li.move-right")
                    .classList.remove("move-right");
            }
            activeLi.classList.add("move-right");
        }
        if (!activeLi.classList.contains("active")) {
            const idActiveEl = activeLi
                .querySelector("a")
                .getAttribute("href")
                .slice(1);
            function slideLi(className1, className2) {
                if (activeLi.classList.contains(className1)) {
                    activeLi.classList.remove(className1);
                }
                if (document.querySelector(".menu-ul__li.active")) {
                    document
                        .querySelector(".menu-ul__li.active")
                        .classList.toggle("active");
                }
                activeLi.classList.add("active");
                activeLi.classList.add(className2);

                document.querySelectorAll(".menu-ul__li").forEach(li => {
                    if (
                        className1 == "li-slide-right"
                            ? li.dataset.index <= indexActiveLi
                            : li.dataset.index >= indexActiveLi
                    ) {
                        li.classList.add(className2);
                        if (li.classList.contains(className1)) {
                            li.classList.remove(className1);
                        }
                    }
                });
            }
            const indexActiveLi = activeLi.dataset.index;
            if (!isMobile) {
                var pageHeight;
                var activePage;
                document.querySelectorAll(".page").forEach(page => {
                    if (page.id === idActiveEl) {
                        activePage = page;
                        if (!document.querySelector(".page.active")) {
                            page.classList.add("active");
                            pageHeight = page.getBoundingClientRect().height;
                            document.querySelector(
                                ".pages"
                            ).style.height = `${pageHeight}px`;
                            window.addEventListener("resize", () => {
                                pageDetHeight(page);
                            });
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
                                window.addEventListener("resize", () => {
                                    pageDetHeight(page);
                                });
                                (function fixCurrentScroll() {
                                    console.log(
                                        document.querySelector(".page.active"),
                                        document.querySelector(".page.active2")
                                    );

                                    const currentScroll = window.pageYOffset;
                                    document.querySelector(
                                        ".pages"
                                    ).style.maxHeight = "calc(100vh + 207px)";
                                    document.querySelector(
                                        ".pages"
                                    ).style.overflow = "hidden";
                                    document.querySelector(
                                        ".page.active"
                                    ).style.marginTop = `-${currentScroll}px`;
                                })();
                                (function scrollToTop() {
                                    var currentScroll =
                                        document.documentElement.scrollTop ||
                                        document.body.scrollTop;
                                    if (currentScroll > 0) {
                                        console.log("scroll");
                                        window.scrollTo(0, 0);
                                    }
                                })();
                                page.addEventListener("transitionend", function(
                                    e
                                ) {
                                    if (e.propertyName == "transform") {
                                        // pageHeight = page.getBoundingClientRect()
                                        //     .height;
                                        // document.querySelector(
                                        //     ".pages"
                                        // ).style.height = `${pageHeight}px`;
                                        document.querySelector(
                                            ".pages"
                                        ).style.maxHeight = "";
                                        document.querySelector(
                                            ".pages"
                                        ).style.overflow = "";
                                        document.querySelector(
                                            ".page.active"
                                        ).style.marginTop = "";
                                    }
                                });
                            } else {
                                page.classList.add("active2");
                                window.addEventListener("resize", () => {
                                    pageDetHeight(page);
                                });
                                pageHeight = page.getBoundingClientRect()
                                    .height;
                                document.querySelector(
                                    ".pages"
                                ).style.height = `${pageHeight}px`;
                            }

                            pageHeight = page.getBoundingClientRect().height;
                            document.querySelector(
                                ".pages"
                            ).style.height = `${pageHeight}px`;
                        }
                    }
                    setTimeout(function() {
                        if (!isMobile) {
                            if (!activeLi.classList.contains("li-slide-left")) {
                                slideLi("li-slide-right", "li-slide-left");
                            } else {
                                slideLi("li-slide-left", "li-slide-right");
                            }
                            // if (activePage.id == "apply") {
                            //     activePage.classList.add("fix-apply");
                            //     document
                            //         .querySelector(".menu")
                            //         .classList.add("fix-apply");
                            // }
                            if (page !== activePage) {
                                activePage.addEventListener(
                                    "transitionend",
                                    function(e) {
                                        if (e.propertyName == "transform") {
                                            // page.classList.remove("animate");
                                            document.querySelector('.page.active').classList.remove("animate");
                                        }
                                        if (
                                            page.classList.contains(
                                                "clear-transform"
                                            ) &&
                                            activeLi.classList.contains(
                                                "move-right"
                                            )
                                        ) {
                                            page.classList.remove(
                                                "clear-transform"
                                            );
                                        }
                                    }
                                );
                            }
                        }
                        activePage.classList.add("animate");
                        if (activeLi.classList.contains("move-left")) {
                            if (
                                Number(page.dataset.order) <
                                    Number(indexActiveLi) &&
                                !(
                                    page.classList.contains("active") ||
                                    page.classList.contains("active2")
                                )
                            ) {
                                page.classList.add("move");
                                if (
                                    page.classList.contains("clear-transform")
                                ) {
                                    page.classList.remove("clear-transform");
                                }
                            } else if (page.classList.contains("active")) {
                                activePage.addEventListener(
                                    "transitionend",
                                    function(e) {
                                        if (e.propertyName == "transform") {
                                            page.classList.add("move");
                                            if (
                                                page.classList.contains(
                                                    "clear-transform"
                                                )
                                            ) {
                                                page.classList.remove(
                                                    "clear-transform"
                                                );
                                            }
                                        }
                                    }
                                );
                            }
                        } else if (activeLi.classList.contains("move-right")) {
                            if (
                                Number(page.dataset.order) >=
                                Number(indexActiveLi)
                            ) {
                                page.classList.remove("move");
                            }
                        }

                        document.querySelector(
                            ".home"
                        ).id = `${idActiveEl}page`;
                    }, 0);
                    if (idActiveEl === "jury") {
                        document
                            .querySelector(".jury-page")
                            .classList.add("fix");
                        setTimeout(function() {
                            document
                                .querySelector(".jury-page")
                                .classList.add("clear-transform");
                        }, 0);
                        setTimeout(function() {
                            if (
                                document
                                    .querySelector(".jury-page")
                                    .classList.contains("fix")
                            ) {
                                document
                                    .querySelector(".jury-page")
                                    .classList.remove("fix");
                            }
                            if (document.querySelector("#jurypage")) {
                                document
                                    .querySelector("#jurypage")
                                    .querySelector(".footer").style.display =
                                    "flex";
                            }
                        }, 1300);
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
                    //footerDetectCoord !== 0 Fix for Jury page
                    if (footerDetectView && footerDetectCoord !== 0) {
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
            function pageDetHeight(page) {
                pageHeight = page.getBoundingClientRect().height;
                if (page.id !== "header") {
                    document.querySelector(
                        ".pages"
                    ).style.height = `${pageHeight}px`;
                } else {
                    document.querySelector(
                        ".pages"
                    ).style.height = `${pageHeight}px`;
                }
            }
        }
    }
    return (
        <nav className="menu">
            <ul className="menu-ul menu__menu-ul">
                {list.map((li, index) => (
                    <li
                        key={index}
                        data-index={index + 2}
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
