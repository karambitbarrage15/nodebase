import { requireAuth } from "@/lib/auth-utils";
interface PageProps {
  params: { executionId: string };
}

const Page = async ({ params }: PageProps) => {
    await requireAuth();
  const { executionId } = params;

  return (
    <div>
      <h1>Execution Details</h1>
      <p>Execution ID: {executionId}</p>
    </div>
  );
};

export default Page;
