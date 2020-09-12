import React, { useEffect, useContext } from 'react'
import CarContext from './cars/carsContext'
import "./styles/cards-card.scss";

const Car_info = (props) => {

    const carContext = useContext(CarContext);

    const { getOneCar, oneCar } = carContext;
    const { price, description, imageURL, name_car, model, status, maker } = oneCar;
    let mensaje
    const id = props.match.params.id;
    useEffect(() => {
        getOneCar(id);
    }, [mensaje])



    return (

        <div className="one-card">
            <img src={imageURL} alt="" />
            <div className="one-card-info">
                <h1 className="one-card-info-title">{name_car}</h1>
                <p className="one-card-info-desc"> {description}</p>
                <h1>{model} </h1>
                <h1>{status}</h1>
                <h1>{maker}</h1>
                <div className="price-buttons">
                    <h4 className="price">{price}</h4>
                    <button><i className="fas fa-shopping-cart"></i>Comprar</button>
                </div>
            </div>


        </div >
    )
}

export default Car_info
