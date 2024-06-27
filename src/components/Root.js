import React from 'react'
import Clock from './Clock';
import Header from './Header'
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <>
            <header>
                <Header/>
            </header>

            <main>
                <Clock/>
                <Outlet/>
            </main>

            <footer>
                <div className='signature-container'>
                <p className='signature'>Made by <a href='#'>Eric Hess</a></p>
                </div>
            </footer>
        </>
    )
}

export default Root;