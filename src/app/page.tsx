import { prisma } from "@/lib/db";

export default async function Page() {
  const users = await prisma.user.findMany();

  return <div className="font-bold">{JSON.stringify(users, null, 2)}</div>;
}
