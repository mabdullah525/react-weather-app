import React, { useState } from 'react'

const Myapp = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState();
    const [error, setError] = useState("");
    
    const API_KEY = "fb382d97a303702e873d8c53346002db"
    const API = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

    const handleInput = (e) => {
        setSearch(e.target.value)
        console.log(search)

    }
    const myFun = async () => {
        const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`);
        const jsonData = await get.json();
        console.log(jsonData);
        setData(jsonData);
        if (search === "") {
            alert("Enter Name");
        }

    }
    return (
        <>
            <div className="header">
                <div className="box">
                    <h1>Search Weather</h1>

                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Enter City, Country"
                            onChange={handleInput}
                        />
                        <button onClick={myFun} >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div className="mt-6 text-white text-center italic">
                        {
                            data && data.weather ?
                            <div>
                                <h2>{data.name}</h2>
                                <h2>{Math.trunc(data.main.temp)}°C</h2>
                                <p>{data.weather[0].description}</p>
                            </div> : ""
                                
                        }
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Myapp