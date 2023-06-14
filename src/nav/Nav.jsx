import './nav.css'

import SearchIcon from '../icons/SearchIcon'
export default function Nav() {
    return (
        <nav className='nav'>
            <div className='box-icon'>
                <img src="logo.png" alt="logo" />
            </div>
            <div className='buscador'>
                <p className='location'>Add location</p>
                <p className='guests'>Add guests</p>
                <div className='box-lupa'>
                    <SearchIcon/>
                </div>
            </div>
        </nav>
    )
}
