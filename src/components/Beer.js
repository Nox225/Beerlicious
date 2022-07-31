import React from 'react'
import { Link } from 'react-router-dom'

export default function Beer({id, name, tagline, description, image_url}){
    return (
        // <article className='beer'>
        <Link className="beer" to={`/beer/${id}`}>
            <div className='img-container'>
            <img className='beer-img' src={image_url} alt={name}></img>
            </div>
            <div className='beer-footer'>
                <h3 className='beer-name'>{name}</h3>
                <h4 className='beer-tagline'>{tagline}</h4>
                {/* <Link className="details" to={`/beer/${id}`}>Details</Link> */}
            </div>
        </Link>
        // </article>
    )
}