import useSWR from 'swr'

function DashboardSWR() {
    const fetcher = async () => {
        const response = await fetch('http://localhost:3001/dashboard')
        const data = await response.json()
        return data
    }

    //第一引数は一意のキー
    //第二引数はデータフェッチ関数
    const {data, error} = useSWR('dashboard', fetcher)

    if(error) return 'An error has occured'
    if(!data) return 'Loading'
    
    return(
        <div>
            <h2>Dashboard</h2>
            <p>Posts : {data.posts}</p>
            <p>Likes : {data.likes}</p>
            <p>Followers : {data.followers}</p>
            <p>Following : {data.following}</p>
        </div>
    )
}

export default DashboardSWR