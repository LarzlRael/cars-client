import React, { useContext, useEffect, useState } from 'react'

import CarContext from './cars/carsContext';

import Car from './car';

import LoginContext from './login/LoginContext';
import { CircularProgress } from '@material-ui/core';

import noprofilephoto from '../static/noprofilephoto.webp';
import { fields } from './data/CarData';


const Cars = () => {

    const carContext = useContext(CarContext);

    const { getCars, cars, findcars, cargando } = carContext;
    const loginContext = useContext(LoginContext);

    let { autenticado, user } = loginContext;

    let mensaje;

    useEffect(() => {
        getCars();
        // eslint-disable-next-line
    }, [mensaje])


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

            {autenticado &&
                <div className="profile-search">

                    <div className="profile-info">
                        <img src={autenticado && user.image ? user.image : noprofilephoto} alt="" />
                        <input type="text"
                            className="search-input"
                            name="query"
                            placeholder="Buscar ...."
                            value={query}
                            onChange={onChangeMultiple} />
                    </div>


                    <select
                        className="select-search"
                        name="field"
                        onChange={onChange}
                        value={field}>

                        {fields.map(field => (
                            <option value={field.valor} key={field.valor}>{field.nombre_item}</option>
                        ))}

                    </select>
                </div>}

            {!cargando && <CircularProgress color="#01c8b3" className="flex-item" />}
            <div className="cars-cards-container">


                {cars.length !== 0 ? cars.map(car => (
                    <Car key={car.id} car={car} />
                )) : <h2>No hay nada que mostrar</h2>}

            </div>
        </div >
    )
}

export default Cars
