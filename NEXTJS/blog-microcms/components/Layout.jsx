import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"

import { useRouter } from 'next/router';

const Layout = ({children, title, desc, icatch}) => {
    const router = useRouter();
    const path = router.asPath;

    return(
        <>
        <Head>
            <title>{title ? title : "マヤブログ"}</title>
            <meta name="description" content={desc ? desc : "マヤブログです"} />
            <meta property="og:type" content="ページの種類"　/>
            <meta property="og:url" content={path ? path : ""}/>
            <meta property="og:image" content={icatch ? icatch : ""}/>
            <meta property="og:title" content={title ? title : "マヤブログ"}/>
            <meta property="og:description" content={desc ? desc : "マヤブログのページ"}/>
            <meta property="og:locale" content="jp"></meta>
        </Head>
        <Header/>
        <div className="main">
        {children}
        </div>
        <Footer/>
        </>
    )
}

export default Layout
