import { CircularProgress, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Tooltip }
    from '@material-ui/core';

import { v4 as uuidv4 } from 'uuid';


import { Alert } from '@material-ui/lab';

import React, { useEffect, useContext, useState } from 'react';
import CustomerContext from '../users_context/customerContext';
import googleImage from '../../../static/onlygoogle.png'


//? Icons
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import noprofilephoto from '../../../static/noprofilephoto.webp';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

const primaryColor = '#01c8b3';

let size = 80;

const ListClient = ({ history }) => {

    const location = useLocation();
    const { client = '' } = queryString.parse(location.search);

    const [query, setQuery] = useState({ query_search: client });

    const customerContext = useContext(CustomerContext);
    const {
        // ? methodos
        getCustomers,
        searchCustomers,
        //? states
        customers,
        count,
        cargando
    } = customerContext;

    useEffect(() => {
        getCustomers(0, 5);
        // eslint-disable-next-line
    }, []);


    const onChange = (e) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        })
    }
    const { query_search } = query;

    const fields = [];

    let total_pages = count / 5;
    let from = 0;

    for (let i = 1; i <= total_pages; i++) {
        let item = { from, to: 5, page_number: i };
        from = from + 5;
        fields.push(item)
    }

    const onChangeMultiple = (e) => {
        onChange(e);
    }


    const useStyles = makeStyles({
        table: {
            width: '70%',
            margin: 'auto',
            height: 500
        },
    });

    const classes = useStyles();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        history.push(`?client=${query_search}`)
        searchCustomers(query_search);
    }

    return (
        <div>
            <div className="search-customer">
                <div className="container mt-3" >
                    <h3>Listado de Clientes</h3>
                </div>

                <form onSubmit={onSubmitHandler}>
                    <TextField
                        id="standard-basic"
                        label="Buscar Usuario"
                        className="text-field-search"
                        name="query_search"
                        onChange={onChangeMultiple}
                        inputProps={{ style: { fontFamily: 'roboto', color: primaryColor } }}
                        value={query_search}
                    />
                    <button type="submit" className="btn btn-primary">Buscar....</button>
                </form>
            </div>


            {cargando && <CircularProgress size={size} />}

            {customers.length === 0 && !cargando && <Alert severity="error">No se encontraron registros</Alert>}

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Imagen</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Nombre</TableCell>
                            <TableCell align="left">Apellido</TableCell>

                            <TableCell align="left">Google</TableCell>
                            <TableCell align="left">Acciones</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((row) => (
                            <TableRow key={row.id_user}>
                                <TableCell component="th" scope="row">

                                    <img src={row.google === 1 ? row.image : noprofilephoto}
                                        className="img"
                                        alt={row.name} />
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.last_name}</TableCell>

                                <TableCell align="left">
                                    <Tooltip title={row.google === 1 ? 'Este usuario puede autenticarse con google' : 'Este usuario no esta usando la autenticarse de google'}>
                                        <img src={googleImage}
                                            className={row.google === 1 ? "img" : "img2"}
                                            alt={row.email} />
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="left">

                                    <Tooltip title='Editar Cliente'>
                                        <EditIcon onClick={() => alert('holi')} />
                                    </Tooltip>
                                    <Tooltip title='Deshabilitar Cliente'>
                                        <HighlightOffIcon />
                                    </Tooltip>


                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="paginacion">
                {fields.map(field => (
                    <div className="fild-item" key={uuidv4}>
                        <button className="active" onClick={
                            () => getCustomers(field.from, field.to)}>
                            {field.page_number}</button>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ListClient;

