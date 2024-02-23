import { Card } from "./Card";
import { Pagination } from "./Pagination";

export const CardList = ({ posts, pagination }) => {


    return <>
        {posts.map(post => <Card post={post} />)}
        {pagination ?
            <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={pagination.onPageChange} /> : null}
    </>
}