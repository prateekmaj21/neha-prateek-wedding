# Neha & Prateek — Wedding Website

A responsive, Bengali-inspired wedding invitation website for GitHub Pages. Built with plain HTML, CSS and JavaScript — no build tools or dependencies required.

## Preview locally
Open `index.html` in a browser. For a local server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

1. **Replace photographs** in the `assets/` folder:
   - `hero-placeholder.svg` — large cover / couple photograph.
   - `photo-1.svg`, `photo-2.svg`, `photo-3.svg` — gallery images.
   Keep the same filenames, or update the paths in `index.html` and `styles.css`.
2. **Set the RSVP WhatsApp number** in `index.html`. Replace `91XXXXXXXXXX` with the number including country code, digits only.
3. **Confirm the reception time** and update `Time to be announced` in `index.html` once finalised.
4. **Check venue map links** and adjust the Google Maps search URLs if you have exact map pins.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `neha-prateek-wedding`.
2. Upload all files and folders from this project to the repository root. Keep `index.html` at the root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish. Your site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

For a user/organization site repository named `YOUR-USERNAME.github.io`, the URL will be `https://YOUR-USERNAME.github.io/`.

## Personalising the design

- Main colours and typography are configured at the top of `styles.css` in `:root`.
- The Bengali text uses the Tiro Bangla Google Font. A serif fallback is provided.
- All dates and times are India Standard Time where relevant.
- The countdown targets Bodhu Baran on 7 January 2027 at 4:00 PM IST.
