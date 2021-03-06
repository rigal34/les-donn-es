// =================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
//                L      EEEEE   SSS        TTTTT    A    BBB    L      EEEEE    A    U   U  X   X       EEEEE  TTTTT       L      EEEEE   SSS        TTTTT  Y   Y  PPPP   EEEEE   SSS        DDD    EEEEE       DDD     OOO   N   N  N   N  EEEEE  EEEEE   SSS
//      /      /  L      E      S             T     A A   B  B   L      E       A A   U   U   X X        E        T         L      E      S             T    Y   Y  P   P  E      S           D  D   E           D  D   O   O  NN  N  NN  N  E      E      S
//     /      /   L      EEE     SSS          T    A   A  BBBB   L      EEE    A   A  U   U    X         EEE      T         L      EEE     SSS          T     Y Y   P   P  EEE     SSS        D   D  EEE         D   D  O   O  N N N  N N N  EEE    EEE     SSS
//    /      /    L      E          S         T    AAAAA  B   B  L      E      AAAAA  U   U   X X        E        T         L      E          S         T      Y    PPPP   E          S       D   D  E           D   D  O   O  N  NN  N  NN  E      E          S
//   /      /     L      E          S         T    A   A  B   B  L      E      A   A  U   U  X   X       E        T         L      E          S         T      Y    P      E          S       D  D   E           D  D   O   O  N   N  N   N  E      E          S
//  /      /      LLLLL  EEEEE  SSSS          T    A   A  BBBB   LLLLL  EEEEE  A   A   UUU   X   X       EEEEE    T         LLLLL  EEEEE  SSSS          T      Y    P      EEEEE  SSSS        DDD    EEEEE       DDD     OOO   N   N  N   N  EEEEE  EEEEE  SSSS
// =================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
// * * * //les tableaux et les types de donn??es

//Rapels des types de donn??es
let string = "string";
let number = 25;
let boolean = true;
let maVariable; //type Undefined ind??finit puisque l'on a rien attribu?? ?? notre variable

//console.log(typeof maVariable); //permet de conna??tre le type de ma variable

//Tableaux

let monTableau = ["Bordeaux", "Toulouse", "Nantes"]; //array de 3 ??l??ments

//console.log(monTableau[1]);//r??sultat Toulouse

//dans un objet on mets des accolades et pour un tableau des crochets

//pour afficher la lettre d de bordeaux

//console.log(monTableau[0][3]);//affiche d

//autre type de tableau

let monTableau2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

//console.log(monTableau2[3][1]);//m'affiche 2

//console.log(monTableau2[4].nom);//m'affiche Denis qui est ?? l'int??rieur d'un objet

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// console.log(objet.technos[0][1]);//m'affiche le a de javascript pour afficher ce r??sultat je fais .technos[0][1]

//ajouter un ??l??ment ?? mon object j'??cris ce qui m'ajoute un index et un type

// objet.adresse = "22 rue du code";

// console.log(objet);

//je vais cr??er une base utilisateur

//on stock pas un objet dans un objet trop compliqu?? mais on stocke les donne?? de notre objet dans un tableau
//j'ai une base de donn??e
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
// * * * //Les tructures de contr??le

// sont des moyens de cont??ler les choses

if (donnee[0].age > donnee[1].age) {
  //console.log(donnee[0].pseudo + " est plus ag?? que " + donnee[1].pseudo);
} else {
  //valeur si faux
}

//on peut effectuer une terner avec if else
//valeur ?? tester ? si vrai : si faux;
//le "?"veux dire teste moi ce qui est ?? tester sur ma gauche,si c'est vrais je veux que tu me fasse sa et deux points si s'ai faux

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
// * * * // For ces boucles sont tr??s puissante et elle est souvent utilis??
//on a 2 fa??ons de faire les boucle for

// for (const bruno of donnee){  // je crees une contante que je pr??nom bruno et dans data qui est donn??e cela veux dire que chaque ??l??ments individuellement je vais l'appeler bruno dans la base de donn??e
//   document.body.innerHTML +=`<li>${bruno.pseudo} - ${bruno.age}ans</li>` ; //for va faire tourner le tableau de nos 3 utilisateurs et ?? chaque tour on peux donn??e une logique un cosole log par exemple
// }

//r??sultat de cette boucle = Denis - 33ans
//  Samia - 24ans
//Nikola - 42ans

//fa??on du prof d'utilisation des boucle

