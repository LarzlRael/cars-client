import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import CarContext from './cars/carsContext'
import LoginContext from './login/LoginContext';


const Car_info = ({match}) => {

    // console.log('location ',props.location.about);
    const carContext = useContext(CarContext);

    const history = useHistory();
    const loginContext = useContext(LoginContext);
    let { autenticado, user } = loginContext;

    const { getOneCar, oneCar } = carContext;
    const { price, description, imageURL, name_car, model, status, maker } = oneCar;
    let mensaje;
    const id = match.params.id;

    useEffect(() => {
        getOneCar(id);

        // eslint-disable-next-line
    }, [mensaje])

    const onClickListener = (price) => {
        if (!autenticado) {
            let path = `/login`;
            history.push(path);
        } else {
            history.push({
                pathname: '/payment-method',
                state: { price, id_car: id, user }
            });
        }
    }

    return (

        <div className="one-card">
            <img src={imageURL} alt={description} />
            <div className="one-card-info">
                <h2 className="one-card-info-title">{name_car}</h2>
                <p className="one-card-info-desc"> {description}</p>
                <h5>Modelo : {model} </h5>
                <h5>Estado : {status}</h5>
                <h5>Marca : {maker}</h5>
                <div className="price-buttons">
                    <h4 className="price">Precio : {price}</h4>
                    <button onClick={() => onClickListener(price)} className="btn btn-success"><i className="fas fa-shopping-cart"></i>Comprar</button>
                </div>
            </div>

        </div >

    )
}

export default Car_info
