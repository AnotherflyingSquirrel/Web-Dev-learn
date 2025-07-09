import { fetch, serve } from "bun";
import path from "path";

const portNum = 3000;
const hostnameString = "127.0.0.1";
console.log(`server listening at ${hostnameString}:${portNum}`);
serve({
  fetch(request) {
    const url = new URL(request.url);
    const reqFilePath = path
      .join(__dirname, url.pathname === "/" ? "index.html" : url.pathname)
      .toString();

    if (url.pathname === "/") {
      return new Response("hello ice tea", { status: 200 });
    } else if (url.pathname === "/ice-tea") {
      return new Response("hello from the ice-tea guy", { status: 200 });
    } else {
      return new Response("404: File not Found", { status: 404 });
    }
  },
  port: portNum,
  hostname: hostnameString,
});
