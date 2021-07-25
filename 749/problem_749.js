
const buildSubstrings = (str = '') => {
    let i, j;
    const res = [];
    for (i = 0; i < str.length; i++) {
       for (j = i + 1; j < str.length + 1; j++) {
           if(!(i == 0 && j == str.length)) {
               res.push(str.slice(i, j));
           }
       };
    };
    return res;
};

const findLongestPalindromicSubstring = (theString) => {
    return buildSubstrings(theString)
      .sort((a,b) => b.length - a.length)
      .filter(value => value.split('').reverse().join('') == value)
      .shift();
}

[{
    value: 'aabcdcb',
    expectedSubstring: 'bcdcb'
},{
    value: 'bananas',
    expectedSubstring: 'anana'
}].forEach(testCase => console.assert(
    findLongestPalindromicSubstring(testCase.value) == testCase.expectedSubstring,
    'the longest palindromic substring of "%s" is "%s"',
    testCase.value,
    testCase.expectedSubstring));
