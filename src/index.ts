import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';


const reader = new MatchReader('football.csv');
reader.read();

let manUnitWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitWins++;
  }
}
console.log(`Man United won ${manUnitWins} games`);
