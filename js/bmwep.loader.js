(() => {
    const scriptSrcPathName = new URL(document.currentScript.src).pathname;
    const scriptTags = Array.from(document.getElementsByTagName("script")) ?? [];
    const basePath = scriptTags
        .map(tag => tag.src)
        .filter(src => src.includes(scriptSrcPathName))
        .reduce((loaderSrc, currentSrc) => {
            if (currentSrc) {
                try {
                    return new URL(currentSrc).origin;
                } catch (_) {
                    return loaderSrc;
                }
            }
        }, window.location.origin);

    console.log("LOADER BASE PATH", basePath);
    /** FONTS */
    const ProximaNova = new FontFace("Proxima Nova", `url(${basePath}/common/fonts/ProximaNova-Regular.woff2)`, {
        fontDisplay: "block"
    });

    const ProximaNovaBold = new FontFace("Proxima Nova Bold", `url(${basePath}/common/fonts/ProximaNova-Bold.woff2)`, {
        fontDisplay: "block"
    });

    const ProximaNovaMedium = new FontFace("Proxima Nova Medium", `url(${basePath}/common/fonts/ProximaNova-Medium.woff2)`, {
        fontDisplay: "block"
    });

    Promise.all([ ProximaNova.load(), ProximaNovaBold.load(), ProximaNovaMedium.load() ])
           .then(fonts => fonts.forEach(font => document.fonts.add(font)))
           .then(() => console.log("Loaded: Proxima Nova, Proxima Nova Bold, Proxima Nova Medium"))
           .catch(() => console.error("Failed to load: Proxima Nova, Proxima Nova Bold, Proxima Nova Medium"));

    /** STYLES */
    const cssdeps = [
        "https://cdn.jsdelivr.net/npm/reset-css@latest/reset.min.css"
    ];

    cssdeps.forEach(dep => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = dep;
        link.onload = () => {};
        link.onerror = () => {};
        document.head.appendChild(link);
    });

    /** JAVASCRIPT */
    const jsdeps = [
        `${basePath}/js/user-info.js`,
        "https://cdn.jsdelivr.net/npm/swiper@latest/swiper-element-bundle.min.js",
        "https://test.bmwep.bellmedia.ca/common/large-poster-slider.js",
        "https://test.bmwep.bellmedia.ca/common/poster-shelf.js"
    ];

    jsdeps.forEach(dep => {
        const script = document.createElement("script");
        script.src = dep;
        script.onload = () => {};
        script.onerror = () => {};
        document.head.appendChild(script);
    });
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

