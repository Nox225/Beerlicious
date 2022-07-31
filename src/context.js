import React, { useState, useContext, useEffect } from 'react'

const url = 'https://api.punkapi.com/v2/beers?page=1&per_page=80&beer_name='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [beers, setBeers] = useState([])

    const fetchBeer = async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const newBeers = data.map((item) => {
                return item
            })
            setBeers(newBeers)
            setLoading(false)
        } catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchBeer()
    }, [searchTerm])
    
    return <AppContext.Provider value={{
        loading, beers, setSearchTerm
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export{AppContext, AppProvider}
