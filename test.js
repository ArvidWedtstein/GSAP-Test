let regex = /(?:f(?:ive|our)|s(?:even|ix)|t(?:hree|wo)|(?:ni|o)ne|eight)/gi;
let str = 'six five seven eight nine test one two three four ten';
let result = str.match(regex);
console.log(result);