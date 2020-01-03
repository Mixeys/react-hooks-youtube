import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const handleChange = e => setValue(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
    if(value.trim()) {
        // ...
        alert.show('Note been created', 'success')
        setValue('')
    } else {
        alert.show('Enter name note')
    }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter name note" value={value} onChange={handleChange}/>
            </div>
        </form>
    )
}