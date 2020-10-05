import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@material-ui/core';
import React, { useEffect, useContext } from 'react';
import CustomerContext from '../users_context/customerContext';
import googleImage from '../../../static/onlygoogle.png'

// Icons
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ListClient = () => {
    const customerContext = useContext(CustomerContext);
    const { getCustomers, customers } = customerContext;
    useEffect(() => {
        getCustomers();
    }, []);

    const useStyles = makeStyles({
        table: {
            width: 600,
            margin: 'auto',
            height: '500px'
        },
        img: {
            width: 30,
            height: 30,
            borderRadius: 100,
        },
        img2: {
            width: 30,
            height: 30,
            borderRadius: 100,
            opacity: 0.35
        }
    });
    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Imagen</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Apellido</TableCell>
                            <TableCell align="right">Tipo Usuario</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Google</TableCell>
                            <TableCell align="right">Acciones</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">

                                    <img src={row.google === 1 ? row.image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                                        className={classes.img}
                                        alt="" />
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>


                                <TableCell align="right">{row.last_name}</TableCell>
                                <TableCell align="right">{row.role==='NORMAL_USER' ?'Usuario Normal':'Administrador'}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">
                                    <Tooltip title={row.google === 1 ? 'Este usuario puede autenticarse con google' : 'Este usuario no esta usando la autenticarse de google'}>
                                        <img src={googleImage}
                                            className={row.google === 1 ? classes.img : classes.img2}
                                            alt="" />
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="right">
                                    {row.role === 'NORMAL_USER' ?
                                        <>
                                            <Tooltip title='Editar Cliente'>
                                                <EditIcon onClick={() => alert('holi')} />
                                            </Tooltip>
                                            <Tooltip title='Deshabilitar Cliente'>
                                                <HighlightOffIcon />
                                            </Tooltip>
                                        </> : null
                                    }

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ListClient
