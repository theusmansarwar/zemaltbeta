import { NextResponse } from "next/server";

const DELETED_BLOG_SLUGS = [
  "Chiropractor-Digital-Marketing",
  "Digital-Marketing-Strategies",
];

export async function middleware(req) {
  const pathname = decodeURIComponent(req.nextUrl.pathname);

  /* =====================================================
     BLOGS — 410 ONLY for explicitly deleted blogs
  ===================================================== */
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);

  if (blogMatch) {
    const slug = blogMatch[1];

    if (DELETED_BLOG_SLUGS.includes(slug)) {
      return new NextResponse(null, { status: 410 });
    }
  }

  /* =====================================================

     2️⃣ SERVICES — 301 redirect old SEO slug
  ===================================================== */
  if (pathname === "/services/Search Engine Optimization (SEO)") {
    return NextResponse.redirect(new URL("/services/seo", req.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:slug*", "/services/:slug*"],
};
