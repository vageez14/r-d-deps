(() => {
    const scriptSrc = new URL(document.currentScript.src);
    const scriptSrcPathName = scriptSrc.pathname;
    const scriptTags = Array.from(document.getElementsByTagName("script")) ?? [];
    const basePath = scriptTags
        .map(tag => tag.src)
        .filter(src => src.includes(scriptSrcPathName))
        .reduce((loaderSrc, currentSrc) => currentSrc ? new URL(currentSrc).origin : undefined, undefined);

    const deps = [
        "https://cdn.jsdelivr.net/npm/swiper@latest/swiper-element-bundle.min.js",
        "https://test.bmwep.bellmedia.ca/common/large-poster-slider.js",
        "https://test.bmwep.bellmedia.ca/common/poster-shelf.js",
        `${basePath}/js/user-info.js`,
    ];

    deps.forEach(dep => {
        const script = document.createElement("script");
        script.src = dep;
        script.onload = () => console.log(`Loaded: ${dep}`);
        script.onerror = () => console.error(`Failed to load: ${dep}`);
        document.head.appendChild(script);
    });
})();


