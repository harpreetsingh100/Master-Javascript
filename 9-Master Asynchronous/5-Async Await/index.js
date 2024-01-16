// async function always returns a promise.
// await pauses the execution of its surrounding async function until the promise is settled. We can only use await in a async function.

async function api() {
  console.log("getting data");
}

const getAllData = async () => {
  await api(); // First api call will work
  await api(); // Now second api call will work
};

// await will stop the control flow and only continue until it is finished.
