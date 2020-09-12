import React, { useContext, useEffect } from 'react'
import "./styles/cards-card.scss"
import CarContext from './cars/carsContext'
import Car from './car';


const Cars = () => {

    const carContext = useContext(CarContext);

    const { getCars, cars } = carContext;

    let mensaje;

    useEffect(() => {
        getCars();
    }, [mensaje])

    return (
        <div className="cars-cards-container">
            {cars.map(car => (
                <Car key={car.id} car={car} />
            ))}

        </div>
    )
}

export default Cars
