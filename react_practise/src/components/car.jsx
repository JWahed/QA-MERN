/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

function Car() {
  const [brand, setBrand] = useState('Your');
  const [model, setModel] = useState('Car');
  const [colour, setColour] = useState('Specs');
  const [year, setYear] = useState('Here');

  return (
    <>
      <h1>
        Specs:
        {brand}
        ,
        {model}
        ,
        {colour}
        ,
        {year}
      </h1>

      <form>
        <label htmlFor="brand" />
        <input type="text" name="brand" value={brand} onChange={(event) => setBrand(event.target.value)} />

        <label htmlFor="model" />
        <input type="text" name="model" value={model} onChange={(event) => setModel(event.target.value)} />

        <label htmlFor="colour" />
        <input type="text" name="colour" value={colour} onChange={(event) => setColour(event.target.value)} />

        <label htmlFor="year" />
        <input type="text" name="year" value={year} onChange={(event) => setYear(event.target.value)} />
        <br />
      </form>
    </>
  );
}

export default Car;
