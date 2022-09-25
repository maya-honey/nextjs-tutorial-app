import css from '../styles/Header.module.css'
import Link from "next/link"

export default function Header(){
    return(
        <>
        <header className={css.header}>
            <ul className={css.header_ul}>
                <li>
                    <Link href={`/`}>
                        <a><p>Header</p></a>
                    </Link>
                </li>
                <li>
                    <Link href={`/serch`} passHref>
                        <a><p>Serch</p></a>
                    </Link>
                </li>
            </ul>
        </header>
        </>
    )
}