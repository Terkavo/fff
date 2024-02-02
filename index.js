function findLongestWord(arr) {
    let longestWord = "";
    for (let word of arr) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord(["Java", "Python", "JavaScript"]));
console.log(findLongestWord(["football", "basketball", "tennis"]));
console.log(findLongestWord(["sun", "moon", "stars"]));
function sumUniqueNumbers(arr) {
    let uniqueNumbers = [];
    for (let num of arr) {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            uniqueNumbers.push(num);
        }
    }
    return uniqueNumbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5]));
console.log(sumUniqueNumbers([10, 20, 10, 20, 30]));
console.log(sumUniqueNumbers([0, -1, -2, -1, -3]));
function mergeArrays(...arrays) {
    let arr = [];
    for (let item of arrays)
        for (let item2 of item)
            if (!arr.includes(item2))
            arr.push(item2);
    return Array.from(new Set(arr));
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4]));
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7]));
function hasProperty(obj, propName) {
    return obj.hasOwnProperty(propName);
}

console.log(hasProperty({ name: "Alice", age: 25 }, "age"));
console.log(hasProperty({ name: "Bob", country: "France" }, "gender"));
console.log(hasProperty({ type: "fruit", color: "red" }, "color"));


function getPropertyValue(obj, propName) {
    return obj[propName];
}

console.log(getPropertyValue({ name: "Alice", age: 25 }, "name"));
console.log(getPropertyValue({ brand: "Toyota", model: "Camry" }, "year"));
console.log(getPropertyValue({ type: "laptop", brand: "Dell" }, "brand"));


function invertObject(obj) {
    let invertedObj = {};
    for (let key in obj) {
        invertedObj[obj[key]] = key;
    }
    return invertedObj;
}

const originalObject1 = { a: 1, b: 2, c: 1 };
console.log(invertObject(originalObject1));
