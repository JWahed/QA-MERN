// eslint-disable-next-line react/prop-types
function AddItem({ submitHandler, newItem, handleAdd }) {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add item"
        onChange={newItem}
      />
      <button
        type="button"
        onClick={handleAdd}
      >
        + Item
      </button>
    </form>
  );
}

export default AddItem;
