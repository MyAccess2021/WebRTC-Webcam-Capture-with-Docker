# 📸 WebRTC Webcam Capture

A lightweight **WebRTC-based webcam capture application** built with **Node.js (Express)**.  
Capture snapshots from a live video feed and store them on the server.  
Fully **Dockerized** for easy deployment on local or cloud environments.

---

## ✅ Features
- 🎥 Live webcam streaming using **WebRTC**
- 📷 Take snapshots and save them on the server
- 🗂 Images stored in `snapshots/` directory
- 🐳 Docker support for deployment

---

## 📂 Project Structure

├── public/                # Frontend files
│   ├── index.html         # UI for webcam preview and button
│   ├── script.js          # WebRTC capture logic
│   └── styles.css         # Styling for video and button
├── snapshots/             # Directory to store captured images
├── server.js              # Express backend server
├── Dockerfile             # Docker image definition
└── package.json           # Project metadata & dependencies



## 🔹 How It Works

1. **Webcam Access** → Browser uses `getUserMedia()` to capture video.
2. **Snapshot** → Frame is drawn on `<canvas>` and converted to Base64 PNG.
3. **Upload** → Snapshot is sent to the backend via `/upload` API.
4. **Storage** → Image is saved in `snapshots/` folder on the server.

---

## ⚡ Local Development

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/webrtc-capture.git
cd webrtc-capture
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Server

```bash
node server.js
```

Access the app at:

```
http://localhost
```

---

## 🐳 Docker Deployment

### **Build Image**

```bash
docker build -t yourusername/webrtc-capture .
```

### **Run Container**

```bash
docker run -d --name webcam-site \
-p 80:80 \
-v "${PWD}/snapshots:/app/snapshots" \
yourusername/webrtc-capture
```

---

## ☁️ Cloud Deployment

### **Pull Image**

```bash
docker pull yourusername/webrtc-capture
```

### **Run**

```bash
docker run -d --name webcam-site \
-p 80:80 \
-v "${PWD}/snapshots:/app/snapshots" \
yourusername/webrtc-capture
```

---

## ✅ Enable Webcam Access on HTTP

Since **getUserMedia** requires a secure context, launch Chrome with:

```bash
start chrome --unsafely-treat-insecure-origin-as-secure=http://<your-server-ip> --user-data-dir="C:\chrome-dev" --disable-web-security
```

---

## 🌐 Access the App

```
http://<your-server-ip>
```

Snapshots will be stored in:

```
/snapshots
```

---

## 🛠 Troubleshooting

* **Camera Blocked:** Use Chrome flag above for insecure HTTP.
* **Images not saving:** Ensure `/snapshots` exists and has correct permissions.
* **Port Conflict:** Change mapping to `-p 8080:80`.

---

`
