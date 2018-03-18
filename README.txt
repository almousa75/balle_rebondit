Application graphique
Objectif:
L'application graphique à réaliser doit permettre de créer une balle qui rebondit sur les rebords d'un
caneva et ce, de façon continue.

les étapes à réqliser :

1. créer un canevas non carré pour que la balle ne suive pas toujours la même trajectoire.
Utiliser la balise canevas et lui attribuer un id.
2. Créer une fonction javascript qui sera lancée au chargement de la page html
3. La fonction javascript devra d'abord initialiser les positions de la balle ainsi que la vitesse de
déplacement en X et en Y. Voir remarque a).
4. faire une boucle de rafraîchissement permettant le mouvement de la balle avec la fonction
javascript setInterval. setInterval aura comme 1er argument la fonction animer (à définir).
Elle lancera la fonction animer répété à un intervalle régulier en millisecondes donné par le
2ème argument (à vous de le préciser).
5. La fonction animer commencera par réinitialiser le canevas avec la méthode clearRect(),
puis retracera la balle avec les méthodes beginPath, arc et fill (avec les nouvelles positions
de la balle). Elle devra gérer les rebonds en cas de collisions avec un des rebords. Voir
remarque b).

Remarques :
a) Pour initialiser les variables de position à leurs valeurs minimales (coin supérieur droit) :
étant donné que les coordonnées de la balle sont définies par son centre, additionner son
rayon pour que quand la balle soit en [0, 0], elle soit encore dans l'écran. De plus, ajouter 1
pour qu'elle ne reste pas coincée sur les rebords.
b) Pour gérer les rebonds en cas de collisions avec un des rebords :
lorsque le côté droit de la balle touchera le coin (ou dépassera), ou si on touche le bord
gauche ou droit, on inverse le sens horizontal.
Même principe si on touche le bord du bas ou du haut.