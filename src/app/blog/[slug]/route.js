import { NextResponse } from "next/server";
import { fetchBlogBySlug } from "@/DAL/Fetch";

export async function GET(req, { params }) {
  const slug = params.slug;
  const res = await fetchBlogBySlug(slug);
  const blog = res?.blog;

  if (!blog) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}
