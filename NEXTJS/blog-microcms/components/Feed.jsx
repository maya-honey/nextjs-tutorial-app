import React from 'react'
import css from '../styles/Feed.module.css'

const Feed = React.forwardRef(({blog},  ref) => {
    return(
        <div className={css.Feed}>
            <div className={css.title}>
                <h3>{blog.title}</h3>
            </div>
            <div className={css.cattag}>
                <span className={css.cat}>{blog.cat}</span>
                <span className={css.tag}>タグa</span>
                <span className={css.tag}>タグb</span>
            </div>
            <div className={css.feedtxt}>
                要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約要約
            </div>
        </div>
    )
})

export default Feed
