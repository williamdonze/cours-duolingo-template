# Feuille de route du modèle

Améliorations décidées après la création de ProgServ2 (https://github.com/williamdonze/progserv2), dans l'ordre de réalisation. Cocher au fur et à mesure ; une session qui reprend le travail commence par le premier lot non coché.

## Lot 1 — corrections rapides
- [x] Écran de chargement à la mascotte du cours (écrit dans `index.html` par `tools/configurer.py`, redessiné dès que `config.app` est lu)
- [x] Taille par défaut de `.mascot` (la mascotte de la page Défi prenait toute la largeur)
- [x] Icônes neutres sur la page Défi (plus d'accolades ni de bug dans un cours sans code)
- [x] Badges réservés à un module (`"module": "code-js"`), masqués sinon
- [x] Commentaire de `sw.js` (plus de « ProgWeb 2 »)

## Lot 2 — appli sur l'écran d'accueil
- [x] Reprendre de Pampre (`index.html`, « appli sur l'écran d'accueil ») : invite native Android (`beforeinstallprompt`), mode d'emploi iOS selon le navigateur et la version, navigateurs intégrés (Instagram…), Samsung Internet, rien sur ordinateur ni dans l'appli installée ; proposé en fenêtre après la première leçon (puis 14 jours après un « plus tard », jusqu'à « ne plus me le proposer »), et toujours accessible dans le profil
- [x] Profil : le compteur « codes qui passent les tests » seulement avec le module code-js

## Lot 3 — compétences et documents
- [x] `/nouveau-cours` : toutes les questions en une fois au début (nom, mascotte, couleur, projet, examen, difficultés, niveau)
- [x] Question du **projet** : de côté / fil rouge (vue « Projet » : critères officiels en liste à cocher, liés aux leçons) / boss seulement pour les parties qui s'exercent ; jamais de question sur l'organisation du projet
- [x] Découpage : `/nouveau-cours` s'arrête au programme validé ; chaque unité est écrite dans un contexte propre (sous-agent ou session `/ecrire-unite uNN`) avec un résumé court
- [x] `docs/format-memo.md` (mémo court du format, un exemple minimal par type)
- [x] `tools/nouvelle-unite.py uNN "titre"` : squelette d'unité + entrée dans `config.json`
- [x] `docs/cours/index.md` : quel support sert à quelle unité (on ne lit que ce qu'il faut)
- [x] Tests ciblés par unité (un port par sous-agent), parcours complet une fois à la fin ; `valider-contenu.py --fiches`
- [x] `tools/generer-readme.py` (lancé par `configurer.py`) : hero (mascotte + nom), description, lien, tableau des unités, installation sur téléphone, mention « créé à partir du modèle de William Donzé (https://github.com/williamdonze) »
- [x] `/ajouter-supports` : dossier `supports/` (dépôt possible depuis GitHub, « Add file → Upload files »), registre des supports traités, proposition d'unités / ajouts / boss, validation, écriture, tests, README
- [x] `/mettre-a-jour-moteur` : reprendre `js/`, `css/`, `tools/` du modèle dans un cours existant, sans toucher au contenu
- [x] Profil de cours au départ (code, par cœur, méthodes, langue) : types mis en avant, badges, rangs, jeux (dans `/nouveau-cours`)
- [x] Unité « examen blanc » proposée en option (question posée au départ ; c'est une unité ordinaire, sans chronomètre)
- [x] `/ecrire-unite` : une unité dans son propre contexte (sous-agent ou session)
- [x] Vue « Projet » (`config.projet`), validée et testée

## Lot 4 — mascottes
- [x] Catalogue de formes (`"forme"` : œuf, éléphant — repris de ProgServ2 —, chouette, renard, goutte, livre…)
- [x] Accessoires sans rapport avec le code (`"accessoire"` : lunettes, mortier, toque, béret, casque, nœud) ; le cadre reste pour le code
- [x] Mascotte libre : `content/mascotte.svg` avec des zones nommées pour les humeurs
- [x] `/nouveau-cours` propose 3 mascottes adaptées à la matière, en aperçu (`tools/apercu-mascottes.py`) ; catalogue en image : `docs/mascottes.png`

## Lot 5 — langages
- [x] Socle commun à tous les langages : éditeur, coloration selon le langage, banc d'essai, tests, indices, diagnostics, outils de test ; un langage = un petit fichier (exécuter + traduire les erreurs)
- [x] Reporter le module `code-php` de ProgServ2 (PHP 8.3 en WebAssembly) sur ce socle, chargé seulement au premier exercice de code et hors cache tant qu'il n'a pas servi
- [x] Mode « code sans exécution » pour n'importe quel langage (prédire avec réponse écrite ou choix, ligne fautive, remettre dans l'ordre, pointer dans le code, QCM sur du code ; boss « étude de cas »)
- [x] Mettre à jour `docs/modules.md`, `CLAUDE.md`, les tests du modèle (unités d'exemple `tools/exemples/php` et `java`, `--exemple` dans les trois outils, CI)
- [x] Vérifié sur ProgServ2 : `mettre-a-jour-moteur` ne trouve plus rien de propre au cours, et ses trois tests passent avec le moteur du modèle (123 solutions, 257 erreurs typiques, 103 sessions)
