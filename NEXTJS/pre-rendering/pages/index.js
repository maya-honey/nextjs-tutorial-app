import Link from 'next/link'
function Home() {
  return(
    <>
    <h1>Next JS pre-rendering</h1>
    <ul>
      <li>
        <Link href='/users'>
          <a>Users</a>
        </Link>
      </li>
      <li>
        <Link href='/posts'>
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link href='/products'>
          <a>Products</a>
        </Link>
      </li>
    </ul>
    </>
  )
}

export default Home