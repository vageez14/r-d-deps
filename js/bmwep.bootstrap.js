(() => {
    const basePath = new URL(document.currentScript.src).origin;

    /** STYLE DEPENDENCIES */
    const styledeps = [
        "https://cdn.jsdelivr.net/npm/reset-css@latest/reset.min.css",
        `${basePath}/styles/global.css`
    ];

    /** JAVASCRIPT DEPENDENCIES */
    const jsdeps = [
        `${basePath}/js/user-info.js`,
        `${basePath}/js/bmwep.theme.js`,
        "https://cdn.jsdelivr.net/npm/swiper@latest/swiper-element-bundle.min.js",
        "https://test.bmwep.bellmedia.ca/common/large-poster-slider.js",
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

    const createDependencyElement = (dep, elem_type, url_attribute) => {
        const element = document.createElement(elem_type);
        element[ url_attribute ] = dep;
        if (elem_type === "link") {
            element.rel = "stylesheet";
            element.type = "text/css";
        }
        return element;
    };

    const loadDependencies = (deps, elem_type, url_attribute) =>
        deps.map(dep => createDependencyElement(dep, elem_type, url_attribute))
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
