import {useState} from 'react'
import Link from 'next/link'

function EventList({eventList}){
    const [events, setEvents] = useState(eventList)

    const fetchEvents = async (e) => {
        let eventName = e.currentTarget.dataset['index']
        const response = await fetch(`http://localhost:3001/events?category=${eventName}`)
        const data = await response.json()
        setEvents(data)
    }

    return(
        <>
            <Link href="/events?vategory=sports">
                <a>
                    <span data-index="sports" onClick={fetchEvents}>Sports Events / </span>
                </a>
            </Link>
            <Link href="/events?vategory=technology">
                <a>
                <span data-index="technology" onClick={fetchEvents}>Technology Events / </span>
                </a>
            </Link>
            <Link href="/events?vategory=food">
                <a>
                    <span data-index="food" onClick={fetchEvents}>Food Events / </span>
                </a>
            </Link>
            <Link href="/events?vategory=art">
                <a>
                    <span data-index="art" onClick={fetchEvents}>Art Events / </span>
                </a>
            </Link>
            
            <h1>List of events</h1>
            {
                events.map(event => {
                    return(
                        <div key={event.id}>
                            <h2>
                                {event.id} {event.title} {event.date} | {event.category}
                            </h2>
                            <p>{event.description}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default EventList

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? `category=${category}` : ''
    const response = await fetch(`http://localhost:3001/events?${queryString}`)
    const data = await response.json()

    return{
        props: {
            eventList: data,
        }
    }
}