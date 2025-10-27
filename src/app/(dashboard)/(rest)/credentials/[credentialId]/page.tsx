import { requireAuth } from "@/lib/auth-utils";
interface PageProps {
  params: { credentialId: string };
}

const Page = async ({ params }: PageProps) => {
    await requireAuth();
  const { credentialId } = params;

  return (
    <div>
      <h1>Credential Details</h1>
      <p>Credential ID: {credentialId}</p>
    </div>
  );
};

export default Page;
