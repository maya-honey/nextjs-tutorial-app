import {useState, useEffect} from 'react'


function Dashboard() {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState(null)

    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:3001/dashboard')
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])

    if(isLoading) {
        return <h2>Loading ... </h2>
    }

    return(
        <div>
            <h2>Dashboard</h2>
            <p>Posts : {dashboardData.posts}</p>
            <p>Likes : {dashboardData.likes}</p>
            <p>Followers : {dashboardData.followers}</p>
            <p>Following : {dashboardData.following}</p>
        </div>
    )
}

export default Dashboard