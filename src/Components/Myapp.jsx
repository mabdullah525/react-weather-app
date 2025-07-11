import React from 'react'

const Myapp = () => {
    return (
        <>
            <div className="header">
                <div className="box">
                    <h2>Search Weather</h2>

                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Enter City, Country"
                        />
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div className="mt-6 text-white text-center italic">
                        {/* Future search result or info will be placed here */}
                        Search for any city worldwide to get weather info.
                    </div>
                </div>
            </div>


        </>
    )
}

export default Myapp