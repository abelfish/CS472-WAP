// 1

"use strict"


function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(4, 2));

// 2
function maxOfThree(x, y, z) {
    if (x > y && x > z) {
        return x;
    } else if (y > x && y > z) {
        return y;
    } else {
        return z;
    }
}
console.log(maxOfThree(1, 2, 3));

//3
function isVowel(a) {
    if (a.length > 1) {
        return false;
    }
    return 'aeiou'.includes(a);
}

console.log(isVowel("a"));
//4
function sum(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += element;

    }
    return sum;
}

console.log(sum([1, 2, 3, 4]));

function multiply(arr) {
    let product = 1;
    for (let index = 0; index < arr.length; index++) {
        product *= arr[index];
    }
    return product;
}

console.log(multiply([1, 2, 2, 3, 4]));
//5
function reverse(s) {
    let s2 = '';
    for (let i = s.length - 1; i >= 0; i--) {
        const element = s[i];
        s2 += element;
    }
    return s2;
}

console.log(reverse('samuel'));

// 6
function findLongestWord(array) {
    let longest = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }

    }
    return longest.length;
}

console.log(findLongestWord(['asedfa', 'two', 'tester']));

//7
function filterLongWords(array, i) {
    return array.filter(word => word.length > i);


}
console.log(filterLongWords(['asedfa', 'two', 'tester'], 3));

// 8
function computeSumOfSquares(array) {
    return array.map(i => i * i).reduce((x, y) => x + y);

}

console.log(computeSumOfSquares([1, 2, 3]));
// 9
function printOddNumbersOnly(arr) {
    arr.forEach(x => {
        if (x % 2 !== 0) console.log(x);
    })

}
printOddNumbersOnly([1, 2, 3, 4, 5, 6, 7]);
// 10
function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(n => n % 2 === 0).map(n => n * n).reduce((x, y) => x + y);
}
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

// 11

function sum2(arr) {
    return arr.reduce((x, y) => x + y);
}

console.log(sum2([1, 2, 3, 4, 5, 6]));


function multiply2(arr) {
    return arr.reduce((x, y) => x * y);
}
console.log(multiply2([1, 2, 3, 4, 5, 6]));


// 12
function findSecondBiggest(array) {
    let max = -Infinity, second = -Infinity;
    array.forEach(e => {
        if (Number(e) > max) {
            second = max;
            max = Number(e);
        } else if (Number(e) > second && Number(e) < max) {
            second = Number(e);
        }
    });
    return second;

}

console.log(findSecondBiggest([8, 2, 3, 4, 6, 5]));

// 13

function printFibo(n, a, b) {
    for (let i = 0; i < n; i++) {
        console.log(a);
        const sum = a + b;
        a = b;
        b = sum;

    }

}

printFibo(3, 0, 1);







