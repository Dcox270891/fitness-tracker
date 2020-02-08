
const WorkOut = require(`../models/workout`)

module.exports = function (app){

    app.get('/api/workouts', async (req, res) => {
        WorkOut.find({}, (err, workout)=>{
                if (err) throw (res.status(500))
                res.status(200).json(workout);
            })
    });

    app.post('/api/workouts', ({body}, res) => {
        const data = body;
        data.date = new Date();
        const newWorkout = WorkOut(data);
        WorkOut.save()
            .then(() => {
                if (err) throw (res.status(500))
                res.send(newWorkout);
            })
    });
    
    app.put('/api/workouts/:id', async ({body, params}, res) => {
        WorkOut.findById(params.id, (err, newWorkout)=>{
                if (err) throw (res.status(500))
                res.status(200).json(newWorkout);
            });
            WorkOut.Exercise.push(body);
            newWorkout
                .save()
                .then(() => {
                    res.send(newWorkout);
                })
    });
    
    app.get(`/api/workouts/range`, async (req, res) => {
        WorkOut.find({}, (err, data)=>{
            if (err) throw (res.status(500))
            res.status(200).json(data);
        });
    });
};