//for (i=0; i < donnee.length);//i tu pars de 0 et tant que i est inf ?? donnee.lenght
//console.log(donnee.length);//m'affiche 9 dans ma console permet de savoir la longueur du tableau length c'est pour la longueur

//dabord on d??clare la valeur de i,jusqu'ou on boucle,on incr??mente i si la condition 2 n'est pas remplis

//exemple de le puissance de cette boucle for
//pour aller chercher des ??l??ments
// for (i=0; i < donnee.length; i++){
//console.log(i);
//console.log(donnee[i].technos[0]);//de cette fa??on on vient de chercher nos 3 ??l??ments
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
// * * * //switch ??vite les r??p??titions des if

document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);//permet de savoir sur quoi j'ai cliqu?? et plus sp??cialemment sur l'id
  switch (
    e.target.id //si tu as dans l'??v??nement que tu es all??s cherch?? de e.target.id et dans case tu trouve "javascript" tu me mets une couleur yellow
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

//les diff??rentes m??thodes

//une m??thode est une fonction qui a ??t?? d??ja cod?? qui est d??j?? pr??sente dans le code de javascript,est une fonction ?? l'aquel on ?? acc??s

// ===============================================================================================================================================================================================================================================================================================================================
//                M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE        SSS   TTTTT  RRRR   III  N   N   GGG
//      /      /  MM MM  E        T    H   H  O   O  D  D   E           S        T    R   R   I   NN  N  G   G
//     /      /   M M M  EEE      T    HHHHH  O   O  D   D  EEE          SSS     T    R   R   I   N N N  G
//    /      /    M   M  E        T    H   H  O   O  D   D  E               S    T    RRRR    I   N  NN  G  GG
//   /      /     M   M  E        T    H   H  O   O  D  D   E               S    T    R  R    I   N   N  G   G
//  /      /      M   M  EEEEE    T    H   H   OOO   DDD    EEEEE       SSSS     T    R   R  III  N   N   GGGG
// ===============================================================================================================================================================================================================================================================================================================================
// * * * //M??thode string

let string2 = "Javascript est un language orient?? objet";
//console.log(typeof string2);//permet de renseigner sur le type
//console.log(eval("1"+ 2));//r??sultat 12 il concat??ne les 2
//console.log(parseInt("1"));// r??sultat 1 transforme une cha??ne de caract??re en nombre.
//console.log(eval(parseInt("1") + 2));

//des m??thode pour interroger est-ce que ce n'est pas un chiffre
//console.log(isNaN(string2));//affiche true ce n'est pas un nombre
//console.log(isNaN (48));//affiche false ce n'est pas un nombre

//pour conna??tre la longueur d'une cha??ne de caract??re
//console.log(string2.length);//m'affiche 40 il va jusqu'?? la longueur d'un cha??ne de caract??re

//console.log(string2[22]);// affiche u
//console.log(string2[string2.length - 1]);//comme length commence ?? 0 dans son index donc on met un -1 pour qu'il affiche dans la console
//lenght n'est pas ??gal ?? l'index, l'index lui commence ?? z??ro alors que la lengh commence ?? 1 c'est pour cela que l'on mets -1 parfois on 'est oblig?? d'enlever un parfois

//indexOf
//console.log(string2.indexOf("l"));//m'affiche 18 pour me dire que mon index de lettre l commence ?? 18 et si il ne conna??t pas la lettre il dit -1

//let newString = string2.slice(2);
//console.log(newString);  //m'affiche ''vascript est un language orient?? objet''il m'a coup?? mes 2 premiers ??l??ment et m'a garder le reste dans newsString si je mets 1 il ne coupe rien et ne garde rien

// let newString = string2.slice(5, 17);
// console.log(newString);//il commence ?? couper ?? 5 et tu t'arr??te ?? 17 ce qui donne "cript est un"

//methode split
//console.log(string2.split("i"));//partout ou tu vois un "i" tu coupe et tu isoles  es tu mets le reste dans des tableaux cela permets de s??parer les choses ""
// je mets des espaces "" il isole mes mots pour les mettre dans des tableaux

//pour tout mettre en LowerCas
//console.log(string2.toLocaleLowerCase());//toute ma cha??ne de caract??re est en minuscules

//et la c'est le contraire  tout es en majuscule
//console.log(string2.toUpperCase());

//le replace

//console.log(string2.replace("Javascript" , "PHP")); //il va chercher partout ou il y Javascript pour le remplacer cette ??l??ment par  "PHP"

// ========================================================================================================================================================================================================================================================================================================================================
//                M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE       N   N  U   U  M   M  BBB    EEEEE  RRRR    SSS
//      /      /  MM MM  E        T    H   H  O   O  D  D   E           NN  N  U   U  MM MM  B  B   E      R   R  S
//     /      /   M M M  EEE      T    HHHHH  O   O  D   D  EEE         N N N  U   U  M M M  BBBB   EEE    R   R   SSS
//    /      /    M   M  E        T    H   H  O   O  D   D  E           N  NN  U   U  M   M  B   B  E      RRRR       S
//   /      /     M   M  E        T    H   H  O   O  D  D   E           N   N  U   U  M   M  B   B  E      R  R       S
//  /      /      M   M  EEEEE    T    H   H   OOO   DDD    EEEEE       N   N   UUU   M   M  BBBB   EEEEE  R   R  SSSS
// ========================================================================================================================================================================================================================================================================================================================================
// * * * //METHODE NUMBERS

//r??duir son nombre de virgule permet de nous garder un certain nombre de chiffre apr??s la virgule

let number2 = 42.1234;
let numberString = "42.12 est un string";
console.log(number2.toFixed(2)); //garde deux chriffres apr??s la virgule

//changer une cha??ne de caract??re en number string en chiffre
//console.log(parseInt (numberString));//ou il peut aussi extraire le chiffre d'une cha??ne de caract??re

//il garde le num??ro avec la virgule flottante
//console.log(parseFloat(numberString));//42.12

//la m??thode Math
console.log(Math.PI); //me produit PI

console.log(Math.round(4.4)); //il arrondi au plus proche

console.log(Math.floor(4.9)); //arrondi ?? l'inf??rieur

console.log(Math.ceil(4.1)); // arrondi au plus haut

//les puissances
console.log(Math.pow(2, 7)); //2 ?? la puissance 7

//les racines carr??
console.log(Math.sqrt(16)); // ??gale 4

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
// * * * //M??thode arrays

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "solidity"];

