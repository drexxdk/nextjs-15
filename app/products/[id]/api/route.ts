export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  console.log("products api called", (await params).id);
  return Response.json({ heading: "test heading" });
}
