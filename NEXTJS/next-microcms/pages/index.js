import { client } from "../libs/client"

export default function Home({ data }) {
  return (
    <div className="main">
      <h1>武田</h1>
      <p>{data.text}</p>
    </div>
  )
}

export async function getStaticProps() {
  const data = await client.get({
    endpoint: 'hello',
  });

  return {
    props: {
      data: data,
    }
  }
}