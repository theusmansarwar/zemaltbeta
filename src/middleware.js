import { NextResponse } from "next/server";
import { fetchBlogBySlug } from "@/DAL/Fetch";

const DELETED_BLOG_SLUGS = [
  "Chiropractor-Digital-Marketing",
  "Digital-Marketing-Strategies",
];

export async function middleware(req) {
  const url = req.nextUrl;
  const pathname = decodeURIComponent(url.pathname);

  /* =====================================================
      BLOGS — 410 ONLY for permanently deleted blogs
  ===================================================== */
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];

    // Explicitly deleted → 410
    if (DELETED_BLOG_SLUGS.includes(slug)) {
      return new NextResponse(null, { status: 410 });
    }

    // Otherwise check if blog exists
    const res = await fetchBlogBySlug(slug);
    const blog = res?.blog;

    //  Not found but not deleted →  Next.js handle (404)
    if (!blog) {
      return NextResponse.next();
    }
  }

  
  /* =====================================================
     2️⃣ SERVICES — 301 redirect old SEO slug
  ===================================================== */
  if (
    pathname ===
    "/services/Search Engine Optimization (SEO)"
  ) {
    return NextResponse.redirect(
      new URL("/services/seo", req.url),
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:slug*", "/services/:slug*"],
};
