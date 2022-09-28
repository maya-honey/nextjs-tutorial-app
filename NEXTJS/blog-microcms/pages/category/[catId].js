import { validateConfig } from "next/dist/server/config-shared";
import Feeds from "../../components/Feeds";
import Layout from "../../components/Layout";
import { client } from "../../libs/client";
import css from "../../styles/CatId.module.css";

function Category({post, cat}) {
    const data = post.map((post) => {
        if(post.cat.id === cat.id){
            return post
        }
    }).filter(post => post)
    
    return(
        <Layout title={cat.name} desc={`${cat.name}カテゴリーの記事一覧ページ`}>
            <h2 className={css.h2}>{cat.name}の記事一覧</h2>
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
    const cat = await client.get({
        endpoint: "categories",
        contentId: params.catId,
    })

    return{
        props: {
            post: post.contents,
            cat: cat,
        }
    }
}