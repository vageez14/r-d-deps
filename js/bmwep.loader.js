const scriptSrc = new URL(document.currentScript.src);
const scriptSrcPathName = scriptSrc.pathname;
const scriptTags = Array.from(document.getElementsByTagName("script")) ?? [];
const basePath = scriptTags
    .map(tag => tag.src)
    .filter(src => src.includes(scriptSrcPathName))
    .reduce((loaderSrc, currentSrc) => currentSrc ? new URL(currentSrc).origin : undefined, undefined);

console.log("basePath", basePath);

const loadDeps = async() => {
    const deps = [
        "https://cdn.jsdelivr.net/npm/swiper@latest/swiper-element-bundle.min.js"
            `${basePath}/js/user-info.js`,
    ];

    await Promise.all(deps.map(dep => new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = dep;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    })));
};

await loadDeps();
