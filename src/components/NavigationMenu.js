import React from 'react'
import{Link} from "react-router-dom";
function NavigationMenu(props){
    return (
        <div>
            <div className="bold">
                AppName

            </div>

            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="linkMenu"
                         onClick={props.closeMenu}
                        >
                            Home
                        </Link>
                </li>

                <li>
                    <Link 
                        to="/about" 
                        className="linkMenu"
                        onClick={props.closeMenu}
                    >
                        About
                                
                    </Link>
                    
                </li>
                
            </ul>
        </div>
        
    )

}

export default NavigationMenu