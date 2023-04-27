import 'dotenv/config';
import express from 'express';
import { retrieveApplications } from '../../a8-anderaa5-portfolio/backend/model.mjs';
import * as foods from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// BEGIN Controllers

// Create a new application using REST and post with status errors

app.post('/log', (req, res) => {
    foods.createFood(
        req.body.date,
        req.body.calories,
        req.body.protein,
        req.body.carbohydrates,
        req.body.fruitsandveg,
        req.body.fat,
        req.body.sugar,
        req.body.comments,
    )
    .then(food => {
        res.status(201).json(food);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: '400: Failed to create a new food entry.'})
    });
});

app.get('/log', (req, res) => {
    foods.retrieveFoods()
    .then(food => {
        if (food !== null) {
            res.json(food);
        } else {
            res.status(404).json({ error: '404: Food Log not found.'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({Error: '400: Request to retreive an application document failed.'})
    });
});


app.get('/log/:_id', (req, res) => {
    foods.retrieveFoodById(req.params._id)
    .then(food => {
        if (food !== null) {
            res.json(food)
        } else {
            res.status(404).json({Error: 'document not found'})
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({error: '400: The request to replace a document has failed.'})
    })
});

app.put('/log/:_id', (req, res) => {
    foods.updateFoods(
        req.params._id,
        req.body.date,
        req.body.calories,
        req.body.protein,
        req.body.carbohydrates,
        req.body.fruitsandveg,
        req.body.fat,
        req.body.sugar,
        req.body.comments,
    )
    .then(food => {
        res.json(food)
    })
    .catch(food => {
        console.log(food);
        res.status(400).json({error: 'document update failed.'})
    })
});


app.delete('/log/:_id', (req, res) => {
    applications.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: '404: The requested document does not exist.'});
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'The request to delete by ID has failed.'});
        });
});

// REST and EXPRESS listen to the port noted above.

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});


