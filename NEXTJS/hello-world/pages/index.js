import Link from 'next/link'

function Home() {
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
        </div>
    )
}

export default Home