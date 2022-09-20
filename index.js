function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if (rideLength <= 400) {
    return "This one is on me!";
  }
    else if (rideLength <= 2000) {
      return "That will be twenty bucks."
    }
      else if (rideLength > 2000 && rideLength <= 2500) {
        return "I will gladly take your thirty bucks."
      }
        else {
          return "No can do."
        }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return (city === 'NYC' ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tipType) {
  let tipResponse;

  switch (tipType) {
    case "generous":
      tipResponse = "Thank you so much.";
      break;
    case "not as generous":
      tipResponse = "Thank you.";
      break;
    default:
      tipResponse = "Bye.";
  }

  return tipResponse;
}