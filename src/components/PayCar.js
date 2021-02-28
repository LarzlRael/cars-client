import React, { useContext } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import CarContext from './cars/carsContext';

const PayCar = () => {

    const carcontext = useContext(CarContext);

    const history = useHistory();

    const [error, setError] = useState({
        msgError: ''
    })

    const { payCar } = carcontext;
    const { price, id_car, user } = history.location.state;
    const { id_user } = user;


    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ card_number, mm, yy, cvc })
        if (validate()) {

            payCar(id_user, id_car, price);

            Swal.fire(
                'Compra realizado con Exito!',
                'Continuar!',
                'success'
            );
            reset();
            history.push('/cars');
        }

    }

    const [form_values, handleInputChange, reset] = useForm({
        card_number: '',
        mm: '',
        yy: '',
        cvc: ''
    });
    const { card_number, mm, yy, cvc } = form_values;

    const validate = () => {
        if (card_number.trim().length <= 5) {
            setError({ ...error, msgError: 'Ingrese un numero de tarjeta valido' })
            return false;
        }
        if (mm.trim().length !== 2) {
            setError({ ...error, msgError: 'EL mes solo tiene que ser de 2 cifras' })

            return false;
        }
        if (yy.trim().length !== 2) {
            setError({ ...error, msgError: 'EL año solo tiene que ser de 2 cifras' })

            return false;
        }
        if (cvc.trim().length !== 3) {
            setError({ ...error, msgError: 'Ingrese un CVC valido' })

            return false;
        }
        return true;
    }
    return (
        <div className="col-md-4 offset-md-4">
            <div className="card">
                <div className="card-header">
                    <h5>Metodos de pago</h5>
                    {error.msgError &&
                        <div className="alert alert-danger">
                            <small>{error.msgError}</small>
                        </div>
                    }
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="">
                                <h6>Card Number</h6>
                            </label>
                            <input
                                type="text"
                                onChange={handleInputChange}
                                value={card_number}
                                name="card_number"
                                className="form-control" />
                        </div>
                        <div className="form-group">

                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">
                                        <span>Expiracion</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleInputChange}
                                        name="mm"
                                        value={mm}
                                        placeholder="MM"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">-</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="YY"
                                        name="yy"
                                        value={yy}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">
                                        <span>CVC</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={cvc}
                                        onChange={handleInputChange}
                                        name="cvc"
                                        placeholder="CVC"
                                        className="form-control" />
                                </div>
                            </div>

                        </div>
                        <button className="btn btn-info btn-block" disabled>
                            Pagar Total de
                            <span className="badge badge-light">
                                {price ? price : '0'}$</span>
                        </button>

                        <input type="submit" className="btn btn-success btn-block" value="Pagar" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PayCar;
