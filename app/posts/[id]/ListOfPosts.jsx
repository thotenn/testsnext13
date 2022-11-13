import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json());

}

export async function ListOfPosts() {
    const posts = await fetchPosts();

    const handleClick = () => {
        alert('Me gusta este post ${id}')
    }

    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <h2 style={{ color: "#09f" }}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton />
        </article>
    ))
}