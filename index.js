function scuberGreetingForFeet(a) {
  // Write your code here!
  if (a <= 400) {
    return "This one is on me!";
  } else if (a < 2000 && a > 400) {
    return "That will be twenty bucks.";
  } else if (a > 2500) {
    return "No can do.";
  } else if (a > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}
console.log(scuberGreetingForFeet(2501));
function ternaryCheckCity(b) {
  // Write your code here!
  return b === "NYC" ? "Ok, sounds good." : "No go.";
}
console.log(ternaryCheckCity("NYC"));
function switchOnCharmFromTip(t) {
  // Write your code here!
  switch (t) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    case "thanks for everything":
      return "Bye.";
  }
}
console.log(switchOnCharmFromTip("generous"));
