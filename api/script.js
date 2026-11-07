module.exports = async (req, res) => {
    const h = req.headers || {};
    const accept = h.accept || "";

    const isBrowser =
        h["sec-fetch-mode"] === "navigate" ||
        h["sec-fetch-dest"] === "document" ||
        accept.includes("text/html");

    const origin = "https://persistence-phi.vercel.app";
    const target = isBrowser
        ? `${origin}/index.html`
        : `${origin}/yahuisosiebanatsukoeblantupoisosimoihui.lua`;

    try {
        const response = await fetch(target, { cache: "no-store" });

        if (!response.ok) {
            return res.status(502).send("Source file not found");
        }

        res.setHeader("Cache-Control", "no-store");
        res.setHeader(
            "Content-Type",
            isBrowser
                ? "text/html; charset=utf-8"
                : "text/plain; charset=utf-8"
        );

        return res.status(200).send(await response.text());
    } catch {
        return res.status(502).send("Request failed");
    }
};
