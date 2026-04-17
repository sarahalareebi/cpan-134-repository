//Closure
function createMonster(){
    let attack = 10;
    let defense = 10;

    return {
        increaseAttack:function() {attack += 5;},
        increaseDefense: function() {defense += 5;},
        displayInfo: function() {return `Attack: ${attack}, Defense: ${defense}`}
    }
}

let monster1 = createMonster();
let monster2 = createMonster();
monster1.increaseAttack();
console.log(monster1.displayInfo());
console.log(monster2.displayInfo());
