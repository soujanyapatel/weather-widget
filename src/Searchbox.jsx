import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Searchbox.css'
import {useState} from 'react';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';
export default function Searchbox({updateinfo}){
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "f75c88e53586a66bd764639f326db885";
    let getweatherinfo= async() =>{
        try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonresponse= await response.json();
     //console.log(jsonresponse);
     let result= {
        city: city,
        temp: jsonresponse.main.temp,
        tempmin: jsonresponse.main.temp_min,
        tempmax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
     }
     console.log(result);
     return result;
    }
    catch(err){
        throw err;
       
    }
    };
   
    let handlechange=(event)=>{
        setcity(event.target.value);
    }
    let handlesubmit= async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setcity("");
       let newinfo=await getweatherinfo();
    updateinfo(newinfo);
        }
         catch(err){
            seterror(true);
         }
    };
    return(
        <div className="searchbox">
            <form>
                <TextField  onChange={handlechange}   id="city" label="City name" varaint="outlined" required value={city}/>
                <br></br>
                <br></br>
                <Button
                onClick={handlesubmit}
                variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}
             >No such place exist</p>}
              
               
            </form>
        </div>
    );
}