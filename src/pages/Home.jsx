import { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";
import { Link } from "react-router-dom";
import { CardList } from "../components/CardList";

export const Home = () => {
    const [categories, setCategories] = useState([]); // retorna um array
    const [posts, setPosts] = useState([]);

    // ciclo de vida de componentes
    // posso escrever JavaScript
    useEffect(() => {
        // Pedir para o objeto client buscar os últimos 5 posts
        client
            .getEntries({
                content_type: 'blogPosts',
                limit: 5,
                order: "-sys.createdAt"
            })
            .then(function (entries) {
                console.log('posts', entries.items);
                setPosts(entries.items);
            });

        // Pedir para o objeto client buscar todas as categorias
        client
            .getEntries({
                content_type: 'blogCategories',
            })
            .then(function (entries) {
                console.log('categorias', entries.items);
                setCategories(entries.items);
            });
    }, []); // array vazio indica o onload do componente

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <main className="col-md-8">
                        <h1 className="my-3">Últimos posts</h1>
                        <CardList posts={posts} />
                        <Link to="/posts" className="btn btn-primary">
                            Ver todos os posts
                        </Link>
                    </main>
                
                    <aside className="col-md-4">
                        <h2>Categorias</h2>
                        <ul>
                            {categories.map(category => (
                                <li key={category.sys.id}>
                                    {category.fields.categoryTitle}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </Layout>
    )
}