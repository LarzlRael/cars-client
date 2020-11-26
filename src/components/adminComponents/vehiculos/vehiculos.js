import React, { useContext, useState } from 'react'
import CarContext from '../../cars/carsContext';

import '../login-admin-styles.scss';

const Vehiculos = () => {
    

    const car_context = useContext(CarContext);
    const { newCar } = car_context;

    const status_car = [
        { nombre: 'Viejo', value: 'viejo' },
        { nombre: 'Nuevo', value: 'nuevo' },
        { nombre: 'Usado', value: 'usado' }
    ];
    const marcas = [
        {
            nombre_marca: 'Honda',
            image: 'https://e7.pngegg.com/pngimages/28/215/png-clipart-honda-logo-honda-fit-car-honda-civic-type-r-honda-angle-emblem.png'
        },
        {
            nombre_marca: 'Toyota',
            image: 'https://www.acidomagenta.com/wp-content/uploads/2009/01/Untitled-11.jpg'
        },
        {
            nombre_marca: 'Corolla',
            image: 'https://logosvector.net/wp-content/uploads/2013/01/corolla-logo-vector.png'
        },
        {
            nombre_marca: 'Nissan',
            image: 'https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=vEaBjBLWUIngT48i8UNo88$daE2N3K4ZzOUsqbU5sYv0$zlkn0$KY$YgP7DnaC5v6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg'
        },
        {
            nombre_marca: 'Kia',
            image: 'https://e7.pngegg.com/pngimages/194/782/png-clipart-kia-motors-logo-car-desktop-brand-car-text-trademark.png'
        },
        {
            nombre_marca: 'Volkswagen',
            image: 'https://www.oroyfinanzas.com/files/2015/09/volkswagen-logo.jpg'
        },

        {
            nombre_marca: 'Renault',
            image: 'https://files.merca20.com/uploads/2015/04/rebranding-41.jpg'
        },


    ]
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
    const { name_car, price, description, model, status, maker } = car;

    //? Enviar 

    const onSubmit = (e) => {
        e.preventDefault();
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

    }
    const onChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        });

    }
    const onChangeImage = (e) => {
        console.log(e.target.files[0]);
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
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header text-center text-uppercase"><h6>Agregar Nuevo Carro</h6></div>
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
                                        id="">

                                        {status_car.map(status => (
                                            <option value={status.value}>
                                                {status.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group text-center">
                                    <label htmlFor="imagen">
                                        Subir Imagen
                                        <button className="btn btn-success">
                                            <i className="fas fa-upload"></i>
                                        </button>
                                    </label>

                                    <input
                                        className="form-control"
                                        type="file"
                                        onChange={onChangeImage}
                                        id="imagen" />
                                </div>
                                <button
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
                            <div class="item2">
                                <span class="notify-badge">
                                    <img src={urlImage.badge ? urlImage.badge : null} alt="" />
                                </span>
                                <img className="img-fluid" src={urlImage.imageUrlPreview === '' ? 'https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-no-image-available-icon-flat-vector.jpg' : urlImage.imageUrlPreview} alt="" />
                            </div>

                            <div className="col mt-4">
                                <h5 className="card-title">{name_car === "" ? "Nombre de Carro" : name_car}</h5>
                            </div>
                            <div className="col">
                                <h3 >{price === 0 ? "0$" : `${price}$`}</h3>
                            </div>
                            <div className="col">
                                <p className="card-text">{description === "" ? "Descripcion" : description}</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div >
    )
}

export default Vehiculos;
