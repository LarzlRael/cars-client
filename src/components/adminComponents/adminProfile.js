import React, { useContext } from 'react'

import loginContext from '../login/LoginContext'
import './login-admin-styles.scss';


const AdminProfile = () => {

    const logincontext = useContext(loginContext);

    const { s_autenticado_admin } = logincontext;
    console.log(s_autenticado_admin);
    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">

                        <label htmlFor="file">
                            <img src={s_autenticado_admin && s_autenticado_admin.image ? s_autenticado_admin.image : null} className="rounded-circle mx-auto d-block" alt="" width="200" height="200" />
                            <input type="file" name={s_autenticado_admin && s_autenticado_admin.name ? s_autenticado_admin.name : null} id="file" />
                        </label>
                        <div className="card-body">
                            <h6 className="text-center">
                                Nombre del usuario
                            </h6>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card header">
                            <h4>Perfil Publico</h4>
                            <span>Añade informacion sobre ti</span>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">Informacion Basica</label>

                                    <input type="email" className="form-control" value={s_autenticado_admin && s_autenticado_admin.email ? s_autenticado_admin.email : null} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={s_autenticado_admin && s_autenticado_admin.name ? s_autenticado_admin.name : null} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={s_autenticado_admin && s_autenticado_admin.last_name ? s_autenticado_admin.last_name : null} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Direccion</label>
                                    <input type="text" className="form-control" value={s_autenticado_admin && s_autenticado_admin.direccion ? s_autenticado_admin.direccion : null} />
                                </div>
                                <input type="submit" value="Editar Datos" className="btn btn-block btn-info" />
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile
