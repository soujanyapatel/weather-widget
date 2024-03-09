import Searchbox from './Searchbox';
import Infobox from './Infobox';
import {useState} from "react";
export default function Weatherapp(){
    const [weatherinfo,setweatherinfo]=useState({
        city: "delhi",
        feelslike: 24,
        temp: 12,
        tempmin: 11,
        tempmax: 13,
        humidity: 12,
        weather: "jk",
    });
    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>
                Weather App
            </h2>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    );
}