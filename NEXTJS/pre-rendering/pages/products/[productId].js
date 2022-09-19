import { useRouter } from 'next/router'

function Product({ product }) {
    const router = useRouter()

    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return(
        <div>
            <h2>
                {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr/>
        </div>
    )
}

export default Product

export async function getStaticPaths() {

    return {
        paths: [
            {params: {productId: '1'}},
            {params: {productId: '2'}},
            {params: {productId: '3'}},
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    
    const { params } = context
    const res = await fetch(
        `http://localhost:4000/products/${params.productId}`
        )
    const data = await res.json()

    console.log(`Regenerationg product ${params.productId}` )

    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}