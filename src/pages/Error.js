import React from 'react'
import { Link } from 'react-router-dom'

export default function Error(){
    return (
        <section className='error-page'>
            <div className='error-container'>
                <h1 className='dead-end'>Oops! It's A Dead End</h1>
                <Link 
                    to="/" 
                    className='btn' 
>
                    Back Home
                </Link>
            </div>
        </section>
    )
}