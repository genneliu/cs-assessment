let FindLongestWord = (arr) => {
    longest = arr[0];
    for (let i=1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }      
    }
    return longest.length; 
}

let arr = ["hello", "luna", "is", "the", "cutest", "dog"]

console.log(FindLongestWord(arr))

/* 
space complexity of O(n) due to n being the length of the array in the loop
*/ 

//same function as above, using reduce
let newArr = ["We", "come", "from", "the", "land", "of", "ice", "and", "snow", "from", "the", "midnight", "sun", "where", "the", "hot", "springs", "flow"]
//reduce

var findWord = newArr.reduce((a, b) => a.length > b.length ? a : b, "");
console.log(findWord.length);


/* 
reduce walks through each element and at each step, performs function to result of last step
in this case, the reduce is comparing the lengths of a to b, where a is the current index at the current step
therefore, it seems this this function would have the time complexity 
of O(n) 

because the reduce() method still has to iterate through the array 
*/ 


