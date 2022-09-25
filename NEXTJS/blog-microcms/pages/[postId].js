import { client } from "../libs/client"
import Layout from "../components/Layout";
import css from "../styles/Post.module.css"

function Post({ post }) {
    return(
        <Layout>
            <div className={css.article}>
                <h1 className={css.title}>{post.title}</h1>
                <div className={css.cattag}>
                    <span className={css.cat}>{post.cat}</span>
                    <span className={css.tag}>タグa</span>
                    <span className={css.tag}>タグb</span>
                </div>
                <div className={css.body} dangerouslySetInnerHTML={{__html: `${post.body}`}}>
                    
                </div>
            </div>
        </Layout>
    )
}

export default Post

export async function getStaticPaths() {
    const data = await client.get({
        endpoint: "blog",
    })
    const paths = data.contents.map(post => {
        return{
            params: {postId: `${post.id}`}
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context
    const data = await client.get({
        endpoint: "blog",
        contentId: params.postId
    })
    return{
        props:{
            post: data,
        }
    }
}
