# 🎬 Smart Video Pauser - Chrome Extension

**Smart Video Pauser** is a lightweight Chrome extension that automatically pauses videos playing on any website (e.g., YouTube, Netflix, Vimeo) when the user switches to another tab — and resumes playback when they return.

No setup. No UI. Just works.

---

## ✨ Features

- ⏸️ Automatically **pauses videos** when you switch tabs
- ▶️ Automatically **resumes videos** when you return to the tab
- 💡 Works on **all websites** with HTML5 `<video>` elements
- 🚫 No popup or UI — the extension runs silently in the background

---

## 📁 Folder Structure


 smart-video-pauser/
- ├── manifest.json # Chrome extension config
- ├── content.js # Core logic to pause/resume videos
- ├── background.js # Optional background service worker
- └── icon.png # Extension icon (48x48 or 128x128)


---

## 📦 Installation (For Developers)

- Clone or download this repository.
- Open Chrome and go to `chrome://extensions/`
- Enable **Developer Mode** (toggle in the top right)
- Click **“Load unpacked”** and select the extension folder.

Now, visit any video site (like YouTube), play a video, and switch to another tab — it will pause automatically.

---

## 🧠 How It Works

- The `content.js` script listens for the `visibilitychange` event.
- When the active tab loses focus (`document.hidden` becomes `true`), it pauses all playing `<video>` elements.
- When the user returns to the tab, it resumes videos that were paused by the extension (not manually by the user).

This ensures a **distraction-free experience** and helps **prevent missed content** while multitasking.

---

## 🔐 Permissions Used

- `"scripting"` and `"tabs"` — to inject and run scripts on websites
- `"<all_urls>"` — to work on all websites with videos

> This extension does **not** collect any user data and runs entirely on the client side.

---
