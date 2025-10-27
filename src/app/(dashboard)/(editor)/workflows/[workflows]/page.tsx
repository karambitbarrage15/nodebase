import { requireAuth } from "@/lib/auth-utils";
interface PageProps {
  params: Promise<{
    workflowId: string;  // Fixed spelling
  }>;
};

const Page = async ({ params }: PageProps) => {
    await requireAuth();
  const { workflowId } = await params;
  
  return (
    <div>
      <h1>Credential Details</h1>
      <p>Credential ID: {workflowId}</p>
    </div>
  );
}

export default Page;