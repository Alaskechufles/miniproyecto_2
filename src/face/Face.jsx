import { Fragment } from 'react'
import './face.css'
import Tarjeta from './tarjeta/Tarjeta'
import SearchIcon from '../icons/SearchIcon';




const arrImagesHel = ['src\\imagenes\\img-1.png', 'src\\imagenes\\img-2.png', 'src\\imagenes\\img-3.png', 'src\\imagenes\\img-4.png', 'src\\imagenes\\img-5.png', 'src\\imagenes\\img-6.png',];


export default function Face(prop) {
    return (
        <Fragment>
            <nav className='nav'>
                <div className='box-icon'>
                    <img src="logo.png" alt="logo" />
                </div>
                <button className='buscador' onClick={prop.toggle} >
                    <p className='location'>Add location</p>
                    <p className='guests'>Add guests</p>
                    <div className='box-lupa'>
                        <SearchIcon />
                    </div>
                </button>
            </nav>
            <div className="head-face">
                <h1 className="subtitle-face">Stays in Finland</h1>
                <p className="number-face">12+ stays</p>
            </div>
            <div className="tarjetas">
                <Tarjeta imgs={arrImagesHel[0]} />
                <Tarjeta imgs={arrImagesHel[1]} />
                <Tarjeta imgs={arrImagesHel[2]} />
                <Tarjeta imgs={arrImagesHel[3]} />
                <Tarjeta imgs={arrImagesHel[4]} />
                <Tarjeta imgs={arrImagesHel[5]} />
            </div>
        </Fragment>

    )
}
