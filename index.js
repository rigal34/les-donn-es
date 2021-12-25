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

//console.log(donnee[2].pseudo[0]);//m'afffiche le N de Nikola

// ==========================================================================================================================================================================================================================================================================================================================================================================================================
//                L      EEEEE   SSS        TTTTT  RRRR   U   U   CCC   TTTTT  U   U  RRRR   EEEEE   SSS        DDD    EEEEE        CCC    OOO   N   N  TTTTT  RRRR    OOO   L      EEEEE
//      /      /  L      E      S             T    R   R  U   U  C   C    T    U   U  R   R  E      S           D  D   E           C   C  O   O  NN  N    T    R   R  O   O  L      E
//     /      /   L      EEE     SSS          T    R   R  U   U  C        T    U   U  R   R  EEE     SSS        D   D  EEE         C      O   O  N N N    T    R   R  O   O  L      EEE
//    /      /    L      E          S         T    RRRR   U   U  C        T    U   U  RRRR   E          S       D   D  E           C      O   O  N  NN    T    RRRR   O   O  L      E
//   /      /     L      E          S         T    R  R   U   U  C   C    T    U   U  R  R   E          S       D  D   E           C   C  O   O  N   N    T    R  R   O   O  L      E
//  /      /      LLLLL  EEEEE  SSSS          T    R   R   UUU    CCC     T     UUU   R   R  EEEEE  SSSS        DDD    EEEEE        CCC    OOO   N   N    T    R   R   OOO   LLLLL  EEEEE
// ==========================================================================================================================================================================================================================================================================================================================================================================================================
// * * * //Les tructures de contrôle

// sont des moyens de contôler les choses

if (donnee[0].age > donnee[1].age) {
  //console.log(donnee[0].pseudo + " est plus agé que " + donnee[1].pseudo);
} else {
  //valeur si faux
}

//on peut effectuer une terner avec if else
//valeur à tester ? si vrai : si faux;
//le "?"veux dire teste moi ce qui est à tester sur ma gauche,si c'est vrais je veux que tu me fasse sa et deux points si s'ai faux

// =====================================================================================================================================================================================================================================================================================
//                L      EEEEE       W   W  H   H  III  L      EEEEE
//      /      /  L      E           W   W  H   H   I   L      E
//     /      /   L      EEE         W   W  HHHHH   I   L      EEE
//    /      /    L      E           W W W  H   H   I   L      E
//   /      /     L      E           W W W  H   H   I   L      E
//  /      /      LLLLL  EEEEE        W W   H   H  III  LLLLL  EEEEE
// =====================================================================================================================================================================================================================================================================================
// * * * //le while tant que

let w = 0;

while (w < 10) {
  w++;
  //console.log("La valeur de w est de : " + w);
}

// =====================================================================================================================================================================================================================================================================================
//                DDD     OOO        W   W  H   H  III  L      EEEEE
//      /      /  D  D   O   O       W   W  H   H   I   L      E
//     /      /   D   D  O   O       W   W  HHHHH   I   L      EEE
//    /      /    D   D  O   O       W W W  H   H   I   L      E
//   /      /     D  D   O   O       W W W  H   H   I   L      E
//  /      /      DDD     OOO         W W   H   H  III  LLLLL  EEEEE
// =====================================================================================================================================================================================================================================================================================
// * * * //Do while faire une boucle
let d = 0;

do {
  d++;

  console.log(d);
} while (d < 5);

// ===========================================================================================================================================================================================================================================================
//                     FFFFF   OOO   RRRR
//      /      /       F      O   O  R   R
//     /      /        FFF    O   O  R   R
//    /      /         F      O   O  RRRR
//   /      /          F      O   O  R  R
//  /      /           F       OOO   R   R
// ===========================================================================================================================================================================================================================================================
// * * * // For ces boucles sont trés puissante et elle est souvent utilisé
//on a 2 façons de faire les boucle for

// for (const bruno of donnee){  // je crees une contante que je prénom bruno et dans data qui est donnée cela veux dire que chaque éléments individuellement je vais l'appeler bruno dans la base de donnée
//   document.body.innerHTML +=`<li>${bruno.pseudo} - ${bruno.age}ans</li>` ; //for va faire tourner le tableau de nos 3 utilisateurs et à chaque tour on peux donnée une logique un cosole log par exemple
// }

