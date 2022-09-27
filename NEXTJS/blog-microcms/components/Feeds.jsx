import Feed from "../components/Feed"
import Link from "next/link"
import css from "../styles/Feeds.module.css"

export default function Feeds({post}){
    return(
        <ul className={css.ul}>
            {post.map((post) => (
                <Link href={`/${post.id}`} passHref>
                    <li key={post.id}>
                        <a>
                            <Feed post={post} key={post.id}/>
                        </a>
                    </li>
                </Link>
            ))}
        </ul>
    )
}