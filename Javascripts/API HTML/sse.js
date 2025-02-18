const evtSource = new EventSource("serveur.php");
evtSource.onmessage = function (event) {
  console.log("Nouveau message SSE : " + event.data);
};
evtSource.addEventListener("ping", function (event) {
  console.log("Ping reçu à : " + JSON.parse(event.data).time);
});
