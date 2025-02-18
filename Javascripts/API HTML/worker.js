// Fichier principal

const worker = new Worker("worker.js");
worker.postMessage("Bonjour Worker");
worker.onmessage = function (event) {
  console.log("Message du worker : " + event.data);
};

// Fichier worker

onmessage = function (event) {
  const result = event.data + " (traité en background)";
  postMessage(result);
};