// let newArray = array3 + array4;
// console.log(newArray);            //r??sutat  Javascript,Php,PythonRuby,solidity

//m??thode concatate permet de faire fusionner des tableaux
//je voudrais concat??n?? et rester dans un tableau pas commen le modele du dessus il y a 2 m??thode pour sa

//m??thode 1
let newArray = array3.concat(array4);
// console.log(newArray);//r??sutat  [ "Javascript", "Php", "Python", "Ruby", "solidity" ]

//m??thode 2
//let newArray = [...array3, ...array4];
//console.log(newArray);//r??sutat  [ "Javascript", "Php", "Python", "Ruby", "solidity" ]
// les 3 ... point se dise spray d'op??rateur

//la m??thode joint
//permet de casser tout t'on tableau et entre chaque ??l??ment de mon tableau tu va mettre une virgule ou un tiret par exemple

//console.log(array3.join("-")); //r??sultat Javascript-Php-Python "TRES UTILISE"

//m??thode slice "IMPORTANTE!!!!!"

//console.log(array3.slice(1));//d??coupe moi le 1er ??l??ment du tableau,r??sult [ "Php", "Python" ]
//la m??thode slice peut aussi prendre 2 param??tres
////console.log(newArray.slice(2,3));//tu retires les 2 premier et ensuite tu garde l'index num??ro 3 permet de garder pas mal d'??l??ment dans un tableau

//indexOf pour chercher  dans un tableau
//console.log(array3.indexOf("Python"));//m'affiche le num??ro d'index ou se situe mon ??l??ment

//cette m??thode marche pour les objets et les tableaux
//array3.forEach((brunos) => console.log(brunos)); //?? chaque tours l'??l??ment individuel tu va l'appel??s brunos et ex??cute ensuite cette fonction
//le forEach permet d'??numer les choses une par une

//2 m??thodes pour checked des choses dans un tableau

//console.log(array3.every((bruno) => bruno === "Php"));
//la m??thode every remplace un ??l??ment par bruno ce qui permet de tester chaque ??l??ments dans mon tableau pour voir s'il y a Php dans chacun de ces ??l??ments et comme il n'y sont pas tous comme cela il renvoie false

//console.log(array3.some((bruno) => bruno === "Php"));//est ce que quelque par il y a ??crit Php oui donc "true"

//le shift est une m??thode qui permet de casser le tableau
//il enl??ve le premier index du tableau,

// let shift = array3.shift();
// console.log(shift); //affiche Javascript

//console.log(array3.pop());//il retire le dernier ??l??ment de mon tableau

