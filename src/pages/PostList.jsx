import { useEffect, useState } from "react";
import { Layout } from "../components/Layout"
import { client } from "../lib/createClient";
import { CardList } from "../components/CardList";

export const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [skip, setSkip] = useState(0); // configura a posição da "página"
    const [limit, setLimit] = useState(5); // configura o limite por "página"
    const [totalPosts, setPostsItems] = useState(0); // armazena o número total de posts
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        client
            .getEntries({
                content_type: 'blogPosts',
                skip:(currentPage - 1) * limit,
                limit: limit,
                order: "-sys.createdAt"
            })
            .then(({ total, items }) => {
                setPostsItems(total)
                setPosts(items)
            });
    }, [currentPage])

    useEffect(() => {
        console.log("currentpagechanged", currentPage)
    }, [currentPage])

    return <Layout>
        <div className="container">
            <div className="row">
                <main className="col-md-8">
                    <h1 className="my-3">Todos os posts</h1>
                    <CardList
                        posts={posts}
                        pagination={{
                            totalPages: Math.ceil(totalPosts / limit),
                            currentPage: { currentPage },
                            onPageChange: (pageNumber) => setCurrentPage(pageNumber)
                        }} />
                </main>
            </div>
        </div>
    </Layout>
}