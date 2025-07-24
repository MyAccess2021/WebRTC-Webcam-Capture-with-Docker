const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture');
const context = canvas.getContext('2d');

// Start webcam
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert('Camera access failed: ' + err.message);
  }
}

// Take snapshot and upload
captureBtn.addEventListener('click', async () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0);
  const dataUrl = canvas.toDataURL('image/png');

  await fetch('/upload', {   // ✅ FIXED: match server route
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: dataUrl })
  });

  alert('Snapshot saved to server!');
});

init();
