export function greet(name) {
    console.log("Module", import.meta.url);
    console.log(`Hello, ${name}!`);
}
