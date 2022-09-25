import Feed from "../components/Feed"
import Link from "next/link"
import css from "../styles/Feeds.module.css"

export default function Feeds({blog}){
    return(
        <ul className={css.ul}>
            {blog.map((blog) => (
                <Link href={`/${blog.id}`} passHref>
                    <li>
                        <a>
                            <Feed blog={blog}/>
                        </a>
                    </li>
                </Link>
            ))}
        </ul>
    )
}