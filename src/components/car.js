import React from 'react'
import { Link } from 'react-router-dom'

const Car = ({ car }) => {
    // const onClickHander = (name) => {
    //     alert(name)
    // }

    return (
        <div className="card-car animate__animated animate__fadeIn">
            <img src={car.imageURL} alt={car.model} />
            <div className="info-card">
                <h1 className="card-title">{car.name_car}</h1>
                <h2 className="card-model"> {car.model ? car.model : 'S/M'}</h2>
            </div>
            <hr />
            <div className="view-more">
                <h2 className="card-maker"> {car.maker}</h2>
                <Link className="button-view-more" to={{
                    pathname: `/cars/${car.id}`,
                    // about_car: car
                }}

                >Ver Auto</Link>
            </div>

        </div>
    )
}

export default Car
