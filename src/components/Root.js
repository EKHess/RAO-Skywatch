import React from 'react'
import Clock from './Clock';
import Header from './Header'
import Footer from './Footer';
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
                <Footer/>
            </footer>
        </>
    )
}

export default Root;