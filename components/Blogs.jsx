import BlogPreview from "./BlogPreview";

export default function Blogs({ data }) {
    return (
        <>
            <div className="mx-auto px-6">
                <div className="flex flex-col justify-between">
                    <div className="text-base mx-auto pt-5 px-6 sm:px-6 xl:px-0">
                        <ul className="block">
                            {data.map(blog => {
                                return <BlogPreview
                                    title={blog.title}
                                    publishDate={blog.pubDate}
                                    tags={blog.tags}
                                    previewText={blog.post.slice(0, 250) + "..."}
                                    link={blog.link}
                                    key={blog._id} />
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}