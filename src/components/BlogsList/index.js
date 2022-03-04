import { Link } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import { Spinner } from "../";
import api_url from "../../lib/api-url";

export default function BlogsList({blogs, isLoading}) {

	return isLoading ? (
		<div className="vh-100">
			<Spinner />
		</div>
	) : (
		<div className="container-fluid" id="blogs">
			{blogs.map((blog) => (
				<div
					className="card d-flex flex-column w-50 h-50 mx-auto"
					key={blog.id}
				>
					<img
						src={
							blog.cover
								? `${api_url}/${blog.cover.filename}`
								: ""
						}
						className=" w-100"
						alt="Blog Cover"
					/>
					<div className="card-body">
						<h5 className="card-title">
							{convertFromRaw(blog.title)
								.getFirstBlock()
								.getText()}
						</h5>
						<p className="card-text">
							{convertFromRaw(blog.body)
								.getFirstBlock()
								.getText()}
						</p>
						<Link
							to={`/blog/${blog.id}`}
							className="stretched-link"
						/>
					</div>
				</div>
			))}
		</div>
	);
}
