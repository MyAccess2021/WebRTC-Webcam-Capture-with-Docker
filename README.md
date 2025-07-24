Here’s the **`README.md`** file for your project:

---

```markdown
# 📸 WebRTC Webcam Capture with Docker

This project is a **Node.js + WebRTC** application that captures snapshots from a live webcam feed and stores them on the server.  
It runs in a **Docker container** for easy deployment.

---

## ✅ Features
- Live webcam streaming using **WebRTC**
- Capture snapshots and upload them to the server
- Snapshots stored in `snapshots/` directory
- Dockerized for easy local and cloud deployment

---

## 📂 Project Structure
```

├── public/
│   ├── index.html        # Frontend UI
│   ├── script.js         # WebRTC capture logic
│   └── styles.css        # Basic styling
├── snapshots/            # Saved snapshots
├── server.js             # Express server
├── Dockerfile            # Docker build file
└── package.json          # Node.js dependencies

````

---

## ⚡ Frontend Files
### `index.html`
Displays video stream and capture button.
```html
<h1>Live Webcam</h1>
<video id="video" autoplay></video>
<button id="capture">Take Image</button>
<canvas id="canvas"></canvas>
````

### `script.js`

Handles video stream and snapshot upload.

```javascript
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
```

---

## 🔹 Backend

### `server.js`

Uses **Express** to serve files and save snapshots as PNG.

```javascript
app.post('/upload', (req, res) => {
  const base64Data = req.body.image.replace(/^data:image\/png;base64,/, '');
  fs.writeFile(filepath, base64Data, 'base64', () => res.send({ success: true }));
});
```

---

## 🐳 Docker Setup

### **Build Image**

```bash
docker build -t yourusername/webrtc-capture .
```

### **Run Container**

```bash
docker run -d --name webcam-site -p 80:80 -v "${PWD}/snapshots:/app/snapshots" yourusername/webrtc-capture
```

---

## ☁️ Deploy on Cloud

### **Pull Image**

```bash
docker pull yourusername/webrtc-capture
```

### **Run**

```bash
docker run -d --name webcam-site -p 80:80 -v "${PWD}/snapshots:/app/snapshots" yourusername/webrtc-capture
```

---

## ✅ Enable Camera on HTTP

Run Chrome with this flag:

```bash
start chrome --unsafely-treat-insecure-origin-as-secure=http://<server-ip> --user-data-dir="C:\chrome-dev" --disable-web-security
```

---

## 🌐 Access App

```
http://<server-ip>
```

Snapshots saved in:

```
/snapshots
```

---

## 🔍 Troubleshooting

* **Camera access blocked:** Use Chrome flag above
* **Snapshots not saving:** Ensure `/snapshots` folder exists and is mounted
* **Port in use:** Stop existing service or use different port `-p 8080:80`

---
