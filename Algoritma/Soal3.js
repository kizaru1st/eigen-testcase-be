const countSameWord = (INPUT, QUERY) => {
    const inputCount = {};
    for (const word of INPUT) {
        if (inputCount[word]) {
            inputCount[word]++;
        } else {
            inputCount[word] = 1;
        }
    }
    const result = QUERY.map(word => inputCount[word] || 0);
    return result;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

console.log(countSameWord(INPUT, QUERY)); 
