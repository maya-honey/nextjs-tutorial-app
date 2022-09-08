import Link from 'next/link'

function ProductList({productId = 100}) {
    return(
        <>
            <Link href="/">TOP</Link>
            <h2>Product Page</h2>
        </>
    )
}

export default ProductList