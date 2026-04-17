// classic Module pattern
const mathUtil = (function(){   
    const PI = 3.142;
        function formatOutput(label,value){     //Private function
            return `${label}: ${value}`;
        }
    return {
        sum: function (a,b){
            return formatOutput('Sum',a+b);
        },
areaOfCircle: function(radius){
    return PI * radius * radius;
}
    }
})();

console.log(mathUtil.sum(34,56));
console.log(mathUtil.areaOfCircle(4));
// console.log(PI);