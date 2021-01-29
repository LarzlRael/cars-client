import React, { useContext, useEffect } from 'react'
import ButtonUpdate from '../ButtonUpdate';
import CarContext from '../cars/carsContext';

const AdminVentas = () => {

    const carcontext = useContext(CarContext);

    const { viewSaleRecord, saleRecord } = carcontext;
    let mensaje;
    useEffect(() => {
        viewSaleRecord();
        // eslint-disable-next-line
    }, [mensaje])
    const totalSale = () => {
        let total = 0;
        saleRecord.forEach(totalsale => {
            totalsale.precio = parseInt(totalsale.precio);
            total += totalsale.precio;
        });
        return total;
    }

    console.log(saleRecord);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4"><h3>Registro de ventas</h3></div>
                <div className="col-md-4"><ButtonUpdate update={viewSaleRecord} /></div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-wrapper-scroll-y table-striped">

                        <thead className="thead-darkee">
                            <tr>
                                <th>Nombre Carro</th>
                                <th>Email</th>
                                <th>Nombre Usuario</th>
                                <th>Vendido en</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        {saleRecord.map(sale => (
                            <tr>
                                <td>{sale.name_car}</td>
                                <td>{sale.email}</td>
                                <td>{sale.name} {sale.last_name}</td>
                                <td>{sale.vendido_en}</td>
                                <td>{sale.precio}Bs</td>
                            </tr>
                        ))}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                            <td><h5>Total : {totalSale()}Bs</h5></td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminVentas;