//résultat de cette boucle = Denis - 33ans
//  Samia - 24ans
//Nikola - 42ans

//façon du prof d'utilisation des boucle

//for (i=0; i < donnee.length);//i tu pars de 0 et tant que i est inf à donnee.lenght
//console.log(donnee.length);//m'affiche 9 dans ma console permet de savoir la longueur du tableau length c'est pour la longueur

//dabord on déclare la valeur de i,jusqu'ou on boucle,on incrémente i si la condition 2 n'est pas remplis

//exemple de le puissance de cette boucle for
//pour aller chercher des éléments
// for (i=0; i < donnee.length; i++){
//console.log(i);
//console.log(donnee[i].technos[0]);//de cette façon on vient de chercher nos 3 éléments
//    document.body.innerHTML += "<h2>" + donnee[i].technos + "</h2>";  //je viens d'injecter du h2 dans mon body.
// };

// =========================================================================================================================================================================================================================================================================
//                 SSS   W   W  III  TTTTT   CCC   H   H
//      /      /  S      W   W   I     T    C   C  H   H
//     /      /    SSS   W   W   I     T    C      HHHHH
//    /      /        S  W W W   I     T    C      H   H
//   /      /         S  W W W   I     T    C   C  H   H
//  /      /      SSSS    W W   III    T     CCC   H   H
// =========================================================================================================================================================================================================================================================================
// * * * //switch évite les répétitions des if

document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);//permet de savoir sur quoi j'ai cliqué et plus spécialemment sur l'id
  switch (
    e.target.id //si tu as dans l'évènement que tu es allés cherché de e.target.id et dans case tu trouve "javascript" tu me mets une couleur yellow
  ) {
    case "javascript":
      document.body.style.background = "yellow";
      break;

    case "php":
      document.body.style.background = "violet";
      break;

    case "python":
      document.body.style.background = "blue";
      break;

    default:
      null;
  }
});

//les différentes méthodes

//une méthode est une fonction qui a été déja codé qui est déjà présente dans le code de javascript,est une fonction à l'aquel on à accés

// ===============================================================================================================================================================================================================================================================================================================================
//                M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE        SSS   TTTTT  RRRR   III  N   N   GGG
//      /      /  MM MM  E        T    H   H  O   O  D  D   E           S        T    R   R   I   NN  N  G   G
//     /      /   M M M  EEE      T    HHHHH  O   O  D   D  EEE          SSS     T    R   R   I   N N N  G
//    /      /    M   M  E        T    H   H  O   O  D   D  E               S    T    RRRR    I   N  NN  G  GG
//   /      /     M   M  E        T    H   H  O   O  D  D   E               S    T    R  R    I   N   N  G   G
//  /      /      M   M  EEEEE    T    H   H   OOO   DDD    EEEEE       SSSS     T    R   R  III  N   N   GGGG
// ===============================================================================================================================================================================================================================================================================================================================
// * * * //Méthode string

let string2 = "Javascript est un language orienté objet";
//console.log(typeof string2);//permet de renseigner sur le type
//console.log(eval("1"+ 2));//résultat 12 il concaténe les 2
//console.log(parseInt("1"));// résultat 1 transforme une chaîne de caractére en nombre.
//console.log(eval(parseInt("1") + 2));

//des méthode pour interroger est-ce que ce n'est pas un chiffre
//console.log(isNaN(string2));//affiche true ce n'est pas un nombre
//console.log(isNaN (48));//affiche false ce n'est pas un nombre

//pour connaître la longueur d'une chaîne de caractére
//console.log(string2.length);//m'affiche 40 il va jusqu'à la longueur d'un chaîne de caractére

//console.log(string2[22]);// affiche u
//console.log(string2[string2.length - 1]);//comme length commence à 0 dans son index donc on met un -1 pour qu'il affiche dans la console
//lenght n'est pas égal à l'index, l'index lui commence à zéro alors que la lengh commence à 1 c'est pour cela que l'on mets -1 parfois on 'est obligé d'enlever un parfois

