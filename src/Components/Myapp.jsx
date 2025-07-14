import React, { useState } from 'react'
import clouds from "../Images/clouds.png"
import clear from "../Images/Clear.png"
import rain from "../Images/Rain.png"
import err from "../Images/error.png"
import mist from "../Images/mist.png"
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
            setError("Please Enter Name");
        }
        else if (jsonData.cod === "404") {
            setError("Please Enter Valid Name!");
            return;
        } else {
            setError("");
        }
        setSearch("");

    }
    return (
        <>
            <div className="header">
                <div className="box">
                    <h1>Search Weather</h1>

                    <div className="flex items-center gap-2">
                        <input
                            type="text" value={search}
                            placeholder="Enter City, Country"
                            onChange={handleInput}
                        />
                        <button onClick={myFun} >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    {error && (
                        <div className="mt-6 flex items-center justify-center gap-3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md max-w-md mx-auto">
                            <img src={err} alt="Error" className="w-6 h-6" />
                            <p className="text-sm font-medium">{error}</p>
                        </div>
                    )}


                    <div className="mt-6 text-white text-center italic">

                        {
                            data && data.weather &&
                            (
                                <div className="mt-10  p-6 w-full max-w-sm text-center text-white mx-auto">
                                    <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>

                                    {/* Weather Icon */}
                                    <div className="my-4 flex justify-center">
                                        {data.weather[0].main === "Clouds" && (
                                            <img src={clouds} alt="Clouds" className="w-24 h-24 animate-bounce" />
                                        )}
                                        {data.weather[0].main === "Clear" && (
                                            <img src={clear} alt="Clear Sky" className="w-24 h-24 animate-pulse" />
                                        )}
                                        {data.weather[0].main === "Rain" && (
                                            <img src={rain} alt="Rainy" className="w-24 h-24 animate-ping" />
                                        )}
                                        {data.weather[0].main === "Mist" && (
                                            <img src={mist} alt="Misty" className="w-24 h-24 animate-fade" />
                                        )}
                                    </div>

                                    {/* Temperature */}
                                    <h2 className="text-4xl font-bold mb-2">
                                        {Math.trunc(data.main.temp)}°C
                                    </h2>

                                    {/* Weather Description */}
                                    <p className="text-lg capitalize tracking-wide text-white/90">
                                        {data.weather[0].description}
                                    </p>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

export default Myapp