// NOTE TO TAS: I need help creating the server and the code for the checkout page

// Server for checkout.html
// When the user submits the form, a webpage that says thanks for your purchase generates with a button that goes to the homepage

const express = require('express');
const app = express();

const cors = require('cors');
const port = 3124;

app.use(express.urlencoded({ extended: true }));
app.use(cors());

let order = [];
let total = 0;

app.post('/getorder', (req, res) => {
    order = req.body.order_array;
    total = req.body.total_cost;

    console.log(order);
    console.log(total);

    res.redirect('/thankyou');  // Redirect to GET route that displays the result
});

// Route to display the results
app.get('/thankyou', (req, res) => {
    res.send(`
        <html>
            <head><title>Thank You!</title></head>
            <body>
                <h1>Thanks for ordering!</h1>
                <p>Total amount of order: $${total}</p>
            </body>
        </html>
    `);
});

// Listen on port 3124 on localhost
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});