//indexOf
//console.log(string2.indexOf("l"));//m'affiche 18 pour me dire que mon index de lettre l commence à 18 et si il ne connaît pas la lettre il dit -1

//let newString = string2.slice(2);
//console.log(newString);  //m'affiche ''vascript est un language orienté objet''il m'a coupé mes 2 premiers élément et m'a garder le reste dans newsString si je mets 1 il ne coupe rien et ne garde rien

// let newString = string2.slice(5, 17);
// console.log(newString);//il commence à couper à 5 et tu t'arrête à 17 ce qui donne "cript est un"

//methode split
//console.log(string2.split("i"));//partout ou tu vois un "i" tu coupe et tu isoles  es tu mets le reste dans des tableaux cela permets de séparer les choses ""
// je mets des espaces "" il isole mes mots pour les mettre dans des tableaux

//pour tout mettre en LowerCas
//console.log(string2.toLocaleLowerCase());//toute ma chaîne de caractére est en minuscules

//et la c'est le contraire  tout es en majuscule
//console.log(string2.toUpperCase());

//le replace

//console.log(string2.replace("Javascript" , "PHP")); //il va chercher partout ou il y Javascript pour le remplacer cette élément par  "PHP"

// ========================================================================================================================================================================================================================================================================================================================================
//                M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE       N   N  U   U  M   M  BBB    EEEEE  RRRR    SSS
//      /      /  MM MM  E        T    H   H  O   O  D  D   E           NN  N  U   U  MM MM  B  B   E      R   R  S
//     /      /   M M M  EEE      T    HHHHH  O   O  D   D  EEE         N N N  U   U  M M M  BBBB   EEE    R   R   SSS
//    /      /    M   M  E        T    H   H  O   O  D   D  E           N  NN  U   U  M   M  B   B  E      RRRR       S
//   /      /     M   M  E        T    H   H  O   O  D  D   E           N   N  U   U  M   M  B   B  E      R  R       S
//  /      /      M   M  EEEEE    T    H   H   OOO   DDD    EEEEE       N   N   UUU   M   M  BBBB   EEEEE  R   R  SSSS
// ========================================================================================================================================================================================================================================================================================================================================
// * * * //METHODE NUMBERS

//réduir son nombre de virgule permet de nous garder un certain nombre de chiffre aprés la virgule

let number2 = 42.1234;
let numberString = "42.12 est un string";
console.log(number2.toFixed(2)); //garde deux chriffres aprés la virgule

//changer une chaîne de caractére en number string en chiffre
//console.log(parseInt (numberString));//ou il peut aussi extraire le chiffre d'une chaîne de caractére

//il garde le numéro avec la virgule flottante
//console.log(parseFloat(numberString));//42.12

//la méthode Math
console.log(Math.PI); //me produit PI

console.log(Math.round(4.4)); //il arrondi au plus proche

console.log(Math.floor(4.9)); //arrondi à l'inférieur

console.log(Math.ceil(4.1)); // arrondi au plus haut

//les puissances
console.log(Math.pow(2, 7)); //2 à la puissance 7

//les racines carré
console.log(Math.sqrt(16)); // égale 4

//le Math random

console.log(Math.random() * 50); //ns donnera un chiffre entre 0 etn 1
//donnera un chiffre entre 0 et 50

console.log(Math.floor(Math.random() * 50)); //et on obtient un chiffre entier entre 0 et 50 IMPORTANT!!!!!!!

// =================================================================================================================================================================================================================================================================================================================================
//                M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE         A    RRRR   RRRR     A    Y   Y   SSS
//      /      /  MM MM  E        T    H   H  O   O  D  D   E            A A   R   R  R   R   A A   Y   Y  S
//     /      /   M M M  EEE      T    HHHHH  O   O  D   D  EEE         A   A  R   R  R   R  A   A   Y Y    SSS
//    /      /    M   M  E        T    H   H  O   O  D   D  E           AAAAA  RRRR   RRRR   AAAAA    Y        S
//   /      /     M   M  E        T    H   H  O   O  D  D   E           A   A  R  R   R  R   A   A    Y        S
//  /      /      M   M  EEEEE    T    H   H   OOO   DDD    EEEEE       A   A  R   R  R   R  A   A    Y    SSSS
// =================================================================================================================================================================================================================================================================================================================================
// * * * //Méthode arrays

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "solidity"];

