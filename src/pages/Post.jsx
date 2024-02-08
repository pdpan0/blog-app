import { useEffect, useState } from "react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import {
    useParams,
    Link
  } from "react-router-dom";

import { Layout } from "../components/Layout";
import { client } from "../lib/createClient";

export const Post = () => {
    const { slug } = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        client
            .getEntries({
                "fields.postSlug": slug,
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
                                <Link to="/" className="btn btn-primary">
                                    Voltar para Home
                                </Link>
                            </div>
                        </div>
                    </div> 
                : <div>Carregando...</div>}
        </Layout>
    );
}