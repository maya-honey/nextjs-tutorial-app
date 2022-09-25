
import { client } from '../libs/client'
import Head from "next/head"
import Layout from "../components/Layout"
import Feeds from "../components/Feeds"
import css from "../styles/Home.module.css"

export default function Home({blog}) {
  return (
    <Layout>
      <Feeds blog={blog}/>
    </Layout>
  )
}

export async function getStaticProps(){
  const data = await client.get({
    endpoint: "blog"
  })

  return{
    props:{
      blog: data.contents,
    }
  }
}