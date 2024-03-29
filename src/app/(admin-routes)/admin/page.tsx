import { authOptions } from "@/lib/auth";
import { getAllSocialMedias } from "@/database/socialMedia.query";
import { getServerSession } from "next-auth";
import SocialMediasTable from "./components/SocialMediasTable";
import { getAllContents } from "@/database/content.query";
import ContentsTable from "./components/ContentsTable";
import { StandardLinkButton } from "@/app/components/global/Buttons";
import LeftArrowIcon from "@/app/components/global/Icons/LeftArrow";
import { Content, SocialMedia, Certificate } from "@/types/models";
import CertificatesTable from "./components/CertificatesTable";
import { getAllCertificates } from "@/database/cerficate.query";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  const socialMedias: SocialMedia[] = JSON.parse(
    JSON.stringify(await getAllSocialMedias()),
  );
  const contents: Content[] = JSON.parse(
    JSON.stringify(await getAllContents()),
  );
  const certificates: Certificate[] = JSON.parse(
    JSON.stringify(await getAllCertificates()),
  );

  return (
    <section id="home" className="mb-32 w-full py-12">
      <header className="mb-12 flex flex-col gap-2 md:gap-4">
        <h1 className="mb-7 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          Welcome back, {session?.user?.username}
        </h1>
        <div className="inline-block w-auto">
          <StandardLinkButton
            href={"https://vercel.com/ahsanaazizan/ahsanzizan"}
          >
            Go to Production Deployment{" "}
            <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
          </StandardLinkButton>
        </div>
      </header>
      <div className="flex flex-col gap-12">
        <div className="block">
          <SocialMediasTable socialMedias={socialMedias} />
        </div>
        <div className="block">
          <ContentsTable contents={contents} />
        </div>
        <div className="block">
          <CertificatesTable certificates={certificates} />
        </div>
      </div>
    </section>
  );
}
