const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')("sk_test_51NhIe1DjfjVTFYaaJKxFQUWXJTO9d4Wzvb4q5UDhuH5y7mmlEdy2oEpX0agWru6s4JzWkJOHYGvXYALQuHqYLa5m00qUYMvMwJ");

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => {
    response.status(200).send('hello world');
});
// listen commands
app.post('/payment/create', async (req, res) => {
    const { total } = req.query;

    console.log('Payment Received BOOM! for this amount >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: parseInt(total),
        currency: "usd",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


// Listen command
exports.api = functions.https.onRequest(app);


// http://127.0.0.1:5001/final-capstone-60846/us-central1/api






// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const { request } = require("express");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
