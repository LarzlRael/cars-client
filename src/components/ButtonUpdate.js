import React from 'react'

const ButtonUpdate = ({update}) => {
    
    const onClickHanlder = () =>{
        update();
    }
    return (
        <button className="btn btn-info" onClick={onClickHanlder} >
            <i className="fa fa-refresh" aria-hidden="true"></i>Actualizar
        </button>
    )
}

export default ButtonUpdate
