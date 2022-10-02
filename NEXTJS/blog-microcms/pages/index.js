
import { client } from '../libs/client'
import Layout from "../components/Layout"
import Feeds from "../components/Feeds"
import Categories from '../components/Categories'


export default function Home({post, cat}) {
  return (
    <Layout>
      <Categories cats={cat}/>
      <Feeds post={post}/>
    </Layout>
  )
}

export async function getStaticProps(){
  const post = await client.get({
    endpoint: "blog"
  })

  const cat = await client.get({
    endpoint: "categories"
  })

  return{
    props:{
      post: post.contents,
      cat: cat.contents,
    },
    //ISR
    revalidate: 10,
  }
}