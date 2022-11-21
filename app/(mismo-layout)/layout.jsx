import { fontPacifico } from "../font";


export default function PostsLayout ({ children }) {
    return (
        <div className={fontPacifico.variable}>
            <marquee><small>Home &bull; Posts</small></marquee>
            {children}
        </div>
    )
}