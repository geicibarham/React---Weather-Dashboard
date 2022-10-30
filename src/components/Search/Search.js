import { React, useState, useEffect } from "react";
import "./search.css";
import axios from "axios";
import Cardlist from "../CardList/Cardlist";
const Search = () => {
    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const getLatandLong = () => {
        const ApiKey = "ee601a5be4293bbbbc2b2665840ba595";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=imperial`;
        axios.get(apiUrl).then((res) => {
            const lat = res.data.coord.lat;
            const long = res.data.coord.lon;

            console.log(lat, long);

            const data = {
                ApiKey: ApiKey,
                lat: lat,
                long: long
            }
            console.log(data)
        });
    };

    const getForecast = () => {

        axios.get().then((res) => {
            console.log(res)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        getLatandLong();
        setCity("");
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={city} onChange={handleChange} type="text" />
                <button type="submit">Search</button>
            </form>

            <Cardlist />
        </>
    );
};

export default Search;
