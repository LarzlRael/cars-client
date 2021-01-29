import React, { useContext } from 'react'

import loginContext from '../login/LoginContext'


const AdminProfile = () => {

    const logincontext = useContext(loginContext);

    const { s_autenticado_admin } = logincontext;

    return (
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">

                        <label htmlFor="file">
                            <img
                                src={s_autenticado_admin && s_autenticado_admin.image && s_autenticado_admin.image} className="rounded-circle mx-auto d-block"
                                width="200"
                                height="200"
                                alt="No file provided"
                                />

                            <input type="file"
                                name={s_autenticado_admin && s_autenticado_admin.name && s_autenticado_admin.name} id="file" />
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

                                    <input type="email" className="form-control" value={s_autenticado_admin && s_autenticado_admin.email && s_autenticado_admin.email} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={s_autenticado_admin && s_autenticado_admin.name && s_autenticado_admin.name} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={s_autenticado_admin && s_autenticado_admin.last_name && s_autenticado_admin.last_name} />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Direccion</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={s_autenticado_admin && s_autenticado_admin.direccion && s_autenticado_admin.direccion} />
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
