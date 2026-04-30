# Moustapha Dieme Portfolio

Portfolio Angular de Moustapha Dieme, orienté **Senior Android Developer**.

**Domaine :** <https://moustapha-dieme.fr>

## Stack
- Angular 21
- Standalone components
- SCSS
- Design dark / glass premium

## Scripts
```bash
npm install
npm start
npm run build
```

- **Développement local :** `http://localhost:4200`
- **Production :** <https://moustapha-dieme.fr>

## Structure du projet
```text
src/app/
├── app.ts
├── data/
│   └── portfolio.data.ts
├── models/
│   └── portfolio.models.ts
├── portfolio-shell/
│   ├── portfolio-shell.component.ts
│   ├── portfolio-shell.component.html
│   └── portfolio-shell.component.scss
└── sections/
    ├── about-section/
    ├── contact-section/
    ├── experience-section/
    ├── expertise-section/
    ├── hero-section/
    └── projects-section/
```

## Architecture
- **`data/`** contient les données du portfolio
- **`models/`** centralise les types
- **`portfolio-shell/`** orchestre la page, la navbar et le scrollspy
- **`sections/`** découpe l’UI par responsabilité

L’objectif est d’avoir une base propre, lisible et facile à publier en open source sur GitHub.

## Contenu mis en avant
- 8+ ans d’expérience
- Android natif moderne
- Kotlin
- Jetpack Compose
- KMP / CMP
- Clean Architecture
- Spring Boot
- Mobile banking / AdTech / apps métier

## Auteur
Créé par **Moustapha Dieme**.

- LinkedIn : <https://www.linkedin.com/in/moustapha-s-dieme-329155145>
- GitHub : <https://github.com/Djvmil>

## 🚀 Déploiement

### Workflow CI/CD

- **CI** (`ci.yml`) : build + lint automatique sur tout push/PR vers `master`
- **Push image** : si le push est un tag `v*`, build et push l'image Docker sur GHCR
- **CD** (`deploy-prod.yml`) : déclenchement manuel via GitHub Actions avec approval gate

### Déployer une nouvelle version

#### Option A — En ligne de commande

```bash
cd moustapha-dieme-portfolio
git checkout master
git pull origin master
git tag v0.1.1
git push origin v0.1.1
# Attendre que le CI push-image soit ✅
gh run list --limit 5
gh run watch <run_id>
# Sur le VPS
ssh -p 51622 djvmil_@51.68.129.2
cd /opt/synkro-deploy
docker compose pull portfolio
docker compose up -d portfolio
```

#### Option B — Sur GitHub directement

1. **Actions** → **CI — Portfolio** → **Run workflow** → branche `master`
2. Pour déployer : **Actions** → **Deploy Prod** → **Run workflow** → `version: v0.1.1`, `services: portfolio`
3. **Review deployments** → **Approve**

### Créer un tag depuis GitHub

1. **Releases** → **Draft a new release**
2. **Choose a tag** → taper `v0.1.1` → **Create new tag**
3. Target : `master`, titre : `v0.1.1` → Publier

### Images Docker

- `ghcr.io/djvmil/moustapha-dieme-portfolio`
- Tags : `latest` + `vX.Y.Z`

## Licence
Ce projet est distribué sous licence **MIT**. Voir le fichier `LICENSE`.
