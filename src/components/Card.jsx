import { Link } from "react-router-dom"

export const Card = ({ post }) => {
    return <div className="card mb-3" key={post.sys.id}>
        <div className="card-body">
            <h5 className="card-title">{post.fields.postTitle}</h5>
            <p className="card-text">{post.fields.postDescription}</p>
            <Link to={`/post/${post.fields.postSlug}`} className="card-link">
                Ver post
            </Link>
        </div>
    </div>
}