# Password Toolbox (Privacy-first PWA)
**Password Toolbox** is a lightweight, client-side Progressive Web App (PWA) that provides a secure password generator, entropy and guess-time calculator, and an example-based strength demo.  
It is designed with privacy in mind — everything runs entirely in the browser, and no data is stored or transmitted.

---

## Features
- Secure password generator with customizable options  
- Real-time entropy and password strength estimation  
- Guess-time calculation for brute-force resistance  
- Example-based strength demonstration for better understanding  
- Progressive Web App (PWA) support for offline access  
- Privacy-first design: no tracking, no data collection, no backend

---

## Quick Local Test
1. Place the following files in a folder:
```bash
index.html
manifest.json
sw.js
```

2. Run a simple static server (recommended for local testing):
```bash
python -m http.server 8000
```

3. Open your browser and visit:
```bash
http://localhost:8000
```

---

## Project Structure
```bash
password-toolbox/
│
├── index.html          
├── manifest.json        
├── sw.js                
├── icon-192.png 
├── icon-512.png 
└── privacy.md        
```

---

## Privacy
All operations are performed locally within your browser.<br>
No passwords or user data are ever sent or stored externally.<br>
For more details, refer to [privacy.md](privacy.md).

---
