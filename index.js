var readLineSync = require("readline-sync")
const chalk = require('chalk');
var score = 0

//Function for console.log
function log(data)
    {
      console.log(data)
    }
//WELCOME INTERFACE
var userName = readLineSync.question("What's Your Name? ")
log(chalk.bgBlue("Welcome! "+userName+" to DO YOU KNOW Manav\n"))

//highScores Array
var highScores = 
[
  {
    name : "Manav",
    score : 6
  },
  {
    name : "Yuvika",
    score : 4
  }
]


//Function to ask and check questions
function play(question,answer)
{
  var userAnswer = readLineSync.question(question)
  log("You Entered "+userAnswer)
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    log("Right!!")
    score++
  }
  else
  {
    log("Wrong!!")
  }

  log("Current Score : " + score)
  log("---------------")
}

//Array of Questions
var questions = 
[
{
  question : "What is my age ",
  answer : "19"
},
{
  question : "Where do I Live ",
  answer : "Delhi"
},
{
  question : "Which course I am persuing ",
  answer : "B.Tech"
},
{
  question : "What is my favourite technology ",
  answer : "Android"
},
{
  question : "Name of the University I am into ",
  answer : "IPU"
},
{
  question : "My Best Friend's Name ",
  answer : "Rishiwar"
}
]

//Loop for asking Questions
for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer)
}

log(chalk.bgGreen("Yayy!! You Scored : " + score))
log("---------------")

if(score>highScores[0].score)
{
  highScores[0].name = userName
  highScores[0].score = score
}
else if(score>highScores[1].score)
{
  highScores[1].name = userName
  highScores[1].score = score
}


//ScoreBoard
log("\nCheckout the top performers")
for(var i=0;i<highScores.length;i++)
{
  log(highScores[i].name +"   "+highScores[i].score )
}
log(chalk.bgRed("\n**If you have made it to the Top Performers send a screenshot to Manav"))
