# Feuille de route du modèle

Améliorations décidées après la création de ProgServ2 (https://github.com/williamdonze/progserv2), dans l'ordre de réalisation. Cocher au fur et à mesure ; une session qui reprend le travail commence par le premier lot non coché.

## Lot 1 — corrections rapides
- [x] Écran de chargement à la mascotte du cours (écrit dans `index.html` par `tools/configurer.py`, redessiné dès que `config.app` est lu)
- [x] Taille par défaut de `.mascot` (la mascotte de la page Défi prenait toute la largeur)
- [x] Icônes neutres sur la page Défi (plus d'accolades ni de bug dans un cours sans code)
- [x] Badges réservés à un module (`"module": "code-js"`), masqués sinon
- [x] Commentaire de `sw.js` (plus de « ProgWeb 2 »)

## Lot 2 — appli sur l'écran d'accueil
- [ ] Reprendre de Pampre (`index.html`, « appli sur l'écran d'accueil ») : invite native Android (`beforeinstallprompt`), mode d'emploi iOS selon le navigateur et la version, navigateurs intégrés (Instagram…), Samsung Internet, rien sur ordinateur ni dans l'appli installée ; proposé en fenêtre après la première leçon, et toujours accessible dans le profil

## Lot 3 — compétences et documents
- [ ] `/nouveau-cours` : toutes les questions en une fois au début (nom, mascotte, couleur, projet, examen, difficultés, niveau)
- [ ] Question du **projet** : de côté / fil rouge (vue « Projet » : critères officiels en liste à cocher, liés aux leçons) / boss seulement pour les parties qui s'exercent ; jamais de question sur l'organisation du projet
- [ ] Découpage : `/nouveau-cours` s'arrête au programme validé ; chaque unité est écrite dans un contexte propre (sous-agent ou session `/ecrire-unite uNN`) avec un résumé court
- [ ] `docs/format-memo.md` (mémo court du format, un exemple minimal par type)
- [ ] `tools/nouvelle-unite.py uNN "titre"` : squelette d'unité + entrée dans `config.json`
- [ ] `docs/cours/index.md` : quel support sert à quelle unité (on ne lit que ce qu'il faut)
- [ ] Tests ciblés par unité, parcours complet une fois à la fin
- [ ] `tools/generer-readme.py` (lancé par `configurer.py`) : hero (mascotte + nom), description, lien, tableau des unités, installation sur téléphone, mention « créé à partir du modèle de William Donzé (https://github.com/williamdonze) »
- [ ] `/ajouter-supports` : dossier `supports/` (dépôt possible depuis GitHub, « Add file → Upload files »), registre des supports traités, proposition d'unités / ajouts / boss, validation, écriture, tests, README
- [ ] `/mettre-a-jour-moteur` : reprendre `js/`, `css/`, `tools/` du modèle dans un cours existant, sans toucher au contenu
- [ ] Profil de cours au départ (code, par cœur, méthodes, langue) : types mis en avant, badges, rangs, jeux
- [ ] Unité « examen blanc » proposée en option

## Lot 4 — mascottes
- [ ] Catalogue de formes (`"forme"` : œuf, éléphant — repris de ProgServ2 —, chouette, renard, goutte, livre…)
- [ ] Accessoires sans rapport avec le code (`"accessoire"` : lunettes, toque, stéthoscope…) ; le cadre reste pour le code
- [ ] Mascotte libre : `content/mascotte.svg` avec des zones nommées pour les humeurs
- [ ] `/nouveau-cours` propose 3 mascottes adaptées à la matière, en aperçu

## Lot 5 — langages
- [ ] Socle commun à tous les langages : éditeur, coloration selon le langage, banc d'essai, tests, indices, diagnostics, outils de test ; un langage = un petit fichier (exécuter + traduire les erreurs)
- [ ] Reporter le module `code-php` de ProgServ2 (PHP 8.3 en WebAssembly) sur ce socle, chargé seulement au premier exercice de code et hors cache tant qu'il n'a pas servi
- [ ] Mode « code sans exécution » pour n'importe quel langage (prédire, trous, ligne fautive, remettre dans l'ordre, choisir la correction)
- [ ] Mettre à jour `docs/modules.md`, `CLAUDE.md`, les tests du modèle
