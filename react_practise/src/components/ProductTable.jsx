import { useState } from "react";
import Products from "../data/Products.json";


const ProductTable = () => {

    const [search, setSearch] = useState("");

    return(
        <>
            <label htmlFor=""></label>
            <input type="text" name="searchBox" placeholder="search here" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <br/>
            <ul>
                {Products.filter((prod) => 
                    prod.category.toLowerCase().includes(search) ||
                    prod.flavour.toLowerCase().includes(search) ||
                    prod.cost.toString().includes(Number.parseFloat(search))
                ).map((prod) => 
                    <li key={prod.id}>
                        {prod.flavour}, {prod.category}, {prod.cost}
                    </li>
                )}
            </ul>
        </>
    );
};

export default ProductTable;