const express = require("express")
require("dotenv").config()

const server = express()
const quotes = require("./randomQuotes.json")

// Routes 
server.get("/random-quotes", (request, response) => {
    const randomNumber = Math.floor(Math.random() * quotes.length + 1);
    const quote = quotes.find((quote) => quote.id == randomNumber)
    response.send(quote)
    
})
// server.get("/random-quotes/:count", (request, response) => {
//     const { count } = request.params;
//     const numberOfQuotes = parseInt(count);

//     if (isNaN(numberOfQuotes) || numberOfQuotes <= 0) {
//         return response.status(400).send("Invalid count parameter");
//     }

//     const selectedQuotes = [];
//     for (let i = 0; i < numberOfQuotes && i < quotes.length; i++) {
//         selectedQuotes.push(quotes[i]);
//     }

//     response.json(selectedQuotes);
// });
server.get("/random-quotes/:id", (request, response) => {
    const { id } = request.params
    const numberOfQuotes = Number(id)

    const array = []
    // for (let i = 0; i < quotes.length && i < numberOfQuotes; i++) {
    //     const randomNumber = Math.floor(Math.random() * quotes.length + 1)
    //     const quote = quotes.find((quote) => quote.id == randomNumber)
    //     array.push(quote)
    // }
    for (let i = 0; i < numberOfQuotes; i++) {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomNumber];
        if (quote) {
            array.push(quote);
        }
    }
    if (isNaN(numberOfQuotes) || numberOfQuotes <= 0) {
        return response.status(400).send("Invalid count parameter");
    }else{
        response.json(array);
    }


})




// Listening
server.listen(process.env.PORT, () => console.log(`server is listening on ${process.env.PORT}`))
