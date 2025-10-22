import { caller } from "@/trpc/server";
import { getQueryClient ,trpc} from "@/trpc/server";
import { Button } from "@/components/ui/button";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
const Page=async()=>{
  const queryClient=getQueryClient();

  const users=await caller.getUsers();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return(<>
  <div className="min-h-screen min-w-screen flex items-center justify-center">
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>loading...</p>}> <Client /></Suspense></HydrationBoundary>
  
  </div>
  </>)
}
export default Page;
