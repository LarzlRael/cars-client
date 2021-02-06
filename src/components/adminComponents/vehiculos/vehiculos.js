import React, { useContext, useState } from 'react'
import CarContext from '../../cars/carsContext';
import validator from 'validator';

import { marcas, status_car } from '../../data/CarData';

import noavailable from '../../../static/not-available.jpg';



const Vehiculos = () => {

    const car_context = useContext(CarContext);
    const { newCar, cargando } = car_context;

    const [error, setError] = useState({ msgError: '' });


    const { msgError } = error;

    const [car, setCar] = useState({
        name_car: "",
        price: 0,
        description: "",
        model: "",
        status: status_car[0].value,
        maker: marcas[0].nombre_marca

    });

    const [urlImage, setUrlImage] = useState({
        imageUrlPreview: '',
        imageFile: null,
        badge: marcas[0].image
    })

    const validate = () => {
        if (name_car.trim().length <= 5) {
            setError({ ...error, msgError: 'EL nombre del carro debe tener mas de 5 caracteres' });

            return false;
        }
        // if (!validator.isNumeric(price)) {
        //     console.log('ingrese un numero plox');
        //     return false;
        // }
        if (description.trim().length === 0) {
            console.log('debes de poner alguna descripcion')
            setError({ ...error, msgError: 'debes de poner alguna descripcion' });
            return false;
        }
        if (model.trim().length === 0) {
            console.log('EL modelo no puede ir vacio')
            setError({ ...error, msgError: 'EL modelo no puede ir vacio' });

            return false;
        }
        if (status.trim().length === 0) {

            setError({ ...error, msgError: 'hay un error en la falla' });

            return false;
        }
        // if (maker.trim().length == 0) {
        //     setError({ ...error, msgError: 'debes poner algun maker prro' });

        //     return false;
        // }
        if (urlImage.imageFile === null) {
            setError({ ...error, msgError: 'Debes subir una imagen' });

            return false;

        }
        return true;
    }
    const { name_car, price, description, model, status, maker } = car;

    //? Enviar 

    const onSubmit = (e) => {
        console.log('enviando formulari');
        e.preventDefault();

        if (validate()) {

            newCar(car, urlImage.imageFile);

            setCar({
                ...car,
                name_car: "",
                price: 0,
                description: "",
                model: "",
                status: status_car[0].value,
                maker: "",

            });
            setUrlImage({
                ...urlImage,
                imageUrlPreview: '',
                imageFile: null,
                badge: marcas[0].image
            });
        } else {
            console.log('hay un error');
        }


    }
    const onChange = (e) => {
        setError({ ...error, msgError: null });
        setCar({
            ...car,
            [e.target.name]: e.target.value
        });

    }
    const onChangeImage = (e) => {
        setError({ ...error, msgError: '' });
        setUrlImage({
            ...urlImage,
            imageUrlPreview: URL.createObjectURL(e.target.files[0]),
            imageFile: e.target.files[0],
        });
    }
    const onChangeBadge = (e, badge) => {

        setCar({
            ...car,
            [e.target.name]: e.target.value
        });
        setUrlImage({
            ...urlImage,
            badge: marcas[e.target.selectedIndex].image
        });

    }

    const handleOpenInputFile = () => {

        document.querySelector('#imagen').click();
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center text-uppercase"><h6>Agregar Nuevo Carro</h6></div>

                        {msgError &&
                            <div className="alert alert-danger " role="alert">
                                <small>{msgError}</small>
                            </div>}

                        <div className="card-body">
                            <form onSubmit={onSubmit}>

                                <div className="form-group">

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name_car}
                                        name="name_car"
                                        placeholder="Nombre del Carro"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Precio del Carro</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ingrese Precio del carro"
                                        value={price}
                                        name="price"
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">

                                    <input type="text"
                                        className="form-control"
                                        placeholder="Ingrese Descripcion"
                                        value={description}
                                        name="description"
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="marca">Marca</label>
                                    <select
                                        name="maker"
                                        value={maker}
                                        id="marca"
                                        className="form-control"
                                        onChange={(e) => onChangeBadge(e)}
                                    >
                                        {marcas.map((marca, i) => (
                                            <option key={i} value={marca.nombre_marca}>
                                                {marca.nombre_marca}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">

                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Ingrese Modelo"
                                        value={model}
                                        name="model"
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Estado</label>
                                    <select
                                        name="status"
                                        className="form-control"
                                        value={status}
                                        onChange={onChange}
                                    >

                                        {status_car.map(status => (
                                            <option value={status.value}>
                                                {status.nombre}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <div
                                    className="form-group text-center"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-success btn-block"
                                        onClick={handleOpenInputFile}
                                    >
                                        <i className="fas fa-upload"></i>
                                    </button>

                                    <input
                                        className="form-control"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={onChangeImage}
                                        id="imagen" />
                                </div>
                                <button
                                    disabled={
                                        cargando
                                    }
                                    className="btn btn-block btn-info" >
                                    Agregar nuevo Carro
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Previsualizacion</h4>
                        </div>
                        <div className="card-body">
                            <div className="item2">
                                <span className="notify-badge">
                                    <img className="no-outline" src={urlImage.badge && urlImage.badge} alt="" />
                                </span>
                                <img className="img-fluid" src={urlImage.imageUrlPreview === '' ? noavailable : urlImage.imageUrlPreview} alt="" />
                            </div>

                            <div className="col mt-4">
                                <h5 className="card-title text-capitalize">{name_car === "" ? "Nombre de Carro" : name_car}</h5>
                            </div>
                            <div className="col">
                                <h3 >{price === 0 ? "0$" : `${price} $`}</h3>
                            </div>
                            <div className="col">
                                <p className="card-text text-capitalize">{description === "" ? "Descripcion" : description}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Vehiculos;
