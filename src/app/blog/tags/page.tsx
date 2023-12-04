import Footer from "@/app/components/Parts/Footer";
import Navbar from "@/app/components/Parts/Navbar";
import Wrapper from "@/app/components/Wrapper";
import { getAllBlogs } from "@/lib/queries/blog.query";
import Link from "next/link";

export default async function Tags() {
  const blogs = await getAllBlogs();
  const tags = blogs.map((blog) => blog.tags).flat();

  return (
    <Wrapper>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] px-5 py-[137px]">
        <section id="blogs" className="mb-32 w-full py-12">
          <div className="mb-5 flex w-full items-center justify-between md:mb-12">
            <h4 className="text-lg drop-shadow-glow md:text-2xl">Tags</h4>
          </div>
          <div className="flex w-full flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Link
                key={i}
                href={"/blog/tags/" + tag}
                className="group inline-flex items-center gap-2 rounded-full border border-white px-5 py-2 text-base transition-all duration-500 hover:bg-white hover:text-black hover:drop-shadow-glow md:px-[22px] md:py-[10px] md:text-lg"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </Wrapper>
  );
}
