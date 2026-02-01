# Guide de configuration du domaine personnalisé miyuvalkyrie.com

Ce guide vous explique comment configurer votre domaine personnalisé `miyuvalkyrie.com` pour qu'il fonctionne avec GitHub Pages.

## Configuration sur GitHub Pages

### 1. Activer GitHub Pages
1. Allez sur votre repository GitHub : `https://github.com/ProbablyYume/landing-miyu`
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez la branche `main` et le dossier `/ (root)` ou `/docs` selon votre configuration
5. Cliquez sur **Save**

### 2. Configurer le domaine personnalisé
1. Toujours dans **Settings > Pages**
2. Dans la section **Custom domain**, entrez : `miyuvalkyrie.com`
3. Cochez la case **Enforce HTTPS** (si disponible)
4. Cliquez sur **Save**

**Important** : Le fichier `CNAME` doit être présent dans le dossier `public/` de votre projet Astro. Il sera automatiquement copié à la racine du dossier `dist/` lors du build.

### 3. Vérifier le fichier CNAME
Après le déploiement, vérifiez que le fichier `CNAME` est bien présent à la racine de votre site déployé :
- `https://probablyyume.github.io/landing-miyu/CNAME` devrait afficher `miyuvalkyrie.com`

## Configuration DNS sur Ionos

### Option 1 : Configuration avec sous-domaine (www.miyuvalkyrie.com)
Si vous voulez utiliser `www.miyuvalkyrie.com` :

1. Connectez-vous à votre compte Ionos
2. Allez dans **Domaines** > **Gestion DNS**
3. Sélectionnez `miyuvalkyrie.com`
4. Ajoutez/modifiez les enregistrements suivants :

#### Enregistrement A (pour le domaine racine)
- **Type** : A
- **Nom** : @ (ou laissez vide)
- **Valeur** : `185.199.108.153`
- **TTL** : 3600

Ajoutez également ces autres adresses IP GitHub Pages :
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

#### Enregistrement CNAME (pour www)
- **Type** : CNAME
- **Nom** : www
- **Valeur** : `probablyyume.github.io`
- **TTL** : 3600

### Option 2 : Configuration avec domaine racine uniquement (miyuvalkyrie.com)
Si vous voulez utiliser uniquement `miyuvalkyrie.com` (sans www) :

1. Connectez-vous à votre compte Ionos
2. Allez dans **Domaines** > **Gestion DNS**
3. Sélectionnez `miyuvalkyrie.com`
4. Ajoutez/modifiez les enregistrements suivants :

#### Enregistrements A (pour le domaine racine)
Ajoutez ces 4 enregistrements A :

**Enregistrement 1 :**
- **Type** : A
- **Nom** : @ (ou laissez vide)
- **Valeur** : `185.199.108.153`
- **TTL** : 3600

**Enregistrement 2 :**
- **Type** : A
- **Nom** : @ (ou laissez vide)
- **Valeur** : `185.199.109.153`
- **TTL** : 3600

**Enregistrement 3 :**
- **Type** : A
- **Nom** : @ (ou laissez vide)
- **Valeur** : `185.199.110.153`
- **TTL** : 3600

**Enregistrement 4 :**
- **Type** : A
- **Nom** : @ (ou laissez vide)
- **Valeur** : `185.199.111.153`
- **TTL** : 3600

## Vérification de la configuration

### 1. Vérifier les enregistrements DNS
Utilisez un outil comme `dig` ou un site web comme `https://dnschecker.org` pour vérifier que vos enregistrements DNS sont correctement propagés :

```bash
# Vérifier les enregistrements A
dig miyuvalkyrie.com A

# Vérifier les enregistrements CNAME (si vous utilisez www)
dig www.miyuvalkyrie.com CNAME
```

### 2. Attendre la propagation DNS
- La propagation DNS peut prendre de **quelques minutes à 48 heures**
- En général, cela prend entre 1 et 24 heures

### 3. Vérifier sur GitHub Pages
1. Retournez sur **Settings > Pages** de votre repository
2. Vous devriez voir un message indiquant que le domaine est vérifié
3. Un certificat SSL sera automatiquement généré par GitHub (peut prendre quelques heures)

### 4. Tester l'accès
Une fois la propagation terminée :
- `https://miyuvalkyrie.com` devrait afficher votre site
- `https://www.miyuvalkyrie.com` devrait également fonctionner (si configuré)

## Dépannage

### Le domaine ne fonctionne pas après 24h
1. Vérifiez que les enregistrements DNS sont corrects avec `dnschecker.org`
2. Vérifiez que le fichier `CNAME` est bien présent dans `public/` et déployé
3. Vérifiez sur GitHub Pages que le domaine est bien configuré et vérifié
4. Attendez encore quelques heures (la propagation peut être lente)

### Erreur "Domain not found" ou "DNS_PROBE_FINISHED_NXDOMAIN"
- Les enregistrements DNS ne sont pas encore propagés
- Vérifiez que vous avez bien ajouté les 4 enregistrements A avec les bonnes adresses IP

### Le site fonctionne en HTTP mais pas en HTTPS
- GitHub génère automatiquement un certificat SSL, cela peut prendre quelques heures
- Vérifiez que l'option **Enforce HTTPS** est activée dans les paramètres GitHub Pages

### Erreur "This site can't be reached"
- Vérifiez que les adresses IP dans vos enregistrements A sont correctes
- Vérifiez que le fichier CNAME contient bien `miyuvalkyrie.com` (sans www, sans http/https)

## Notes importantes

- **Ne supprimez pas** les enregistrements DNS existants sans vérifier leur utilité
- **Ne modifiez pas** le fichier CNAME après la configuration initiale sans raison
- Les adresses IP GitHub Pages peuvent changer, mais c'est rare
- Si vous utilisez un sous-domaine (www), vous devez aussi configurer le domaine racine avec des enregistrements A

## Support

Si vous rencontrez des problèmes :
- Documentation GitHub Pages : https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- Support Ionos : https://www.ionos.fr/assistance
