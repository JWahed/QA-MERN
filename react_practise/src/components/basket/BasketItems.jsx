/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import DisplayItem from './DisplayItem';

function BasketItems({ allItems, handler }) {
  return (
    <ul>
      {allItems.map((itemName, index) => (

        <DisplayItem
          itemName={itemName}
          key={index}
          id={index}
          handler={handler}
        />
      ))}
    </ul>
  );
}

export default BasketItems;
