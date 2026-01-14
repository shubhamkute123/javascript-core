// Program to play Rock-Paper-Scissors logic between two players

function rps(user, computer) {
    if(user === computer) return "draw";

    if (user == "rock" && computer == "scissor") return "user";
    if (user == "scissor" && computer == "paper") return "user";
    if (user == "paper" && computer == "rock") return "user";

    return "computer";
}

console.log(rps("rock", "paper"));
console.log(rps("scissor", "scissor"));

/*
Output:
computer
draw
*/
