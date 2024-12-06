// https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
// Finish the uefaEuro2016() function so it return string just like in the examples below:
// uefaEuro2016(["Germany", "Ukraine"], [2, 0]); // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(["Belgium", "Italy"], [0, 2]); // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

function uefaEuro2016(teams, scores) {
  const team1 = teams[0];
  const team2 = teams[1];

  const scores1 = scores[0];
  const scores2 = scores[1];

  if (scores1 > scores2) return `At match ${team1} - ${team2}, ${team1} won!`;
  if (scores1 < scores2) return `At match ${team1} - ${team2}, ${team2} won!`;

  return `At match ${team1} - ${team2}, teams played draw.`;
}

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]));
console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2]));
console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1]));
