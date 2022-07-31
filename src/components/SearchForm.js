import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm(){
    const { setSearchTerm } = useGlobalContext()
    const searchValue = React.useRef('');

    const searchBeer = () => {
        setSearchTerm(searchValue.current.value)
    }

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className='search'>
            <form className='search-form' autoComplete="off" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label className="name" htmlFor='name'>Search Your Beer</label>
                    <input 
                        type="text" 
                        id="name" 
                        ref={searchValue} 
                        onChange={searchBeer}>
                    </input>
                </div>
            </form>
        </section>
    )
}