//m??thode splice
//const restArray = array3.splice(1, 1, "C++"); //?? l'emplacement n??1 , tu enl??ves un ??l??ment et m'ajoute, C++ et il garde dans ma constante l'??l??ment qui a ??t?? enlev??
//console.log(array3);//Array(3) [ "Javascript", "C++", "Python" ] lesson Les donn??e 1h47

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

//ajouter un ??l??ment ?? ce tableau
//console.log(arrayNumber.push("coucou"));
//console.log(arrayNumber);//Array(6) [ 4, 74, 28, 12, 1, "coucou" ]

//FILTER, SORT, MAP.3 M??thodes de puisssant

//console.log(arrayNumber.filter((nombre) => nombre > 10));//je met un nom a ma fonction pour aller checher dans le tableau des nombres sup??rieur ?? 10

console.log(arrayNumber.sort());//Array(5) [ 1, 12, 28, 4, 74 ]classe par ordre de chiffre

//console.log(arrayNumber.sort((a, b) => b - a));//dans cette m??thode a ??tant plus petit que b est bien il classe du plus grand au plus petit Array(5) [ 74, 28, 12, 4, 1 ]

//exemple des 2 m??thodes du dessus qui travail emsemble

console.log(
  arrayNumber
    .filter((nombre) => nombre > 10)
    .sort(
      //rappel je met un nom dans mon param??tre pour le retrouver dans mon tableau plus tard
      (a, b) => a - b
    )
); //1er il me fait un tri des chiffres sup ?? 10 et classe par ordre des chiffres

console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a, b) => b - a));

//Le MAP Important!

//arrayNumber.map((bruno) => console.log(bruno));//M'??num??re un par un tout les chiffres
//arrayNumber.map((bruno) => (document.body.innerHTML += bruno));//affiche 74281241 m'affiche ?? l'??cran

//arrayNumber.map((bruno) => (document.body.innerHTML += `<li> ${bruno}</li>`));//me liste tout mon tableau ?? l'??cran

//m??me r??sultat qu'au-dessus avec une pr??sentation convenable
// document.body.innerHTML = arrayNumber
//   .map((bruno) => `<li> ${bruno}</li>`)
//   .join(""); //join remplace les virgules du map par du vide("")
//Mon tableau, je t'ajoute la m??thode .map ,?? chaque tour de map je vais appeler cela bruno , et que tu me montre ?? l'??cran ?? quoi ressemble ce bruno et ?? la fin je fais un join
//je viens de faire un map sur un tableau 


//map sur objet c'est tr??s puissant!!!!!!!

// ========================================================================================================================================================================================================================================================================================================================================
//                M   M  EEEEE  TTTTT  H   H   OOO   DDD    EEEEE        OOO   BBB      JJJ  EEEEE   CCC   TTTTT   SSS
//      /      /  MM MM  E        T    H   H  O   O  D  D   E           O   O  B  B      J   E      C   C    T    S
//     /      /   M M M  EEE      T    HHHHH  O   O  D   D  EEE         O   O  BBBB      J   EEE    C        T     SSS
//    /      /    M   M  E        T    H   H  O   O  D   D  E           O   O  B   B     J   E      C        T        S
//   /      /     M   M  E        T    H   H  O   O  D  D   E           O   O  B   B  J  J   E      C   C    T        S
//  /      /      M   M  EEEEE    T    H   H   OOO   DDD    EEEEE        OOO   BBBB    JJ    EEEEE   CCC     T    SSSS
// ========================================================================================================================================================================================================================================================================================================================================
// * * * //m??thode Objects

//ext??mement pr??cieux

//lesson les donn??es 2h.04
//user est le nom que j'ai donn??e pour chaque tour que je vais effectuer dans ma boucle et qui va dans h2  repr??sente ce que donne user
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

// <p>Status : ${usager.admin ? "Mod??rateur" : "Membre"}</p>

// </div>




// `
// )
// .join("");

//admin est-ce strictement true = mod??rateur sinon ??crit membre 
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




//on a 3 formats diff??rent en date



//les dates classique 1er format


let date = new Date(); //me renvoie la date exate d'aujourd'hui :Sat Dec 25 2021 16:46:12 GMT+0100 (heure normale d???Europe centrale)
console.log(date);

//2i??m format
//format que l'on rencontre le plus souvent en javascript
//Timestamp est le nombre de secondes qui se sont ??coul??es entre le 1er janvier 1970 et aujourd'hui em milleseconde 
//parse et une m??thode qui appartient ?? l'objet Date le point permet d'avancer dans la m??thode objet
let Timestamp = Date.parse(date);//parse permet de prendre une date en javascript en Timestamp
//console.log(Timestamp);//1640447611000 ce n'est pas des millisecondes



