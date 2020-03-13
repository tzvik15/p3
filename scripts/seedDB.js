const mongoose = require('mongoose');
const db = require('../models/card');
// console.log(db.CardSchema)
mongoose.connect(
   process.env.MONGODB_URI || "mongodb://localhost/cards",
);

const cardSeed = [
   {  
      title: "HTML",
      description: "Learning HTML will cost X hours",
      cost: 65
   },
   {  
      title: "CSS",
      description: "Learning CSS will cost X hours",
      cost: 65
   },
   {
      title: "JS",
      description: "Learning JS will cost X hours",
      cost: 65
   },
   {  
      title: "Web API's",
      description: "Learning Web API's will cost X hours",
      cost: 65
   },
   {  
      title: "Git",
      description: "Learning Git and Version Control will cost X hours",
      cost: 65
   },
   {  
      title: "Project 1",
      description: "Completing Project One cost X hours",
      cost: 65
   },
   {  
      title: "ES6",
      description: "Learning ES6 will cost X hours",
      cost: 65
   },
   {  
      title: "NodeJs",
      description: "Learning NodeJs will cost X hours",
      cost: 65
   },
   {  
      title: "Express",
      description: "Learning Express will cost X hours",
      cost: 65
   },
   {
      title: "MySQL",
      description: "Learning MySQL will cost X hours",
      cost: 65
   },
   {  
      title: "ORM's",
      description: "Learning ORM's will cost X hours",
      cost: 65
   },
   {
      title: "MongoDB",
      description: "Learning MongoDB will cost X hours",
      cost: 65
   },
   {
      title: "React",
      description: "Learning React will cost X hours",
      cost: 65
   },
   {  
      title: "MERN",
      description: "Learning MERN stack development will cost X hours",
      cost: 65
   },
   {  
      title: "AngularJS",
      description: "Learning AngularJS will cost X hours",
      cost: 65
   },
   {  
      title: "Python",
      description: "Learning Python will cost X hours",
      cost: 65
   },
   {  
      title: "C#",
      description: "Learning C# will cost X hours",
      cost: 65
   },
   {  
      title: "C++",
      description: "Learning C++ will cost X hours",
      cost: 65
   },
   {  
      title: "Java",
      description: "Learning Java will cost X hours",
      cost: 65
   },
   {  
      title: "Ruby",
      description: "Learning Ruby will cost X hours",
      cost: 65
   },
   {  
      title: "Swift",
      description: "Learning Swift will cost X hours",
      cost: 65
   },
   {  
      title: "PHP",
      description: "Learning PHP will cost X hours",
      cost: 65
   },
   {  
      title: "Final Project",
      description: "Completing your final project will cost X hours",
      cost: 70
   },
   {  
      title: "gAm3 Ov3R",
      description: "You have finished the journey!",
      cost: 65
   },
   
];

db.remove({})
   .then(() => db.collection.insertMany(cardSeed))
   .then(data => {
      console.log(data.result.n + "records inserted!");
      process.exit(0);
   })
   .catch(err => {
      console.error(err);
      process.exit(1);
   });