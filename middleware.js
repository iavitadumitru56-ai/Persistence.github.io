import { rewrite } from "@vercel/functions";

export const config = {
    matcher: ["/"]
};

export default function middleware(request) {
    const isBrowser =
        request.headers.get("sec-fetch-mode") === "navigate" &&
        request.headers.get("sec-fetch-dest") === "document";

    if (isBrowser) {
        return rewrite(new URL("/index.html", request.url));
    }

    return new Response('print("CUCUMBER")', {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store"
        }
    });
}
