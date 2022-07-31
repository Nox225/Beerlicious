import React from 'react'
import { Link } from 'react-router-dom'
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