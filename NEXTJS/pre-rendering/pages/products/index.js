import Link from "next/link"

function ProductList( {products} ) {
    return(
        <>
        <h1>List of Products</h1>
        {
            products.map((product) => {
                return(
                    <div key={product.id}>
                        <Link href={`/products/${product.id}`} passHref>
                            <h2>{product.id} {product.title} {product.price}</h2>
                        </Link>
                        <hr/>
                    </div>
                )
            })
        }
        </>
    )
}

export default ProductList

export async function getStaticProps() {
    console.log("Generating / Regenerating ProductList")
    const res = await fetch('http://localhost:3001/products')
    const data = await res.json()

    return {
        props:{
            products:data,
        },
        revalidate: 10,
    }
}