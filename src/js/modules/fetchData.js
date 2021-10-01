const fetchData = async () => {
  let store = [];

  try {
    store = (await fetch("/store.json")).json();
  } catch (err) {
    console.log(err);
  }

  return store;
};

export default fetchData;
