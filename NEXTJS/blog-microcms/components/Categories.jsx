import css from "../styles/Categories.module.css"
import Link from "next/link"

export default function Categories({cats}){
    return(
        <div className={css.Categories}>
            <ul>
                {cats.map((cats) => (
                    <Link href={`/category/${cats.id}`} passHref>
                        <li key={cats.id}>
                            <a href="">
                                <span className={css.span}>{cats.name}</span>
                            </a>
                        </li>
                    </Link>
                    
                ))}
            </ul>
        </div>
    )
}