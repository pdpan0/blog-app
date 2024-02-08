import { useEffect, useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Layout } from "../components/Layout";
import { client } from "../lib/createClient";

const POST_SLUG = "post-novo-no-ar";

export const Post = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        client
            .getEntries({
                "fields.postSlug": POST_SLUG,
                content_type: 'blogPostAula',
            })
            .then(function (entries) {
                console.log("post", entries);
                setPost(entries.items[0] || null);
            });
    }, []);

    return (
        <Layout>
            {post 
                ? <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="my-3">{post.fields.postTitle}</h1>
                            </div>

                            <div dangerouslySetInnerHTML={{__html: documentToHtmlString(post.fields.postBody)}}></div>

                            <div className="mt-1">
                                <a href="#" className="btn btn-primary">
                                    Voltar para Home
                                </a>
                            </div>
                        </div>
                    </div> 
                : <div>Carregando...</div>}
        </Layout>
    );
}