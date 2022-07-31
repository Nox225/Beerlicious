import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo'

export default function Navbar(){

    const [change, setChange] = React.useState(false)
    const changeNavbar = () => {
        if (window.scrollY > 50){
            setChange(true)
        } else{
            setChange(false)
        }
    }

    window.addEventListener('scroll', changeNavbar)

    return (
        <nav className={change ? 'navbar-scrolled' : 'navbar'}>
            <div className='nav-center'>
                <Link className="navi" to="/">
                    <div className='margin-icon'></div>
                    <Logo className='logo' />
                    <div className='logo-name'>Beerlicious</div>
                </Link>
            </div>
            <ul className='nav-links'>
                <li className='link'>
                    <Link className='navi' to="/">Home</Link>
                </li>
                <li>
                    <Link className='navi' to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}