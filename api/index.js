export default function handler(req, res) {
    const userAgent = req.headers["user-agent"] || "";
    const accept = req.headers["accept"] || "";

    const isBrowser =
        accept.includes("text/html") &&
        !/Roblox|HttpClient|curl|python|wget/i.test(userAgent);

    if (isBrowser) {
        return res.sendFile("index.html");
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.send('print("CUCUMBER")');
}
