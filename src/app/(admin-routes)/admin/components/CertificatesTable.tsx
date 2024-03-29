"use client";
import { deleteCertificateAction } from "@/actions/deleteActions";
import {
  StandardButton,
  StandardLinkButton,
} from "@/app/components/global/Buttons";
import { Certificate } from "@/types/models";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CertificatesTable({
  certificates,
}: Readonly<{
  certificates: Certificate[];
}>) {
  const router = useRouter();
  const simplifiedCertificates: Certificate[] = JSON.parse(
    JSON.stringify(certificates),
  );

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Certificates</h4>
        <StandardLinkButton href={"/admin/certificates/new"}>
          New
        </StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {simplifiedCertificates.map((certificate) => (
          <div
            key={certificate._id.toString()}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {certificate.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <StandardButton
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteCertificateAction(certificate._id.toString()).then(
                    () => {
                      toast.success("Successfully deleted a certificate", {
                        id: toastId,
                      });
                      router.refresh();
                    },
                  );
                }}
              >
                Delete
              </StandardButton>
              <StandardLinkButton
                href={"/admin/certificates/" + certificate._id.toString()}
              >
                Edit
              </StandardLinkButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
