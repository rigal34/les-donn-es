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
}else{
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

while (w < 10){

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
}while (d < 5);



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


document.body.addEventListener("click", (e) =>{
// console.log(e.target.id);//permet de savoir sur quoi j'ai cliqué et plus spécialemment sur l'id
switch(e.target.id){ //si tu as dans l'évènement que tu es allés cherché de e.target.id et dans case tu trouve "javascript" tu me mets une couleur yellow

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
       
})


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





