const mongoose = require('mongoose');
const db = require('../models/card');
// console.log(db.CardSchema)
mongoose.connect(
   process.env.MONGODB_URI || "mongodb://localhost/cards",
);

const cardSeed = [
   {  
      title: "CSS",
      description: "Learning CSS will cost X hours",
      cost: 10
   },
   {
      title: "JS",
      description: "Learning JS will cost X hours",
      cost: 10
   },
   {
      title: "React",
      description: "Learning React will cost X hours",
      cost: 10
   },
   {
      title: "MongoDB",
      description: "Learning MongoDB will cost X hours",
      cost: 10
   },
   {
      title: "MySQL",
      description: "Learning MySQL will cost X hours",
      cost: 10
   }
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