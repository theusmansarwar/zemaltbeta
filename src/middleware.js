import { NextResponse } from "next/server";
import { fetchBlogBySlug } from "@/DAL/Fetch";

export async function middleware(req) {
  const url = req.nextUrl;
  const pathname = decodeURIComponent(url.pathname);

  /* =====================================================
     1️⃣ BLOGS — 410 for permanently deleted blogs
  ===================================================== */
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const res = await fetchBlogBySlug(slug);
    const blog = res?.blog;

    if (!blog) {
      return new NextResponse(null, { status: 410 });
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
