# CLAUDE.md — Arbeitsanweisungen

> Lies diese Datei bei jedem neuen Session-Start. Sie legt fest WIE wir
> arbeiten. WAS im Repo liegt und der aktuelle Stand stehen in `README.md`
> ("Offene Punkte", "Sicherheit", "Marken-Kurzreferenz") — dort zuerst lesen.

## Arbeitsweise

- **Vor jeder größeren Aufgabe: erst überlegen welches Modell + welche
  Effort-Stufe nötig ist, dann dem User Bescheid geben — nicht einfach
  anfangen.** Der User stellt danach selbst um und gibt explizit **"GO"**.
  Erst danach coden. Gilt projektübergreifend, auch für andere Projekte
  des Users.
- Deutsch mit dem User, Commit-Messages/Code auf Englisch ist hier nicht
  vorgeschrieben (reine HTML/CSS-Site, keine Codebase-Konvention nötig).
- Nie direkt auf `main` — Branch → PR → merge lassen der User entscheidet
  (bisher hat der User selbst gemergt, nicht automatisch annehmen).
- **CSP ist strikt** (s. README → Sicherheit): kein Inline-`<script>`/`style`,
  keine externen Verbindungen. Neue Interaktivität geht in `site.js`, neues
  Styling in `style.css`.

## Kontext

- Inhaber: **Marco Huwer**, Einzelunternehmen **MilTac**, Erikastraße 18,
  82110 Germering. Kontakt **info@miltac.de** (nie die private @pm.me-Adresse
  in öffentlichen Seiten verwenden).
- Website ist der Web-Auftritt zur Android-Fitness-App **MilTac** (separates
  privates Repo). `konto-loeschen.html` hier ist die von Google Play
  geforderte Web-URL für die Kontolöschung — das Pendant in der App selbst
  liegt im App-Repo.
- Gehostet auf GitHub Pages mit Custom Domain `miltac.de` (Porkbun-DNS),
  HTTPS aktiv, Domain verifiziert.

## Sandbox-Hinweis für Cloud-Sessions

Diese Website braucht kein Android SDK und keinen Emulator — reines
HTML/CSS/JS, Playwright reicht zum visuellen Prüfen (auch headless in einer
Cloud-Session). Für Arbeit an der zugehörigen Android-App ist dagegen eine
**lokale** Session besser: in einer Cloud-Session gibt es kein Android SDK,
kein Display für einen sichtbaren Emulator, und der Internet-Egress ist auf
eine Allowlist beschränkt (kein `dl.google.com` u.ä.) — App-Builds laufen
dort nur über einen Umweg via GitHub Actions.
