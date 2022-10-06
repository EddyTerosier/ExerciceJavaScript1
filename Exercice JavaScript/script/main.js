// Exercice 1 Réaliser des scripts simple avec JavaScript

// document.open();
// document.write("Bonjour tout l'monde");


// let start = "Bonjour ",
//     prenom,
//     end = " !",
//     result;
// prenom = prompt("Quel est votre prénom ?");
// result = start + prenom + end;
// alert(result);
// document.write(result);

// Exercice 2 Somme de deux nombres

// let start = "La somme des deux nombre est égale à ",
//     nombreUn,
//     nombreDeux,
//     end = " !",
//     calcNombre,
//     result;
// nombreUn = parseInt(prompt("Entrez le premier nombre : "));
// nombreDeux = parseInt(prompt("Entrez le deuxième nombre : "));
// calcNombre = nombreUn + nombreDeux;
// result = start + calcNombre + end;
// alert(result)


// Exercice 3 Réaliser des conditions (if/else)

/* let ageUser = 0;
while (ageUser <= 0 || ageUser > 100) {
    ageUser = parseInt(prompt("Entrez votre age"));
    if (ageUser <=0 || ageUser > 100){
        alert("Impossible d'être âgé de cet age, veuillez recommencer svp.");
    } else {
        alert(`Vous êtes âgé de ${ageUser} ans`)
    }
} */

// Exercice 4 do while dans une boucle for, en utilisant 3 variables

// /* let nombreDiviser = parseInt(prompt("Entrez votre nombre"));

// for (let i = 2; i < nombreDiviser; i++){
//     if (nombreDiviser % i === 0){
//         alert("Ce nombre n'est pas premier")
//         alert(nombreDiviser + " est divisible par" + i)
//         break
//     } else {
//         console.log("try again")
//     }
// } */

/* let b,c;

for(let a=2; a<=100; a++){
    c=1;
    do{
        c++;
    } while(a%c !=0);
    if(c>a/2){
        b=a++
    }
    console.log(b)
} */

// Exercice 5

/*  TENTATIVE 1
let c;
for (let a=1; a<=10; a++){
    document.write("<h4>La table de multiplication du nombre: "+)
    for(let b=1; b<=10; b++){
        c = b*a;
        console.log(c);
    }
} */ 


/* document.open()
for(var a=1;a<=10;a++){
   	document.write("<h4>La table de multiplication de: "+a+"</h4>")
	document.write("<table border >");
   	for(var b=1;b<=10;b++){
    	document.write("<tr>");
    	document.write("<td>"+a+" x "+b+" =</td>");
    	document.write("<td>"+a*b+"</td>");
    	document.write("</tr>");
   }
   document.write("</table>");
   }
document.close() */



// Exercice 6 Bouton
/* 
let body = document.getElementById("main");
let bouton = document.getElementById("btn");
let boutonReset = document.getElementById("btnReset")
bouton.addEventListener("click", function(){
    body.style.backgroundColor = "Grey";
    alert("Ca va devenir gris attention 👀");
}, false);
boutonReset.addEventListener("click", function(){
    body.style.backgroundColor = "white";
}, false); */