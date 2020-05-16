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

let Calendar = require('./database/calendar.model');
let Info = require('./database/info.model');

mongoose.connect('mongodb://127.0.0.1:27017/RUhacks', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongoDB connection established')
})

// API routes for Info Collection
appRoutes.route('/info').get((req, res) => {
    Info.find((err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(info)
        }
    })
});

appRoutes.route('/info/create').post((req, res) => {
    let generalInfo = new Info(req.body);

    generalInfo.save()
        .then(info => {
            res.status(200).json({"info": "Info submitted successfully"})
        })
        .catch(err => {
            res.status(400).send('error sending info')
        });
})

// API routes for Calendar collection
appRoutes.route('/calendar').get((req, res) => {
    Calendar.find((err, calendar) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(calendar)
        }
    })
})

appRoutes.route('/calendar/create').post((req, res) => {
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

appRoutes.route('/calendar/update/:id').post((req, res) => {
    Calendar.findById(req.params.id, (err, app) => {
        if (!app) {
            res.status(404).send('data not found');
        }
        else {
            Event.description = req.body.description;
            Event.responsible = req.body.responsible;
            Event.priority = req.body.priority;
            Event.isComplete = req.body.isComplete;

            Event.save(app)
                .then(Event => {
                    res.json("Event Updated")
                })
                .catch(err => {
                    res.status(400).send("update failed")
                });
        }
    })
})

// get specific calendar event (get request)
appRoutes.route('/calendar/:id').get((req, res) => {
    let id = req.params.id;

    Calendar.findById(id, (err, calendar) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(calendar);
        }
    })
})

app.use('/api', appRoutes);

app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
})
