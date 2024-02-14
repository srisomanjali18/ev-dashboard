import React from 'react'
import './SmallCard.css'

function SmallCard(props) {

    return (
        <div className="small-card">
            <div className="small-card__icon">
                <div className="icon">{props.icon}</div>
            </div>
            <div className="small-card__info">
                <p className="small-card__info--title">{props.title}</p>
                <p className="small-card__info--value">{props.value}</p>
            </div>
        </div>
    )
}

export default SmallCard