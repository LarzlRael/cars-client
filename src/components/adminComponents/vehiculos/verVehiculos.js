import React, { useContext, useEffect } from 'react'


import CarContext from '../../cars/carsContext'
import { Link } from 'react-router-dom';

const VerVehiculos = () => {

    const carcontext = useContext(CarContext);
    const { cars, getCars } = carcontext;

    useEffect(() => {
        getCars();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {cars.map(car => (
                    <div className="col-md-4">
                        <Car car={car} />
                    </div>
                ))}
            </div>
        </div>
    )
}


const Car = ({ car }) => {

    return (
        <div classNames="card bg-primary">

            {car.status === 'nuevo' ?
                <div class="item">
                    <span class="notify-badge">Nuevo</span>
                    <img className="card-img-top" src={car.imageURL} alt={car.description} />
                </div> :
                <img src={car.imageURL} className="card-img-top" alt={car.description} />
            }

            <div className="card-body">
                <h5 class="card-title">{car.name_car}</h5>
                <p class="card-text">{car.description}</p>
                <span className="card-text">Precio: {car.price}$</span><br />
                <span className="card-text">Estado: {car.status}</span><br />
                <span className="card-text">Marca: {car.maker}</span>

            </div>
            <div className="card-footer">
                Año {car.model}
                <Link
                    className="btn btn-info"
                    to={`/admin/vehiculos/${car.id}`}>
                    <i
                        className="fa fa-pencil-square-o text-rigth" aria-hidden="true"></i>
                    Editar
                </Link>
            </div>
        </div>
    )
}


export default VerVehiculos;
