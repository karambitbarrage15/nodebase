"use client";

import { Button } from "@/components/ui/button";
import { LogoutButton } from "./logout";
import { trpc } from "@/trpc/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const queryClient = useQueryClient();

  // ✅ Use trpc hooks directly
  const { data } = trpc.getWorkflows.useQuery();

const create = trpc.createWorkflow.useMutation({
  onSuccess: () => {
   toast.success("Job queued");
  },
});


  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>
        Create Workflow
      </Button>
      <LogoutButton />
    </div>
  );
};

export default Page;
