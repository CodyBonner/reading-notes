let q1 = prompt("What is your name?");
function questionOne(){
  let a1 = q1;
  alert("Nice name!");
  document.write(a1);
}

function questionTwo(){
  let q2 = prompt("It's nice to meet you " + a1 + ", What do you do for a living?");
  let a2 = q2;
  alert(a2 + "sounds like an interesting job");
}