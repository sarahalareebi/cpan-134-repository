function sum(n1, n2) {
    return n1 + n2;
}

function product(n1, n2) {
    return n1 * n2;
}

sum(34, 45); //Call function
let ans = product(34, 44);
console.log(ans);

(function (){                       //IIFE
    let message = 'This is the way!';
    console.log('Message:', message)
})();
