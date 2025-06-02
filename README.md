# ML Course Final Project - Gesture Control Maze Game

This project is a gesture-controlled maze game that uses machine learning for real-time gesture recognition. Players navigate a maze using hand gestures detected via their webcam, or keyboard controls as a fallback.

---

## 🚀 Quick Start

1. **Install Live Server in VS Code:**
   - Open VS Code
   - Go to Extensions (`Ctrl+Shift+X`)
   - Search for "Live Server" by Ritwick Dey and install it

2. **Launch the Game:**
   - Right-click on `index.html`
   - Select **"Open with Live Server"**
   - The game will open in your browser at `http://localhost:5500`

---

## 📁 Project Structure

- `index.html` — Main game interface
- `maze.js` — Maze generation and game logic
- `api-call.js` — ML model API integration for gesture recognition
- `cam.js` — Webcam handling and gesture preprocessing
- `keyboard.js` — Keyboard controls (fallback)
- `mp.js` — Media processing utilities

---

## 🧩 Maze Rendering

- The maze is generated and rendered with improved visual clarity.
- If you want to adjust the maze's appearance, modify the rendering logic or CSS for better contrast and less "foggy" visuals.

---

## 🔧 ML Model Integration

In `api-call.js`, replace the placeholder code with your actual ML model API call:


**Instructions:**
- Accept the processed tensor (`processed_t`) as input
- Call your deployed ML model's API
- Return one of: `"up"`, `"down"`, `"left"`, `"right"`, or `null`

---

## 🎮 Controls

- **Hand Gestures:** Use your webcam to control the player in the maze.
- **Keyboard:** Use arrow keys as a fallback control method.

---

## 📢 Notes

- For best results, ensure your webcam is enabled and has good lighting.
- If the maze appears unclear, adjust the CSS or canvas rendering settings for higher contrast.

---
