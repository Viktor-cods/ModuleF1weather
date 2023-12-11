import React, {useState} from "react";
import "../styles/Main.css";
import axios from "axios";
import Weath from "./Weath";
import States from "./States";

function Main() {
    const [name, setName] = useState("Moscow");
    const [weath, setWeath] = useState([]);
    const handleNameChange = (name) => {
       setName(name);
       const WeaUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+name+",ru&APPID=f85b0dc593e38c0f4020161388acb54e&units=metric";
       axios.post(WeaUrl).then(res => {
            setWeath(res.data.list);
            });
    }


    return (
        <main>
            <States onChange={handleNameChange}/>

            <Weath name={name} weath={weath} />
        </main>
    );
}

export default Main;