const SortJson = (name) => {
  return function (a, b) {
    if (a[name] > b[name]) {
      return 1;
    } else if (a[name] < b[name]) {
      return -1;
    }
    return 0;
  };
};

export default SortJson;
