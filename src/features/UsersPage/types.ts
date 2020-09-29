import { Post } from '../PostsPage/PostList/types';


export interface User {
    id: number,
    name: string,
    email: string,
    photo: string,
    posts: Array<Post>
}


