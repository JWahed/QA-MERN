/* eslint-disable react/prop-types */
function DisplayItem({ itemName, id, handler }) {
  return (
    <li>
      {itemName}
      <button type="button" onClick={() => handler(id)}>x</button>
    </li>
  );
}

export default DisplayItem;
