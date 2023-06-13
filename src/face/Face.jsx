import { Fragment } from 'react'
import './face.css'
import Tarjeta from './tarjeta/Tarjeta'

export default function Face() {
    return (
        <Fragment>
        <div className="head-face">
            <h1 className="subtitle-face">Stays in Finland</h1>
            <p className="number-face">12+ stays</p>
        </div>
        <div className="tarjetas">
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
        </div>
        </Fragment>
        
    )
}
