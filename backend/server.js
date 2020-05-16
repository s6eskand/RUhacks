const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const appRoutes = express.Router();

// will implement database later

const app = express();
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json())

let Calendar = require('./app.model')

mongoose.connect('mongodb://127.0.0.1:27017/RUhacks', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongoDB connection established')
})

appRoutes.route('/').get((req, res) => {
    Calendar.find((err, calendar) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(calendar)
        }
    })
})

appRoutes.route('/create').post((req, res) => {
    let Event = new Calendar(req.body);
    Event.save()
        .then(calendar => {
            res.status(200).json({"calendar": "event added successfully"})
        })
        .catch(err => {
            res.status(400).send('error submitting data')
        });
})

// add edit route (post request to server)
/*
* todoRoutes.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo) {
            res.status(404).send('data not found');
        }
        else {
            todo.description = req.body.description;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.isComplete = req.body.isComplete;

            todo.save()
                .then(todo => {
                    res.json("Todo Updated")
                })
                .catch(err => {
                    res.status(400).send("update failed")
                });
        }
    })
})
* */

// get specific calendar event (get request)
/*
* appRoute of '/:id' => get((req, res))
* set id variable using 'let' equal to req.params.id
* Event.findById => (err, calendar)
* catch error and return to console
* return calendar object as json (res.json(calendar))
* */

app.use('/api', appRoutes);

app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
})
