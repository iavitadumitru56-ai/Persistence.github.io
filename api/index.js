const SCRIPT_URL = "https://raw.githubusercontent.com/iavitadumitru56-ai/Persistence.github.io/refs/heads/main/yahuisosiebanatsukoeblantupoisosimoihui.lua";
const SOURCE_URL = "https://persistence-phi.vercel.app/?stage=source";

module.exports = async (req, res) => {
    const ua = req.headers["user-agent"] || "";
    const accept = req.headers["accept"] || "";

    if (accept.includes("text/html") && !/Roblox|HttpClient|curl|python|wget/i.test(ua)) {
        return res.redirect(307, "/index.html");
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    if (req.method !== "GET") {
        return res.status(405).send("Method not allowed");
    }

    if (req.query.stage === "source") {
        try {
            const response = await fetch(SCRIPT_URL);

            if (!response.ok) {
                return res.status(502).send("Script unavailable");
            }

            const source = await response.text();

            if (!source.trim()) {
                return res.status(502).send("Empty script");
            }

            return res.send(source);
        } catch {
            return res.status(502).send("Script delivery failed");
        }
    }

    return res.send(`
    print("67")
    `);
};