// let newArray = array3 + array4;
// console.log(newArray);            //résutat  Javascript,Php,PythonRuby,solidity

//méthode concatate permet de faire fusionner des tableaux
//je voudrais concaténé et rester dans un tableau pas commen le modele du dessus il y a 2 méthode pour sa

//méthode 1
let newArray = array3.concat(array4);
// console.log(newArray);//résutat  [ "Javascript", "Php", "Python", "Ruby", "solidity" ]

//méthode 2
//let newArray = [...array3, ...array4];
//console.log(newArray);//résutat  [ "Javascript", "Php", "Python", "Ruby", "solidity" ]
// les 3 ... point se dise spray d'opérateur

//la méthode joint
//permet de casser tout t'on tableau et entre chaque élément de mon tableau tu va mettre une virgule ou un tiret par exemple

//console.log(array3.join("-")); //résultat Javascript-Php-Python "TRES UTILISE"

//méthode slice "IMPORTANTE!!!!!"

//console.log(array3.slice(1));//découpe moi le 1er élément du tableau,résult [ "Php", "Python" ]
//la méthode slice peut aussi prendre 2 paramétres
////console.log(newArray.slice(2,3));//tu retires les 2 premier et ensuite tu garde l'index numéro 3 permet de garder pas mal d'élément dans un tableau

//indexOf pour chercher  dans un tableau
//console.log(array3.indexOf("Python"));//m'affiche le numéro d'index ou se situe mon élément

//cette méthode marche pour les objets et les tableaux
//array3.forEach((brunos) => console.log(brunos)); //à chaque tours l'élément individuel tu va l'appelés brunos et exécute ensuite cette fonction
//le forEach permet d'énumer les choses une par une

//2 méthodes pour checked des choses dans un tableau

//console.log(array3.every((bruno) => bruno === "Php"));
//la méthode every remplace un élément par bruno ce qui permet de tester chaque éléments dans mon tableau pour voir s'il y a Php dans chacun de ces éléments et comme il n'y sont pas tous comme cela il renvoie false

//console.log(array3.some((bruno) => bruno === "Php"));//est ce que quelque par il y a écrit Php oui donc "true"

//le shift est une méthode qui permet de casser le tableau
//il enléve le premier index du tableau,

// let shift = array3.shift();
// console.log(shift); //affiche Javascript

//console.log(array3.pop());//il retire le dernier élément de mon tableau

//méthode splice
//const restArray = array3.splice(1, 1, "C++"); //à l'emplacement n°1 , tu enléves un élément et m'ajoute, C++ et il garde dans ma constante l'élément qui a été enlevé
//console.log(array3);//Array(3) [ "Javascript", "C++", "Python" ] lesson Les donnée 1h47

// ===========================================================================================================================================================================================================================================================================================================================================
//                       A    RRRR   RRRR     A    Y   Y       III  M   M  PPPP    OOO   RRRR   TTTTT    A    N   N  TTTTT
//      /      /        A A   R   R  R   R   A A   Y   Y        I   MM MM  P   P  O   O  R   R    T     A A   NN  N    T
//     /      /        A   A  R   R  R   R  A   A   Y Y         I   M M M  P   P  O   O  R   R    T    A   A  N N N    T
//    /      /         AAAAA  RRRR   RRRR   AAAAA    Y          I   M   M  PPPP   O   O  RRRR     T    AAAAA  N  NN    T
//   /      /          A   A  R  R   R  R   A   A    Y          I   M   M  P      O   O  R  R     T    A   A  N   N    T
//  /      /           A   A  R   R  R   R  A   A    Y         III  M   M  P       OOO   R   R    T    A   A  N   N    T
// ===========================================================================================================================================================================================================================================================================================================================================
// * * * // ARRAY IMPORTANT

let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y)); //"119"

