/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import ListItem from './DisplayItem';

function List({ allItems, handler }) {
  return (
    <ul>
      {allItems.map((itemName, index) => (

        <ListItem
          itemName={itemName}
          key={index}
          id={index}
          handler={handler}
        />
      ))}
    </ul>
  );
}

export default List;
