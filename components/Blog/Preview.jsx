import Link from "next/link";
import { stringifyDate } from "@lib/stringifyDate";
import { useRouter } from "next/navigation";

export default function Preview({ data }) {
    const router = useRouter();

    return (
        <Link className={`flex justify-between py-10 transition duration-300 hover:bg-[#c8c8c8fc] animate slide cursor-pointer`}
        onClick={(e) => {
            e.preventDefault();
            if (e.target.id !== 'tag') {
                router.push(`/blog/view/${data.link}`);
            }
        }} href={`/blog/view/${data.link}`} >
            <div className="flex flex-col gap-2 px-3" >
                <h3 className="text-base md:text-lg font-extrabold max-w-[10rem] sm:max-w-sm md:max-w-lg hover:underline line-clamp-2">{data.title}</h3>
                <div className="flex flex-wrap gap-5">
                    {data.tags.map(tag => {
                        return (
                            <p href={`/blog/tags/${tag}`} id="tag" key={tag} className="uppercase text-sm lg:text-base font-bold font-bebas tracking-widest">
                                #{tag}
                            </p>
                        )
                    })}
                </div>
            </div>
            <p className="font-medium uppercase tracking-widest text-xs md:text-sm lg:text-base px-3">{stringifyDate(data.publishDate)}</p>
        </Link>
    )
}