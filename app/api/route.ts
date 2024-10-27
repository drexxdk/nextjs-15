// https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export const dynamic = "force-static";

export async function GET() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  return Response.json(posts);
}
