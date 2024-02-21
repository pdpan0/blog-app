import { Card } from "./Card";

export const CardList = ({ posts }) => posts.map(post => <Card post={post} />)