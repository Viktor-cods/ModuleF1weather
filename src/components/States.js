import React, {useState} from "react";
import JsonFile from '../states/states.json';
import Form from "react-bootstrap/Form";
import "../styles/States.css";



function States({onChange}) {
    const [states, setStates] = useState([]);
    if(!states.length) {
    setStates(JsonFile);
    }
    const handleNameChange = (event) => {
        onChange(event.target.value)
    }

    return (
            <>
                <p> Выберите город из списка: </p>
                <Form.Select aria-label="Select city" id='c1' onChange={handleNameChange}>
                    {states.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
                </Form.Select>
            </>
    )
}

export default States;