//ajouter un élément à ce tableau
//console.log(arrayNumber.push("coucou"));
//console.log(arrayNumber);//Array(6) [ 4, 74, 28, 12, 1, "coucou" ]

//FILTER, SORT, MAP.3 Méthodes de puisssant

//console.log(arrayNumber.filter((nombre) => nombre > 10));//je met un nom a ma fonction pour aller checher dans le tableau des nombres supérieur à 10

console.log(arrayNumber.sort());//Array(5) [ 1, 12, 28, 4, 74 ]classe par ordre de chiffre

//console.log(arrayNumber.sort((a, b) => b - a));//dans cette méthode a étant plus petit que b est bien il classe du plus grand au plus petit Array(5) [ 74, 28, 12, 4, 1 ]

//exemple des 2 méthodes du dessus qui travail emsemble

console.log(
  arrayNumber
    .filter((nombre) => nombre > 10)
    .sort(
      //rappel je met un nom dans mon paramétre pour le retrouver dans mon tableau plus tard
      (a, b) => a - b
    )
); //1er il me fait un tri des chiffres sup à 10 et classe par ordre des chiffres

console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a, b) => b - a));

//Le MAP Important!

//arrayNumber.map((bruno) => console.log(bruno));//M'énumére un par un tout les chiffres
//arrayNumber.map((bruno) => (document.body.innerHTML += bruno));//affiche 74281241 m'affiche à l'écran

//arrayNumber.map((bruno) => (document.body.innerHTML += `<li> ${bruno}</li>`));//me liste tout mon tableau à l'écran

//même résultat qu'au-dessus avec une présentation convenable
// document.body.innerHTML = arrayNumber
//   .map((bruno) => `<li> ${bruno}</li>`)
//   .join(""); //join remplace les virgules du map par du vide("")
//Mon tableau, je t'ajoute la méthode .map ,à chaque tour de map je vais appeler cela bruno , et que tu me montre à l'écran à quoi ressemble ce bruno et à la fin je fais un join
//je viens de faire un map sur un tableau 


//map sur objet c'est trés puissant!!!!!!!

// ========================================================================================================================================================================================================================================================================================================================================
//                M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE        OOO   BBB      JJJ  EEEEE   CCC   TTTTT   SSS
//      /      /  MM MM  E        T    H   H  O   O  D  D   E           O   O  B  B      J   E      C   C    T    S
//     /      /   M M M  EEE      T    HHHHH  O   O  D   D  EEE         O   O  BBBB      J   EEE    C        T     SSS
//    /      /    M   M  E        T    H   H  O   O  D   D  E           O   O  B   B     J   E      C        T        S
//   /      /     M   M  E        T    H   H  O   O  D  D   E           O   O  B   B  J  J   E      C   C    T        S
//  /      /      M   M  EEEEE    T    H   H   OOO   DDD    EEEEE        OOO   BBBB    JJ    EEEEE   CCC     T    SSSS
// ========================================================================================================================================================================================================================================================================================================================================
// * * * //méthode Objects

//extêmement précieux

//lesson les données 2h.04
//user est le nom que j'ai donnée pour chaque tour que je vais effectuer dans ma boucle et qui va dans h2  représente ce que donne user
// un map sur des objets et beaucoup plus puissance que un map sur un tableau
// document.body.innerHTML = donnee
// //.filter((usager)=> usager.admin === false) //me filtre uniquement les admins qui sont false 
// .filter((usager)=> usager.pseudo.includes("i"))//me filtre uniquement les pseudo qui on un i
// .sort((a,b)=> b.age - a.age)//permet de ranger dans un object
// .map(
//   (usager) => 
// `

// <div class="user-card">    

// <h2>${usager.pseudo}</h2>

// <p>Age : ${usager.age} ans</p>

// <p>Status : ${usager.admin ? "Modérateur" : "Membre"}</p>

// </div>




// `
// )
// .join("");

//admin est-ce strictement true = modérateur sinon écrit membre 
//rappel  ${} appelle d'une variable
//classe du plus grand au plus petit b-a



