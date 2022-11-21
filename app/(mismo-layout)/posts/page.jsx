
import { Suspense } from "react";
import { ListOfPosts } from "./[id]/ListOfPosts";


export default function PostPage() {

    return <section>
        <Suspense fallback={<p>Cargando posts ...</p>}>
            <ListOfPosts />
        </Suspense>
    </section>
}