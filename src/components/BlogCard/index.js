import { Link } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import { ViewCover } from "components";

export default function BlogCard({ blog }) {

    const previewText = (editorState) => {
        return convertFromRaw(editorState).getFirstBlock().getText()
    }
    return <div className="card m-2 mx-auto" key={blog.id}>
        <div className="card-img-top">
            <ViewCover image={blog.cover} />
        </div>
        <div className="card-body">
            <h5 className="card-title text-center">
                {previewText(blog.title)}
            </h5>
            <p className="card-text">
                {previewText(blog.body)}
            </p>
            <Link to={`/blog/${blog.id}`} className="stretched-link" />
        </div>
    </div>
}
