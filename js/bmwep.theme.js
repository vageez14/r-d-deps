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

