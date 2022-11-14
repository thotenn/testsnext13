import Link from "next/link";
import { LikeButton } from "./LikeButton";

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {  // Lo que hace esto es que hace un fetch cada 60 segundos o los que quieras, y actualiza los html
            revalidate: 3
        }
    })
        .then(res => res.json());
    /*return fetch('https://jsonplaceholder.typicode.com/posts', { 
        cache: 'no-store' // Esto hace que al generar el html este fetch lo haga cada vez que se solicite el archivo y no solo una unica vez al generar el html
    })
    .then(res => res.json());*/

}

export async function ListOfPosts() {
    const posts = await fetchPosts();

    return posts.slice(0, 5).map(post => (
        <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
                <h2 style={{ color: "#09f" }}>{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id} />
            </Link>
        </article>
    ))
}