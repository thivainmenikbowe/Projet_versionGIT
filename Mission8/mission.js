var x = 0;
function one()
{
    if(x==0){
        document.getElementById('tt').style='display:none';
        x=1;
    }    
    else{
        document.getElementById('tt').style='display:block';
        x=0;
    }
}

//Here i take the ID which i given to the div. I declare a function as txt because its for the text which i want to show. 
//I use css to display nothing when the page reload. With my function, when there's nothing before the click , after the click it'll display the text.

function oddeven(){
    var v = prompt("Donner la nombre");
    if(v%2==0)
    alert("PAIR");
    else
    alert("IMPAIR");
}

//Here we create a variable called "v" and we gave a condition , if v / 2 = 0 it willbe even otherwise itll be odd. "If" with "else" we use to have a different results.
//We gave a condition if the result = to 0 , with else we want the every results which not 0.
// "Prompt" is to recieve the text box from top of the site and "Alert" is for give the results. It'll appere from the top of the site.
//I'm usins IF ELSE IF and ELSE most of the time in these exercises.


var x = 0;
function two()
{
    if(x==0){
        document.getElementById('2').style='display:none';
        x=1;
    }    
    else{
        document.getElementById('2').style='display:block';
        x=0;
    }
}

// Here we have normally the same function but this is for the buttons. I want the buttons to appere when i touch the button. So i use css to do that.


function guessTheNumber() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    do {
      guess = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));
      if (guess < secretNumber) {
        alert("Trop bas ! Réessayez.");
      } else if (guess > secretNumber) {
        alert("Trop haut ! Réessayez.");
      }
    } while (guess !== secretNumber);
    alert("Félicitations ! Vous avez deviné le bon numéro : " + secretNumber);
  }

// Here we use math.random to generate a random number between 1 and 100. 
//We use "do" as a replace for function "for" as a loop. With do, we can "While" with if and else.
//If and Else we already knows
//While is for break the function from the repeating when the answer is correct.

  var x = 0;
function three()
{
    if(x==0){
        document.getElementById('3').style='display:none';
        x=1;
    }    
    else{
        document.getElementById('3').style='display:block';
        x=0;
    }
}

  function v_age() {
    let age = parseInt(prompt("Entrez votre âge:"));
    alert(age >= 18 ? "Vous avez le droit de voter." : "Vous n’avez pas le droit de voter.");
  }

//The parseInt method parses a value as a string and returns the first integer.
//let is a function that we use to let the user to give a value.
//Here we use the function if and else but in a different way.
// if the age >= 18 we take the 1 result before the ":" else we take the second result.


  var x = 0;
function four()
{
    if(x==0){
        document.getElementById('4').style='display:none';
        x=1;
    }    
    else{
        document.getElementById('4').style='display:block';
        x=0;
    }
}

function checkPrimeNumber() {
    let num = parseInt(prompt("Entrez un nombre pour vérifier s'il est premier:"));
    let isPrime = num > 1;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    alert(num + (isPrime ? " est un nombre premier." : " n'est pas un nombre premier."));
  }
  

//The Math.sqrt() method returns the square root of a number.


  var x = 0;
  function five()
  {
      if(x==0){
          document.getElementById('5').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('5').style='display:block';
          x=0;
      }
  }

  function countVowels() {
    let str = prompt("Entrez une chaîne :");
    let vowels = str.match(/[aeiouy]/gi);
    alert("Le nombre de voyelles est :" + (vowels ? vowels.length : 0));
  }
  
//str.match with the (condition) to search if there'is smthing which match to these conditions. 

  var x = 0;
  function six()
  {
      if(x==0){
          document.getElementById('6').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('6').style='display:block';
          x=0;
      }
  }


  function percentage() {
    let marks = parseFloat(prompt("Entrez le total des notes obtenues :"));
    let totalMarks = parseFloat(prompt("Entrez les notes maximales :"));
    let percentage = (marks / totalMarks) * 100;
    alert("Votre pourcentage est : " + percentage + "%");
  }

//Here we have basic maths. we take the response from the user and we put it in a variable which do the calculs.


  var x = 0;
  function seven()
  {
      if(x==0){
          document.getElementById('7').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('7').style='display:block';
          x=0;
      }
  }

  function multiplicationTable() {
    let num = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
    let result = "";
    for (let i = 1; i <= 10; i++) {
      result += num + " x " + i + " = " + (num * i) + "\n";
    }
    alert(result);
  }
  
