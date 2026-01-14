// Function to return grade based on student's marks (0–100)

function getGrade(score) {
    if (score >= 90 && score <= 100) return "A";
    if (score >= 80 && score <= 89) return "B";
    if (score >= 70 && score <= 79) return "C";
    if (score >= 60 && score <= 69) return "D"; 
    if (score >= 33 && score <= 59) return "E";
    if (score >= 0 && score <= 32) return "Fail";
    return "Invalid marks";
}

console.log(getGrade(85));
console.log(getGrade(32));

/*
Output:
B
Fail
*/
