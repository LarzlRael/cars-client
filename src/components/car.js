import React from 'react'
import "./styles/cards-card.scss"
import { Link } from 'react-router-dom'

const Car = ({ car }) => {
    // const onClickHander = (name) => {
    //     alert(name)
    // }

    return (
        <div className="card-car">
            <img src={car.imageURL} alt="" />
            <div className="info-card">
                <h1 className="card-title">{car.name_car}</h1>
                <h2 className="card-model"> {car.model ? car.model : 'S/M'}</h2>
            </div>
            <hr/>
            <div className="view-more">
                <h2 className="card-maker"> {car.maker}</h2>
                <Link className="button-view-more" to={`/cars/${car.id}`}>Ver Auto <i className="fas fa-chevron-right"></i></Link>
            </div>

        </div>
    )
}

export default Car
