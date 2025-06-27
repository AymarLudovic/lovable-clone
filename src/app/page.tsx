import { trpc, getQueryClient } from "@/trpc/server";
import { dehydrate, hydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { Client } from "./client";

export default async function Page() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.createAI.queryOptions({ text: "Harry PREFETCH" }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="font-bold">
        <Suspense fallback={<p>Loading...</p>}>
          <Client />
        </Suspense>
      </div>
      ;
    </HydrationBoundary>
  );
}
