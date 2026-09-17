# Publishing Arla 0.1.0

Everything here is ready. Two steps in GitHub Desktop, then one on the website.

## 1. Publish this folder
1. Open **GitHub Desktop** → **File → Add local repository** → choose this folder (`Arla-public`).
2. Press **Publish repository**.
3. Name it **arla**, leave **Keep this code private** UNCHECKED (the privacy policy page has to be public), press Publish.

## 2. Turn on the website
1. On github.com open your new `arla` repository → **Settings → Pages**.
2. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/docs**, press Save.
3. After a minute the pages are live at:
   - `https://irishwarhound.github.io/arla/` (the app's page)
   - `https://irishwarhound.github.io/arla/privacy.html` (needed for the Play Store)
   - `https://irishwarhound.github.io/arla/terms.html`

**If your GitHub username is not `irishwarhound`,** tell me and I'll correct the links inside the apps and documents; the pages themselves will work either way.

## 3. Upload the installer as a release
1. On the repository page: **Releases → Draft a new release**.
2. Tag: `v0.1.0` · Title: `Arla 0.1.0`.
3. Description: paste the contents of `RELEASE-NOTES-v0.1.0.md`.
4. Drag in these three files from this folder:
   - `Arla-Setup-0.1.0.exe`
   - `Arla-Setup-0.1.0.exe.blockmap`
   - `latest.yml`
5. Press **Publish release**.

`latest.yml` is what the installed app reads to notice a new version, so it must be attached every time.

## After that
- The download button on the site and in the README points at the latest release automatically.
- For the next version: bump `version` in the app's `package.json`, run `npm run dist`, and repeat step 3 with the new files.

## Not included on purpose
- The app's source code. This repository is for downloads, documents and issues.
- Installer signing. Windows will warn about an unknown publisher until you buy a code-signing certificate (about $100-200 a year).
