import React from 'react'
import Beer from './Beer'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function BeerList(){
    const {beers, loading} = useGlobalContext();

    const beerCard = beers.map((item) => {
        return <Beer key={item.id} {...item} />
    })

    if(loading){
        return <Loading />
    }

    if(beers.length < 1){
        return <h2 className='section-title list'>
            No beer matched the search criteria
        </h2>
    }
    return (
        <section>
            <div className='beer-list-container'>
                {beerCard}
            </div>
        </section>
    )
}