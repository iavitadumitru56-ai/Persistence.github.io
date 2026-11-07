const http = require("http");

const REDIRECT_URL = "https://persistence-phi.vercel.app/yahuisosiebanatsukoeblantupoisosimoihui.lua";

const html = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Persistence</title>
</head>
<body>
    <h1>Persistence</h1>
</body>
</html>`;

http.createServer((req, res) => {
    const path = new URL(req.url, "http://localhost").pathname;

    if (path === "/" || path === "/page.html") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        return res.end(html);
    }

    if (path === "/redirect.html") {
        res.writeHead(302, {
            Location: REDIRECT_URL,
            "Cache-Control": "no-store"
        });
        return res.end();
    }

    res.writeHead(404);
    res.end("Not Found");

}).listen(process.env.PORT || 3000);