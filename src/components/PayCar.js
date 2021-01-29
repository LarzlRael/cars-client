import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import CarContext from './cars/carsContext';

const PayCar = (props) => {
    const carcontext = useContext(CarContext);
    let history = useHistory();

    const { payCar } = carcontext;
    let { price, id_car, user } = props.history.location.state;
    const { id_user } = user;

    console.log(price, id_car, id_user)

    const onSubmit = (e) => {
        e.preventDefault();
        //id_user, id_car, price
        payCar(id_user, id_car, price);
        
        Swal.fire(
            'Compra realizado con Exito!',
            'Continuar!',
            'success'
        );
        history.push('/cars');

    }
    return (
        <div className="col-md-4 offset-md-4">
            <div className="card">
                <div className="card-header">
                    <h5>Metodos de pago</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor=""><h6>Card Number</h6></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">

                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor=""><span>Expiracion</span></label>
                                    <input type="text" className="form-control"
                                        placeholder="MM"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">-</label>
                                    <input type="text"
                                        placeholder="YY"
                                        className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor=""><span>CVC</span></label>
                                    <input type="text"
                                        placeholder="CVC"
                                        className="form-control" />
                                </div>
                            </div>

                        </div>
                        <button className="btn btn-info btn-block">Pagar Total de <span class="badge badge-light">{price ? price : '0'}$</span></button>

                        <input type="submit" className="btn btn-success btn-block" value="Pagar" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PayCar
