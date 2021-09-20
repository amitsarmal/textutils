import React from 'react';
import './AlertCSS.css';

export default function Alert(props) {
    
    return (
        <div className="alertSize" style={{height : '30px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`}  role="alert" >
            <strong>{props.alert.type}!</strong> {props.alert.msg}
        </div>}
        </div>
    )
}
