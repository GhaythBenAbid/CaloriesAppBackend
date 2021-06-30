const express = require('express');
const cors = require('cors');
const CaloriesApp = require('./MyFitnessPalApi');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 9000;
app.use(cors())


app.listen(port, () => {
    console.log("App run in http://localhost:" + port);
})


app.get("/:food" , async function(req , res){
    const Calories = await CaloriesApp.Calories(req.params.food);
    

    return res.send(Calories);
});


