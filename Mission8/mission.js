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
    alert("EVEN");
    else
    alert("ODD");
}



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


function guessTheNumber() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    do {
      guess = parseInt(prompt("Guess a number between 1 and 100:"));
      if (guess < secretNumber) {
        alert("Too low! Try again.");
      } else if (guess > secretNumber) {
        alert("Too high! Try again.");
      }
    } while (guess !== secretNumber);
    alert("Congratulations! You guessed the correct number: " + secretNumber);
  }
  
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
    let age = parseInt(prompt("Enter your age:"));
    alert(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");
  }
  

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
    let num = parseInt(prompt("Enter a number to check if it's prime:"));
    let isPrime = num > 1;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    alert(num + (isPrime ? " is a prime number." : " is not a prime number."));
  }
  




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
    let str = prompt("Enter a string:");
    let vowels = str.match(/[aeiouy]/gi);
    alert("The number of vowels is: " + (vowels ? vowels.length : 0));
  }
  


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
    let marks = parseFloat(prompt("Enter total marks obtained:"));
    let totalMarks = parseFloat(prompt("Enter maximum marks:"));
    let percentage = (marks / totalMarks) * 100;
    alert("Your percentage is: " + percentage + "%");
  }


  var x = 0;
  function seven()
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

  var x = 0;
  function eight()
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

  var x = 0;
  function nine()
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

  var x = 0;
  function ten()
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

  var x = 0;
  function eleven()
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

  var x = 0;
  function twelve()
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

  var x = 0;
  function thirteen()
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

  var x = 0;
  function fourteen()
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


  var x = 0;
  function fifteen()
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
