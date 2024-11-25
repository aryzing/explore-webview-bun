import { Webview } from "webview-bun";

const html = `
<html>
    <body>
        <h1 style="color:red">Hello from bun v${Bun.version} !</h1>
        <div style="background-color: #f1f1f1; width: 250px; height: 250px"></div>
        <div style="background-color: #1f1f1f; width: 250px; height: 250px"></div>
        <div style="background-color: #f1f1f1; width: 250px; height: 250px"></div>
        <div style="background-color: #1f1f1f; width: 250px; height: 250px"></div>
        <a href="https://bun.sh">test</a>
    </body>
</html>
`;

const webview = new Webview();

webview.setHTML(html);
webview.title = "Hello from bun";
webview.run();