// We take a number from the user and do 10 rounds . When we do the 10 round this will end.
//for each round we take the number given and multiply by every number.
  var x = 0;
  function eight()
  {
      if(x==0){
          document.getElementById('8').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('8').style='display:block';
          x=0;
      }
  }


  function convertCtoF() {
    let celsius = parseFloat(prompt("Entrez la température en degrés Celsius :"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(celsius + "°C est égal à " + fahrenheit + "°F.");
  }
  
//We let user to put a number. The formule which contains the convertion rate of celsius to fahrenheit take the number.
// And covert it by using the formula.


  var x = 0;
  function nine()
  {
      if(x==0){
          document.getElementById('9').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('9').style='display:block';
          x=0;
      }
  }

  function HtoM(){
    let hours = parseFloat(prompt("Entrez les heures::"));
    let min = hours*60;
    alert(hours + " les heures sont égales à" + min + " minutes.");
    }

// This one i use by myself using the samee methode of the previous one.



  var x = 0;
  function ten()
  {
      if(x==0){
          document.getElementById('10').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('10').style='display:block';
          x=0;
      }
  }

function carreNombre() {
    let nombre = parseFloat(prompt("Entrez un nombre :"));
    alert("Le carré de " + nombre + " est " + (nombre * nombre) + ".");
  }

// This is a very simple formula. We take the num given  by the user and multiply it by the same number.


  var x = 0;
  function eleven()
  {
      if(x==0){
          document.getElementById('11').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('11').style='display:block';
          x=0;
      }
  }

  function convertirMajuscules() {
    let chaine = prompt("Entrez une chaîne :");
    alert("En majuscules : " + chaine.toUpperCase());
  }

  // Only thing different is the new thing called "touppercse" which let us to convert the characters in to capital.
  // By using toLowercase we can do the opposit.

  var x = 0;
  function twelve()
  {
      if(x==0){
          document.getElementById('12').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('12').style='display:block';
          x=0;
      }
  }

  function triangleEtoiles() {
    let hauteur = parseInt(prompt("Entrez la hauteur du triangle :"));
    let triangle = "";
    for (let i = 1; i <= hauteur; i++) {
      triangle += "*".repeat(i) + "\n";
    }
    alert(triangle);
  }
  


  var x = 0;
  function thirteen()
  {
      if(x==0){
          document.getElementById('13').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('13').style='display:block';
          x=0;
      }
  }


  function compterMots() {
    let phrase = prompt("Entrez une phrase :");
    let totalMots = phrase.split(" ").filter(mot => mot.trim() !== "").length;
    alert("Nombre de mots : " + totalMots);
  }

  
// Split us a terrm with the same meaning of devide/space something. We take the space between two words.
// We count everything between a space. And take it as a word.

  var x = 0;
  function fourteen()
  {
      if(x==0){
          document.getElementById('14').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('14').style='display:block';
          x=0;
      }
  }

function convertirMinuscules() {
  let chaine = prompt("Entrez une chaîne EN MAJ :");
  alert("En minuscules : " + chaine.toLowerCase());
}

// The opposit of ToUppercase.
//This is to convert letters in to simple.

  var x = 0;
  function fifteen()
  {
      if(x==0){
          document.getElementById('15').style='display:none';
          x=1;
      }    
      else{
          document.getElementById('15').style='display:block';
          x=0;
      }
  }

  function jeuDevineMot() {
    const motSecret = "chat"; // Word to guess
    let essaisRestants = 3; // Number of attempts
    
    alert("Bienvenue au jeu du mot mystère !");
    alert("Vous devez deviner un mot secret en trois tentatives.");
    
    while (essaisRestants > 0) {
      let proposition = prompt("Entrez votre mot (essais restants : " + essaisRestants + ") :");
      if (proposition === motSecret) {
        alert("Félicitations ! Vous avez trouvé le mot : " + motSecret);
        return;
      } else {
        essaisRestants--;
        alert("Mauvais mot. Essayez encore.");
      }
    }
    
    alert("Dommage ! Vous avez perdu. Le mot était : " + motSecret);
  }
  
  