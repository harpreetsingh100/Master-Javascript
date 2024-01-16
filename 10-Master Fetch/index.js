// Fecth API is used for fetching (sending/receiving) resources.
// fetch() method is udes to fetch a resource(data)
// let promise = fetch(URL, [options])
// When we dont type in any options fetch's default request is a get request.

// Fetch with Async / Await

const getFacts = async () => {
  const res = await fetch(URL);
  //   This returns an object of JSON
  const data = await res.json();
  //   This changes the json to Js Object
};

// Fetch with Promises

const getFactswithPromises = () => {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

// HTTP Verbs

// 1.GET      => TO GET DATA
// 2.POST     => TO POST DATA
// 3.PUT      => TO PUT DATA
// 4.DELETE   => TO DELETE DATA

// HTTP Response Status Codes

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)
