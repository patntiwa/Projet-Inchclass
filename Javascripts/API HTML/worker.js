const worker = new Worker("worker.js");
worker.postMessage("Hello Worker");
worker.onmessage = function (event) {
  console.log("Message du worker : " + event.data);
};
onmessage = function (event) {
  const result = event.data + " (traité en background)";
  postMessage(result);
};
