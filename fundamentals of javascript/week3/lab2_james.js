// TASK 1
// 
let temp = 10
if (temp < 13){
    console.log('cold');
} else if (age < 25){
    console.log('warm')
} else {
    console.log('hot')
}

// 1.2
let day = 'Monday';
switch (day.toLowerCase()) {
    case 'saturday':
        case 'sunday':
            console.log("Weekend");
            break;
            case 'monday':
                case 'tuesday':


                console.log("Weekday");
                break;
                default:
                    console.log("Invalid Day");
                    break;
}



let campus = 'Lakeshore';
switch (campus) {
    case 'North':
    case 'NC':
    case 'N':
    console.log("Humber North Campus");
    break;
    case 'Lakeshore':
        case 'L':
            console.log("Humber Lakeshore Campus");
            break;
            case 'IGS':
                console.log("International Graduate School Campus");
                break;
                default:
                    console.log("Invalid Campus");
                    break;
}

let shoppingList = ["Milk", "Eggs", "Bread", "Apples"];
for(let i = 0; i < shoppingList.length; i++){
    console.log(shoppingList[i]);
}



let user = {name: 'Shomoy', age: 18, city: 'Mississauga'};
for (const key in user) {
    console.log(user[key]);
}

let scores = [88, 92, 75, 91, 85];
for (const element of scores) {
    console.log(element);
}
// for(let i = 0; i < scores.length; i++){
// console.log(scores[i]);
// }



for(let i = 1; 1 <= 10; 1++){
    console.log(i);
    if(i === 7) break;
}


// TASK 4
    let words = ["cat", "elephant", "dog", "hippopotamus", "ant"];

    for (const element of words) {
        if(element.length < 5) {
            continue;
        }
            console.log(element);
        
    }
