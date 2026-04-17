// TASK 1
var initials = "A2";
let last3Digits = 223;
const studentKey = `${initials}-${last3Digits}`;

// TASK 2
let name = "Shomoy";
let idsuffix = 223;
let course = "CPAN 113";
let isActive = true;

let skills = ('javascript', 'html', 'css', 'react');
let targets = { weeklyhours: 10, goal: "learn javascript"};

console.log(
    `Profile type checks: name=${typeof name}, idsuffix=${typeof idsuffix}, skillsarray=${Array.isArray(skills)}`
);

// TASK 3
initials = "Y.Z.";
last3Digits++; // increment last3digits

const labconfig = { term: "winter 2026" };
labconfig.term = "fall 2026";

// TASK 4
let itemA = (last3Digits % 10) + 2.25;
let itemB = ((last3Digits % 7) * 0.75) + 1.50;
let itemC = ((last3Digits % 5) * 1.10) + 3.10;
let subtotal = itemA + itemB + itemC;
let tax = subtotal * 0.13;
let total = subtotal + tax;
console.log(`Subtotal=$${subtotal}, Tax=$${tax}, Total=$${total}`);



// TASK 5
let asNumber = 223;
let asText = '223';
console.log(`Equality: == ${asNumber == asText}, === ${asNumber === asText}`);


// TASK 6

let budget = (last3Digits % 10) + 10;
if (total > budget) {
    console.log(`Budget check: Over budget (exceeded by $${budget-total})`);
} else {
        console.log(`Budget check: Under budget (under by $${budget-total})`);

}

let theme = last3Digits % 4;
switch (theme) {
    case 0:
        console.log('Hello World');
        break;
        case 1:
        console.log('My name is Slim Shady');
        break;
        case 2:
        console.log('I like Orange Juice');
        break;
        case 3:
        console.log('I play basketball');
        break;
    default:
        console.log('Invalid number!');
        break;
}

// TASK 7

let signatureNumber = (last3Digits * 7) + Math.floor(total);
const labSignature = `${studentKey}-${signatureNumber}`;
console.log('Lab Signature:', labSignature);