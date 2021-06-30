const axios = require("axios");



async function GetData(input) {
    let data;
    await axios.get("https://api.myfitnesspal.com/public/nutrition?q=" + input + "&per_page=90").then((response) => {
        data = response.data.items;
    })


    return data;

}

async function Calories(food) {

    const data = await GetData(food);

    return data;
}



module.exports = {
    Calories,
}