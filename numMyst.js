// // Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// // entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// // joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// // indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// // s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// // partie.
// //Bonus : Le jeu doit également rappeler au joueur les 
// // nombres déjà proposés

// Utiliser Math.random(1 , 100); Choisit un nombre aléatoire entre 1 & 100
// Initialiser une variable compteur de tentatives. à itérer a chaque tentative.
// Indiquer si le nombre est plus petit ou plus grand

let compteur = 0;
let n = Math.random(0, 100);
let nombrelu;
const maxTentative = 10;

do {
    nombrelu = prompt("Saisir un nombre entier entre 0 et 99 : ");
    compteur++;
    if (nombrelu > n) {
        console.log("Trop grand !" + nombrelu);
    } else if (nombrelu < n) {
        console.log("Trop petit !" + nombrelu);
    } else (compteur > max);
    console.log("Nombre de tentatives dépassées")
} while (nombrelu != n);
console.log("Gagné !!! Nombre de tentatives : " + compteur);