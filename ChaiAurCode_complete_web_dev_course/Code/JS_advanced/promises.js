function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data Fetched Successfully");
      } else {
        reject(new Error("Unsuccessful data Fetch"));
        // throw new Error("Unsuccessful data Fetch");
      }
    }, 2000);
  });
}

let promise = fetchData();
promise
  .then((data) => {
    return data.toUpperCase();
    // console.log(data
  })
  .then((data) => {
    // return data.toUpperCase();
    console.log(data);
  })
  .catch((error) => {
    // throw error;
    console.error(error);
  })
  .finally(() => {
    console.log("Promise has been settled.");
  });
