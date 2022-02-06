function scuberGreetingForFeet(n){
  // Write your code here!
  if (n < 400) {
    return 'This one is on me!';
  } else if (n > 2000 && n <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (n >= 2500) {
    return 'No can do.';
  }
  return
}

function ternaryCheckCity(c){
  // Write your code here!
  return c==='NYC' ? 'Ok, sounds good.' : "No go."
}

function switchOnCharmFromTip(s){
  // Write your code here!
  switch(s) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return "Bye.";
    
  }

}