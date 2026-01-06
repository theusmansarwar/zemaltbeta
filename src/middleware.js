import { NextResponse } from "next/server";

const DELETED_BLOG_SLUGS = [
  "Local-SEO-Data",
  "business-growth",
  "react-tutorial",
  "Rapid-Url-Indexer",
  "UX-UI Design Career Trends: What You Need to Know",
  "Title-Tags-for-Local-SEO",
  "seo-tips",
  "Companies-Near-Me",
  "The Role of a Search Engine Optimization Consultant: Boosting Online Visibility",
  "Best-SEO-Companies-in-the-USA",
  "building-local-seo",
  "top-web-development-trends-to-watch-in-2025",

  // already deleted
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
  const SERVICE_REDIRECTS = {
    "/services/Search Engine Optimization (SEO)": "/services/seo",

    "/services/social-media-ads":
      "/services/social-media-marketing/social-media-ads",

    "/services/Content Writing": "/services/content-writing",

    "/services/Google Ads": "/services/google-ads",
  };
  if (SERVICE_REDIRECTS[pathname]) {
    return NextResponse.redirect(
      new URL(SERVICE_REDIRECTS[pathname], req.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:slug*", "/services/:slug*"],
};
