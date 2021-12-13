// =================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
//                L      EEEEE   SSS        TTTTT    A    BBB    L      EEEEE    A    U   U  X   X       EEEEE  TTTTT       L      EEEEE   SSS        TTTTT  Y   Y  PPPP   EEEEE   SSS        DDD    EEEEE       DDD     OOO   N   N  N   N  EEEEE  EEEEE   SSS
//      /      /  L      E      S             T     A A   B  B   L      E       A A   U   U   X X        E        T         L      E      S             T    Y   Y  P   P  E      S           D  D   E           D  D   O   O  NN  N  NN  N  E      E      S
//     /      /   L      EEE     SSS          T    A   A  BBBB   L      EEE    A   A  U   U    X         EEE      T         L      EEE     SSS          T     Y Y   P   P  EEE     SSS        D   D  EEE         D   D  O   O  N N N  N N N  EEE    EEE     SSS
//    /      /    L      E          S         T    AAAAA  B   B  L      E      AAAAA  U   U   X X        E        T         L      E          S         T      Y    PPPP   E          S       D   D  E           D   D  O   O  N  NN  N  NN  E      E          S
//   /      /     L      E          S         T    A   A  B   B  L      E      A   A  U   U  X   X       E        T         L      E          S         T      Y    P      E          S       D  D   E           D  D   O   O  N   N  N   N  E      E          S
//  /      /      LLLLL  EEEEE  SSSS          T    A   A  BBBB   LLLLL  EEEEE  A   A   UUU   X   X       EEEEE    T         LLLLL  EEEEE  SSSS          T      Y    P      EEEEE  SSSS        DDD    EEEEE       DDD     OOO   N   N  N   N  EEEEE  EEEEE  SSSS
// =================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// * * * //les tableaux et les types de données



//Rapels des types de données
let string = "string";
let number = 25;
let boolean = true;
let maVariable; //type Undefined indéfinit puisque l'on a rien attribué à notre variable

//console.log(typeof maVariable); //permet de connaître le type de ma variable

//Tableaux

let monTableau = ["Bordeaux", "Toulouse", "Nantes"]; //array de 3 éléments

//console.log(monTableau[1]);//résultat Toulouse

//dans un objet on mets des accolades et pour un tableau des crochets

//pour afficher la lettre d de bordeaux

//console.log(monTableau[0][3]);//affiche d

//autre type de tableau

let monTableau2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

//console.log(monTableau2[3][1]);//m'affiche 2

//console.log(monTableau2[4].nom);//m'affiche Denis qui est à l'intérieur d'un objet

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.technos[0][1]);//m'affiche le a de javascript pour afficher ce résultat je fais .technos[0][1]

//ajouter un élément à mon object j'écris ce qui m'ajoute un index et un type

// objet.adresse = "22 rue du code";

// console.log(objet);

//je vais créer une base utilisateur

//on stock pas un objet dans un objet trop compliqué mais on stocke les donneé de notre objet dans un tableau
//j'ai une base de donnée
let donnee = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

console.log(donnee[2].pseudo[0]);//m'afffiche le N de Nikola

// ==========================================================================================================================================================================================================================================================================================================================================================================================================
//                L      EEEEE   SSS        TTTTT  RRRR   U   U   CCC   TTTTT  U   U  RRRR   EEEEE   SSS        DDD    EEEEE        CCC    OOO   N   N  TTTTT  RRRR    OOO   L      EEEEE
//      /      /  L      E      S             T    R   R  U   U  C   C    T    U   U  R   R  E      S           D  D   E           C   C  O   O  NN  N    T    R   R  O   O  L      E
//     /      /   L      EEE     SSS          T    R   R  U   U  C        T    U   U  R   R  EEE     SSS        D   D  EEE         C      O   O  N N N    T    R   R  O   O  L      EEE
//    /      /    L      E          S         T    RRRR   U   U  C        T    U   U  RRRR   E          S       D   D  E           C      O   O  N  NN    T    RRRR   O   O  L      E
//   /      /     L      E          S         T    R  R   U   U  C   C    T    U   U  R  R   E          S       D  D   E           C   C  O   O  N   N    T    R  R   O   O  L      E
//  /      /      LLLLL  EEEEE  SSSS          T    R   R   UUU    CCC     T     UUU   R   R  EEEEE  SSSS        DDD    EEEEE        CCC    OOO   N   N    T    R   R   OOO   LLLLL  EEEEE
// ==========================================================================================================================================================================================================================================================================================================================================================================================================
// * * * //Les tructures de contrôle



