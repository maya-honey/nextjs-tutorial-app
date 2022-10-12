function ArticleListByCategory({articles, category}) {
    return(
        <>
        <h1>Showing news for category <i>{category}</i></h1>
        {articles.map((article) => {
            return(
                <div key={article.id}>
                    <h2>
                        {article.id} {article.title}
                    </h2>
                    <p>{article.description}</p>
                    <hr/>
                </div>
            )
        })}
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const {params, req, res, query} = context
    const response = await fetch(
        `http://localhost:3001/news?category=${params.category}`
    )
    const data = await response.json()

    
    res.setHeader('Set-Cookie', ['name=Vishwash'])
    console.log(req.headers.cookie);
    console.log(query);

    return {
        props: {
            articles: data,
            category: params.category,
        },
    }
}