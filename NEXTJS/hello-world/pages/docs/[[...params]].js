import {useRouter} from 'next/router'

function Doc() {
    const router = useRouter()
    const {params = []} = router.query
    
    return (
        <>
        <h1>Docs Page</h1>
        <ul>
            {params.map((x, id) => {
                return <li key={id}>{x}</li>
            })}
        </ul>
        </>
    );
}

export default Doc