import mongoose from 'mongoose';
import 'dotenv/config';
import { application } from 'express';


// Connect based on the .env specified parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewURLParser: true }
);

const db = mongoose.connection;

db.once("open", (err) => {
    if(err){
        res.status(500).json({error: '500: Failed to Connect to the Server.'});
    } else {
        console.log('Successfully connected to MongoDB ApplicationLog Collection using MongooseDB.');
    }
});


// Defining a schema

const foodSchema = mongoose.Schema({
    date:          { type: Date, required: true, default: Date.now},
    calories:      { type: Number, required: true, default: 0, min: [0, 'Empty values are not allowed.']},
    carbohydrates: { type: Number, required: true, default: 0, min: [0, 'Empty values are not allowed.']},
    protein:       { type: Number, required: true, default: 0, min: [0, 'Empty values are not allowed.']},
    fruitsandveg:  { type: Number, required: true, default: 0, min: [0, 'Empty values are not allowed.']},
    fat:           { type: Number, required: true, default: 0, min: [0, 'Empty values are not allowed.']},
    sugar:         { type: Number, required: true, default: 0, min: [0, 'Empty values are not allowed.']},
    comments:      { type: String},

});


const Food = mongoose.model("Food", foodSchema);

const createFood = async(date, calories, carbohydrates, protein, fruitsandveg, fat, sugar, comments) => {
    const food = new Food ({
        date: date,
        calories: calories,
        carbohydrates: carbohydrates,
        protein: protein,
        fruitsandveg: fruitsandveg,
        fat: fat,
        sugar: sugar,
        comments: comments, 
    });

    return application.save();
};


const retrieveFoods = async() => {
    const query = Food.find();
    return query.exec();
};


const retrieveFoodById = async(_id) => {
    const query = Application.findById({_id: _id});
    return query.exec();
};


const updateFood = async (_id, date, calories, carbohydrates, protein, fruitsandveg, fat, sugar, comments) => {
    const result = await Food.replaceOne({_id: _id}, {
        date: date,
        calories: calories,
        carbohydrates: carbohydrates,
        protein: protein,
        fruitsandveg: fruitsandveg,
        fat: fat,
        sugar: sugar,
        comments: comments, 
    });

    return {
        _id: _id,
        date: date,
        calories: calories,
        carbohydrates: carbohydrates,
        protein: protein,
        fruitsandveg: fruitsandveg,
        fat: fat,
        sugar: sugar,
        comments: comments, 
    }
};

const deleteById = async (_id) => {
    const result = await Food.deleteOne({ _id: _id });
    // Return the count of deleted document.
    // Since we called deleteOne, this will be either 0 or 1.
    return result.deletedCount;
};

export {createFood, retrieveFoods, retrieveFoodById, updateFood, deleteById};