(() => {
    const basePath = new URL(document.currentScript.src).origin;

    /** STYLE DEPENDENCIES */
    const styledeps = [
        "https://cdn.jsdelivr.net/npm/reset-css@latest/reset.min.css"
    ];

    /** JAVASCRIPT DEPENDENCIES */
    const jsdeps = [
        `${basePath}/js/user-info.js`,
        "https://cdn.jsdelivr.net/npm/swiper@latest/swiper-element-bundle.min.js",
        "https://test.bmwep.bellmedia.ca/common/large-poster-slider.js",
        "https://test.bmwep.bellmedia.ca/common/poster-shelf.js"
    ];

    /** FONTS */
    const fonts = [
        { name: "Proxima Nova", url: `${basePath}/common/fonts/ProximaNova-Regular.woff2` },
        { name: "Proxima Nova Bold", url: `${basePath}/common/fonts/ProximaNova-Bold.woff2` },
        { name: "Proxima Nova Medium", url: `${basePath}/common/fonts/ProximaNova-Medium.woff2` }
    ];

    Promise.all(fonts.map(font => {
        const fontFace = new FontFace(font.name, `url(${font.url})`, { display: "block" });
        return fontFace.load().then(loadedFont => document.fonts.add(loadedFont));
    })).catch(() => {});

    const createDependencyElement = (dep, type, url_attribute) => {
        const element = document.createElement(type);
        element[ url_attribute ] = dep;
        return element;
    };

    const loadDependencies = (deps, type, url_attribute) =>
        deps.map(dep => createDependencyElement(dep, type, url_attribute))
            .forEach(element => document.head.appendChild(element));

    /** LOAD STYLES */
    loadDependencies(
        styledeps,
        "link",
        "href"
    );

    /** LOAD JAVASCRIPT */
    loadDependencies(
        jsdeps,
        "script",
        "src"
    );

})();

MEDIAQUERYSMALL = `@media (max-width:992px)`;
MEDIAQUERYMEDIUM = `@media (min-width:993px)`;
MEDIAQUERYLARGE = `@media (min-width:1919px)`;
THEME = {
    breakpoints: {
        values: {
            xsmall: "0px",
            small: "575px",
            medium: `993px`,
            large: `1500px`,
            xlarge: `1920px`
        }
    },
    typography: {
        title1: {
            [ MEDIAQUERYSMALL ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "32px",
                lineHeight: "40px",
                fontWeight: "700"
            },
            [ MEDIAQUERYLARGE ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "64px",
                lineHeight: "78px",
                fontWeight: "700"
            },
            [ MEDIAQUERYMEDIUM ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "56px",
                lineHeight: "70px",
                fontWeight: "700"
            }
        },
        title4: {
            [ MEDIAQUERYSMALL ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "18px",
                lineHeight: "22px",
                fontWeight: "700"
            },
            [ MEDIAQUERYLARGE ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "30px",
                lineHeight: "36px",
                fontWeight: "700"
            },
            [ MEDIAQUERYMEDIUM ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "28px",
                lineHeight: "36px",
                fontWeight: "700"
            }
        },
        largetitle2: {
            [ MEDIAQUERYSMALL ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "42px",
                lineHeight: "52px",
                fontWeight: "700"
            },
            [ MEDIAQUERYLARGE ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "72px",
                lineHeight: "90px",
                fontWeight: "700"
            },
            [ MEDIAQUERYMEDIUM ]: {
                fontFamily: "Proxima Nova Bold",
                fontSize: "64px",
                lineHeight: "76px",
                fontWeight: "700"
            }
        },
        body: {
            [ MEDIAQUERYSMALL ]: {
                fontFamily: "Proxima Nova",
                fontSize: "14px",
                lineHeight: "18px",
                fontWeight: "400"
            },
            [ MEDIAQUERYLARGE ]: {
                fontFamily: "Proxima Nova",
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: "400"
            },
            [ MEDIAQUERYMEDIUM ]: {
                fontFamily: "Proxima Nova",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "400"
            }
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    background: "transparent"
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
                square: true
            }
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#27282e",
                    borderRadius: "4px"
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#ffffff",
                    textTransform: "none",
                    textDecoration: "none",
                    letterSpacing: "0%"
                }
            }
        }
    }
};

