const container = document.head || document.documentElement;
import code from "../dist/inject.js?raw";

// load library
const lib = document.createElement("script");
lib.setAttribute("async", "false");
lib.textContent = code;
container.insertBefore(lib, container.children[0]);
container.removeChild(lib);
