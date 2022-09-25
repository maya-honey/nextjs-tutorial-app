
import { client } from '../libs/client'
import Head from "next/head"
import Layout from "../components/Layout"
import Feeds from "../components/Feeds"
import css from "../styles/Home.module.css"
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
    }
  }
}