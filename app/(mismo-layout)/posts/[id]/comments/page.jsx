import Image from "next/image";

const fetchComments = async (id) => {
    // Descomentar solo para probar el loading
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // throw new Error('Error ...')
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {  // Lo que hace esto es que hace un fetch cada 60 segundos o los que quieras, y actualiza los html
            revalidate: 30
        }
    }).then(res => res.json());
}

export default async function Comments({ params }) {
    const { id } = params;
    const comments = await fetchComments(id)

    return <ul style={{
        fontSize: '10px',
        background: '#444',
        margin: '10px',
        padding: '30px'
    }}>
        {comments.map((comment) => (
            <li key={comment.id}>
                <Image width={50} height={50} alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
                <h4>{comment.email}</h4>
                <small>{comment.body}</small>
            </li>
        ))}

    </ul>
}