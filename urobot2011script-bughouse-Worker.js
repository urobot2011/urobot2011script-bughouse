if (window.Worker) {
  const myWorker = new Worker("http://dradl.ohseon.com/worker/worker.php?w="+window.join(', '));

  myWorker.onmessage = function(e) {
  }
} else {
  console.log('error');
}
