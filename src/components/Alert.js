import React, {useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)
    if(!alert.visible) {
        return null
    }
    return (
        <div className={`alert alert-${alert.type || 'warnig'} alert-dismissible`}>
            <strong>Attention!</strong>
            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}