function getGrade(marks){
    if (marks >= 50){
        let message = "Congrats"; //Block Scope
        console.log(message);
        console.log("You have passed the course.");
    }
    else {
        let message = "Sorry"; // Scope
        console.log(message);
        console.log("You have failed the course.");
    }
}
getGrade(34);
getGrade(54);
getGrade(45);