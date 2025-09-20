"use client";

import { useTRPC } from "@/trpc/client";
import { useEffect } from "react";

export const Client = () => {
  const trpc = useTRPC();

  const createAI = trpc.ai.createAI.useMutation();

  useEffect(() => {
    // Appelle la mutation dès que le composant monte
    createAI.mutate({ text: "Harry PREFETCH" });
  }, []);

  if (createAI.isPending) return <div>Loading...</div>;
  if (createAI.error) return <div>Error: {createAI.error.message}</div>;

  return <div>{JSON.stringify(createAI.data)}</div>;
};
