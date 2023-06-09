import clientProm from "@lib/mongodb";
import { withSessionRoute } from "@lib/session";
import { ObjectId } from "mongodb";

export default withSessionRoute(async function deletePost(req, res) {
    if (!req.session?.state?.loggedIn) return res.status(401).json({ status: 401, error: "Unauthorized" })
    try {
        if (req.method !== 'POST') return res.status(405).json({ status: 403, error: `Method ${req.method} Not Allowed` });
        const connectDB = await clientProm;
        const postId = req.body.id;
        const getPostData = await connectDB.db('personal-blog').collection('blog-post').findOne({ _id: new ObjectId(postId) });
        
        if (getPostData) {
            await connectDB.db('personal-blog').collection('blog-post').deleteOne({ _id: new ObjectId(postId) });
            return res.json({ status: 200, message: "Blog deleted." });
        } else {
            return res.status(404).json({ status: 404, message: "Blog not found" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ status: 500, error: `Internal server error` });
    }
})