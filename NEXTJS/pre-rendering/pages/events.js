import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

function EventList({eventList}){
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchEvents = async (e) => {
        const eventName = e.currentTarget.dataset['index']
        const response = await fetch(`http://localhost:3001/events?category=${eventName}`)
        const data = await response.json()
        setEvents(data)
        router.push(`/events?category=${eventName}`, undefined, { shallow: true})
    }

    return(
        <>
            <button data-index="sports" onClick={fetchEvents}>Sports Events</button>
            <button data-index="technology" onClick={fetchEvents}>Technology Events</button>
            <button data-index="food" onClick={fetchEvents}>Food Events</button>
            <button data-index="art" onClick={fetchEvents}>Art Events</button>
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