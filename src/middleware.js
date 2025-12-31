import { NextResponse } from "next/server";
import { fetchBlogBySlug } from "@/DAL/Fetch";

export async function middleware(req) {
  const url = req.nextUrl;
  const match = url.pathname.match(/^\/blog\/(.+)$/);

  if (!match) return NextResponse.next();

  const slug = match[1];
  const res = await fetchBlogBySlug(slug);
  const blog = res?.blog;

  if (!blog) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog/:slug*",
};
