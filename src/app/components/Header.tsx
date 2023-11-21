import { getAllSocialMedias } from "@/lib/queries/socialMedia.query";
import Link from "next/link";

export default async function Header() {
  const socialMedias = await getAllSocialMedias();

  return (
    <section id="home" className="w-full">
      <header className="flex flex-col gap-4 py-12">
        <h4 className="text-2xl drop-shadow-glow">{"I'm Ahsan Azizan"}</h4>
        <h1 className="text-7xl leading-snug drop-shadow-glow">
          A dedicated software engineer
          <br />
          with a passion for crafting and
          <br />
          bringing ideas to life
        </h1>
        <div className="mt-12 flex items-center gap-[42px]">
          <Link
            href={"/about"}
            className="group inline-flex items-center gap-2 rounded-full border border-white px-[22px] py-[10px] text-lg transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow"
          >
            Learn More{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="m-1 fill-current transition-transform duration-500 group-hover:translate-x-1"
            >
              <path
                d="M1 8.99998H12.17L7.29 13.88C6.9 14.27 6.9 14.91 7.29 15.3C7.68 15.69 8.31 15.69 8.7 15.3L15.29 8.70998C15.3827 8.61747 15.4563 8.50758 15.5064 8.3866C15.5566 8.26563 15.5824 8.13595 15.5824 8.00498C15.5824 7.87401 15.5566 7.74433 15.5064 7.62336C15.4563 7.50238 15.3827 7.39249 15.29 7.29998L8.71 0.699979C8.61742 0.607397 8.50751 0.533957 8.38654 0.483852C8.26558 0.433747 8.13593 0.407959 8.005 0.407959C7.87407 0.407959 7.74442 0.433747 7.62346 0.483852C7.50249 0.533957 7.39258 0.607397 7.3 0.699979C7.20742 0.792561 7.13398 0.902472 7.08387 1.02344C7.03377 1.1444 7.00798 1.27405 7.00798 1.40498C7.00798 1.53591 7.03377 1.66556 7.08387 1.78652C7.13398 1.90749 7.20742 2.0174 7.3 2.10998L12.17 6.99998H1C0.45 6.99998 0 7.44998 0 7.99998C0 8.54998 0.45 8.99998 1 8.99998Z"
                fill="current"
              />
            </svg>
          </Link>
          <div className="flex items-center gap-6">
            {socialMedias.map((socialMedia, i) => {
              return (
                <a
                  key={i}
                  href={socialMedia.url}
                  target="_blank"
                  className="rounded-full border border-white p-2 transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-current"
                    dangerouslySetInnerHTML={{
                      __html: `<title>${socialMedia.name}</title> ${socialMedia.svgPath}`,
                    }}
                  ></svg>
                </a>
              );
            })}
          </div>
        </div>
      </header>
    </section>
  );
}