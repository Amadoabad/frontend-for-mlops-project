async function getPredictedLabel(landmarks) {
  // landmarks is already an array of {x, y, z} objects from MediaPipe
  // No need to flatten - just send as is
  
  try {
    const response = await fetch("https://isiaqnwlxksg.eu-central-1.clawcloudrun.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ landmarks: landmarks }), 
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    return result.gesture || null; // 
  } catch (error) {
    console.error("Prediction error:", error);
    return null;
  }
}