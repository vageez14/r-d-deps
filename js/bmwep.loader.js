const scriptSrc = new URL(document.currentScript.src);
const scriptSrcPathName = scriptSrc.pathname;

function getPath(scriptSrcPathName) {
    const scriptTags = Array.from(document.getElementsByTagName("script"));
    const loaderSrc = scriptTags.find(tag => tag.src.includes(scriptSrcPathName))?.src;

    if (loaderSrc) {
        const url = new URL(loaderSrc);
        return `${url.protocol}//${url.host}`;
    } else {
        return undefined; // or handle the case where loaderSrc is not found
    }
}

console.log(getPath(scriptSrcPathName));
