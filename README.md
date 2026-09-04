# miltac.de

Statische Website von **MilTac** (Fitness-App für Android) — reines HTML/CSS, keine Build-Tools.

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite / Landingpage |
| `impressum.html` | Impressum (§ 5 DDG) |
| `datenschutz.html` | Datenschutzerklärung (App + Website) |
| `agb.html` | Nutzungsbedingungen der App |
| `style.css` | Design-System |
| `favicon.svg` | Browser-Icon (Streifen-Logo) |
| `assets/logo-mark.svg` | Logo-Streifen als Vektor |
| `assets/og-image.jpg` | Vorschaubild beim Teilen (WhatsApp, Social Media) |
| `assets/icon-1024.png` | App-Icon (Play Store), `apple-touch-icon.png` für Home-Bildschirm |
| `assets/hero-bg.webp`, `about.webp` | Stimmungsfotos Hero / Über |
| `assets/phone-mockup.webp`, `screen-*.webp` | Handy-Mockup und App-Screenshots |
| `assets/icon-run/-training/-nutrition.png` | Feature-Icons |
| `assets/BlackOpsOne-subset.*` | Stencil-Schrift für den Schriftzug, selbst gehostet (SIL OFL, siehe `OFL-BlackOpsOne.txt`) |
| `CNAME` | Custom Domain für GitHub Pages |

## Veröffentlichen mit GitHub Pages

1. **Repo-Settings → Pages**: unter *Build and deployment* → *Source: Deploy from a branch*, Branch **`main`**, Ordner **`/ (root)`** → *Save*.
2. Unter *Custom domain* steht durch die `CNAME`-Datei automatisch `miltac.de`. Nach der DNS-Einrichtung (unten) **„Enforce HTTPS"** aktivieren.

## DNS beim Domain-Anbieter

Für die Apex-Domain `miltac.de` vier **A-Records** (Host: `@`):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional IPv6 (**AAAA**, Host `@`):

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Für `www.miltac.de` ein **CNAME**-Record: Host `www` → `<github-benutzername>.github.io`.

DNS-Änderungen brauchen je nach Anbieter einige Minuten bis wenige Stunden. GitHub stellt das HTTPS-Zertifikat danach automatisch aus.

## Offene Punkte

- [ ] Google-Play-Link in `index.html` eintragen (zwei Stellen, mit `TODO` markiert), sobald die App gelistet ist
- [ ] USt-IdNr. in `impressum.html` ergänzen, sobald erteilt (auskommentierter Block)
- [ ] Optional: Screenshot der Übersicht im Oliv-Theme nachreichen (aktuell nur in Blau vorhanden, daher nicht eingebaut)
