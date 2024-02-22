import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        Blog
                    </span>
                </Link>
            </div>
        </nav>
    )
}