// ====================================================================================================================================================================================================================================================================
//                DDD      A    TTTTT  EEEEE   SSS
//      /      /  D  D    A A     T    E      S
//     /      /   D   D  A   A    T    EEE     SSS
//    /      /    D   D  AAAAA    T    E          S
//   /      /     D  D   A   A    T    E          S
//  /      /      DDD    A   A    T    EEEEE  SSSS
// ====================================================================================================================================================================================================================================================================
// * * * //DATES




//on a 3 formats différent en date



//les dates classique 1er format


let date = new Date(); //me renvoie la date exate d'aujourd'hui :Sat Dec 25 2021 16:46:12 GMT+0100 (heure normale d’Europe centrale)
console.log(date);

//2iém format
//format que l'on rencontre le plus souvent en javascript
//Timestamp est le nombre de secondes qui se sont écoulées entre le 1er janvier 1970 et aujourd'hui em milleseconde 
//parse et une méthode qui appartient à l'objet Date le point permet d'avancer dans la méthode objet
let Timestamp = Date.parse(date);//parse permet de prendre une date en javascript en Timestamp
//console.log(Timestamp);//1640447611000 ce n'est pas des millisecondes



//3iém format trés répandu
//IsoString
//console.log(date.toISOString());//2021-12-25T15:59:18.323Z les milli secondes sont à la fin
let iso = date.toISOString(); 




//je vais créer une fonction pour rendre lisible ma date
//je créer une fonction avec un paramétre ou je vais y glisser dedans "la date d'un format que je vais choisir"
function dateParser(rigal) {
  let newDate = new Date (rigal).toLocaleDateString("fr-FR", {
    year: "numeric",
    month:"long",
    day:"numeric",
    hour:"numeric",
    minute:"numeric",
  } );
  return newDate;
}

//console.log(dateParser(date));//25 décembre 2021
//console.log(dateParser(Timestamp));
//console.log(dateParser(iso));




// ==========================================================================================================================================================================================================================================================================================================================
//                DDD    EEEEE   SSS   TTTTT  RRRR   U   U   CCC   TTTTT  U   U  RRRR   III  N   N   GGG
//      /      /  D  D   E      S        T    R   R  U   U  C   C    T    U   U  R   R   I   NN  N  G   G
//     /      /   D   D  EEE     SSS     T    R   R  U   U  C        T    U   U  R   R   I   N N N  G
//    /      /    D   D  E          S    T    RRRR   U   U  C        T    U   U  RRRR    I   N  NN  G  GG
//   /      /     D  D   E          S    T    R  R   U   U  C   C    T    U   U  R  R    I   N   N  G   G
//  /      /      DDD    EEEEE  SSSS     T    R   R   UUU    CCC     T     UUU   R   R  III  N   N   GGGG
// ==========================================================================================================================================================================================================================================================================================================================
// * * * //DESTRUCTURING


let moreData = {
  destVar: ["Element 1", "Element 2"]
};
//LESSON LES DONNEES 3H01
const {destVar} = moreData //à partir de maintenant j'ai créer un raccourci pour éviter les répétitions quand je solicite un des élément dans mon tableau
//const destVar = moreData.destVar; //veut dire la même chose qu'au dessus
// console.log(destVar);

// console.log(moreData.destVar[0]);


let array5 = [70, 80, 90];

// console.log(array5[0]);
// console.log(array5[1]);
// console.log(array5[2]);

//pour éviter les répétitions de mes index de tableau je créer des variables

let [x, y, z] = array5;
//console.log(x, y, z);//mes trois lettres ont pris les valeurs et type de mon array5


//lesson les données 3h10

//pour ma variable iso je vais créer mon raccouri 
//console.log(iso);

const dateDestructuring = (vachercher) => {
//je vais couper ma chaîne de caractére
let newDate = vachercher.split("T")[0];//m'a enlever mon T,et m'a garder un seul tableau
//je vais ensuite casser ma chaîne de caractére pour pouvoir mieux travailler avec
newDate.split("-");//partout ou tu as un tiret tu me casses le truc
//console.log(newDate.split("-"));//m'affiche  [ "2021", "12", "25" ]
//le résultat du split = [ "2021", "12", "25" ] tu me l'attribus à mes 3 nouvelle variable a, m, d

 let [a, m, d] = newDate.split("-");//à savoir les string,number,boolean non pas besoin d'être déclarer avec des const ou let

 //je retourne les choses dans le bon ordre en joingant en plus les /
 return[ d, m, a].join("/");// [ "25"/ "12"*/ "2021" ]

};


