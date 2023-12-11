import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import Weather from "./Weather";
import "../styles/Weath.css";


function Weath({name, weath})  {

    return (
        <>
            <h1>{name}</h1>
            {weath.map(weather => <Weather key={weather.main.dt} weather={weather}/>)}
        </>
    );
}

export default Weath;