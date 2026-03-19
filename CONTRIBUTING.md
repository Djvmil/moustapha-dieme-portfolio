# Contributing

Merci de contribuer à ce projet.

## Branching strategy
Ce repository suit un workflow **Git Flow** simplifié.

### Branches principales
- `develop` → branche par défaut, utilisée pour le développement courant
- `master` → branche stable / production

### Règles
- ne pas développer directement sur `master`
- éviter les commits directs sur `develop` quand une PR est plus adaptée
- ouvrir les nouvelles évolutions depuis `develop`
- merger vers `develop` pour les features
- merger vers `master` pour les versions stables / production

### Nommage conseillé
- `feature/<nom-feature>`
- `fix/<nom-fix>`
- `hotfix/<nom-hotfix>`
- `release/<nom-release>`

Exemples :
- `feature/add-play-store-badges`
- `fix/navbar-scrollspy`
- `release/v1.0.0`

## Pull requests
Avant d’ouvrir une PR :
- vérifier que le projet build correctement
- garder des commits lisibles
- décrire clairement le changement

## Local development
```bash
npm install
npm start
```

## Production build
```bash
npm run build
```
