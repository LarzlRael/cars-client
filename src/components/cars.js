import React, { useContext, useEffect, useState } from 'react'
import "./styles/cards-card.scss"
import CarContext from './cars/carsContext'
import Car from './car';

import LoginContext from './login/LoginContext';

const Cars = () => {

    const carContext = useContext(CarContext);

    const { getCars, cars, findcars } = carContext;
    const loginContext = useContext(LoginContext);

    let { autenticado, user } = loginContext;

    let mensaje;

    useEffect(() => {
        getCars();

    }, [mensaje])

    const fields = [

        { valor: "name_car", nombre_item: "Nombre del carro " },
        { valor: "price", nombre_item: "Precio" },
        { valor: "description", nombre_item: "Descripcion" },
        // { valor: "imageURL", nombre_item: "" }
        // { valor: "public_id", nombre_item: "" }
        { valor: "model", nombre_item: "modelo" },
        { valor: "status", nombre_item: "estado" },
        { valor: "maker", nombre_item: "Hecho en " }
    ]
    const [find, setFind] = useState({
        field: fields[0].valor,
        query: ''
    });

    const onChange = (e) => {
        setFind({
            ...find,
            [e.target.name]: e.target.value
        })
    }
    const { field, query } = find;

    const onChangeMultiple = (e) => {
        onChange(e);
        findcars(field, query);
    }

    return (
        <div className="cars">

            {autenticado ?
                <div className="profile-search">

                    <div className="profile-info">
                        <img src={autenticado && user.image ? user.image : 'https://matthewsenvironmentalsolutions.com/images/com_hikashop/upload/not-available.png'} alt="" />
                    </div>

                    <input type="text"
                        className="search-input"
                        name="query"
                        placeholder="Buscar ...."
                        value={query}
                        onChange={onChangeMultiple} />

                    <select
                        className="select-search"
                        name="field"
                        onChange={onChange}
                        value={field}>

                        {fields.map(field => (
                            <option value={field.valor} key={field.valor}>{field.nombre_item}</option>
                        ))}

                    </select>
                </div>
                : null}

            <div className="cars-cards-container">
                {cars.length !== 0 ? cars.map(car => (
                    <Car key={car.id} car={car} />
                )) : <h2>No hay nada que mostrar</h2>}

            </div>
        </div >
    )
}

export default Cars
