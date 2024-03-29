import { getContentbyKey } from "@/database/content.query";
import { getAllSocialMedias } from "@/database/socialMedia.query";
import SocialMediasRow from "../global/SocialMediasRow";
import Link from "next/link";
import Spotify from "./Spotify";

export default async function Footer() {
  const socialMedias = await getAllSocialMedias();
  const email = await getContentbyKey("email");

  return (
    <footer className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Link
        href={"mailto:" + email?.content ?? "ahsanaz461@gmail.com"}
        className="transition-all duration-500 hover:text-neutral-400"
      >
        <h3 className="text-base drop-shadow-glow sm:text-2xl lg:text-[28px]">
          {email?.content ?? "ahsanaz461@gmail.com"}
        </h3>
      </Link>
      <Spotify />
      <SocialMediasRow socialMedias={socialMedias} />
    </footer>
  );
}
