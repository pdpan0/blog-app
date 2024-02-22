import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";
import { Link } from "react-router-dom";
import { CardList } from "../components/CardList";
import { Categories } from "../components/Categories";

export const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .getEntries({
                content_type: 'blogPosts',
                limit: 2,
                order: "-sys.createdAt"
            })
            .then(function (entries) {
                setPosts(entries.items);
            });

        client
            .getEntries({
                content_type: 'blogCategories',
            })
            .then(function (entries) {
                setCategories(entries.items);
            });
    }, []);

    return (
        <Layout>
            <div className="container">
                <div className="row my-3">
                    <main className="col-md-8">
                        <h1>Últimos posts</h1>
                        <CardList posts={posts} />
                        <Link to="/posts" className="btn btn-primary">
                            Ver todos os posts
                        </Link>
                    </main>
                
                    <aside className="col-md-2">
                        <h2>Categorias</h2>
                        <Categories categories={categories} />
                    </aside>
                </div>
            </div>
        </Layout>
    )
}