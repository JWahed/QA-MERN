const Valid = (obj, term) => Object.values(obj)
  .filter((val) => val.toString().toLowerCase().startsWith(term.toLowerCase())).length > 0;

export default Valid;
