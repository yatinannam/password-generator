# Password Toolbox (Privacy-first PWA)

**What**: A client-only password toolbox with a secure generator, entropy/guess-time calculator, and example-based strength demo. Designed to be privacy-friendly: everything runs in the browser; nothing is stored or sent.

**Deploy**: This is a static site — perfect for GitHub Pages.

## Quick local test

1. Place files (`index.html`, `manifest.json`, `sw.js`) in a folder.
2. Run a simple static server (recommended for local testing):
   - Python 3: `python -m http.server 8000`
   - Then open `http://localhost:8000` in your browser.

## Publish to GitHub Pages

1. Create a new repository on GitHub (e.g., `password-toolbox`).
2. Push files to `main`.
3. In repo Settings → Pages, set Source to `main` branch / root. The site will be available at `https://yourusername.github.io/repo-name/`.

## Privacy

See [privacy.md](privacy.md) for full details.

## Notes & improvements

- You can add `icon-192.png` and `icon-512.png` to improve install experience.
- The app uses zxcvbn (CDN) for human-friendly strength scoring when available.
- Service worker caches app shell for offline use.

## License

MIT
