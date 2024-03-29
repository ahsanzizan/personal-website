import { StandardLinkButton } from "./components/global/Buttons";
import LeftArrowIcon from "./components/global/Icons/LeftArrow";
import Wrapper from "./components/global/Wrapper";

export default function NotFound() {
  return (
    <Wrapper>
      <section className="flex min-h-screen w-screen items-center justify-center">
        <header className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 className="text-center text-6xl leading-snug drop-shadow-glow md:text-9xl">
            404
          </h1>
          <h5 className="text-md mb-8 text-center md:text-xl">
            The page you are looking for is not available.
          </h5>
          <div className="block">
            <StandardLinkButton href="https://www.ahsanzizan.xyz">
              <LeftArrowIcon className="mr-1 rotate-180 fill-current transition-transform duration-500 group-hover:-translate-x-1" />
              Back
            </StandardLinkButton>
          </div>
        </header>
      </section>
    </Wrapper>
  );
}
