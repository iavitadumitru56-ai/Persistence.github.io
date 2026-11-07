
const SCRIPT_URL = "https://raw.githubusercontent.com/iavitadumitru56-ai/Persistence.github.io/refs/heads/main/yahuisosiebanatsukoeblantupoisosimoihui.lua";

module.exports = async (req, res) => {
    const ua = req.headers["user-agent"] || "";
    const accept = req.headers["accept"] || "";

    if (accept.includes("text/html") && !/Roblox|HttpClient|curl|python|wget/i.test(ua)) {
        return res.redirect(307, "/index.html");
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    try {
        const response = await fetch(SCRIPT_URL);

        if (!response.ok) {
            return res.status(502).send("Script unavailable");
        }

        const source = await response.text();

        if (!source.trim()) {
            return res.status(502).send("Empty script");
        }

        return res.send(`
if (...) ~= "persistence" then
    game:GetService("Players").LocalPlayer:Kick("Invalid loader")
    return
end

local fn, err = loadstring(${JSON.stringify(source)})

if not fn then
    error(err)
end

fn()
`);
    } catch {
        return res.status(502).send("Script delivery failed");
    }
};