//3i??m format tr??s r??pandu
//IsoString
//console.log(date.toISOString());//2021-12-25T15:59:18.323Z les milli secondes sont ?? la fin
let iso = date.toISOString(); 




//je vais cr??er une fonction pour rendre lisible ma date
//je cr??er une fonction avec un param??tre ou je vais y glisser dedans "la date d'un format que je vais choisir"
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

//console.log(dateParser(date));//25 d??cembre 2021
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
const {destVar} = moreData //?? partir de maintenant j'ai cr??er un raccourci pour ??viter les r??p??titions quand je solicite un des ??l??ment dans mon tableau
//const destVar = moreData.destVar; //veut dire la m??me chose qu'au dessus
// console.log(destVar);

// console.log(moreData.destVar[0]);


let array5 = [70, 80, 90];

// console.log(array5[0]);
// console.log(array5[1]);
// console.log(array5[2]);

//pour ??viter les r??p??titions de mes index de tableau je cr??er des variables

let [x, y, z] = array5;
//console.log(x, y, z);//mes trois lettres ont pris les valeurs et type de mon array5


//lesson les donn??es 3h10

//pour ma variable iso je vais cr??er mon raccouri 
//console.log(iso);

const dateDestructuring = (vachercher) => {
//je vais couper ma cha??ne de caract??re
let newDate = vachercher.split("T")[0];//m'a enlever mon T,et m'a garder un seul tableau
//je vais ensuite casser ma cha??ne de caract??re pour pouvoir mieux travailler avec
newDate.split("-");//partout ou tu as un tiret tu me casses le truc
//console.log(newDate.split("-"));//m'affiche  [ "2021", "12", "25" ]
//le r??sultat du split = [ "2021", "12", "25" ] tu me l'attribus ?? mes 3 nouvelle variable a, m, d

 let [a, m, d] = newDate.split("-");//?? savoir les string,number,boolean non pas besoin d'??tre d??clarer avec des const ou let

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

//sont des donn??es que l'on peut mettre dans des balises qui sont en quelque sorte des objets

const h3js = document.getElementById("javascript");//j'ai s??lectionn?? mon h3 id titre javascript
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


//expression r??guli??re permet de tester des choses voir si elle correspondent

let mail = "rigalrigal2014@outlook.fr"
//console.log(mail.search(/rigal/));//si la valeur ou le type que j'ai entre mes parenth??ses correspond avec mon adresse mail il renvoie 0 si il ne trouve aucune correspondance il me renvoi -1
 
// la m??thode replace  remplace un ??l??ment par un autre

//console.log(mail.replace(/rigal/, "phillipe "));//phillipe rigal2014@outlook.fr


// console.log(mail.match(/RIgal/i)); //permet de chercher l'??l??ment dans mon mail et le i enl??ve la sensibilit?? ?? la case me renvoie null si il ne trouve pas
// console.log(mail.match(/[zh]/)); // est-ce que tu trouves un zh dans la cha??ne de caract??re
// console.log(mail.match([123]));//il cherche aussi les chiffres


//pour chercher et trouver ?? tout pris un chiffre 
// console.log(mail.match(/\d/));


// //pour chercher et trouver ?? tout pris une lettre
// console.log(mail.match(/[a-z]/));


//comment contr??ler un mail
//Et on commence par le petit chapeau "/^" ,tout les caract??res chiffres ou lettres"\w", "_-"le tiret du bas et le tiret du milieu, plus un "@", apr??s le @ il peut y avoir des chiffres et des lettres sur le nom de domaine "\w",
//- des tirets aussi sur le nom de domaine plus un point "\./" avec des lettres de a ?? z "a-z" , et pas plus de 4 et pas moins de deux "{2,4}" , et je termine mon contr??le avec le"$",avec un "i",
//pour dire que l'on est pas sensible ?? la case.

//lesson les donn??es 3h28
//console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));



//important pour ma proabilt??............................................................................................

//pour s??parer de longue combinaison de chiffre

let separator = 02262834410510

//je vais passer ce nombre en cha??ne de caract??re,ensuite j'utilise replace qui utilise la regex comme s??parateur et mettre en place des points tout les 3 rangs

console.log(separator.toString().replace(/\B(?=(\d{2})+(?!\d))/g, " "));