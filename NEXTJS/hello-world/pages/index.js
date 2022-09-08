import Link from 'next/link'
import {useRouter} from 'next/router'
function Home() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/product')
    }
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/product">
                        <a>Product</a>
                    </Link>
                </li>
            </ul>
            <button onClick={handleClick} >Button to Product</button>
        </div>
    )
}

export default Home