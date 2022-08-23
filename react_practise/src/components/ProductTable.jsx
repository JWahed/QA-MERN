import { useState } from 'react';
import Products from '../data/Products.json';
import contains from './Valid';

function ProductTable() {
  const [search, setSearch] = useState('');

  return (
    <>
      <input type="text" name="searchBox" placeholder="search here" value={search} onChange={(e) => setSearch(e.target.value)} />
      <br />
      <ul>
        {Products.filter((prod) => contains(prod, search)).map((prod) => (
          <li key={prod.id}>
            {prod.flavour}
            ,
            {prod.category}
            ,
            {prod.cost}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductTable;
