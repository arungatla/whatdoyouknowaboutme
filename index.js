var readline = require('readline-sync');
var chalk=require("chalk");
var score=0;
console.log(chalk.bgCyan("Hello"));
askname="What is your name? ";
var name=readline.question(askname);

console.log("Hello "+ name);

console.log("Do you know about Arun ?");
console.log("Let me ask you about him. ")

console.log("In questions below "+"\"my or I\""+" refers to Arun... let's start!");
console.log("---------------------------------------------")

var highScores = [
  {
    name: "Akthar Ali",
    score: 10,
  },

  {
    name: "Venkatesh",
    score: 10,
  },
]
function quiz(q, ans) {
  var userAns = readline.question(q);

  if (userAns.toLowerCase() === ans.toLowerCase()) { // branching
    console.log(chalk.bold.green("you are right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.bold.red("no, its wrong!"));
    if(score != 0){
      score = score-1;
    }
   
  }

  console.log("your current score: ", chalk.bold.green(score));
  console.log("-------------------------------")
}
var quizList=[{
  q:"What is my full name? ",
  ans:"Arun Gatla"
},{
  q:"Guess my age ? ",
  ans:"21"
},{
  q:"What is my favourite movie? ",
  ans:"Mission Impossible 5"
},{
  q:"Which programming language I like the most? ",
  ans:"Javascript"
},{
  q:"Who is my favourite actor? ",
  ans:"Jim Carrey"
},{
  q:"Where do I live? ",
  ans:"Hyderabad"
},{
  q:"Which type of food I like the most (Sweet or Hot) ? ",
  ans:"Sweet"
},{
  q:"What is my favourite food item? ",
  ans:"Biryani"
},{
  q:"Who is my Inspiration? ",
  ans:"Abdul Kalam"
},{
  q:"Which Subject is my Favorite ? ",
  ans:"Computer Networks"
}];


var i=0;
for(i=0;i<quizList.length;i++){
  var questionn=quizList[i];
  quiz(questionn.q,questionn.ans);
}
console.log("--------------------------------------------");
console.log(chalk.bgCyan("Total Score : "+ score));
if(score>7){
  console.log(chalk.bold.green("Wow its a great score!!"))
}
console.log("High Scores: ");
for(i=0;i<highScores.length;i++){
  
  console.log("    Name : "+highScores[i].name);
  console.log("    Score : "+highScores[i].score);
  console.log("\n");
}
console.log(chalk.bgCyan("If you got an highscore feel free to take a screen shot and send it to me....I will definetly mention it in the above scores..."));
console.log(chalk.bold.green("Thank You!"));



