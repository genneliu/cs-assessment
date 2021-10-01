let FindLongestWord = (arr) => {
    longest = arr[0];
    for (let i=1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }      
    }
    return longest.length; 
}

let arr = ["hello", "luna", "is", "the", "greatest", "dog"]

console.log(FindLongestWord(arr))


//found reduce, attempt
let findWord = arr.reduce((a, b) => a.length < b.length ? a : b, "");
console.log(findWord)