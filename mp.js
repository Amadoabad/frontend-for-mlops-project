const videoElement = document.getElementsByClassName("input_video")[0];
const canvasElement = document.getElementsByClassName("output_canvas")[0];
const canvasCtx = canvasElement.getContext("2d");
let arrow = null;

async function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
  const landmarks = results.multiHandLandmarks[0]; // Only the first hand

  drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
    color: "#00FF00",
    lineWidth: 5,
  });
  drawLandmarks(canvasCtx, landmarks, {
    color: "#FF0000",
    lineWidth: 2,
  });

  const arrow = await getPredictedLabel(landmarks);
  if (arrow) {
    triggerArrowKey("keydown", arrow);
    setTimeout(() => {
      triggerArrowKey("keyup", arrow);
    }, 100);
  }
}
  canvasCtx.restore();
}

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  },
});
hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.3,
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 1280,
  height: 720,
});
camera.start();