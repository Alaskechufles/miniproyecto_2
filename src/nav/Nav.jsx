import './nav.css'
import Search from '../search/Search'
import SearchIcon from '../icons/SearchIcon'
import { useState } from 'react'
export default function Nav() {
    const [isActive, setIsActive]= useState(false);
    const toggleClass=()=>{
        setIsActive(!isActive);
    }
    const claseElemento = isActive ? "bar active" : "bar search"

    const backg = isActive ? "b noBack":"b back"

    return (
        <div>
            
                <Search back={backg} toggle={toggleClass} claseEle={claseElemento}/>
            
            
            <nav className='nav'>
                <div className='box-icon'>
                    <img src="logo.png" alt="logo" />
                </div>
                <button className='buscador' onClick={toggleClass} >
                    <p className='location'>Add location</p>
                    <p className='guests'>Add guests</p>
                    <div className='box-lupa'>
                        <SearchIcon />
                    </div>
                </button>
            </nav>
        </div>
    )
}