//console.log(dateDestructuring(iso));







// ===================================================================================================================================================================================================================================================================================================================
//                L      EEEEE   SSS        DDD      A    TTTTT    A     SSS   EEEEE  TTTTT   SSS
//      /      /  L      E      S           D  D    A A     T     A A   S      E        T    S
//     /      /   L      EEE     SSS        D   D  A   A    T    A   A   SSS   EEE      T     SSS
//    /      /    L      E          S       D   D  AAAAA    T    AAAAA      S  E        T        S
//   /      /     L      E          S       D  D   A   A    T    A   A      S  E        T        S
//  /      /      LLLLL  EEEEE  SSSS        DDD    A   A    T    A   A  SSSS   EEEEE    T    SSSS
// ===================================================================================================================================================================================================================================================================================================================
// * * * //les datasets

//sont des données que l'on peut mettre dans des balises qui sont en quelque sorte des objets

const h3js = document.getElementById("javascript");//j'ai sélectionné mon h3 id titre javascript
//console.log(h3js.dataset.lang);// m'affiche js

const h3 = document.querySelectorAll("h3");

//h3.forEach((tintin) => console.log(tintin.dataset));//




// ==============================================================================================================================================================================================================================================================================================
//                L      EEEEE   SSS        RRRR   EEEEE   GGG   EEEEE  X   X
//      /      /  L      E      S           R   R  E      G   G  E       X X
//     /      /   L      EEE     SSS        R   R  EEE    G      EEE      X
//    /      /    L      E          S       RRRR   E      G  GG  E       X X
//   /      /     L      E          S       R  R   E      G   G  E      X   X
//  /      /      LLLLL  EEEEE  SSSS        R   R  EEEEE   GGGG  EEEEE  X   X
// ==============================================================================================================================================================================================================================================================================================
// * * * //les Regex


//expression régulière permet de tester des choses voir si elle correspondent

let mail = "rigalrigal2014@outlook.fr"
//console.log(mail.search(/rigal/));//si la valeur ou le type que j'ai entre mes parenthéses correspond avec mon adresse mail il renvoie 0 si il ne trouve aucune correspondance il me renvoi -1
 
// la méthode replace  remplace un élément par un autre

//console.log(mail.replace(/rigal/, "phillipe "));//phillipe rigal2014@outlook.fr


// console.log(mail.match(/RIgal/i)); //permet de chercher l'élément dans mon mail et le i enlève la sensibilité à la case me renvoie null si il ne trouve pas
// console.log(mail.match(/[zh]/)); // est-ce que tu trouves un zh dans la chaîne de caractére
// console.log(mail.match([123]));//il cherche aussi les chiffres


//pour chercher et trouver à tout pris un chiffre 
// console.log(mail.match(/\d/));


// //pour chercher et trouver à tout pris une lettre
// console.log(mail.match(/[a-z]/));


//comment contrôler un mail
//Et on commence par le petit chapeau "/^" ,tout les caractéres chiffres ou lettres"\w", "_-"le tiret du bas et le tiret du milieu, plus un "@", aprés le @ il peut y avoir des chiffres et des lettres sur le nom de domaine "\w",
//- des tirets aussi sur le nom de domaine plus un point "\./" avec des lettres de a à z "a-z" , et pas plus de 4 et pas moins de deux "{2,4}" , et je termine mon contrôle avec le"$",avec un "i",
//pour dire que l'on est pas sensible à la case.

//lesson les données 3h28
//console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));



//important pour ma proabilté............................................................................................

//pour séparer de longue combinaison de chiffre

let separator = 02262834410510

//je vais passer ce nombre en chaîne de caractére,ensuite j'utilise replace qui utilise la regex comme séparateur et mettre en place des points tout les 3 rangs

console.log(separator.toString().replace(/\B(?=(\d{2})+(?!\d))/g, " "));