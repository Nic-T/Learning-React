import React from 'react'
import Navigation from './Navigation'
function Header(){
    return  (

        <header className="app-Header">
            <span className="bold">
                AppName
            </span>

            <Navigation/>
        </header>


    )
}

export default Header