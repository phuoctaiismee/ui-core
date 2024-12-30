import categories from "@/mocks";

export const dynamic = "force-static";

export async function GET() {
  return new Response(JSON.stringify(categories), {
    headers: { "Content-Type": "application/json" },
  });
}
