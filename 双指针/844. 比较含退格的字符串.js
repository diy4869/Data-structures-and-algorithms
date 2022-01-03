var backspaceCompare = function(s, t) {
    const run  = s => {
        let high = s.length - 1
        let skip = 0
        let result = ''

        while (high >= 0) {
            if (s[high] === '#') {
                skip++
                high--
            } else {
                if (skip === 0) {
                    result += s[high]
                    high--
                } else {
                    high--
                    skip--
                }
            }
        }

        return result
    }
    
    return run(s) === run(t)
};

console.log(backspaceCompare('ab#c', 'ad#c')) // ac ac
console.log(backspaceCompare('ab##', 'c#d#')) // '' ''
console.log(backspaceCompare('a##c', '#a#c')) // c c
console.log(backspaceCompare('a#c', 'b')) // c b
console.log(backspaceCompare("bxj##tw", "bxo#j##tw"))