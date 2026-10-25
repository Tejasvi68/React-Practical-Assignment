function PromiseStates() {
  const ok = true;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    }, 2000);
  });

  // Log the promise immediately after creating it
  console.log("Promise immediately after creation:", promise);

  promise
    .then((result) => {
      console.log("Then:", result);
    })
    .catch((error) => {
      console.log("Catch:", error);
    })
    .finally(() => {
      console.log("Finally: Promise completed");
    });

  return (
    <div>
      <h2>Question 49: JavaScript Promises</h2>
      <p>Open the browser console to observe the Promise states.</p>
      <p>Current value of ok: {String(ok)}</p>
    </div>
  );
}

export default PromiseStates;