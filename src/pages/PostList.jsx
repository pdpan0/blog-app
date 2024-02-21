import { useEffect, useState } from "react";
import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";
import { CardList } from "../components/CardList";

export const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [skip, setSkip] = useState(0); // configura a posição da "página"
    const [limit, setLimit] = useState(1); // configura o limite por "página"
    const [totalPosts, setPostsItems] = useState(0); // armazena o número total de posts

    useEffect(() => {
        client
            .getEntries({
                content_type: 'blogPosts',
                skip: skip,
                limit: limit,          
                order: "-sys.createdAt"
            })
            .then(({ total, items }) => {
                setPostsItems(total)
                setPosts(posts.concat(items))
            });
    }, [skip])

    function hasSeeMore() {
        return totalPosts != posts.length
            ? <button className="btn btn-primary" onClick={() => setSkip(skip + 1)}>Ver mais</button>
            : null
    }

    return <Layout>
        <div className="container">
            <div className="row">
                <main className="col-md-8">
                    <h1 className="my-3">Todos os posts</h1>
                    <CardList posts={posts} />
                    { hasSeeMore() }
                </main>
            </div>
        </div>
    </Layout>
}