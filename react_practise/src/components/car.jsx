import { useState } from "react";

const Car = () => {

    const [brand, setBrand] = useState("Your");
    const [model, setModel] = useState("Car");
    const [colour, setColour] = useState("Specs");
    const [year, setYear] = useState("Here");

    return(
        <>
            <h1>Specs: {brand}, {model}, {colour}, {year}</h1>
            
            <form>
                <label htmlFor="brand"></label>
                <input type="text" name="brand" value={brand} onChange={(event) => setBrand(event.target.value)}/>

                <label htmlFor="model"></label>
                <input type="text" name="model" value={model} onChange={(event) => setModel(event.target.value)}/>

                <label htmlFor="colour"></label>
                <input type="text" name="colour" value={colour} onChange={(event) => setColour(event.target.value)}/>

                <label htmlFor="year"></label>
                <input type="text" name="year" value={year} onChange={(event) => setYear(event.target.value)}/>
                <br/>
            </form>
        </>
    );
};

export default Car;
