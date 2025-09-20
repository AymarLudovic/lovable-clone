"use client";

import { useTRPC } from "@/trpc/client";

export const Client = () => {
  const trpc = useTRPC();
  const { data } = trpc.ai.createAI.useSuspenseQuery({ text: "Harry PREFETCH" });

  return <div>{JSON.stringify(data)}</div>;
};
