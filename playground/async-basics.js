console.log("Starting app");

setTimeout(() => {
  console.log("Inside of callbback");
}, 2000);

setTimeout(() => {
  console.log("Second setTimeout");
}, 0);

console.log("Finishing up");
