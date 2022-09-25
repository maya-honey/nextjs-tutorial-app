import Feed from "../components/Feed"
import Link from "next/link"
import css from "../styles/Feeds.module.css"

export default function Feeds({post}){
    return(
        <ul className={css.ul}>
            {post.map((post) => (
                <Link href={`/${post.id}`} passHref>
                    <li>
                        <a>
                            <Feed post={post}/>
                        </a>
                    </li>
                </Link>
            ))}
        </ul>
    )
}