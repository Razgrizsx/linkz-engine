import { Preview } from "@/components/Preview";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Template({ params }: any) {
  return (
    <div className="h-dvh flex justify-center">
      <Preview templateId={params.templateId} />
    </div>
  );
}
