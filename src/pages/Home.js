import React from 'react'
import BeerList from '../components/BeerList'
import SearchForm from '../components/SearchForm'

export default function Home(){
    return (
        <main>
            <SearchForm />
            <BeerList />
        </main>
    )
}
