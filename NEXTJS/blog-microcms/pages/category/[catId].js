import Feeds from "../../components/Feeds";
import Layout from "../../components/Layout";
import { client } from "../../libs/client";

function Category({post, cat}) {
    const data = post.map((post) => {
        if(post.cat.id === cat){
            return post
        }
    }).filter(post => post)
    
    return(
        <Layout>
            <Feeds post={data}/>
        </Layout>
    )
}

export default Category

export async function getStaticPaths() {
    const data = await client.get({
        endpoint: "categories",
    })
    const paths = data.contents.map(cat => {
        return{
            params: {catId: `${cat.id}`}
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const post = await client.get({
        endpoint: "blog",
    })

    return{
        props: {
            post: post.contents,
            cat: params.catId,
        }
    }
}